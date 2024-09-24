export default class search {
  query = "*";
  sources = [];

  offset = 0;
  pageSize = 25;

  callSearch = null;
  max = 0;

  async search(query, sources, searchAll) {
    this.query = query;
    this.offset = 0;

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

  async __sendRequestMix() {
    var res = [];
    var nmax = 0;

    for (var i = 0; i < this.sources.length; i++) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer 8jRAqq_GbtjdjveIOCxIlnztXjwFbcaMYp-e50HtbrQ"
      );

      var request = {
        q: this.query,
        limit: this.pageSize,
        sort: ["key:asc"],
        filter: `dic = ${this.sources[i]}`,
        offset: this.offset,
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

        nmax += result.estimatedTotalHits;

        res.push(...result.hits);
      } catch (error) {
        console.log("error", error);
      }
    }

    this.max = nmax;
    return res;
  }

  async __sendRequestMerge() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer 8jRAqq_GbtjdjveIOCxIlnztXjwFbcaMYp-e50HtbrQ"
    );

    var request = {
      q: this.query,
      limit: this.pageSize,
      sort: ["key:asc"],
      offset: this.offset,
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
}
