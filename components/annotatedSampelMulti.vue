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
      <v-carousel ref="carousel" v-model="tab" continuous :cycle="cycle" style="max-height: 275px;">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-sheet height="100%" tile>
            <AnnotatedSampel :html="item" style="padding:5px 75px 5px 75px" />
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
        'Droht also demnächst eine unangenehme <a href="http://owid.de" article="Eintrag XYZ" rtype="Sprachgebrauchsmuster" source="Wörterbuch ABC">Aussprache mit</a> dem Chef oder ein leidiger <a href="" article="" rtype="" source="XXX">Besuch bei</a> Verwandten, wissen wir es besser: Statt den <a href="https://www.owid.de/artikel/401610" article="Den Kopf in den Sand stecken" rtype="Sprichwort" source="Sprichwörterbuch">Kopf in den Sand</a> zu stecken, sollten wir das Ganze lieber schnell hinter uns bringen. Denn unsere Großhirnrinde weiß schon lange: besser <a href="https://www.owid.de/artikel/401610" article="Kopf in den Sand stecken" rtype="Sprichwort" source="Sprichwörterbuch">ein Ende mit Schrecken als ein Schrecken ohne Ende</a>',
        "<a href=\"http://owid.de\" article=\"Eintrag XYZ\" rtype=\"Sprachgebrauchsmuster\" source=\"Wörterbuch ABC\">Für Jahrelang</a> haben welche von die ältere Leute versucht, ein Museum und Archives zu bauen hier, aber die konnten nie das Material zusammenfind'n . Excuse me . Dann kam ein Immigrant, Mr. Jonas Vanagers , der kam hier, und der war sehr interesstessiert in der Sache, und er is ' <a href=\"http://owid.de\" article=\"Von Haus zu Haus\" rtype=\"Sprachgebrauchsmuster\" source=\"Wörterbuch ABC\">von Haus zu Haus</a> gegangen, und hat alles Sachen zusammengesucht, und the Historie von Lobethal <a href=\"http://owid.de\" article=\"Eintrag XYZ\" rtype=\"Sprachgebrauchsmuster\" source=\"XXX\">ganz auf den Grund gegangen</a>.",
        'Deutsche Fans sind laut und viel <a href=\"http://owid.de\" article=\"Eintrag XYZ\" rtype=\"Sprachgebrauchsmuster\" source=\"Wörterbuch ABC\">am Feiern</a>. Aber nicht immer textsicher. <a href=\"http://owid.de\" article=\"Eintrag XYZ\" rtype=\"Sprachgebrauchsmuster\" source=\"XXX\">Nach dem Viertelfinalsieg</a> gegen Argentinien versuchte ein weiblicher Teenager in der Straßenbahn die Nationalhymne anstimmen. Nach <a href=\"http://owid.de\" article=\"Eintrag XYZ\" rtype=\"Sprachgebrauchsmuster\" source=\"Sprichwörterbuch\">„Einigkeit und Recht”</a> musste sie sich erkundigen : „Wie geht der Text nochmal?”'
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