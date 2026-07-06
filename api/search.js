export default class search {
  baseUrl = "http://lexik02.ids-mannheim.de/syntagmatikon-index/"; // "https://syntagmatikon.ids-mannheim.de/api/";
  query = "*";
  sources = [];

  offset = 0;
  pageSize = 3;

  callSearch = null;
  max = 0;
  count = null;
  hits = [];

  options = {
    multiword: 1,
    layer: 1,
    fuzzy: 1,
  };

  async search(
    query,
    sources,
    groupBySource,
    optionMultiword,
    optionLayer,
    optionFuzzy,
  ) {
    this.query = query;
    this.offset = 0;
    this.count = null;

    this.options = {
      multiword: optionMultiword,
      layer: optionLayer,
      fuzzy: optionFuzzy,
      highlightField: "lbl" // wird später gesetzt.
    };

    if (groupBySource) {
      this.sources = sources;
      this.callSearch = this.__searchBySource;
    } else {
      this.sources = sources;
      this.callSearch = this.__searchByAbc;
    }

    return await this.callSearch();
  }

  async gotoPage(page) {
    try {
      this.offset = (page - 1) * this.pageSize;
      return await this.callSearch();
    } catch (e) {
      console.log("error", e);
      return [];
    }
  }

  __ensureSearch() {
    if (typeof this.pageSize === "string") {
      this.pageSize = parseInt(this.pageSize);
    }
  }

  __buildQuery() {
    var queryString = (this.query || "").trim();
    if (queryString === "") {
      return { match_all: {} };
    }

    var field;
    switch (this.options.layer) {
      case 0:
        field = "lbl.L0";
        break;
      case 1:
        field = "lbl.L1";
        break;
      case 2:
        field = "lbl.L2";
        break;
      default:
        field = "lbl";
    }
    this.options.highlightField = field;

    var fuzzy;
    if (this.options.fuzzy === 1) {
      fuzzy = "AUTO";
    } else if (this.options.fuzzy === 2) {
      fuzzy = 2;
    }

    // Wurde deaktiviert - diese Suche nutzte exakte Phrase-Matches (Wortfolgen)
    // An die Stelle wird die Suche auf eine UND-Verknüpfung (alle Worte) geändert. -> siehe unten
    // // Wenn exakte Wortfolge gefordert ist, dann einfach match_phrase verwenden:
    // if (this.options.multiword === 0) {
    //   var phraseQuery = { query: queryString };
    //   if (fuzzy !== undefined) {
    //     phraseQuery.fuzziness = fuzzy;
    //   }      
    //   console.log("phraseQuery", phraseQuery);
    //   return { match_phrase: { [field]: phraseQuery } };
    // }
    
    // Wenn eine exakte Zeichenfolge gefordert ist, dann nutze regular expressions:
    if (this.options.multiword === 1) {
      return {
        regexp: {
          [field]: {
            value: `.*${queryString}.*`,
            case_insensitive: true
          }
        }
      };
    }

    // Ansonsten die Query in Tokens aufteilen und jedes Token separat matchen:
    var tokens = queryString.split(/\s+/).filter(function (token) {
      return token.length > 0;
    });
    if (tokens.length === 0) {
      return { match_all: {} };
    }    

    var matches = tokens.map(function (token) {
      var matchQuery = { query: token };
      if (fuzzy !== undefined) {
        matchQuery.fuzziness = fuzzy;
      }
      return { match: { [field]: matchQuery } };
    });

    // Alle Worte müssen vorkommen: UND-Verknüpfung.
    if(this.options.multiword === 0) {
      return {
        bool: {
          must: matches,
        },
      };
    }

    // Beliebige Wortreihenfolge: mindestens ein Treffer pro Token, egal in welcher Reihenfolge.
    if (this.options.multiword === 2) {
      return {
        bool: {
          should: matches,
          minimum_should_match: 1,
        },
      };
    }

    return {
      bool: {
        must: matches,
      },
    };
  }

  __buildHighlightQuery() {
    return {
      [this.options.highlightField]: {
        require_field_match: false,
        highlight_query: {
          match: {
            [this.options.highlightField]: this.query,
          }
        }
      },
    }
  }

  async __searchBySource() {
    this.__ensureSearch();
    var res = [];
    var nmax = 0;

    if (this.count == null) this.count = {};
    this.hits = [];

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var esQuery = this.__buildQuery();
    for (var i = 0; i < this.sources.length; i++) {
      var request;
      // Wenn Query leer:
      if (!this.query || this.query.trim() === "") {
        request = {
          track_total_hits: true,
          query: {
            bool: {
              must: [
                {
                  match_all: {},
                },
                {
                  term: {
                    "dic": this.sources[i],
                  },
                },
              ],
            },
          },
          size: this.pageSize,
          from: this.offset,
          sort: [{ "lbl.icu": "asc" }],
        };
      }       
      else // Wenn Query gesetzt ist.
      {
        request = {
          track_total_hits: true,
          query: {
            bool: {
              must: [
                {
                  term: {
                    "dic": this.sources[i],
                  },
                },
              ],
            },
          },
          size: this.pageSize,
          from: this.offset,
          sort: [{ "lbl.icu": "asc" }],
          highlight: {
            fields: this.__buildHighlightQuery()
          },
        };

        request.query.bool.must.push(esQuery);
      }

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(request),
        redirect: "follow",
      };
      try {
        var response = await fetch(
          this.baseUrl,
          requestOptions,
        );

        var result = await response.json();
        if (this.count != null)
          this.count[this.sources[i]] = result.hits.total.value;
        if (result.hits.total.value > nmax) nmax = result.hits.total.value;
        this.hits[this.sources[i]] = result.hits.total.value;

        var tmp = [];
        for (var j = 0; j < result.hits.hits.length; j++)
          tmp.push(this.__esHighlightToSourceSingle(result, j));

        res = res.concat(tmp);
      } catch (error) {
        console.log("error", error);
      }
    }

    this.max = nmax;
    return res;
  }

  async __searchByAbc() {
    this.__ensureSearch();

    var esQuery = this.__buildQuery();
    var request = {
      track_total_hits: true,
      query: {
        bool: {
          must: []
        },
      },
      size: this.pageSize,
      from: this.offset,
      sort: [{ "lbl.icu": "asc" }],
      highlight: {
        pre_tags: ["<span class='highlight'>"],
        post_tags: ["</span>"],
        fields: this.__buildHighlightQuery()
      },
    };
    request.query.bool.must.push(esQuery);

    if (!this.query || this.query.trim() === "") {
      request.query = { bool: { must: [{ match_all: {} }] } };
    }

    if (this.sources.length > 0) {
      request.query.bool.must.push({
        terms: {
          "dic": this.sources,
        },
      });
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(request),
      redirect: "follow",
    };

    try {
      var response = await fetch(
        this.baseUrl,
        requestOptions,
      );

      var result = await response.json();

      if (this.count == null) this.count = result.hits.total.value;
      this.max = result.hits.total.value;

      return this.__esHighlightToSource(result);
    } catch (error) {
      console.log("error", error);

      this.max = 0;
      return [];
    }
  }

  __esHighlightToSource(result) {
    var res = result.hits.hits.map((x) => x._source);
    for (var i = 0; i < res.length; i++) {
      if (
        res[i].lbl &&
        result.hits.hits[i].highlight &&
        result.hits.hits[i].highlight.lbl
      ) {
        res[i].lbl = result.hits.hits[i].highlight.lbl[0];
      }
    }
    return res;
  }

  __esHighlightToSourceSingle(result, i) {
    var res = result.hits.hits[i]._source;
    
    if (
      res.lbl &&
      result.hits.hits[i].highlight &&
      result.hits.hits[i].highlight.lbl
    ) {
      res.lbl = result.hits.hits[i].highlight.lbl[0];
    }
    return res;
  }

  get pageMax() {
    return Math.ceil(this.max / this.pageSize);
  }

  get countTotal() {
    try {
      return typeof this.count === "number"
        ? this.count === null
          ? 0
          : this.count
        : Object.values(this.count).reduce((a, b) => a + b, 0);
    } catch {
      return 0;
    }
  }
}
