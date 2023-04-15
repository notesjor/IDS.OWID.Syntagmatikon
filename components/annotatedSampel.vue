<template>
<!--
  <v-row>
    <v-col>
      <h1 class="text-xl">Interaktives-Beispiel</h1>
      <h2 class="text-l">Bewegen Sie die Maus über die hervorgehobenen Stellen, um passende Ressourcen im Syntagmatikon zu
        finden...</h2>
    </v-col>
  </v-row>
-->
  <v-row>
    <v-col cols="8">
      <v-card>
        <v-card-text>
          <div ref="content" v-html="$props.html" class="text"></div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <div ref="info" style="display:none;">
        <v-card style="width:100%">
          <v-card-title :style="styleHead">{{ tooltip.source }}</v-card-title>
          <v-card-subtitle>{{ tooltip.rtype }}</v-card-subtitle>
          <v-card-text>
            <v-icon>mdi-arrow-right</v-icon> {{ tooltip.article }}
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SlideBox",
  props: {
    html: {
      type: String,
      required: true,
      default: 'Droht also demnächst eine unangenehme <a href="http://owid.de" article="Eintrag XYZ" rtype="Sprachgebrauchsmuster" source="Wörterbuch ABC">Aussprache mit</a> dem Chef oder ein leidiger <a href="" article="" rtype="" source="XXX">Besuch bei</a> Verwandten, wissen wir es besser: Statt den <a href="https://www.owid.de/artikel/401610" article="Den Kopf in den Sand stecken" rtype="Sprichwort" source="Sprichwörterbuch">Kopf in den Sand</a> zu stecken, sollten wir das Ganze lieber schnell hinter uns bringen. Denn unsere Großhirnrinde weiß schon lange: besser <a href="https://www.owid.de/artikel/401610" article="Kopf in den Sand stecken" rtype="Sprichwort" source="Sprichwörterbuch">ein Ende mit Schrecken als ein Schrecken ohne Ende</a>',
    }
  },

  data() {
    return {
      tooltip: {
        article: 'Den Tag nicht vor dem Abend loben',
        rtype: 'Sprichwort',
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
      this.$data.tooltip.article = e.target.getAttribute('article');
      this.$data.tooltip.rtype = e.target.getAttribute('rtype');
      this.$data.tooltip.source = e.target.getAttribute('source');
      this.$data.tooltip.href = e.target.getAttribute('href');
      this.$data.tooltip.color = window.getComputedStyle(e.target).color;

      this.$refs.info.style.display = 'block';
    },
  }, 
  computed: {
    styleHead() {
      return {
        'color': this.$data.tooltip.color
      }
    }
  }
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
</style>