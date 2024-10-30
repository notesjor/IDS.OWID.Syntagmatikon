import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layoutStore", {
  state: () => {
    return {
      title: "",
      parent: "",      

      colors: {
        "Ressourcentypen": [ "#3468eb", "#ff3661" ],
        "Informationstypen": [ "#ff3661", "#fec037" ],
        "Wort- und Ausdrucksarten": [ "#fec037", "#12cb4b" ],
        "Musterzugänge": [ "#12cb4b", "#3468eb" ],
      }
    };
  },
  getters: {
    getParentColor() {
      return this.colors[this.parent];
    }
  },
});
