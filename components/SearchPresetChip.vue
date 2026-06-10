<template>
  <div @click="$emit('detail', this.resource.search_preset[this.presetId])" style="cursor: pointer">
    <div class="chip-card-title">{{ this.presetNames[this.presetId] }}</div>
    <div :class="this.color">
      {{ this.prestDict[this.presetId][this.resource.search_preset[this.presetId]] }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resource: { type: Object, default: () => ({}) },
    presetId: { type: Number, default: 0 },
    selectedValue: { type: Number, default: 0 }
  },
  emits: ['detail'],
  data() {
    return {
      presetNames: {
        0: "Mehrwortsuche",
        1: "Suchebene",
        2: "Unscharfe Suche"
      },
      prestDict: {
        0: { 0: 'Exakte Wortfolge', 1: 'Exakte Zeichenfolge', 2: 'Beliebig' },
        1: { 0: 'Exakte Wortform', 1: 'Vereinfachte Form', 2: 'Lemma' },
        2: { 0: 'Deaktiviert', 1: 'Dynamisch', 2: 'Experimentell' },
      }
    };
  },
  computed: {
    color() {
      var diff = Math.abs(this.selectedValue - this.resource.search_preset[this.presetId]);
      if (diff === 0) {
        return 'chip-card-content-green';
      } else if (diff === 1) {
        return 'chip-card-content-yellow';
      } else {
        return 'chip-card-content-red';
      }
    }
  }
}
</script>

<style scoped>
.chip-card {
  position: relative;
  margin-top: 16px;
}

.chip-card-content {
  border: 1px solid #bdbdbd;
  border-radius: 20px;
  padding: 3px;
  background: white;
  color: #424242;
  font-size: 0.75rem;
  text-align: center;
}

.chip-card-content-green {
  border: 1px solid #009922;
  border-radius: 20px;
  padding: 3px;
  background: white;
  color: #424242;
  font-size: 0.75rem;
  text-align: center;
}

.chip-card-content-yellow {
  border: 1px solid #ee9900;
  border-radius: 20px;
  padding: 3px;
  background: white;
  color: #424242;
  font-size: 0.75rem;
  text-align: center;
}

.chip-card-content-red {
  border: 1px solid #cc0000;
  border-radius: 20px;
  padding: 3px;
  background: white;
  color: #424242;
  font-size: 0.75rem;
  text-align: center;
}

.chip-card-title {
  position: relative;
  top: 7px;
  left: 0px;
  width: 75%;

  background: white;

  font-size: 12px;
  font-weight: 500;
  color: #616161;

  line-height: 1.2;
  text-align: center;
}
</style>