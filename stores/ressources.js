// stores/counter.js
import { defineStore } from 'pinia'

export const useRessourcesStore = defineStore('ressourcesStore', {
  state: () => {
    return { info: [
      {
        "key": "KoMuX",
        "nameShort": "KoMuX",
        "nameLong": "Kompositamuster-Explorer",
        "description": 'Im <strong>Kompositamuster-Explorer</strong> kann man sich Listen mit <u>Frequenzen</u> und nach unterschiedlichen linguistischen Kriterien zusammengestellte Gruppen von mehr als 50.000 Komposita anzeigen lassen, die vorher automatisch annotiert, d.h. mit Merkmalen (<a href="https://www.bubenhofer.com/korpuslinguistik/kurs/index.php?id=linginformationen.html">Annotation</a>) versehen wurden (<a href="https://www.owid.de/plus/komux/">KoMuX</a>)',
        "url": "https://www.owid.de/plus/komux/",
        "tags": ["Vollautomatisch", "Frequenz", "Kategorie", "EMuster"],
        "categories": ["Datenbank", "Explorative Datenbank"]
      },
      {
        "key": "PREPCON",
        "nameShort": "PREPCON<sup>online</sup>",
        "nameLong": "Präposition-Nomen-Verbindungen im Kontext",
        "description": '',
        "url": "http://uwv.ids-mannheim.de/prepcon/prepcon_online.html",
        "tags": ["Vollautomatisch", "Frequenz", "KWIC", "EMuster"],
        "categories": ["Datenbank", "Explorative Datenbank", "Inventar", "Sammlung", "Korpuszentriert", "Visualisierung", "Korpuszentrierte Präsentationsformat"]
      },
      {
        "key": "PREPCONex",
        "nameShort": "PREPCON<sup>explorativ</sup>",
        "nameLong": "Präposition-Nomen-Verbindungen im Kontext",
        "description": '<strong>Präposition-Nomen-Verbindungen explorativ</strong> bietet Tabellen mit <a href="../../2.2_DatenInformationstypen/2.2.1_Frequenz/2.2.1_Frequenz.docx">Frequenzen</a>, prozentuale Gewichtungen und automatisch ausgewählte <a href="../../2.2_DatenInformationstypen/2.2.2_KWIC/2.2.2_KWIC.docx">KWICs</a> zu knapp 80.000 Präposition-Nomen-Verbindungen an. (<a href="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html">PREPCON <sup>explorativ</sup></a>)',
        "url": "http://uwv.ids-mannheim.de/prepcon/prepcon_online.html",
        "tags": ["Vollautomatisch", "Frequenz", "KWIC", "EMuster"],
        "categories": ["Datenbank", "Explorative Datenbank", "Inventar", "Sammlung", "Korpuszentriert", "Visualisierung", "Korpuszentrierte Präsentationsformat"]
      },
      {
        "key": "PREPCONtemp",
        "nameShort": "PREPCON<sup>temporal</sup>",
        "nameLong": "PREPCON temporal-Kurzartikel",
        "description": 'Frequenzen, automatisch erstellte KWICSund manuell zusammengestellte KWICs und Volltextbelege; Kookkurrenzprofile; Mustertabellen',
        "url": "http://uwv.ids-mannheim.de/prepcon/prepcon_online.html",
        "tags": ["Vollautomatisch", "Frequenz", "KWIC", "EMuster"],
        "categories": ["Datenbank", "Explorative Datenbank", "Inventar", "Sammlung", "Korpuszentriert", "Visualisierung", "Korpuszentrierte Präsentationsformat"]
      },
      {
        "key": "MAP",
        "nameShort": "MAP",
        "nameLong": "Musterbank Argumentmarkierender Präpositionen",
        "description": '<p>In der noch in Arbeit befindlichen „<strong>Musterbank argumentmarkierender Präpositionen</strong>“ sind kategoriale Musterangaben und narrative Texte mit Bedeutungsbeschreibungen die relevante Informationseinheiten.</p>',
        "url": "https://www.owid.de/plus/",
        "tags": ["Deskriptiv", "Muster", "Präpositionen", "Visualisierung"],
        "categories": ["Datenbank", "Deskriptive Datenbank"]
      },
      {
        "key": "WÖRE",
        "nameShort": "Wörterbuch Redeeinleiter",
        "nameLong": "Kleinen Wörterbuch der Redeeinleiter",
        "description": 'Im „Kleinen Wörterbuch der Redeeinleiter“ kann ein Inventar von 523 Redeeinleitern mit Volltextstellen abgerufen und nach unterschiedlichen Kategorien sortiert werden. (KWRE)',
        "url": "https://www.owid.de/plus/",
        "tags": ["Deskriptiv", "Redeeinleiter"],
        "categories": ["Datenbank", "Deskriptive Datenbank"]
      },
      {
        "key": "SpruchList",
        "nameShort": "SpruchList",
        "nameLong": "Häufigkeitsliste deutscher Sprichwörter basierend auf DeReKo",
        "description": '',
        "url": "http://uwv.ids-mannheim.de/spruchlist/",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter"],
        "categories": ["Liste", "Inventar", "Sammlung", "Inventare/Sammlungen"]
      },
      {
        "key": "DTWW",
        "nameShort": "DTWW",
        "nameLong": "Deutsch-türkische Wortverbindungen Wirtschaft",
        "description": '',
        "url": "http://wvonline.ids-mannheim.de/dtww/dtww_komplett.htm",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter", "Mehrsprachig", "Zweisprachig"],
        "categories": ["Liste", "Inventar", "Sammlung", "Inventare/Sammlungen"]
      },
      {
        "key": "SPRW",
        "nameShort": "Sprichwörterbuch",
        "nameLong": "Sprichwörterbuch",
        "description": '',
        "url": "https://www.owid.de/wb/sprw/start.html",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter"],
        "categories": ["Liste", "Inventar", "Sammlung", "Inventare/Sammlungen"]
      },
      {
        "key": "KWViD",
        "nameShort": "Kleines Wörterbuch der Verlaufsformen im Deutschenn",
        "nameLong": "Vorkommenshäufigkeiten von Verben in drei Verlaufsformen",
        "description": '',
        "url": "https://www.owid.de/service/stichwortlisten/progdb",
        "tags": ["Wörterbuch", "Mehrworteinheiten", "Verlaufsformen"],
        "categories": ["Wörterbuch"]
      },
      {

        "key": "PAROWB",
        "nameShort": "Paronymwörtrbuch",
        "nameLong": "Paronyme – Dynamisch im Kontrast",
        "description": '',
        "url": "https://www.owid.de/parowb/",
        "tags": ["Wörterbuch", "Paranyme"],
        "categories": ["Wörterbuch"]
      },
      {
        "key": "WVBF",
        "nameShort": "Wortverbindungsfelder",
        "nameLong": "zu Präpositon+Grund-Netz",
        "description": '',
        "url": "http://wvonline.ids-mannheim.de/wvfelder-v3/grund-graphik.html",
        "tags": ["Wörterbuch", "Mehrworteinheiten", "Verlaufsformen", "Wortbildungsmuster"],
        "categories": ["Wörterbuch"]
      },
      {

        "key": "DRIO",
        "nameShort": "Auszug aus 'Moderne deutsch-russische Idiomatik: Ein Korpuswörterbuch'",
        "nameLong": "Deutsch-russische Idiome online",
        "description": '',
        "url": "http://wvonline.ids-mannheim.de/idiome_russ/AKTE_zu_den_Akten_legen.htm",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter", "Mehrsprachig", "Zweisprachig"],
        "categories": ["Pilot-/Einzelstudie"]
      },
      {

        "key": "ZUWV",
        "nameShort": "Umfragen Sprachanfragen",
        "nameLong": "Zweite Umfrage zu Wortverbindungen",
        "description": '',
        "url": "http://wvonline.ids-mannheim.de/umfrage2014.htm",
        "tags": ["Umfrage", "Statistik", "Benutzungsstudie"],
        "categories": ["Pilot-/Einzelstudie", "Umfrage"]
      },
      {

        "key": "PHKO",
        "nameShort": "PhrasKomp",
        "nameLong": "Inventar von Phrasenkomposita des Deutschen",
        "description": '',
        "url": "http://wvonline.ids-mannheim.de/umfrage2014.htm",
        "tags": ["Umfrage", "Statistik", "Benutzungsstudie"],
        "categories": ["Pilot-/Einzelstudie", "Umfrage"]
      },
    ] }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    getResources: function (filter) {
      if(filter == undefined || filter == null || filter.length === 0) return this.info;
      return this.info.filter(resource => filter.includes(resource.key))
    }
  },

  getters: {
    uniqueCategories: function (state) {
      return [...new Set(state.info.map((resource) => resource.categories).flat())]
    },    
  },
})