export default class search {
  query = "*";
  sources = [];

  offset = 0;
  pageSize = 3;

  callSearch = null;

  results = {};
  max = 0;

  constructor() {}

  search(query, sources, searchMerge) {
    this.query = query;
    this.offset = 0;

    if (searchMerge) {
      this.sources = [sources.map((x) => `dic = ${x}`)];
      this.callSearch = this.__sendRequestMerge;
    } else {
      this.sources = sources;
      this.callSearch = this.__sendRequestSeparate;
    }

    this.callSearch();
  }

  gotoPage(page) {
    this.offset = (page - 1) * this.pageSize;
    this.callSearch();
  }

  async __sendRequestSeparate() {
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
        filter: [`dic = ${this.sources[i]}`],
        offset: this.offset,
      };

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(request),
        redirect: "follow",
      };

      var self = this;
      self.results = [];

      var response = await fetch(
        "http://lexik08.ids-mannheim.de/meilisearch/indexes/syntagmatikon/search",
        requestOptions
      );
    }
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

      this.results = result.hits;
      this.max = result.estimatedTotalHits;
    } catch (error) {
      console.log("error", error);
      this.max = 0;
      this.results = [];
    }
  }
}
