<template>
  <v-row>    
    <v-col cols="8">
      <v-card>
        <v-card-title>Interaktives-Beispiel</v-card-title>
        <v-card-subtitle>Bewegen Sie die Maus über die hervorgehobenen Stellen, um passende Ressourcen im Syntagmatikon zu finden...</v-card-subtitle>
        <v-card-text>
          <div ref="content" v-html="html" class="text"></div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3">
      <div ref="info" style="display:none">
        <v-card>
        <v-card-title>{{ tooltip.source }}</v-card-title>
        <v-card-subtitle>{{ tooltip.subtopic }}</v-card-subtitle>
        <v-card-text>
          <v-icon>mdi-arrow-right</v-icon> {{ tooltip.topic }}
        </v-card-text>
      </v-card>
      </div>      
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SlideBox",
  data() {
    return {
      html: 'Droht also demnächst eine unangenehme <a href="http://owid.de" topic="Eintrag XYZ" subtopic="Sprachgebrauchsmuster" source="Wörterbuch ABC">Aussprache mit</a> dem Chef oder ein leidiger <a href="" topic="" subtopic="" source="XXX">Besuch bei</a> Verwandten, wissen wir es besser: Statt den <a href="https://www.owid.de/artikel/401610" topic="Kopf in den Sand stecken" subtopic="Sprichwort" source="Sprichwörterbuch">Kopf in den Sand</a> zu stecken, sollten wir das Ganze lieber schnell hinter uns bringen. Denn unsere Großhirnrinde weiß schon lange: besser <a href="https://www.owid.de/artikel/401610" topic="Kopf in den Sand stecken" subtopic="Sprichwort" source="Sprichwörterbuch">ein Ende mit Schrecken als ein Schrecken ohne Ende</a>',
      tooltip: {
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
      //link.addEventListener('mouseleave', this.mouseleave);
    });
  },
  methods: {
    mouseenter(e) {
      this.$data.tooltip.topic = e.target.getAttribute('topic');
      this.$data.tooltip.subtopic = e.target.getAttribute('subtopic');
      this.$data.tooltip.source = e.target.getAttribute('source');
      this.$data.tooltip.href = e.target.getAttribute('href');

      this.$refs.info.style.display = 'block';
    },
  }
}
</script>

<style>
.text{
  font-size: 1.2rem;
  line-height: 1.5;
}

a[source="Sprichwörterbuch"] {
  color: #0d65c2;
  border-radius: 3px;
  border: 2px solid #0d65c2;
  padding: 0 3px;
}

a[source="XXX"] {
  color: #008702;
  border-radius: 3px;
  border: 2px solid #008702;
  padding: 0 3px;
}

a[source="Wörterbuch ABC"] {
  color: #c5049b;
  border-radius: 3px;
  border: 2px solid #c5049b;
  padding: 0 3px;
}
</style>