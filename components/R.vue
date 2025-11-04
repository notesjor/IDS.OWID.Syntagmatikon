<template>
  <span v-html="item.nameShort" class="rClass" />
</template>

<script>
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
    }
  },
  mounted() {
    var resourcesStore = useResourcesStore();
    this.item = resourcesStore.getResource(this.rkey);
  }
}
</script>

<style scoped>
.rClass {
  font-family: var(--FF-DISPLAY);
  background-color: #eee;
  margin: 3px;
  padding: 3px 6px;
  display: inline-block;
}
</style>