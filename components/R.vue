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
      layoutVars: null,
      color: '#000'
    }
  },
  mounted() {
    var resourcesStore = useResourcesStore();
    this.item = resourcesStore.getResource(this.rkey);
    this.layoutVars = useLayoutStore();
    this.layoutVars.updateParent();
  },
  computed: {
    style() {
      if (this.layoutVars == null) return {};
      var color = "#000";
      var bgcolor = "#eee";
	  
      this.color = color;

      return {
        "font-family": `var(--FF-DISPLAY)`,
        //borderLeft: `2px solid ${color}`,
        //borderRight: `2px solid ${color}`,
        backgroundColor: bgcolor,
        margin: '0px 3px',
        padding: '2px 5px 0px 5px',
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
/* .klammer::before {
  content: "";
  position: absolute;
  top: -3px;
  left: 2px;
  z-index: 1;
  transform: rotate(135deg);
  border: 3px solid transparent;
  border-top-color: v-bind(color);
} */

/* --- RECHTE SEITE --- */

.klammer span {
  position: relative;
  display: inline-block;
}

/* rechtes unteres Dreieck */
/* .klammer span::after {
  content: "";
  position: absolute;
  bottom: -3px;
  right: -3px;
  z-index: 1;
  transform: rotate(135deg);
  border: 3px solid transparent;
  border-bottom-color: v-bind(color);
} */
</style>