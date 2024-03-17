// stores/counter.js
import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {
  state: () => {
    return {
      resources: [],
      keys: [],

      data: {},

      initialized: false,

      query: "*",
      counter: 0,

      max: {},
      results: {},
      pageSize: 5,
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    init(resources) {
      this.resources = resources;
      this.keys = this.__getSet(resources, "key");

      this.data.nameShort = this.__getSet(resources, "nameShort");
      this.data.nameShort.group = true;
      this.data.search_display = this.__getSet(resources, "search_display");
      this.data.search_type = this.__getSet(resources, "search_type");
      this.data.search_subtype = this.__getSet(resources, "search_subtype");
      this.data.search_functions = this.__getSet(resources, "search_functions");
      this.data.search_patterns = this.__getSet(resources, "search_patterns");
      this.data.search_parts = this.__getSet(resources, "search_parts");

      this.changeQuery("*");
      this.initialized = true;
    },
    __getSet(resources, name) {
      var res = [];

      if (resources[0][name] instanceof Array) {
        resources.forEach((x) => {
          if (x[name] != null && x[name] != "") {
            x[name].forEach((y) => {
              res.push({ item: y, checked: true });
            });
          }
        });
      } else {
        resources.forEach((x) => {
          if (x[name] != null && x[name] != "") {
            res.push({ item: x[name], checked: true });
          }
        });
      }
      return { group: false, items: res };
    },
    changeQuery(query) {
      this.query = query;
      this.max = {};
      this.keys.items.forEach((x) => {
        this.max[x.item] = -1;
      });

      this.results = {};
      this.counter++;
    },
    sendSearchRequest(key, page) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer 8jRAqq_GbtjdjveIOCxIlnztXjwFbcaMYp-e50HtbrQ"
      );

      var request = {
        q: this.query,
        filter: [`dic = ${key}`],
        limit: this.pageSize,
        offset: (page - 1) * this.pageSize,
      };

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(request),
        redirect: "follow",
      };

      var self = this;
      fetch(
        "http://lexik08.ids-mannheim.de/meilisearch/indexes/syntagmatikon/search",
        requestOptions
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          self.results[key][page] = result.hits;
          if (self.max[key] == -1) 
            self.max[key] = result.estimatedTotalHits;
        })
        .catch((error) => console.log("error", error));
    },
    getItems(filterSet, page) {
      filterSet.forEach((x) => {
        if (this.results[x] == undefined) {
          this.results[x] = {};
        }
        if (this.results[x][page] == undefined) {
          this.sendSearchRequest(x, page);
        }
      });

      var res = [];
      filterSet.forEach((x) => {
        if (
          this.results[x] != undefined &&
          this.results[x][page] != undefined
        ) {
          res = res.concat(this.results[x][page]);
        }
      });

      return res;
    },
    getPageSize(filterSet) {
      var max = 0;
      filterSet.forEach((x) => {
        max += this.max[x];
      });
      return Math.round(max / this.pageSize);
    },
    getGroups() {
      var res = new Set();
      var keys = Object.keys(this.data);
      keys.forEach((x) => {
        if (this.data[x].group) {
          this.data[x].items.forEach((y) => {
            if (y.checked) res.add(y.item);
          });
        }
      });
      return res;
    },
    getFilter(name) {
      var group = Object.keys(this.data).filter((x) => this.data[x].group);
      var res = this.resources.filter((x) => {
        if (x[group] instanceof Array) {
          return x[group].some((y) => y == name);
        } else {
          return x[group] == name;
        }
      });

      var keys = Object.keys(this.data);
      res = res.filter((x) => {
        return keys.every((key) => {
          if (x[key] instanceof Array) {
            return x[key].some((y) =>
              this.data[key].items.some((z) => z.item == y && z.checked)
            );
          } else {
            return this.data[key].items.some(
              (y) => y.item == x[key] && y.checked
            );
          }
        });
      });

      return res;
    },
    updateGroup(group) {
      if (group != undefined && group != null && group != "") {
        var keys = Object.keys(this.data);
        keys.forEach((x) => {
          this.data[x].group = x == group;
        });
      }
    },
    updateItems(name, validItems) {
      var valid = new Set();
      validItems.forEach((x) => {
        if (x.checked) {
          valid.add(x.item);
        }
      });

      this.data[name].items.forEach((x) => {
        x.checked = valid.has(x.item);
      });
    },
    getUniqueItems(name) {
      var res = new Set();
      this.data[name].items.forEach((x) => {
        res.add(x.item);
      });
      return res;
    },
  },

  getters: {
    isReady() {
      return this.initialized;
    },
  },
});
