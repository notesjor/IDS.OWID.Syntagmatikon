<template>
  <div style="display: inline-block;" class="klammer">
    <span v-html="item.nameShort" :style="style" />
  </div>
</template>

<script>
import { useLayoutStore } from '~/stores/layout';
import { useResourcesStore } from '~/stores/resources';

export default {
  name: "R",
  props: {
    rkey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      item: { nameShort: '' },
      layoutVars: null
    }
  },
  mounted() {
    var resourcesStore = useResourcesStore();
    this.item = resourcesStore.getResource(this.rkey);
    this.layoutVars = useLayoutStore();
  },
  computed: {
    style() {
      if (this.layoutVars == null) return {};
      var color = this.layoutVars.getParentColor;
      var bgcolor = `${color}4D`;

      if (color == "#2962ff") {
        color = "#000";
        bgcolor = "#eee";
      }

      return {
        "font-family": `var(--FF-DISPLAY)`,
        borderLeft: `2px solid ${color}`,
        borderRight: `2px solid ${color}`,
        backgroundColor: bgcolor,
        margin: '0 3px',
        padding: '2px 2px 0px 2px',
        "--myColor": color
      };
    },
    hasContent() {
      return this.$slots.default !== undefined;
    }
  }
}
</script>

<style scoped>
.klammer {
  margin:1px 0px 1px 0px;
  position: relative;
  display: inline-block;
}

/* --- LINKE SEITE --- */

/* linkes oberes Dreieck */
.klammer::before {
  content: "";
  position: absolute;
  top: -3px;
  left: 2px;
  z-index: 1;
  transform: rotate(135deg);
  border: 3px solid transparent;
  border-top-color: var(--myColor);
}

/* linkes unteres Dreieck */
/*.klammer::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 5px;
  transform: rotate(90deg);
  border: 3px solid transparent;
  border-bottom-color: black;
}*/

/* --- RECHTE SEITE --- */

.klammer span {
  position: relative;
  display: inline-block;
}

/* rechtes oberes Dreieck */
/*.klammer span::before {
  content: "";
  position: absolute;
  top: 0;
  right: -42px;
  transform: translateY(-100%);
  width: 0;
  height: 0;
  border: 3px solid transparent;
  border-top-color: red;
}*/

/* rechtes unteres Dreieck */
.klammer span::after {
  content: "";
  position: absolute;
  bottom: -3px;
  right: -3px;
  z-index: 1;
  transform: rotate(135deg);
  border: 3px solid transparent;
  border-bottom-color: black;
}
</style>