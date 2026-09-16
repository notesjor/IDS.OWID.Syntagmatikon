import { defineStore } from "pinia";

export const useResourcesStore = defineStore("resourcesStore", {
  state: () => {
    return {
      valuesSelected: {},
      resourcesDeselected: [],
      // 'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'Verlaufsformen',
      info: [
        {
          key: "PREPCON",
          nameShort: "PREPCON<sup>online</sup>",
          nameLong: "PREPCON - Präposition-Nomen-Verbindungen im Kontext",
          description:
            '<b>PREPCON<sup>online</sup></b> ist ein neuartiges korpusgesteuertes Präsentationsformat. Es bietet Informationen zum Gebrauch von ca. 80.000 Präposition-Nomen-Verbindungen des Deutschen (z.B. <em>über Jahre; nach Belieben</em>). Abrufbar sind systematisierte Korpusdaten (Frequenzen, KWICs, Volltextstellen, Kookkurrenzprofile, <em>lexpan</em>-Mustertabellen) und narrative Kommentare. Diese verfestigten Ausdrücke und ihnen zugrunde liegende Muster werden in drei Modulen dokumentiert: PREPCON<sup>explorativ</sup>; PREPCON<sup>temporal</sup> (mit den Unter-Rubriken "Inventar temporaler PNs" und "Kurzartikel zu temporalen PNs"); PREPCON<sup>kontrastiv</sup>.',
          img: "./img/sources/prepcon.png",
          url: "http://uwv.ids-mannheim.de/prepcon/prepcon_online.html",
          hideInSearch: true,
        },
        {
          key: "PREPCON_ex",
          nameShort: "PREPCON<sup>explorativ</sup>",
          nameLong:
            "PREPCON<sup>explorativ</sup> - Explorative Datenbank zu Präposition-Nomen-Verbindungen im Kontext",
          description: "",
          img: "./img/sources/prepcon_ex.png",
          url: "http://uwv.ids-mannheim.de/prepcon/modul1/",
          quest: "http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?{q}",
          search_type: ["Explorative Datenbanken"],
          search_functions: ["Frequenzen", "KWICs"],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Nomina", "Präpositionen"],
        },
        {
          key: "PREPCON_temp",
          nameShort: "PREPCON<sup>temporal</sup>",
          nameLong:
            "PREPCON<sup>temporal</sup> - Kurzartikel und Inventar zu temporalen Präposition-Nomen-Verbindungen im Kontext",
          description: "",
          img: "./img/sources/prepcon_temp.png",
          url: "http://uwv.ids-mannheim.de/prepcon/modul2",
          quest: "",
          // This is a parent resource, so it doesn't have search functions or patterns itself
          // see the child resources PREPCON_temp_inv and PREPCON_temp_art for those
        },
        {
          // This is a child resource, so it doesn't have its own nameShort, nameLong, description, img, url, or quest
          // see the parent resource PREPCON_temp for those
          key: "PREPCON_temp_inv",
          key_relation: "PREPCON_temp",  // This is a child of PREPCON_temp
          nameShort: "PREPCON<sup>temporal</sup>",
          nameLong:
            "PREPCON<sup>temporal</sup> - Kurzartikel und Inventar zu temporalen Präposition-Nomen-Verbindungen im Kontext",
          search_type: ["Inventare und Sammlungen"],
          search_functions: ["Frequenzen", "KWICs", "Kategoriale Label"],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Nomina", "Präpositionen"],          
        },
        {
          // This is a child resource, so it doesn't have its own nameShort, nameLong, description, img, url, or quest
          // see the parent resource PREPCON_temp for those
          key: "PREPCON_temp_art",
          key_relation: "PREPCON_temp", // This is a child of PREPCON_temp
          nameShort: "PREPCON<sup>temporal</sup>",
          nameLong:
            "PREPCON<sup>temporal</sup> - Kurzartikel und Inventar zu temporalen Präposition-Nomen-Verbindungen im Kontext",
          search_type: ["Inventare und Sammlungen"],
          search_functions: [
            "Frequenzen",
            "KWICs",
            "Kookkurrenzprofile",
            "Lückenfüllertabellen",
            "Komponenten",
            "Felder",
            "Belege",
          ],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Nomina", "Präpositionen"],
        },
        {
          key: "PREPCON_kon",
          nameShort: "PREPCON<sup>kontrastiv</sup>",
          nameLong:
            "PREPCON<sup>kontrastiv</sup> - Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext",
          description: "",
          img: "./img/sources/prepcon_kon.png",
          url: "http://uwv.ids-mannheim.de/prepcon/modul3/",
          quest:
            "http://uwv.ids-mannheim.de/prepcon/modul3/quantitativ/{q}.html",
          search_type: ["Pilotstudien"],
          search_functions: [
            "Frequenzen",
            "KWICs",
            "Kookkurrenzprofile",
            "Lückenfüllertabellen",
            "Kategoriale Label",
            "Narrative Beschreibungen",
            "Komponenten",
            "Felder",
            "Fremdsprachige Äquivalenz",
            "Belege",
          ],
          search_patterns: ["Lexikografische Angabe"],
          search_parts: ["Nomina", "Präpositionen"],
        },
        {
          key: "KoMuX",
          nameShort: "KoMuX",
          nameLong: "KoMuX - Kompositamuster-Explorer",
          description:
            "<b>Kompositamuster-Explorer</b> ist eine explorative Datenbank. Sie bietet die Möglichkeit, ein Inventar von ca. 50.000 nominalen Komposita gezielt nach abstrakten oder lexikalisch-teilspezifizierten Mustern zu durchsuchen. Gruppen von Komposita lassen sich über grammatische (Wortbildungstyp oder Wortart), (semantisch-)thematische (GermaNet-Wortfelder) oder lexikalische Eigenschaften (konkretes Lemma) ihrer Erst- und Zweitglieder definieren. KoMuX beruht auf automatischen Annotationen, die manuell bereinigt wurden.",
          img: "./img/sources/komux.png",
          url: "https://www.owid.de/plus/komux/",
          quest: "https://www.owid.de/plus/komux/?lem={q}",
          search_type: ["Explorative Datenbanken"],
          search_functions: ["Frequenzen", "Kategoriale Label"],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Nomina", "Verben", "Präpositionen", "Adjektive"],
        },
        {
          key: "MAP",
          nameShort: "MAP",
          nameLong: "MAP - Musterbank argumentmarkierender Präpositionen",
          description:
            "<b>MAP</b> ist eine empirisch fundierte Onlineressource, die sich als Gegenstück zu traditionellen Valenzlexika versteht („Musterbank“). Behandelt werden Verbindungen von Verben mit vermeintlich bedeutungsleeren Präpositionen. MAP rekonstruiert die verblasste semantische Motivation dieser Muster und dokumentiert ihre produktive Ausstrahlung sowie ihre Relationen zu anderen Mustern in textlichen Beschreibungen und Visualisierungen.",
          img: "./img/sources/map.png",
          url: "https://www.owid.de/plus/map/",
          search_type: ["Deskriptive Datenbanken"],
          search_functions: [
            "Belege",
            "Kategoriale Label",
            "Narrative Beschreibungen",
            "Felder",
          ],
          search_patterns: ["Direkter Zugang"],
          search_parts: ["Verben", "Präpositionen", "Phraseme"],
        },
        {
          key: "SpruchList",
          nameShort: "SpruchList",
          nameLong:
            "SpruchList - Referenzinventar deutscher Sprichwörter und Sprüche",
          description:
            "<b>SpruchList</b> ist eine korpusbasierte, durchsuch- und sortierbare Häufigkeitsliste von 650 Sprichwörtern, Sprüchen und festen Gebrauchssätzen des Deutschen. Sie ist angereichert mit hinterlegten Suchanfragen, Kontextzeilen, Verlinkungen und Visualisierungen. Das  Referenzinventar enthält Sprichwörter wie <em>wer A sagt, muss auch B sagen</em> und andere feste Sätze, die Eingang in die Allgemeinsprache gefunden haben wie <em>klein, aber fein</em> oder <em>aus die Maus</em>.",
          img: "./img/sources/spruchlist.png",
          url: "http://uwv.ids-mannheim.de/spruchlist/",
          search_type: ["Inventare und Sammlungen"],
          search_functions: ["Frequenzen", "KWICs", "Belege"],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Feste Sätze"],
        },
        {
          key: "PhrasKomp",
          nameShort: "PhrasKomp",
          nameLong:
            "PhrasKomp - Korpusbasiertes Inventar nominaler Phrasenkomposita(muster) im Deutschen",
          description:
            "<b>PhrasKomp</b> ist ein korpusbasiertes, durchsuchbares Inventar von 1.575 nominalen Phrasenkomposita des Deutschen.  Es hat den Anspruch, die Bildungsmöglichkeiten der Phrasenkomposition im Deutschen repräsentativ abzubilden. Aufgrund der enthaltenen manuellen Annotationen kann das Inventar zudem gezielt nach lexikalisch teilspezifizierten oder abstrakten Submustern der Phrasenkomposition durchsucht werden, und zwar in Abhängigkeit des Zweitgliedtyps.",
          img: "./img/sources/phraskomp.png",
          url: "http://uwv.ids-mannheim.de/phraskomp/",
          search_type: ["Inventare und Sammlungen"],
          search_functions: [
            "Frequenzen",
            "KWICs",
            "Kategoriale Label",
            "Belege",
          ],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Nomina", "Phraseme", "Feste Sätze"],
        },
        {
          key: "Redeeinleiter",
          nameShort: "Redeeinleiter",
          nameLong: "Das kleine Wörterbuch der Redeeinleiter",
          description:
            "<b>Das kleine Wörterbuch der Redeeinleiter</b> ist eine korpusbasierte und durchsuchbare Häufigkeitsliste von 523 Redeeinleitern. Für jeden Redeeinleiter bietet die Ressource einen Überblick über die Vorkommensverteilung nach den Attributen „Medium“ (Rede- oder Gedankenwiedergabe), „Wiedergabetyp“ (direkt oder indirekt), „Position“ (initial, medial oder final) und „Textsorte“ (fiktional oder nicht-fiktional).",
          img: "./img/sources/redeeinleiter.png",
          url: "https://www.owid.de/plus/redeeinleiter",
          search_type: ["Deskriptive Datenbanken"],
          search_functions: ["Frequenzen", "Belege", "Kategoriale Label"],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Nomina", "Verben", "Phraseme"],
        },
        {
          key: "SPRW",
          nameShort: "Sprichwörterbuch",
          nameLong: "Sprichwörterbuch",
          description:
            "<b>Sprichwörterbuch</b> ist das erste empirisch abgesicherte und nach Kriterien der wissenschaftlichen Lexikografie erarbeitete Online-Wörterbuch zum aktuellen Gebrauch fester Sätze der deutschen Sprache – im Kern Sprichwörter. Es wurde mithilfe systematischer Korpusanalysen neu erarbeitet und stellt somit keine Fortschreibung tradierter Wörterbücher dar. SWB umfasst drei Teilbereiche: 300 Einträge aus dem EU-Projekt „Sprichwort“, häufige Sprichwörter und Werbeslogans.",
          img: "./img/sources/sprw.png",
          url: "https://www.owid.de/wb/sprw/start.html",
          quest: "https://www.owid.de/artikel/{q}",
          search_type: ["Online-Wörterbücher"],
          search_functions: [
            "Belege",
            "Narrative Beschreibungen",
            "Komponenten",
            "Felder",
          ],
          search_patterns: ["Lexikografische Angabe"],
          search_parts: ["Feste Sätze"],
        },
        {
          key: "Verlaufsformen",
          nameShort: "Verlaufsformen",
          nameLong: "Kleines Wörterbuch der Verlaufsformen im Deutschen",
          description:
            "<b>Verlaufsformenwörterbuch</b> ist eine deskriptive Datenbank. Sie dokumentiert das Auftreten der drei Verlaufsformen <em>am</em>-Progressiv (<em>sie ist am Arbeiten</em>), Absentiv (<em>sie ist arbeiten</em>) und <em>beim</em>-Verlaufsform (<em>sie ist beim Arbeiten</em>). Dabei werden Verlaufsformen zu über 900 Verben mit mehr als 5000 Belegen dokumentiert, die nach verschiedenen Parametern gefiltert werden können, u.a. nach der Region des Belegs, nach dem Vorkommen eines direkten Objekts, eines inkorporierten Objekts oder eines Reflexivums.",
          img: "./img/sources/verlaufsformen.png",
          url: "https://www.owid.de/wb/progdb/start.html",
          quest: "https://www.owid.de/artikel/{q}",
          search_type: ["Deskriptive Datenbanken"],
          search_functions: ["Kategoriale Label", "Belege"],
          search_patterns: ["dynamische Erschließung"],
          search_parts: ["Verben", "Präpositionen"],
        },
        {
          key: "WVBF",
          nameShort: "WV-Feld Präp+GRUND",
          nameLong: "Wortverbindungsfeld zu Präposition+GRUND",
          description:
            "<b>Wortverbindungsfeld Präp+GRUND</b> ist eine Online-Pilotstudie. Sie visualisiert die Vernetzung von Wortverbindungen und semiabstrakten Mustern des Bezugslexems GRUND in Kombination mit den Präpositionen <em>aus; auf; in; mit</em> und <em>ohne</em> (basierend auf Steyer 2013). Die hierarchisch angeordneten 50 Knoten bündeln jeweils automatisch ermittelte Angaben wie Frequenz; KWIC; Kookkurrenz; Slot-Füller und inhaltliche Beschreibungen. Bei diesem Präsentationsformat rücken die systematisierten Korpusdaten selbst ins Zentrum der Einträge.",
          img: "./img/sources/wvfeld.png",
          url: "http://wvonline.ids-mannheim.de/wvfelder-v3/grund-graphik.html",
          search_type: ["Pilotstudien"],
          search_functions: [
            "Frequenzen",
            "KWICs",
            "Kookkurrenzprofile",
            "Lückenfüllertabellen",
            "Kategoriale Label",
            "Belege",
            "Narrative Beschreibungen",
          ],
          search_patterns: ["Direkter Zugang"],
          search_parts: ["Nomina", "Präpositionen", "Phraseme"],
        },
        {
          key: "FesteWV",
          nameShort: "Feste Wortverbindungen",
          nameLong: "Feste Wortverbindungen des Deutschen",
          description:
            "<b>Feste Wortverbindungen</b> ist ein Online-Wörterbuch. Es wurde in der frühen Entwicklungsphase von OWID als neuer, korpusbasierter Zugang zu Bedeutung und Gebrauch in der Mehrwortlexikografie erarbeitet. Diese Rubrik enthält 25 Musterartikel (Phraseologismen, z. B. etw. <em>an die große Glocke hängen</em>) sowie 100 Kurzartikel (Wortverbindungen mit den adjektivischen Komponenten <em>blind; geistig; gesund; normal</em> und <em>sanft</em>). Die Beschreibungen fußen auf typischen Kookkurrenz- und Kontextmustern in Korpora.",
          img: "./img/sources/festeWV.png",
          url: "https://www.owid.de/wb/uwv/start.html",
          quest: "https://www.owid.de",
          search_type: ["Online-Wörterbücher"],
          search_functions: [
            "Kategoriale Label",
            "Belege",
            "Narrative Beschreibungen",
            "Komponenten",
          ],
          search_patterns: ["Lexikografische Angabe"],
          search_parts: ["Adjektive", "Phraseme"],
        },
        {
          key: "DTWW",
          nameShort: "DTWW",
          nameLong: "DTWW - Deutsch-türkische Wortverbindungen Wirtschaft",
          description:
            "<b>Deutsch-türkische Wortverbindungen Wirtschaft</b> ist eine Sammlung deutsch-türkischer Wortverbindungen und Einwortphraseologismen der Domäne ‚Wirtschaft‘. Sie enthält ca. 900 deutsche Einträge, ihre türkischen Entsprechungen und typische Belege aus DeReKo sowie die wörtliche Übersetzung der türkischen Äquivalente, die nicht 1:1 übertragbar sind. Es handelt sich um eine bearbeitete und erweiterte Liste aus Aktaş A. (†) (2008) (Kooperation Marmara-Universität Istanbul und Projekt „Usuelle Wortverbindungen“).",
          img: "./img/sources/dtww.png",
          url: "http://wvonline.ids-mannheim.de/dtww/dtww_komplett.htm",
          search_type: ["Inventare und Sammlungen"],
          search_functions: ["Belege", "Fremdsprachige Äquivalenz"],
          search_patterns: ["Kein Musterzugang"],
          search_parts: ["Nomina", "Phraseme"],
        },
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
      // If toggling a parent resource, also toggle its child resources
      var children = this.info.filter((r) => r.key_relation === key).map((r) => r.key);

      if (this.resourcesDeselected.includes(key)) {
        // remove parent
        this.resourcesDeselected = this.resourcesDeselected.filter((item) => item !== key);
        // remove children
        this.resourcesDeselected = this.resourcesDeselected.filter((item) => !children.includes(item));
      } else {
        // add parent
        this.resourcesDeselected.push(key);
        // add children
        for (var i = 0; i < children.length; i++) {
          if (!this.resourcesDeselected.includes(children[i])) this.resourcesDeselected.push(children[i]);
        }
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
      // First compute individual resource state (including children)
      var raw = {};
      for (var i = 0; i < state.info.length; i++) {
        var item = state.info[i];
        if (item.hideInSearch) continue;

        var excludedByFacet = false;
        for (var key in state.valuesSelected) {
          if (typeof item[key] === "string") {
            if (!state.valuesSelected[key].includes(item[key])) {
              raw[item.key] = -1;
              excludedByFacet = true;
              break;
            }
          } else if (Array.isArray(item[key])) {
            if (!item[key].some((value) => state.valuesSelected[key].includes(value))) {
              raw[item.key] = -1;
              excludedByFacet = true;
              break;
            }
          }
        }

        if (excludedByFacet) continue;

        if (state.resourcesDeselected.includes(item.key)) {
          raw[item.key] = 0;
          continue;
        }

        raw[item.key] = 1;
      }

      // Aggregate parent states: a parent with children is considered active
      // as long as at least one child is active (1). If none active, but at
      // least one child is deselected (0) then parent is 0. Otherwise -1.
      var res = Object.assign({}, raw);
      // build children map
      var childrenMap = {};
      for (var i = 0; i < state.info.length; i++) {
        var item = state.info[i];
        if (item.key_relation) {
          childrenMap[item.key_relation] = childrenMap[item.key_relation] || [];
          childrenMap[item.key_relation].push(item.key);
        }
      }

      for (var parentKey in childrenMap) {
        var childKeys = childrenMap[parentKey];
        var anyActive = false;
        var anyDeselected = false;
        var anyExcluded = false;
        for (var j = 0; j < childKeys.length; j++) {
          var k = childKeys[j];
          var v = raw[k];
          if (v === 1) anyActive = true;
          else if (v === 0) anyDeselected = true;
          else if (v === -1) anyExcluded = true;
        }

        if (anyActive) res[parentKey] = 1;
        else if (anyDeselected) res[parentKey] = 0;
        else if (anyExcluded) res[parentKey] = -1;
        else {
          // no children included (maybe all hidden) -> fall back to parent's own raw state or default -1
          res[parentKey] = raw[parentKey] !== undefined ? raw[parentKey] : -1;
        }
      }

      return res;
    },

    resourceUsedForSearch: function (state) {
      var res = [];
      var data = state.resourcesState;

      // Build a map of parent -> children
      var childrenMap = {};
      for (var i = 0; i < state.info.length; i++) {
        var item = state.info[i];
        if (item.key_relation) {
          childrenMap[item.key_relation] = childrenMap[item.key_relation] || [];
          childrenMap[item.key_relation].push(item.key);
        }
      }

      // For each resource: if it has children, include active children keys;
      // otherwise include the resource key itself if active.
      for (var i = 0; i < state.info.length; i++) {
        var item = state.info[i];
        if (item.hideInSearch) continue;

        if (childrenMap[item.key] && childrenMap[item.key].length > 0) {
          for (var j = 0; j < childrenMap[item.key].length; j++) {
            var childKey = childrenMap[item.key][j];
            if (data[childKey] === 1) res.push(childKey);
          }
        } else {
          if (data[item.key] === 1) res.push(item.key);
        }
      }

      // ensure unique
      return [...new Set(res)];
    },
  },
});
