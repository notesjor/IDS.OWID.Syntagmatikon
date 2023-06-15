<template>
  <v-row>
    <v-col>
      <h1 class="text-xl">Interaktive-Beispiele</h1>
      <h2 class="text-l">Bewegen Sie die Maus über hervorgehobenen Stellen, um passende Ressourcen im Syntagmatikon zu
        finden.</h2>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-carousel hide-delimiter-background hide-delimiters continuous ref="carousel" v-model="tab" :cycle="cycle">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-sheet height="100%">
            <div>
              <div style="padding:5px 75px 5px 75px">
                <AnnotatedSampel :json="item" />
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SlideBox",
  data() {
    return {
      items: [
        [
          { "text": "Droht also demnächst eine unangenehme" },
          { 
            "article": "Eintrag XYZ",
            "rtype": "Sprachgebrauchsmuster",
            "source": "Wörterbuch ABC",
            "href": "http://owid.de",
            "text": "Aussprache mit"
          },
          { "text": "dem Chef oder ein leidiger Besuch bei Verwandten, wissen wir es besser: Statt den" },
          { 
            "article": "Den Kopf in den Sand stecken",
            "rtype": "Sprichwort",
            "source": "Sprichwörterbuch",
            "href": "https://www.owid.de/artikel/401610",
            "text": "Kopf in den Sand"
          },
          { "text": "zu stecken, sollten wir das Ganze lieber schnell hinter uns bringen. Denn unsere Großhirnrinde weiß schon lange: besser" },
          { 
            "article": "ein Ende mit Schrecken als ein Schrecken ohne Ende",
            "rtype": "Sprichwort",
            "source": "Sprichwörterbuch",
            "href": "https://www.owid.de/artikel/401610",
            "text": "ein Ende mit Schrecken als ein Schrecken ohne Ende"
          }
        ],
        [
          {
            "article": "Eintrag XYZ",
            "rtype": "Sprachgebrauchsmuster",
            "source": "Wörterbuch ABC",
            "href": "http://owid.de",
            "text": "Für Jahrelang"
          },
          {
            "text": "haben welche von die ältere Leute versucht, ein Museum und Archives zu bauen hier, aber die konnten nie das Material zusammenfind'n . Excuse me . Dann kam ein Immigrant, Mr. Jonas Vanagers , der kam hier, und der war sehr interesstessiert in der Sache, und er is '"
          },
          {
            "article": "Von Haus zu Haus",
            "rtype": "Sprachgebrauchsmuster",
            "source": "Wörterbuch ABC",
            "href": "http://owid.de",
            "text": "von Haus zu Haus"
          },
          {
            "text": "gegangen, und hat alles Sachen zusammengesucht, und the Historie von Lobethal"
          },
          {
            "article": "Eintrag XYZ",
            "rtype": "Sprachgebrauchsmuster",
            "source": "XXX",
            "href": "http://owid.de",
            "text": "ganz auf den Grund gegangen"
          },
          {
            "text": "."
          }
        ],
        [
          { "text": "Deutsche Fans sind laut und viel" },
          {
            "article": "Eintrag XYZ",
            "rtype": "Sprachgebrauchsmuster",
            "source": "Wörterbuch ABC",
            "href": "http://owid.de",
            "text": "am Feiern"
          },
          { "text": ". Aber nicht immer textsicher. " },
          {
            "article": "Eintrag XYZ",
            "rtype": "Sprachgebrauchsmuster",
            "source": "XXX",
            "href": "http://owid.de",
            "text": "Nach dem Viertelfinalsieg"
          },
          { "text": "gegen Argentinien versuchte ein weiblicher Teenager in der Straßenbahn die Nationalhymne anstimmen. Nach " },
          {
            "article": "Einigkeit und Recht",
            "rtype": "Sprachgebrauchsmuster",
            "source": "Sprichwörterbuch",
            "href": "https://www.owid.de/artikel/401610",
            "text": "„Einigkeit und Recht”"
          },
          { "text": " musste sie sich erkundigen : „Wie geht der Text nochmal?”" }
        ]
      ],
      tooltip: {
        article: 'Den Tag nicht vor dem Abend loben',
        rtype: 'Sprichwort',
        source: 'Sprichwörterbuch',
        href: 'https://www.owid.de/artikel/401610'
      },
      tab: 0,
      cycle: true
    }
  },
  methods: {
    mouseenter() {
      this.$data.cycle = false;
    },
    mouseleave() {
      this.$data.cycle = true;
    }
  },
  mounted() {
    this.$refs.carousel.$el.addEventListener('mouseenter', this.mouseenter);
    this.$refs.carousel.$el.addEventListener('mouseleave', this.mouseleave);
  },
}
</script>

<style>
.text {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 300;
}

a[source="Sprichwörterbuch"] {
  color: rgb(13, 101, 194);
  background-color: rgba(13, 101, 194, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(13, 101, 194);
  padding: 0 3px;
}

a[source="XXX"] {
  color: rgb(0, 135, 2);
  background-color: rgba(0, 135, 2, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(0, 135, 2);
  padding: 0 3px;
}

a[source="Wörterbuch ABC"] {
  color: rgb(197, 4, 155);
  background-color: rgba(197, 4, 155, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(197, 4, 155);
  padding: 0 3px;
}

div.v-window__controls>button.v-btn {
  font-size: 15px;
  width: 32px;
  height: 32px;
}

div.v-window__controls {
  max-height: 275px;
}
</style>