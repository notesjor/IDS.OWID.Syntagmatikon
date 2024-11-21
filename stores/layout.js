import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layoutStore", {
  state: () => {
    return {
      title: "",
      parent: "",      

      colors: {
        "Ressourcentypen": "#f24162",
        "Informationstypen": "#58f380",
        "Wort- und Ausdrucksarten": "#a24cc2",
        "Musterzugänge": "#f25a40",
      }
    };
  },
  getters: {
    getParentColor() {
      return this.colors[this.parent];
    }
  },
});
