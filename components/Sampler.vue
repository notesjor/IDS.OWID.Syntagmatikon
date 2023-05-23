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
      <v-carousel hide-delimiter-background hide-delimiters continuous ref="carousel" v-model="tab" :cycle="false">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-sheet height="100%">
            <div>
              <div style="padding:5px 75px 5px 75px">
                <sampler-item :data="item"></sampler-item>
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
        {
          tokens: ["Droht", "also", "demnächst", "eine", "unangenehme", "Aussprache", "mit", "dem", "Chef", "oder", "ein", "leidiger", "Besuch", "bei", "Verwandten", ",", "wissen", "wir", "es", "besser", ":", "Statt", "den", "Kopf", "in", "den", "Sand", "zu", "stecken", ",", "sollten", "wir", "das", "Ganze", "lieber", "schnell", "hinter", "uns", "bringen", ".", "Denn", "unsere", "&bdquo;","Großhirnrinde", "&ldquo;", "weiß", "schon", "lange", ":", "besser", "ein", "Ende", "mit", "Schrecken", "als", "ein", "Schrecken", "ohne", "Ende", "."],
          annotations: [
            {
              from: 5,
              to: 7,
              source: 'Sprichwörterbuch',
              article: 'Eine unangenehme Aussprache haben',
              type: 'Sprichwort',
              href: 'https://www.owid.de/artikel/401610',
            },
            {
              from: 23,
              to: 29,
              source: 'Wörterbuch ABC',
              article: 'Kopf in den Sand stecken',
              type: 'Redewendung',
              href: 'https://www.owid.de/artikel/401611',
            },
            {
              from: 35,
              to: 39,
              source: 'Sprichwörterbuch',
              article: 'Etwas schnell hinter sich brinden',
              type: 'Sprachgebrauchsmuster',
              href: 'https://www.owid.de/artikel/401612',
            },
            {
              from: 50,
              to: 59,
              source: 'XXX',
              article: 'Ein Ende mit Schrecken ist besser als ein Schrecken ohne Ende',
              type: 'XXX',
              href: 'https://www.owid.de/artikel/401613',
            },
          ]
        },
        {
          tokens: ["Für", "Jahrelang", "haben", "welche", "von", "die", "ältere", "Leute", "versucht", ",", "ein", "Museum", "und", "Archives", "zu", "bauen", "hier", ",", "aber", "die", "konnten", "nie", "das", "Material", "zusammenfind'n", ".", "Dann", "kam", "ein", "Immigrant", ",", "Jonas", "Vanagers", ",", "der", "kam", "hier", ",", "und", "der", "war", "sehr", "interesstessiert", "in", "der", "Sache", ",", "und", "er", "is'", "von", "Haus", "zu", "Haus", "gegangen", ",", "und", "hat", "alles", "Sachen", "zusammengesucht", ",", "und", "the", "Historie", "von", "Lobethal", "ganz", "auf", "den", "Grund", "gegangen", "."],

        },
        {
          tokens: ["Deutsche", "Fans", "sind", "laut", "und", "viel", "am", "Feiern", ".", "Aber", "nicht", "immer", "textsicher", ".", "Nach", "dem", "Viertelfinalsieg", "gegen", "Argentinien", "versuchte", "ein", "weiblicher", "Teenager", "in", "der", "Straßenbahn", "die", "Nationalhymne", "anstimmen", ".", "Nach", "„", "Einigkeit", "und", "Recht", "”", "musste", "sie", "sich", "erkundigen", ":", "„", "Wie", "geht", "der", "Text", "nochmal", "?", "”"],

        }
      ],
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
    }
  },
  mounted() {
    this.$refs.carousel.$el.addEventListener('mouseenter', this.stopCarousel);
    this.$refs.carousel.$el.addEventListener('mouseleave', this.startCarousel);
    this.startCarousel();
  },
}
</script>
  
  