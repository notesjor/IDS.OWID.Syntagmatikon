// stores/counter.js
import { defineStore } from 'pinia'

export const useRessourcesStore = defineStore('ressourcesStore', {
  state: () => {
    return { info: [
      {
        "key": "KoMuX",
        "nameShort": "KoMuX",
        "nameLong": "Kompositamuster Explorer",
        "description": "Mit dieser vom Arbeitsbereich Wortbildungsmuster entwickelten Webanwendung kann man ein Inventar von über 50.000 nominalen Komposita gezielt nach abstrakten oder lexikalisch-teilspezifizierten Mustern durchsuchen. Kompositagruppen werden durch grammatische (Wortbildungstyp oder Wortart) oder lexikalische Eigenschaften (konkretes Lemma) der Erst- und Zweitglieder definiert. Visualisierungen unterstützen dabei, die Ergebnismenge näher zu analysieren.",
        "url": "https://www.owid.de/plus/komux/",
        "tags": ["Explorativ", "Komposita", "Häufigkeiten", "Visualisierung"],
        "categories": ["Datenbank", "Explorative Datenbank"]
      },
      {
        "key": "PREPCON",
        "nameShort": "PREPCON<sup>online</sup>",
        "nameLong": "Präposition-Nomen-Verbindungen im Kontext",
        "description": "Das Onlineformat PREPCON, entwickelt vom Projekt Usuelle Wortverbindungen, behandelt das Phänomen präpositionale Wortverbindungen in unterschiedlichen Beschreibungstiefen und macht damit den Weg von der korpusempirischen Datenerhebung zu einer didaktisierten lexikografischen Beschreibung nachvollziehbar. Es wird in drei Modulen kontinuierlich veröffentlicht.",
        "url": "http://uwv.ids-mannheim.de/prepcon/prepcon_online.html",
        "tags": ["Explorativ", "Visualisierung", "Mehrworteinheiten"],
        "categories": ["Datenbank", "Explorative Datenbank", "Inventar", "Sammlung", "Korpuszentriert", "Visualisierung", "Korpuszentrierte Präsentationsformat"]
      },
      {
        "key": "MAP",
        "nameShort": "MAP",
        "nameLong": "Musterbank Argumentmarkierender Präpositionen",
        "description": "lorem ipsum dolor sit amet",
        "url": "https://www.owid.de/plus/",
        "tags": ["Deskriptiv", "Muster", "Präpositionen", "Visualisierung"],
        "categories": ["Datenbank", "Deskriptive Datenbank"]
      },
      {
        "key": "WÖRE",
        "nameShort": "Redeeinleiter",
        "nameLong": "Wörterbuch Redeeinleiter",
        "description": "Lorem ipsum dolor sit amet",
        "url": "https://www.owid.de/plus/",
        "tags": ["Deskriptiv", "Redeeinleiter"],
        "categories": ["Datenbank", "Deskriptive Datenbank"]
      },
      {
        "key": "SpruchList",
        "nameShort": "SpruchList",
        "nameLong": "Häufigkeitsliste deutscher Sprichwörter basierend auf DeReKo",
        "description": "Die erste online abruf- und durchsuchbare Häufigkeitsliste deutscher Sprichwörter und Sprüche basierend auf quantitativ-qualitativen Erhebungen im Deutschen Referenzkorpus (DeReKo).",
        "url": "http://uwv.ids-mannheim.de/spruchlist/",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter"],
        "categories": ["Liste", "Inventar", "Sammlung", "Inventare/Sammlungen"]
      },
      {
        "key": "DTWW",
        "nameShort": "DTWW",
        "nameLong": "Deutsch-türkische Wortverbindungen Wirtschaft",
        "description": "Lorem ipsum dolor sit amet",
        "url": "http://wvonline.ids-mannheim.de/dtww/dtww_komplett.htm",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter", "Mehrsprachig", "Zweisprachig"],
        "categories": ["Liste", "Inventar", "Sammlung", "Inventare/Sammlungen"]
      },
      {
        "key": "SPRW",
        "nameShort": "SPRW",
        "nameLong": "Sprichwörterbuch",
        "description": "prichwörter helfen, komplexe Sachverhalte prägnant auf den Punkt zu bringen, Situationen und Verhaltensweisen plastisch zu kommentieren und manchmal etwas 'durch die Blume' zu sagen. Diese festen Sätze gehören zum Kulturgut einer Sprachgemeinschaft und werden als Weisheiten von Generation zu Generation weitergetragen.",
        "url": "https://www.owid.de/wb/sprw/start.html",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter"],
        "categories": ["Liste", "Inventar", "Sammlung", "Inventare/Sammlungen"]
      },
      {
        "key": "KWViD",
        "nameShort": "Kleines Wörterbuch der Verlaufsformen im Deutschenn",
        "nameLong": "Vorkommenshäufigkeiten von Verben in drei Verlaufsformen",
        "description": "Das 'Kleine Wörterbuch der Verlaufsformen im Deutschen' stellt deutsche Verben hinsichtlich ihres Vorkommens in drei Verlaufsformen dar, dem am-Progressiv, dem Absentiv und der beim-Verlaufsform.",
        "url": "https://www.owid.de/service/stichwortlisten/progdb",
        "tags": ["Wörterbuch", "Mehrworteinheiten", "Verlaufsformen"],
        "categories": ["Wörterbuch"]
      },
      {

        "key": "PAROWB",
        "nameShort": "Paronymwörtrbuch",
        "nameLong": "Paronyme – Dynamisch im Kontrast",
        "description": "'Paronyme – Dynamisch im Kontrast' ist ein neues und neuartiges Nachschlagewerk für sprachliche Zweifelsfälle und Unsicherheiten. Erstmals werden lautlich, orthografisch und/oder semantisch ähnliche Wörter (z. B. farbig-farblich, kindlich-kindisch, universal-universell, Mehrheit-Mehrzahl) korpusbasiert in ihrem aktuellen Gebrauch untersucht und dokumentiert.",
        "url": "https://www.owid.de/parowb/",
        "tags": ["Wörterbuch", "Paranyme"],
        "categories": ["Wörterbuch"]
      },
      {
        "key": "WVBF",
        "nameShort": "Wortverbindungsfelder",
        "nameLong": "zu Präpositon+Grund-Netz",
        "description": "Mit dieser vom Arbeitsbereich Wortbildungsmuster entwickelten Webanwendung kann man ein Inventar von über 50.000 nominalen Komposita gezielt nach abstrakten oder lexikalisch-teilspezifizierten Mustern durchsuchen. Kompositagruppen werden durch grammatische (Wortbildungstyp oder Wortart) oder lexikalische Eigenschaften (konkretes Lemma) der Erst- und Zweitglieder definiert. Visualisierungen unterstützen dabei, die Ergebnismenge näher zu analysieren.",
        "url": "http://wvonline.ids-mannheim.de/wvfelder-v3/grund-graphik.html",
        "tags": ["Wörterbuch", "Mehrworteinheiten", "Verlaufsformen", "Wortbildungsmuster"],
        "categories": ["Wörterbuch"]
      },
      {

        "key": "DRIO",
        "nameShort": "Auszug aus 'Moderne deutsch-russische Idiomatik: Ein Korpuswörterbuch'",
        "nameLong": "Deutsch-russische Idiome online",
        "description": "Die Erstellung eines neuen deutsch-russischen Idiom-Wörterbuch ist notwendig, da die vorhandenen lexikographischen Quellen der Idiom-Lexikografie den modernen Anforderungen nicht gerecht werden. Unser Nachschlagewerk unterscheidet sich von den bereits vorhandenen phraseologischen Wörterbüchern vor allem dadurch, dass es nur authentische Belege enthält, die den Textkorpora DeReKo (IDS Mannheim) und zum Teil DWDS (Berlin-Brandenburgische Akademie der Wissenschaften) entstammen. In Einzelfällen werden deutsche Internet-Belege herangezogen. Zurzeit enthält das Wörterbuch etwa 2000 deutsche Idiome mit ihren Varianten. Der Wörterbuchartikel beinhaltet in nötigen Fällen auch ausführliche Kommentare, in denen auf die Besonderheiten des realen Gebrauchs der betreffenden Idiome hingewiesen wird. Alle illustrativen Belege sind ins Russische übersetzt.",
        "url": "http://wvonline.ids-mannheim.de/idiome_russ/AKTE_zu_den_Akten_legen.htm",
        "tags": ["Liste", "Mehrworteinheiten", "Sprichwörter", "Mehrsprachig", "Zweisprachig"],
        "categories": ["Pilot-/Einzelstudie"]
      },
      {

        "key": "ZUWV",
        "nameShort": "Umfragen Sprachanfragen",
        "nameLong": "Zweite Umfrage zu Wortverbindungen",
        "description": "Zum 'Tag der offenen Tür' des Instituts für Deutsche Sprache am 08.11.2014 hat das Projekt 'Usuelle Wortverbindungen' eine kleine Umfrage durchgeführt, um zu erfahren, welche Wortverbindungen in den Köpfen der Besucher präsent sind. 90 Personen haben sich beteiligt.",
        "url": "http://wvonline.ids-mannheim.de/umfrage2014.htm",
        "tags": ["Umfrage", "Statistik", "Benutzungsstudie"],
        "categories": ["Pilot-/Einzelstudie", "Umfrage"]
      },
      {

        "key": "PHKO",
        "nameShort": "PhrasKomp",
        "nameLong": "Inventar von Phrasenkomposita des Deutschen",
        "description": "Zum 'Tag der offenen Tür' des Instituts für Deutsche Sprache am 08.11.2014 hat das Projekt 'Usuelle Wortverbindungen' eine kleine Umfrage durchgeführt, um zu erfahren, welche Wortverbindungen in den Köpfen der Besucher präsent sind. 90 Personen haben sich beteiligt.",
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