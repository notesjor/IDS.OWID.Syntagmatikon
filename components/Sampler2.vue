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
        <div @mouseenter="carouselStop" @mouseleave="carouselStart">
          <v-carousel hide-delimiter-background hide-delimiters continuous ref="carousel" v-model="tab" :cycle="cycle" transition="scale-transition">
            <v-carousel-item v-for="(item, i) in generatePages()" :key="i" eager>
              <v-sheet height="100%">
                <div style="padding:5px 75px 5px 75px;">
                  <v-row>
                    <div v-html="item.html" style="margin:10px; font-size: 1.2rem; line-height: 1.5; font-weight: 300;"></div>
                  </v-row>
                  <v-row>&nbsp;</v-row>
                  <div style="position: absolute; bottom: 150px;">
                    <v-row>
                      <div style="font-weight: 200;" v-html="item.source"></div>
                    </v-row>
                    <v-row>
                      <div :style="`color:${item.color}`">{{ item.article }}</div>
                    </v-row>
                    <v-row style="font-weight: 200; font-style: italic;">
                      <div>{{ item.type }}</div>
                    </v-row>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
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
              source: 'PREPCON <sup>kontrastiv</sup>',
              article: 'für Stunden',
              type: 'Sprachgebrauchsmuster',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul2/artikel/fuer_Stunden/index.html',
              color: '#0d65c2'
            },
            {
              from: 48,
              to: 50,
              source: 'PREPCON <sup>kontrastiv</sup>',
              article: 'nach Belieben',
              type: 'Sprachgebrauchsmuster',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html',
              color: '#008702'
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
              color: '#008702'
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
          ]
        }
      ],
      cycle: true,
      tab: 0,
    }
  },
  methods: {
    generatePages() {
      var baseIndex = 0;
      var res = [];
      for (var x in this.$data.items) {
        var item = this.$data.items[x];
        var max = item.annotations.length;

        for (var i = 0; i < max; i++) {

          var tokens = [...item.tokens];
          var data = {};

          for (var j = 0; j < max; j++) {
            var f = item.annotations[j].from;
            var t = item.annotations[j].to - 1;

            if (i == j) {
              tokens[f] = `<anno_${j} class="anno" style="${this.makeStyle(item.annotations[j].color)}">${tokens[f]}`;
              tokens[t] = `${tokens[t]}</anno_${j}>`;

              data.source = item.annotations[j].source;
              data.article = item.annotations[j].article;
              data.type = item.annotations[j].type;
              data.href = item.annotations[j].href;
              data.color = item.annotations[j].color;
            } else {
              tokens[f] = `<anno_${j} class="anno" id="${baseIndex + j}" style="${this.makeStyle("#666")}">${tokens[f]}`;
              tokens[t] = `${tokens[t]}</anno_${j}>`;
            }
          }

          data.html = tokens.join(' ');
          res.push(data);
        }

        baseIndex += max;
      }
      return res;
    },
    makeStyle(color) {
      //return `background-color:${color}`;
      return `color:${color}; background-color:${color}0A; border-radius: 3px; border: 2px dotted ${color}; padding: 0 3px`;      
    },
    carouselStop() {
      this.cycle = false;
    },
    carouselStart() {
      this.cycle = true;
    },
  },
  mounted() {
    var self = this;
    this.$nextTick(function () {
      let buttons = document.getElementsByClassName('anno');
      // interrate over buttons
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('click', (event) => {
          self.tab = parseInt(button.getAttribute('id'));
        });
      }
    })
  },
}
</script>
  
<style scoped>
.v-window {
  max-height: 430px;
}
</style>