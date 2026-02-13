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
import { useTitle } from '@vueuse/core';
import { useLayoutStore } from '~/stores/layout';

export default {
  name: "Cite",
  props: {
    ctitle: {
      type: String,
      default: null
    },
    cauthor: {
      type: String,
      default: undefined
    },
    cdate: {
      type: String,
      default: "2026"
    }
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.data);
    }
  },
  data() {
    return {
      uTitle: null,
    }
  },
  mounted() {
    this.uTitle = useTitle();
  },
  computed: {
    text: function () {
      return `"${this.title}". In: ${this.cmpAuthor}. ${this.cmpDate}. Syntagmatikon. Mannheim: Leibniz-Institut für Deutsche Sprache. https://syntagmatikon.ids-mannheim.de${this.url}, abgerufen am ${new Date().toLocaleDateString(
        "de-DE",
        { year: "numeric", month: "2-digit", day: "2-digit" }
      )}`;
    }, url: function () {
      return window?.location?.pathname;
    }, title: function () {
      return this.ctitle ? this.ctitle : this.uTitle?.value;
    }, cmpAuthor: function () {
      return this.cauthor ? this.cauthor : "Kathrin Steyer und Annelen Brunner";
    }, cmpDate: function () {
      return this.cdate ? this.cdate : "2026";
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