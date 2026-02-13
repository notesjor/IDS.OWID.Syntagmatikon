import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layoutStore", {
  state: () => {
    return {
      title: "",
      parent: "",

      colors: {
        Ressourcentypen: "#DF0C2F",
        Informationstypen: "#9716CA",
        "Wort- und Ausdrucksarten": "#0DC513",
        Musterzugänge: "#DB6900",
        Fallbeispiele: "#2962ff",
        None: "#000",
      },

      icons: {
        Ressourcentypen: "mdi-compass",
        Informationstypen: "mdi-compass",
        "Wort- und Ausdrucksarten": "mdi-compass",
        Musterzugänge: "mdi-compass",
        Fallbeispiele: "mdi-lightbulb-on",
      },

      validate: {
        Ressourcentypen: "/resources/",
        Informationstypen: "/datatypes/",
        "Wort- und Ausdrucksarten": "/pos/",
        Musterzugänge: "/patterns/",
        Fallbeispiele: "/examples/",
      },

      paths: {
        Ressourcentypen: [
          {
            name: "Explorative Datenbanken",
            url: "/resources/db_expl",
          },
          {
            name: "Deskriptive Datenbanken",
            url: "/resources/db_desc",
          },
          {
            name: "Inventare und Sammlungen",
            url: "/resources/inventory",
          },
          {
            name: "Online-Wörterbücher",
            url: "/resources/dictionaries",
          },
          {
            name: "Pilot- und Einzelstudien",
            url: "/resources/prototypes",
          },
        ],
        Informationstypen: [
             {
            name: "Frequenzangaben",
            url: "/datatypes/frequency",
          },
          {
            name: "KWICs",
            url: "/datatypes/kwic",
          },
          {
            name: "Kookkurrenzprofile",
            url: "/datatypes/cooccurrence",
          },
          {
            name: "Lückenfüllertabellen",
            url: "/datatypes/patterntable",
          },
          {
            name: "Kategoriale Label",
            url: "/datatypes/category",
          },
          {
            name: "Belege",
            url: "/datatypes/matches",
          },
          {
            name: "Narrative Beschreibungen",
            url: "/datatypes/narration",
          },
          {
            name: "Komponenten",
            url: "/datatypes/elements",
          },
          {
            name: "Felder",
            url: "/datatypes/fields",
          },
          {
            name: "Fremdsprachige Äquivalenzen",
            url: "/datatypes/equivalence",
          },
       
        ],
        "Wort- und Ausdrucksarten": [
          {
            name: "Nomina",
            url: "/pos/nouns",
          },
          {
            name: "Verben",
            url: "/pos/verbs",
          },
          {
            name: "Präpositionen",
            url: "/pos/prepositions",
          },
          {
            name: "Adjektive",
            url: "/pos/adjectives",
          },
          {
            name: "Phraseme",
            url: "/pos/phrasemes",
          },
          {
            name: "Feste Sätze",
            url: "/pos/sentences",
          },
        ],
        Musterzugänge: [
          {
            name: "Direkter Zugang",
            url: "/patterns/direct",
          },
          {
            name: "Lexikografische Angaben",
            url: "/patterns/component",
          },
          {
            name: "Dynamische Erschließung",
            url: "/patterns/dynamic",
          },
        ],
        Fallbeispiele: [
          {
            name: "Kookkurrenzprofile - Beispiel: am Ende",
            url: "/examples/kook-am-Ende",
          },
          {
            name: "Verwandte Wörter und Wortgruppen - Beispiel: ohne Unterlass",
            url: "/examples/PREPCON_temp",
          },
          {
            name: 'Anfrage Frankfurter Rundschau zu "frech wie Oskar"',
            url: "/examples/stolz-wie-oskar",
          },
        ],
      },
    };
  },
  getters: {
    getParentColor() {
      if (this.parent == "") this.updateParent();
      return this.colors[this.parent] || "#2962ff";
    },
    getParentIcon() {
      return this.icons[this.parent] || "mdi-compass";
    },
    getPaths() {
      return this.paths[this.parent] || [];
    },
  },
  actions: {
    updateParent(){
      const currentUrl = window.location.pathname;
      for (const [key, value] of Object.entries(this.validate)) {
        var valid = value.slice(1, -1);
        if (currentUrl.includes(valid)) {
          this.parent = key;
          break;
        }
        this.parent = "None";
      }
    }
  },
});
