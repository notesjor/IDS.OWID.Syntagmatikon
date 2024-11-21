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
        "Fallbeispiele": "#2962ff",
      },

      icons: {
        "Ressourcentypen": "mdi-compass",
        "Informationstypen": "mdi-compass",
        "Wort- und Ausdrucksarten": "mdi-compass",
        "Musterzugänge": "mdi-compass",
        "Fallbeispiele": "mdi-lightbulb-on",
      }
    };
  },
  getters: {
    getParentColor() {
      return this.colors[this.parent] || "#2962ff";
    },
    getParentIcon() {
      return this.icons[this.parent] || "mdi-compass";
    }
  },
});
