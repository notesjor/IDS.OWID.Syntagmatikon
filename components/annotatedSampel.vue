<template>
  <v-row>
    <v-col cols="3">
      <v-card>
        <v-card-title>{{ tooltip.source }}</v-card-title>
        <v-card-subtitle>{{ tooltip.subtopic }}</v-card-subtitle>
        <v-card-text>
          <v-icon>mdi-arrow-right</v-icon> {{ tooltip.topic }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="8">
      <v-card>
        <v-card-text>
          <div ref="content" v-html="html"></div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SlideBox",
  data() {
    return {
      html: 'Droht also demnächst eine unangenehme <a href="http://owid.de" topic="topic" subtopic="sub" source="XXX">Aussprache mit<a> dem Chef oder ein leidiger <a href="" topic="" subtopic="" source="XXX">Besuch bei</a> Verwandten, wissen wir es besser: Statt den <a href="https://www.owid.de/artikel/401610" topic="Kopf in den Sand stecken" subtopic="Sprichwort" source="Sprichwörterbuch">Kopf in den Sand</a> zu stecken, sollten wir das Ganze lieber schnell hinter uns bringen. Denn unsere Großhirnrinde weiß schon lange: besser <a href="https://www.owid.de/artikel/401610" topic="Kopf in den Sand stecken" subtopic="Sprichwort" source="Sprichwörterbuch">ein Ende mit Schrecken als ein Schrecken ohne Ende</a>',
      x: 0,
      y: 0,
      tooltip: {
        x: 0,
        y: 0,
        topic: 'Den Tag nicht vor dem Abend loben',
        subtopic: 'Sprichwort',
        source: 'Sprichwörterbuch',
        href: 'https://www.owid.de/artikel/401610'
      }
    }
  },
  mounted() {
    this.$refs.content.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', this.mouseenter);
    });
  },
  methods: {
    mouseenter(e) {
      this.$data.x = e.clientX;
      this.$data.y = e.clientY;

      this.$data.tooltip.topic = e.target.getAttribute('topic');
      this.$data.tooltip.subtopic = e.target.getAttribute('subtopic');
      this.$data.tooltip.source = e.target.getAttribute('source');
    }
  }
}
</script>

<style>
a[source="Sprichwörterbuch"] {
  color: red;
}

a[source="XXX"] {
  color: green;
}

.tooltip {
  top: v-bind(x);
  left: v-bind(y);
  z-index: 999;
  position: absolute;
  display: block;
}
</style>