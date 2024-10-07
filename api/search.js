export default class search {
  query = "*";
  sources = [];

  offset = 0;
  pageSize = 3;

  callSearch = null;
  max = 0;
  count = null;

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

    for (var i = 0; i < this.sources.length; i++) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer 8jRAqq_GbtjdjveIOCxIlnztXjwFbcaMYp-e50HtbrQ"
      );

      var request = {
        q: this.preparedQuery,
        limit: this.pageSize,
        sort: ["key:asc"],
        filter: `dic = ${this.sources[i]}`,
        offset: this.offset,
        matchingStrategy: "all",
        attributesToHighlight: ["lbl"],
        highlightPreTag: "<span class='highlight'>",
        highlightPostTag: "</span>",
      };

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(request),
        redirect: "follow",
      };
      try {
        var response = await fetch(
          "http://lexik08.ids-mannheim.de/meilisearch/indexes/syntagmatikon/search",
          requestOptions
        );
        var result = await response.json();

        if (this.count != null)
          this.count[this.sources[i]] = result.estimatedTotalHits;
        if (result.estimatedTotalHits > nmax) nmax = result.estimatedTotalHits;

        res.push(...result.hits);
      } catch (error) {
        console.log("error", error);
      }
    }

    this.max = nmax;
    return res;
  }

  async __sendRequestMerge() {
    this.__ensureSearch();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer 8jRAqq_GbtjdjveIOCxIlnztXjwFbcaMYp-e50HtbrQ"
    );

    var request = {
      q: this.preparedQuery,
      limit: this.pageSize,
      sort: ["key:asc"],
      offset: this.offset,
      matchingStrategy: "all",
      attributesToHighlight: ["lbl"],
      highlightPreTag: "<span class='highlight'>",
      highlightPostTag: "</span>",
    };
    if (this.sources.length > 0) {
      request.filter = this.sources;
    }

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(request),
      redirect: "follow",
    };

    try {
      var response = await fetch(
        "http://lexik08.ids-mannheim.de/meilisearch/indexes/syntagmatikon/search",
        requestOptions
      );
      var result = await response.json();

      if (this.count == null) this.count = result.estimatedTotalHits;
      this.max = result.estimatedTotalHits;
      return result.hits;
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
    return typeof this.count === "number"
      ? this.count
      : Object.values(this.count).reduce((a, b) => a + b, 0);
  }

  get preparedQuery() {
    return this.exact ? `"${this.query}"` : this.query;
  }
}
