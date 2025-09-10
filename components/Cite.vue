<template>
  <v-row class="citeRow">
    <div class="citeHead">Zitationshilfe</div>
    <div class="citeText">
      <span class="citeClip">
        {{ data }}
      </span>
      <v-tooltip
        location="top"
        text="In die Zwischenablage kopieren"
        >
      <template v-slot:activator="{ props }">
        <v-btn
        v-bind="props"
        class="citeButton"
        variant="outlined"
        icon="mdi-content-copy"
        density="comfortable"
        style="margin: 0px 0px 0px 10px; font-size: 0.75rem;"        
        @click="copyToClipboard"
      />
      </template>
      </v-tooltip>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "Cite",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.data);
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