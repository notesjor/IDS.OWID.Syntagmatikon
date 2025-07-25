export default class search {
  query = "*";
  queryName = "match";
  sources = [];

  offset = 0;
  pageSize = 3;

  callSearch = null;
  max = 0;
  count = null;
  hits = [];

  exact = true;
  fuzziness = 0;
  transpositions = true;

  async search(query, sources, searchAll, searchMw, searchLayer, searchFuzzy) {
    this.query = query;
    this.offset = 0;
    this.count = null;

    this.fuzziness = searchFuzzy == 0 ? 0 : searchFuzzy == 1 ? "AUTO" : "2";
    this.transpositions = searchFuzzy < 2;

    if (searchAll) {
      this.sources = sources;
      this.callSearch = this.__sendRequestMix;
    } else {
      this.sources = sources;
      this.callSearch = this.__sendRequestMerge;
    }

    return await this.callSearch();
  }

  async gotoPage(page) {
    this.offset = (page - 1) * this.pageSize;
    return await this.callSearch();
  }

  __ensureSearch() {
    if (typeof this.pageSize === "string") {
      this.pageSize = parseInt(this.pageSize);
    }
  }

  async __sendRequestMix() {
    this.__ensureSearch();
    var res = [];
    var nmax = 0;

    if (this.count == null) this.count = {};
    this.hits = [];

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    for (var i = 0; i < this.sources.length; i++) {
      var request = {
        track_total_hits: true,
        query: {
          bool: {
            must: [
              {
                term: {
                  dic: this.sources[i],
                },
              },
            ],
          },
        },
        size: this.pageSize,
        from: this.offset,
        sort: [{ key: "asc" }],
        highlight: {
          fields: {
            lbl: {
              pre_tags: ["<span class='highlight'>"],
              post_tags: ["</span>"],
            },
          },
        },
      };

      var q = {};
      q[this.queryName] = {
        lbl: this.query,
        fuzzy_transpositions: this.transpositions,
        fuzziness: this.fuzziness
      };
      console.log("query", q);
      request.query.bool.must.push(q);

      if (!this.query || this.query.trim() === "")
        request.query = {
          bool: {
            must: [
              {
                match_all: {},
              },
              {
                term: {
                  dic: this.sources[i],
                },
              },
            ],
          },
        };

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(request),
        redirect: "follow",
      };
      try {
        var response = await fetch(
          //TODO: "https://syntagmatikon.ids-mannheim.de/api/",
          "http://localhost:9200/syntagmatikon/_search",
          requestOptions
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

  async __sendRequestMerge() {
    this.__ensureSearch();

    var request = {
      track_total_hits: true,
      query: {
        bool: {
          must: [
            {
              match: {
                lbl: this.query,
              },
            },
          ],
        },
      },
      size: this.pageSize,
      from: this.offset,
      sort: [{ key: "asc" }],
      highlight: {
        fields: {
          lbl: {
            pre_tags: ["<span class='highlight'>"],
            post_tags: ["</span>"],
          },
        },
      },
    };

    if (!this.query || this.query.trim() === "") {
      request.query = { bool: { must: [{ match_all: {} }] } };
    }

    if (this.sources.length > 0) {
      request.query.bool.must.push({
        terms: {
          dic: this.sources,
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
        // TODO: "https://syntagmatikon.ids-mannheim.de/api/",
        "http://localhost:9200/syntagmatikon/_search",
        requestOptions
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
    return typeof this.count === "number"
      ? this.count === null
        ? 0
        : this.count
      : Object.values(this.count).reduce((a, b) => a + b, 0);
  }
}
