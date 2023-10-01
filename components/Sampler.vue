<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="text-xl">Interaktive-Beispiele</h1>
        <h2 class="text-l">Bewegen Sie die Maus über hervorgehobenen Stellen, um passende Ressourcen im Syntagmatikon zu
          finden.</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-carousel hide-delimiter-background hide-delimiters continuous ref="carousel" v-model="tab" :cycle="false">
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-sheet height="100%">
              <div>
                <div style="padding:5px 75px 5px 75px">
                  <sampler-item :data="item" @next="next"></sampler-item>
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
export default {
  name: "SlideBox",
  data() {
    return {
      items: [
        {
          tokens: ["Andere", "Länder,", "andere", "Sitten:", "Wenn", "deutsche", "Kinder", "am", "6.", "Dezember", "auf", "den", "Nikolaus", "in", "rotem", "Mantel", "und", "weißem", "Rauschebart", "warten,", "ist", "dieser", "Tag", "für", "spanische", "Mädchen", "und", "Jungen", "gar", "kein", "ereignisreiches", "Datum.", "Sie", "hoffen", "nämlich,", "daß", "die", "Heiligen", "Drei", "Könige", "-", "Caspar,", "Melchior", "und", "Balthasar", "sie", "am", "6.", "Januar", "reichlich", "beschenken,", "meist", "mit", "zuckersüßen", "Bonbons", "und", "Schokolade."],
          annotations: [
            {
              from: 0,
              to: 4,
              source: 'OWID-Sprichwörterbuch',
              article: 'Andere Länder, andere Sitten',
              type: 'Sprichwort',
              href: 'https://www.owid.de/artikel/404233',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["Nun", "gibt", "man", "das", "Gemüse", "und", "den", "Fond", "über", "das", "Fleisch", "in", "den", "Bräter,", "deckt", "ihn", "zu", "und", "schiebt", "alles", "bei", "160", "Grad", "für", "drei", "Stunden", "in", "den", "Ofen.", "„Das", "macht", "sich", "dann", "fast", "von", "selbst“,", "sagt", "Höfler.", "Später", "muss", "nur", "noch", "die", "Soße", "püriert", "und", "–", "je", "nach", "Belieben", "–", "mit", "etwas", "Rotwein", "oder", "Brühe", "verdünnt", "werden."],
          annotations: [
            {
              from: 23,
              to: 26,
              source: 'PREPCON kontrastiv',
              article: 'für Stunden',
              type: 'Sprachgebrauchsmuster',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul2/artikel/fuer_Stunden/index.html',
              color: '#0d65c2'
            },
            {
              from: 48,
              to: 50,
              source: 'PREPCON kontrastiv',
              article: 'nach Belieben',
              type: 'Sprachgebrauchsmuster',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["»Im-fremden-Bett-schlaf-ich-immer-schlecht-Sensibelchen«", "werden", "staunen:", "Eine", "ganze", "Auswahl", "von", "Kopfkissen", "in", "verschiedenen", "Härtegraden", "ist", "Teil", "eines", "mit", "einem", "Bettenhersteller", "ausgeklügelten", "»Schlafkonzepts«."],
          annotations: [
            {
              from: 0,
              to: 1,
              source: 'Phrasenkomposita-Inventar',
              article: 'Im-fremden-Bett-schlaf-ich-immer-schlecht-Sensibelchen',
              type: 'Phrasenkompositum',
              href: 'http://owid.de',
              color: '#0d65c2'
            },
            {
              from: 7,
              to: 8,
              source: 'Kompositamuster-Explorer',
              article: 'Kopfkissen',
              type: 'Kompositum',
              href: 'http://owid.de',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["Deutsche", "Fans", "sind", "laut", "und", "viel", "am", "Feiern.", "Aber", "nicht", "immer", "textsicher.", "Nach", "dem", "Viertelfinalsieg", "gegen", "Argentinien", "versuchte", "ein", "weiblicher", "Teenager", "in", "der", "Straßenbahn", "die", "Nationalhymne", "anstimmen.", "Nach", "„Einigkeit", "und", "Recht”", "musste", "sie", "sich", "erkundigen:", "„Wie", "geht", "der", "Text", "nochmal?”"],
          annotations: [
            {
              from: 6,
              to: 8,
              source: 'Kleines Wörterbuch der Verlaufsformen im Deutschen',
              article: '(am) feiern',
              type: 'Phrasenkompositum',
              href: 'https://www.owid.de/artikel/402891',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["Gott", "weiß,", "wohin", "er", "verschwunden", "ist.", "Ich", "begann", "über", "seine", "Worte", "nachzudenken:", "der", "Engel", "lebt", "in", "der", "Seele", "des", "Menschen", "und", "ist", "versiegelt,", "aber", "die", "Liebe", "wird", "ihn", "befreien,", "und", "plötzlich", "kommt", "mir", "in", "den", "Sinn:", "»Wenn", "er", "selbst", "der", "Engel", "war,", "und", "Gott", "ihm", "befohlen", "hat,", "mir", "in", "dieser", "Gestalt", "zu", "erscheinen,", "–", "so", "werde", "ich", "nun", "wie", "Lewontij", "sterben!«"],
          annotations: [
            {
              from: 6,
              to: 8,
              source: 'Kleines Wörterbuch der Redeeinleiter',
              article: 'in den Sinn kommen',
              type: 'Redeeinleiter',
              href: 'https://owid.de',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["Erster", "Ansprechpartner", "sollte", "seiner", "Ansicht", "nach", "die", "Hausbank", "sein.", "\"Sie", "kann", "bei", "der", "Suche", "nach", "Finanzierungsmöglichkeiten", "für", "Liquiditätsprobleme", "behilflich", "sein.\"", "Doch", "auf", "keinen", "Fall", "sollten", "Betroffene", "in", "blinden", "Aktionismus", "verfallen,", "warnt", "er:", "\"So", "ein", "Gespräch", "muß", "inhaltlich", "gut", "vorbereitet", "sein,", "will", "man", "verhindern,", "daß", "auf", "Seiten", "der", "Bank", "Zweifel", "aufkommen.\""],
          annotations: [
            {
              from: 27,
              to: 29,
              source: 'Feste Wortverbindungen in OWID',
              article: 'blinder Aktionismus',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309050',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["Neben", "den", "Einzelberatungen", "stellt", "das", "Schreiblabor", "Schreibgruppen", "und", "Workshops", "mit", "vielen", "Übungen", "zusammen,", "damit", "Studenten", "nicht", "länger", "nur", "im", "eigenen", "Saft", "schmoren", "und", "gemeinsam", "über", "Texte", "diskutieren."],
          annotations: [
            {
              from: 6,
              to: 8,
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["BMW-Einkaufsvorstand", "Markus", "Duesmann", "hat", "überraschend", "gekündigt.", "Vorstandschef", "Harald", "Krüger", "sagte", "am", "Montagabend", "vor", "leitenden", "Mitarbeitern", "in", "München,", "Duesmann", "verlasse", "das", "Unternehmen", "«aus", "persönlichen", "Gründen»."],
          annotations: [
            {
              from: 6,
              to: 7,
              source: 'Komposita-Explorer',
              article: 'Vorstandschef',
              type: 'Kompositum',
              href: 'https://www.owid.de/',
              color: '#0d65c2'
            },
            {
              from: 9,
              to: 10,
              source: 'Kleines Wörterbuch der Redeeinleiter',
              article: 'sagen',
              type: 'Redeeinleiter',
              href: 'https://www.owid.de/',
              color: '#0d65c2'
            },
            {
              from: 9,
              to: 13,
              source: 'MAP',
              article: 'sagen vor',
              type: 'Sprachgebrauchsmuster',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            },
            {
              from: 10,
              to: 11,
              source: 'MAP',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            },
            {
              from: 6,
              to: 8,
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            },
            {
              from: 6,
              to: 8,
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            },
            {
              from: 6,
              to: 8,
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            },
            {
              from: 6,
              to: 8,
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            },
            {
              from: 6,
              to: 8,
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            },
            {
              from: 6,
              to: 8,
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Feste Wortverbindung',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            }

          ]
        },
        {
          tokens: ["Wo", "die", "Wirtschaft", "in", "der", "Krise", "steckt,", "da", "steigt", "die", "Angst", "der", "Geschäftsleute,", "den", "Boden", "unter", "den", "Füßen", "zu", "verlieren."],
          annotations: [
            {
              from: 13,
              to: 20,
              source: 'Deutsch-Russische Idiome online',
              article: 'den Boden unter den Füßen verlieren // по)терять почву под ногами',
              type: 'Idiom',
              href: 'http://wvonline.ids-mannheim.de/idiome_russ/BODEN_den_Boden_unter_den_Fuessen_verlieren.htm',
              color: '#0d65c2'
            }
          ]
        },
        {
          tokens: ["Die", "Dachgesellschaft", "der", "Eglo-Unternehmensgruppe", "-", "die", "Obwieser", "Holding", "GmbH", "mit", "Sitz", "in", "Pill", "-vereint", "auf", "internationaler", "Ebene", "12", "eigenständige", "Gesellschaften.", "Nach", "dem", "Gründungsjahr", "1969", "folgte", "die", "erste", "Auslandsniederlassung", "im", "Hauptmarkt", "Deutschland", "im", "Jahre", "1986."],
          annotations: [
            {
              from: 1,
              to: 2,
              source: 'Deutsch-türkische Wortverbindungen Wirtschaft',
              article: 'Dachgesellschaft // şemsiye şirket (Schirmfirma)',
              type: 'Deutsch-türkische Wortverbindungen',
              href: 'http://wvonline.ids-mannheim.de/dtww/dtww_d.htm',
              color: '#0d65c2'
            }
          ]
        },
      ]
      /*
      [
        {
          tokens: ["Droht", "also", "demnächst", "eine", "unangenehme", "Aussprache", "mit", "dem", "Chef", "oder", "ein", "leidiger", "Besuch", "bei", "Verwandten", ",", "wissen", "wir", "es", "besser", ":", "Statt", "den", "Kopf", "in", "den", "Sand", "zu", "stecken", ",", "sollten", "wir", "das", "Ganze", "lieber", "schnell", "hinter", "uns", "bringen", ".", "Denn", "unsere", "&bdquo;", "Großhirnrinde", "&ldquo;", "weiß", "schon", "lange", ":", "besser", "ein", "Ende", "mit", "Schrecken", "als", "ein", "Schrecken", "ohne", "Ende", "."],
          annotations: [
            {
              from: 3,
              to: 6,
              source: 'Sprichwörterbuch',
              article: 'Eine unangenehme Aussprache haben',
              type: 'Sprichwort',
              href: 'https://www.owid.de/artikel/401610',
              color: '#0d65c2'
            },
            {
              from: 23,
              to: 29,
              source: 'Wörterbuch ABC',
              article: 'Kopf in den Sand stecken',
              type: 'Redewendung',
              href: 'https://www.owid.de/artikel/401611',
              color: '#008702'
            },
            {
              from: 35,
              to: 39,
              source: 'Sprichwörterbuch',
              article: 'Etwas schnell hinter sich brinden',
              type: 'Sprachgebrauchsmuster',
              href: 'https://www.owid.de/artikel/401612',
              color: '#0d65c2'
            },
            {
              from: 49,
              to: 59,
              source: 'XXX',
              article: 'Ein Ende mit Schrecken',
              type: 'XXX',
              href: 'https://www.owid.de/artikel/401613',
              color: '#c5049b'
            },
          ]
        },
        {
          tokens: ["Für", "Jahrelang", "haben", "welche", "von", "die", "ältere", "Leute", "versucht", ",", "ein", "Museum", "und", "Archives", "zu", "bauen", "hier", ",", "aber", "die", "konnten", "nie", "das", "Material", "zusammenfind'n", ".", "Dann", "kam", "ein", "Immigrant", ",", "Jonas", "Vanagers", ",", "der", "kam", "hier", ",", "und", "der", "war", "sehr", "interesstessiert", "in", "der", "Sache", ",", "und", "er", "is'", "von", "Haus", "zu", "Haus", "gegangen", ",", "und", "hat", "alles", "Sachen", "zusammengesucht", ",", "und", "the", "Historie", "von", "Lobethal", "ganz", "auf", "den", "Grund", "gegangen", "."],
          annotations: [
            {
              from: 3,
              to: 6,
              source: 'Sprichwörterbuch',
              article: 'Eine unangenehme Aussprache haben',
              type: 'Sprichwort',
              href: 'https://www.owid.de/artikel/401610',
              color: '#0d65c2'
            },
            {
              from: 23,
              to: 29,
              source: 'Wörterbuch ABC',
              article: 'Kopf in den Sand stecken',
              type: 'Redewendung',
              href: 'https://www.owid.de/artikel/401611',
              color: '#008702'
            },
            {
              from: 35,
              to: 39,
              source: 'Sprichwörterbuch',
              article: 'Etwas schnell hinter sich brinden',
              type: 'Sprachgebrauchsmuster',
              href: 'https://www.owid.de/artikel/401612',
              color: '#0d65c2'
            },
            {
              from: 49,
              to: 59,
              source: 'XXX',
              article: 'Ein Ende mit Schrecken',
              type: 'XXX',
              href: 'https://www.owid.de/artikel/401613',
              color: '#c5049b'
            },
          ]
        },
        {
          tokens: ["Deutsche", "Fans", "sind", "laut", "und", "viel", "am", "Feiern", ".", "Aber", "nicht", "immer", "textsicher", ".", "Nach", "dem", "Viertelfinalsieg", "gegen", "Argentinien", "versuchte", "ein", "weiblicher", "Teenager", "in", "der", "Straßenbahn", "die", "Nationalhymne", "anstimmen", ".", "Nach", "„", "Einigkeit", "und", "Recht", "”", "musste", "sie", "sich", "erkundigen", ":", "„", "Wie", "geht", "der", "Text", "nochmal", "?", "”"],
          annotations: [
            {
              from: 3,
              to: 6,
              source: 'Sprichwörterbuch',
              article: 'Eine unangenehme Aussprache haben',
              type: 'Sprichwort',
              href: 'https://www.owid.de/artikel/401610',
              color: '#0d65c2'
            },
            {
              from: 23,
              to: 29,
              source: 'Wörterbuch ABC',
              article: 'Kopf in den Sand stecken',
              type: 'Redewendung',
              href: 'https://www.owid.de/artikel/401611',
              color: '#008702'
            },
            {
              from: 35,
              to: 39,
              source: 'Sprichwörterbuch',
              article: 'Etwas schnell hinter sich brinden',
              type: 'Sprachgebrauchsmuster',
              href: 'https://www.owid.de/artikel/401612',
              color: '#0d65c2'
            },
            {
              from: 49,
              to: 59,
              source: 'XXX',
              article: 'Ein Ende mit Schrecken',
              type: 'XXX',
              href: 'https://www.owid.de/artikel/401613',
              color: '#c5049b'
            },
          ]
        }
      ] */
      ,
      isPaused: true,
      timer: null,
      tab: 0,
    }
  },
  methods: {
    startCarousel() {
      this.$data.isPaused = false;
    },
    stopCarousel() {
      this.$data.isPaused = true;
    },
    carouselLoop() {
      var data = this.$data;

      data.timer = setTimeout(() => {
        if (data.isPaused)
          return;
        data.tab = (data.tab + 1) % data.items.length;
      }, data.items[data.tab].annotations.length * 5000);
    },
    next() {
      this.$data.tab = (this.$data.tab + 1) % this.$data.items.length;
    },
  },
  mounted() {
    this.$refs.carousel.$el.addEventListener('mouseenter', this.stopCarousel);
    this.$refs.carousel.$el.addEventListener('mouseleave', this.startCarousel);
    this.startCarousel();
  },
}
</script>
  
<style scoped>
.v-window {
  max-height: 430px;
}
</style>