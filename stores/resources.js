// stores/counter.js
import { defineStore } from "pinia";

export const useResourcesStore = defineStore("resourcesStore", {
  state: () => {
    return {
      valuesSelected: {},
      resourcesDeselected: [],
      info: [
        {
          key: "PREPCON",
          nameShort: "PREPCON<sup>online</sup>",
          nameLong: "PREPCON - Präposition-Nomen-Verbindungen im Kontext",
          description:
            "<b>PREPCON<sup>online</sup></b> bietet Informationen zum Gebrauch von ca. 80.000 Präposition-Nomen-Verbindungen des Deutschen (z.B. <em>über Jahre; nach Belieben</em>). Abrufbar sind systematisierte Korpusdaten (Frequenzen, KWICs, Volltextstellen, Kookkurrenzprofile, <em>lexpan</em>-Mustertabellen) und narrative Kommentare. Diese verfestigten Ausdrücke und ihnen zugrunde liegende Muster werden in drei Modulen dokumentiert: PREPCON<sup>explorativ</sup>; PREPCON<sup>temporal</sup>; PREPCON<sup>kontrastiv</sup>.",
          img: "./img/sources/prepcon.PNG",
          url: "http://uwv.ids-mannheim.de/prepcon/prepcon_online.html",
          tags: [],
          search_display: "Netz",
          search_type: "Datenbank",
          search_subtype: "Explorativ",
          search_functions: [
            "Suchanfrage",
            "KWIC",
            "Frequenz",
            "Muster",
            "Beleg",
          ],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        {
          key: "PREPCON_ex",
          nameShort: "PREPCON<sup>explorativ</sup>",
          nameLong:
            "PREPCON<sup>explorativ</sup> - Explorative Datenbank zu Präposition-Nomen-Verbindungen im Kontext",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque recusandae dolorem quae eum ipsum sapiente itaque officia reiciendis enim et voluptate sunt, veritatis provident assumenda pariatur autem quia! Pariatur.",
          img: "./img/sources/prepcon_ex.PNG",
          url: "http://uwv.ids-mannheim.de/prepcon/modul1/",
          tags: [],
          quest: "http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?{q}",
          search_display: "Suche",
          search_type: "Datenbank",
          search_subtype: "Explorativ",
          search_functions: [
            "Suchanfrage",
            "KWIC",
            "Frequenz",
            "Muster",
            "Basiselement",
          ],
          search_patterns: ["Musterzugang", "Musterangabe"],
          search_parts: ["Verb", "Nomen", "Präposition", "Phrasem"],
        },
        {
          key: "PREPCON_temp",
          nameShort: "PREPCON<sup>temporal</sup>",
          nameLong:
            "PREPCON<sup>temporal</sup> - Kurzartikel zu temporalen Präposition-Nomen-Verbindungen im Kontext",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque recusandae dolorem quae eum ipsum sapiente itaque officia reiciendis enim et voluptate sunt, veritatis provident assumenda pariatur autem quia! Pariatur.",
          img: "./img/sources/prepcon_temp.PNG",
          url: "http://uwv.ids-mannheim.de/prepcon/modul2/",
          tags: [],
          quest: "http://uwv.ids-mannheim.de/prepcon/modul2/inventar/{q}",
          search_display: "Stichwortliste",
          search_type: "Inventar",
          search_subtype: "Deskriptiv",
          search_functions: [
            "Suchanfrage",
            "KWIC",
            "Frequenz",
            "Muster",
            "Narrativer Text",
            "Satellitenfeld",
            "Liste",
          ],
          search_patterns: ["Erschließungsmuster", "Musterangabe"],
          search_parts: ["Verb", "Nomen", "Präposition", "Adjektiv", "Adverb"],
        },
        {
          key: "PREPCON_kon",
          nameShort: "PREPCON<sup>kontrastiv</sup>",
          nameLong:
            "PREPCON<sup>kontrastiv</sup> - Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque recusandae dolorem quae eum ipsum sapiente itaque officia reiciendis enim et voluptate sunt, veritatis provident assumenda pariatur autem quia! Pariatur.",
          img: "./img/sources/prepcon_kon.PNG",
          url: "http://uwv.ids-mannheim.de/prepcon/modul3/",
          tags: [],
          quest:
            "http://uwv.ids-mannheim.de/prepcon/modul3/quantitativ/{q}.html",
          search_display: "Suche",
          search_type: "Korpuszentriertes Format",
          search_subtype: "Kontrastiv",
          search_functions: [
            "Suchanfrage",
            "KWIC",
            "Frequenz",
            "Muster",
            "Annotation",
          ],
          search_patterns: ["Erschließungsmuster", "Musterzugang"],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        {
          key: "KoMuX",
          nameShort: "KoMuX",
          nameLong: "KoMuX - Kompositamuster-Explorer",
          description:
            "Der <b>Kompositamuster-Explorer</b> bietet die Möglichkeit, ein Inventar von ca. 50.000 nominalen Komposita gezielt nach abstrakten oder lexikalisch-teilspezifizierten Mustern zu durchsuchen. Gruppen von Komposita lassen sich über grammatische (Wortbildungstyp oder Wortart), (semantisch-)thematische (GermaNet-Wortfelder) oder lexikalische Eigenschaften (konkretes Lemma) ihrer Erst- und Zweitglieder definieren. KoMuX beruht auf automatischen Annotationen, die manuell bereinigt wurden.",
          img: "./img/sources/komux.PNG",
          url: "https://www.owid.de/plus/komux/",
          tags: [],
          quest: "https://www.owid.de/plus/komux/?lem={q}",
          search_display: "Netz",
          search_type: "Datenbank",
          search_subtype: "Explorativ",
          search_functions: ["Suchanfrage", "KWIC", "Frequenz", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: ["Verb", "Nomen", "Adjektiv"],
        },
        {
          key: "MAP",
          nameShort: "MAP",
          nameLong: "MAP - Musterbank argumentmarkierender Präpositionen",
          description:
            "<b>MAP</b> ist eine empirisch fundierte Onlineressource, die sich als Gegenstück zu traditionellen Valenzlexika versteht („Musterbank“). Behandelt werden Verbindungen von Verben mit vermeintlich bedeutungsleeren Präpositionen. MAP rekonstruiert die verblasste semantische Motivation dieser Muster und dokumentiert ihre produktive Ausstrahlung sowie ihre Relationen zu anderen Mustern in textlichen Beschreibungen und Visualisierungen.",
          img: "./img/sources/map.PNG",
          url: "http://lexik02.ids-mannheim.de/vas-v7/",
          tags: [],
          search_display: "Netz",
          search_type: "Online-Wörterbuch",
          search_subtype: "Semi-Automatisch",
          search_functions: [
            "Suchanfrage",
            "KWIC",
            "Frequenz",
            "Muster",
            "Annotation",
          ],
          search_patterns: ["Erschließungsmuster"],
          search_parts: ["Verb", "Präposition", "Adverb", "Phrasem", "Satz"],
        },
        {
          key: "SpruchList",
          nameShort: "SpruchList",
          nameLong:
            "SpruchList - Referenzinventar deutscher Sprichwörter und Sprüche",
          description:
            "<b>SpruchList</b> ist eine korpusbasierte, durchsuch- und sortierbare Häufigkeitsliste von 650 Sprichwörtern, Sprüchen und festen Gebrauchssätzen des Deutschen – angereichert mit hinterlegten Suchanfragen, Kontextzeilen, Verlinkungen und Visualisierungen. Das  Referenzinventar enthält Sprichwörter wie <em>wer A sagt, muss auch B sagen</em> und andere feste Sätze, die Eingang in die Allgemeinsprache gefunden haben wie <em>klein, aber fein</em> oder <em>aus die Maus</em>.",
          img: "./img/sources/spruchlist.PNG",
          url: "http://uwv.ids-mannheim.de/spruchlist/",
          tags: [],
          search_display: "Stichwortliste",
          search_type: "Studie",
          search_subtype: "Deskriptiv",
          search_functions: ["Suchanfrage", "Muster"],
          search_patterns: ["Musterzugang"],
          search_parts: ["Phrasem", "Satz"],
        },
        {
          key: "PhrasKomp",
          nameShort: "PhrasKomp",
          nameLong:
            "PhrasKomp - Korpusbasiertes Inventar nominaler Phrasenkomposita(muster) im Deutschen",
          description:
            "<b>PhrasKomp</b> ist ein korpusbasiertes, durchsuchbares Inventar von 1.576 nominalen Phrasenkomposita des Deutschen.  Es hat den Anspruch, die Bildungsmöglichkeiten der Phrasenkomposition im Deutschen repräsentativ abzubilden. Aufgrund der enthaltenen manuellen Annotationen kann das Inventar zudem gezielt nach lexikalisch teilspezifizierten oder abstrakten Submustern der Phrasenkomposition durchsucht werden, und zwar in Abhängigkeit des Zweitgliedtyps.",
          img: "./img/sources/phraskomp.PNG",
          url: "http://uwv.ids-mannheim.de/plus/phraskomp/",
          tags: [],
          search_display: "Netz",
          search_type: "Studie",
          search_subtype: "Semi-Automatisch",
          search_functions: ["Suchanfrage", "KWIC", "Frequenz", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        {
          key: "Redeeinleiter",
          nameShort: "Redeeinleiter",
          nameLong: "Das kleine Wörterbuch der Redeeinleiter",
          description:
            "<b>Das kleine Wörterbuch der Redeeinleiter</b> ist eine korpusbasierte und durchsuchbare Häufigkeitsliste von 523 Redeeinleitern. Für jeden Redeeinleiter bietet die Ressource einen Überblick über die Vorkommensverteilung nach den Attributen „Medium“ (Rede- oder Gedankenwiedergabe), „Wiedergabetyp“ (direkt oder indirekt), „Position“ (initial, medial oder final) und „Textsorte“ (fiktional oder nicht-fiktional).",
          img: "./img/sources/redeeinleiter.PNG",
          url: "https://www.owid.de/plus/redeeinleiter",
          tags: [],
          search_display: "Stichwortliste",
          search_type: "Online-Wörterbuch",
          search_subtype: "Händisch / Qualitativ",
          search_functions: ["Lückenfüller", "Satellitenfeld"],
          search_patterns: ["Musterangabe"],
          search_parts: ["Verb", "Präposition", "Phrasem", "Satz"],
        },
        {
          key: "SPRW",
          nameShort: "Sprichwörterbuch",
          nameLong: "Sprichwörterbuch",
          description:
            "Das <b>Sprichwörterbuch</b> ist das erste empirisch abgesicherte und nach Kriterien der wissenschaftlichen Lexikografie erarbeitete Online-Wörterbuch zum aktuellen Gebrauch fester Sätze der deutschen Sprache – im Kern Sprichwörter. Es wurde mithilfe systematischer Korpusanalysen neu erarbeitet und stellt somit keine Fortschreibung tradierter Wörterbücher dar. SWB umfasst drei Teilbereiche: 300 Einträge aus dem EU-Projekt „Sprichwort“, häufige Sprichwörter und Werbeslogans.",
          img: "./img/sources/sprw.PNG",
          url: "https://www.owid.de/wb/sprw/start.html",
          tags: [],
          quest: "https://www.owid.de/artikel/{q}",
          search_display: "Stichwortliste",
          search_type: "Online-Wörterbuch",
          search_subtype: "Deskriptiv",
          search_functions: ["Suchanfrage", "KWIC", "Beleg", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        {
          key: "Verlaufsformen",
          nameShort: "Verlaufsformen",
          nameLong: "Kleines Wörterbuch der Verlaufsformen im Deutschen",
          description:
            "Das <b>Verlaufsformenwörterbuch</b> dokumentiert das Auftreten der drei Verlaufsformen <em>am</em>-Progressiv (<em>sie ist am Arbeiten</em>), Absentiv (<em>sie ist arbeiten</em>) und <em>beim</em>-Verlaufsform (<em>sie ist beim Arbeiten</em>). Dabei werden Verlaufsformen zu über 900 Verben mit mehr als 5000 Belegen dokumentiert, die nach verschiedenen Parametern gefiltert werden können, u.a. nach der Region des Belegs, nach dem Vorkommen eines direkten Objekts, eines inkorporierten Objekts oder eines Reflexivums.",
          img: "./img/sources/verlaufsformen.PNG",
          url: "https://www.owid.de/service/stichwortlisten/progdb",
          tags: [],
          quest: "https://www.owid.de/artikel/{q}",
          search_display: "Suche",
          search_type: "Online-Wörterbuch",
          search_subtype: "Kontrastiv",
          search_functions: ["Suchanfrage", "KWIC", "Annotation", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        {
          key: "WVBF",
          nameShort: "WV-Feld GRUND",
          nameLong: "Wortverbindungsfeld zu Präposition+GRUND",
          description:
            "Das <b>Wortverbindungsfeld GRUND</b> visualisiert die Vernetzung von Wortverbindungen und semiabstrakten Mustern des Bezugslexems GRUND in Kombination mit den Präpositionen <em>aus; auf; in; mit</em> und <em>ohne</em> (basierend auf Steyer 2013). Die hierarchisch angeordneten 50 Knoten bündeln jeweils automatisch ermittelte Angaben wie Frequenz; KWIC; Kookkurrenz; Slot-Füller und inhaltliche Beschreibungen. Bei diesem Präsentationsformat rücken die systematisierten Korpusdaten selbst ins Zentrum der Einträge.",
          img: "./img/sources/wvfeld.PNG",
          url: "http://wvonline.ids-mannheim.de/wvfelder-v3/grund-graphik.html",
          tags: [],
          search_display: "Netz",
          search_type: "Studie",
          search_subtype: "Semi-Automatisch",
          search_functions: ["Suchanfrage", "KWIC", "Frequenz", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        {
          key: "FesteWV",
          nameShort: "Feste Wortverbindungen",
          nameLong: "Feste Wortverbindungen des Deutschen",
          description:
            "<b>Feste Wortverbindungen</b> wurde in der frühen Entwicklungsphase von OWID als neuer, korpusbasierter Zugang zu Bedeutung und Gebrauch in der Mehrwortlexikografie erarbeitet. Diese Rubrik enthält 25 Musterartikel (Phraseologismen, z. B. etw. <em>an die große Glocke hängen</em>) sowie 100 Kurzartikel (Wortverbindungen mit den adjektivischen Komponenten <em>blind; geistig; gesund; normal</em> und <em>sanft</em>). Die Beschreibungen fußen auf typischen Kookkurrenz- und Kontextmustern in Korpora.",
          img: "./img/sources/festeWV.PNG",
          url: "https://www.owid.de/wb/uwv/start.html",
          tags: [],
          quest: "https://www.owid.de",
          search_display: "Stichwortliste",
          search_type: "Online-Wörterbuch",
          search_subtype: "Deskriptiv",
          search_functions: ["Suchanfrage", "KWIC", "Beleg", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
          ],
        },
        {
          key: "DTWW",
          nameShort: "DTWW",
          nameLong: "DTWW - Deutsch-türkische Wortverbindungen Wirtschaft",
          description:
            "<b>Deutsch-türkische Wortverbindungen Wirtschaft</b> ist eine Sammlung deutsch-türkischer Wortverbindungen und Einwortphraseologismen der Domäne ‚Wirtschaft‘. Sie enthält ca. 900 deutsche Einträge, ihre türkischen Entsprechungen und typische Belege aus DeReKo sowie die wörtliche Übersetzung der türkischen Äquivalente, die nicht 1:1 übertragbar sind. Es handelt sich um eine bearbeitete und erweiterte Liste aus Aktaş A. (†) (2008) (Kooperation Marmara-Universität Istanbul und Projekt „Usuelle Wortverbindungen“).",
          img: "./img/sources/dtww.PNG",
          url: "http://wvonline.ids-mannheim.de/dtww/dtww_komplett.htm",
          tags: [],
          search_display: "Stichwortliste",
          search_type: "Korpuszentriertes Format",
          search_functions: ["Suchanfrage", "KWIC", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        {
          key: "DRI",
          nameShort: "DRI",
          nameLong: "Deutsch-russische Idiome online",
          description:
            "Bei <b>Deutsch-russische Idiome online</b> handelt es sich um einen – in Kooperation mit dem Projekt „Usuelle Wortverbindungen“ – erstellten Auszug aus „Moderne deutsch-russische Idiomatik: Ein Korpus-Wörterbuch“ (D. Dobrovol’skij und A.Šarandin; RAW, Moskau / ÖAW, Wien). Die Online-Ressource enthält 70 Artikel zu deutschen Idiomen wie <em>sich schwarz ärgern</em> russische Entsprechungen sowie deutsche Korpusbelege mit wortwörtlichen Übersetzungen ins Russische.",
          img: "./img/sources/dri.PNG",
          url: "http://wvonline.ids-mannheim.de/idiome_russ/AKTE_zu_den_Akten_legen.htm",
          tags: [],
          search_display: "Netz",
          search_type: "Studie",
          search_subtype: "Händisch / Qualitativ",
          search_functions: ["Suchanfrage", "KWIC", "Frequenz", "Muster"],
          search_patterns: [
            "Erschließungsmuster",
            "Musterzugang",
            "Musterangabe",
          ],
          search_parts: [
            "Verb",
            "Nomen",
            "Präposition",
            "Adjektiv",
            "Adverb",
            "Phrasem",
            "Satz",
          ],
        },
        /*  
      {

        "key": "Varietäten",
        "nameShort": "Varietäten (geplant)",
        "nameLong": "Studie 'Lexikalische Dynamik deutschsprachiger Varietäten im Kontakt'",
        "description": 'Es wird eine technische Plattform entwickelt, die es erlaubt, korpusbasierte Daten von Diaspora-Varietäten einheitlich zu annotieren, sie lexikografisch und datenanalytisch aufzubereiten und online zu präsentieren. Dabei werden Schnittstellenphänomene im lexikalisch-syntagmatischen Bereich einbezogen; betrachtet werden unterschiedliche lexikalische Kategorien (z. B. Diskurspartikeln, Komplementierer) ebenso wie Argumentstrukturen und andere syntagmatische Phänomene.',
        "img": "./img/sources/varietaeten.PNG",
        "url": "",
        "tags": [],
        "search_display": "Netz",
        "search_type": "Studie",
        "search_subtype": "Semi-Automatisch",
        "search_functions": [],
        "search_patterns": [],
        "search_parts": [],
      },  */
      ],
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    getResource: function (key) {
      try {
        return this.info.find((resource) => resource.key === key);
      } catch {
        return this.info[0];
      }
    },
    getResources: function (filter) {
      if (filter == undefined || filter == null || filter.length === 0)
        return this.info;
      return this.info.filter((resource) => filter.includes(resource.key));
    },
    getItemByNameShort: function (nameShort) {
      return this.info.find((resource) => resource.nameShort === nameShort);
    },
    getItemByKey: function (key) {
      return this.info.find((resource) => resource.key === key);
    },

    setValue: function (key, value) {
      this.valuesSelected[key] = value;
    },

    valuesAvailable: function (key) {
      var res = [];
      for (var i = 0; i < this.info.length; i++) {
        if (typeof this.info[i][key] === "string") {
          res.push(this.info[i][key]);
        } else if (Array.isArray(this.info[i][key])) {
          res.push(...this.info[i][key]);
        }
      }

      var set = [...new Set(res)];
      set.sort();

      var dict = [];
      for (var i = 0; i < set.length; i++) {
        dict.push({ item: set[i], checked: true });
      }
      return dict;
    },

    switchResource: function (key) {
      if (this.resourcesDeselected.includes(key)) {
        this.resourcesDeselected = this.resourcesDeselected.filter(
          (item) => item !== key
        );
      } else {
        this.resourcesDeselected.push(key);
      }
    },
    selectAll() {
      this.resourcesDeselected = [];
    },
    selectNone() {
      this.resourcesDeselected = this.info.map((resource) => resource.key);
    },
    selectInvert() {
      var all = new Set(this.info.map((resource) => resource.key));

      for (var x in this.resourcesDeselected)
        all.delete(this.resourcesDeselected[x]);

      this.resourcesDeselected = [...all];
    },
  },

  getters: {
    uniqueCategories: function (state) {
      return [
        ...new Set(state.info.map((resource) => resource.categories).flat()),
      ];
    },

    resourcesState: function (state) {
      var res = {};
      for (var i = 0; i < state.info.length; i++) {
        var done = false;
        for (var key in state.valuesSelected)
          if (typeof state.info[i][key] === "string") {
            if (!state.valuesSelected[key].includes(state.info[i][key])) {
              res[state.info[i].key] = -1;
              done = true;
              break;
            }
          } else if (Array.isArray(state.info[i][key])) {
            if (
              !state.info[i][key].every((value) =>
                state.valuesSelected[key].includes(value)
              )
            ) {
              res[state.info[i].key] = -1;
              done = true;
              break;
            }
          }

        if (done) continue;

        if (state.resourcesDeselected.includes(state.info[i].key)) {
          res[state.info[i].key] = 0;
          continue;
        }

        res[state.info[i].key] = 1;
      }

      return res;
    },

    resourceUsedForSearch: function (state) {
      var res = [];
      var data = state.resourcesState;
      for (var key in data) {
        if (data[key] === 1) {
          res.push(key);
        }
      }
      return res;
    },
  },
});
