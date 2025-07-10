export default class search {
  query = "*";
  sources = [];

  offset = 0;
  pageSize = 3;

  callSearch = null;
  max = 0;
  count = null;
  hits = [];

  exact = true;

  async search(query, sources, searchAll) {
    this.query = query;
    this.offset = 0;
    this.count = null;

    if (searchAll) {
      this.sources = sources;
      this.callSearch = this.__sendRequestMix;
    } else {
      this.sources = [sources.map((x) => `dic = ${x}`)];
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
        query: {
          bool: {
            must: [
              {
                match: {
                  key: this.query,
                },
              },
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
        sort: [{ lbl: "asc" }],
        highlight: {
          fields: {
            lbl: {
              pre_tags: ["<span class='highlight'>"],
              post_tags: ["</span>"],
            },
          },
        },
      };
      if (!this.query || this.query.trim() === "")
      request.query = { match_all: {} };

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
        if (result.estimatedTotalHits > nmax) nmax = result.hits.total.value;
        this.hits[this.sources[i]] = result.hits.total.value;

        for (var j = 0; j < result.hits.hits.length; j++)
          res.push(result.hits.hits[j]._source);
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
      query: {
        bool: {
          must: [
            {
              match: {
                key: this.query,
              },
            },
          ],
        },
      },
      size: this.pageSize,
      from: this.offset,
      sort: [{ lbl: "asc" }],
      highlight: {
        fields: {
          lbl: {
            pre_tags: ["<span class='highlight'>"],
            post_tags: ["</span>"],
          },
        },
      },
    };

    if (!this.query || this.query.trim() === "")
      request.query = { match_all: {} };

    /* TODO: Filter nach ressourcen
    if (this.sources.length > 0) {
      request.filter = this.sources;
    }*/

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
      return result.hits.hits.map((x) => x._source);
    } catch (error) {
      console.log("error", error);

      this.max = 0;
      return [];
    }
  }

  get pageMax() {
    return Math.ceil(this.max / this.pageSize);
  }

  get countTotal() {
    console.log("count", this.count);
    return typeof this.count === "number"
      ? this.count
      : Object.values(this.count).reduce((a, b) => a + b, 0);
  }
}
