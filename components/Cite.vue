<template>
  <v-row class="citeRow">
    <div class="citeHead">Zitationshilfe</div>
    <div class="citeText">
      <span class="citeClip" v-html="text" />
      <v-tooltip location="top" text="In die Zwischenablage kopieren">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="citeButton" variant="outlined" icon="mdi-content-copy" density="comfortable"
            style="margin: 0px 0px 0px 10px; font-size: 0.75rem;" @click="copyToClipboard" />
        </template>
      </v-tooltip>
    </div>
  </v-row>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: "Cite",
  props: {
    ctitle: {
      type: String,
      default: null
    },
    cauthor: {
      type: String,
      default: "Kathrin Steyer und Annelen Brunner"
    },
    cdate: {
      type: String,
      default: "2026"
    }
  },
  data() {
    return {
      url: "",
    }
  },
  mounted() {
    this.url = window.location.pathname;
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.data);
    }
  },
  computed: {
    text: function () {
      return `"${this.ctitle}". In: ${this.cauthor}. ${this.cdate}. Syntagmatikon. Mannheim: Leibniz-Institut für Deutsche Sprache. https://syntagmatikon.ids-mannheim.de${this.url}, abgerufen am ${new Date().toLocaleDateString(
        "de-DE",
        { year: "numeric", month: "2-digit", day: "2-digit" }
      )}`;
    }
  }
}
</script>

<style scoped>
.citeRow {
  margin: 10px;
  font-size: 0.8rem;
  line-height: 1.8rem;
}

.citeHead {
  background-color: #333;
  color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 1px 5px;
}

.citeText {
  background-color: #f0f0f0;
  color: #000;
  padding: 8px 12px;
}

.citeClip {
  font-style: italic;
}
</style>