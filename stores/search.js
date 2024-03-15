// stores/counter.js
import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {
  state: () => {
    return {
        resources: { group: false, items: []},
        displays: { group: false, items: []},
        types: { group: false, items: []},
        subtypes: { group: false, items: []},
        functions: { group: false, items: []},
        patterns: { group: false, items: []},
        parts: { group: false, items: []},
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    init(resources) {
      this.resources = this.__getSet(resources, "nameShort");
      this.resources.group = true;

      this.displays = this.__getSet(resources, "search_display");
      this.types = this.__getSet(resources, "search_type");
      this.subtypes = this.__getSet(resources, "search_subtype");
      this.functions = this.__getSet(resources, "search_functions");
      this.patterns = this.__getSet(resources, "search_patterns");
      this.parts = this.__getSet(resources, "search_parts");
    },
    __getSet(resources, name) {
        var res = [];

        if (resources[0][name] instanceof Array) {
          resources.forEach((x) => {
            if (x[name] != null && x[name] != "") {
              x[name].forEach((y) => {
                res.push( {item: y, checked: true} );
              });
            }
          });
        } else {
          resources.forEach((x) => {
            if (x[name] != null && x[name] != "") {
              res.push( {item: x[name], checked: true} );
            }
          });
        }
        return { group: false, items: res };
      }
  },

  getters: {
    uniqueCategories: function (state) {
      return [
        ...new Set(state.info.map((resource) => resource.categories).flat()),
      ];
    },
  },

  // private Funktionen
 
});
