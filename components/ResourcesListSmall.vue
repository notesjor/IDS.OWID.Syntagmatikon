<template>
  <div style="margin:10px 0px 10px 0px">
    <v-chip v-for="item in resources" :key="item.key" density="compact" color="#666" style="margin: 3px;">
      <span v-html="item.nameShort"></span>
    </v-chip>
  </div>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';

export default {
  name: "ResourcesList",
  props: {
    filter: { // wenn filter nicht gesetzt, werden alle Ressourcen angezeigt.
      type: Array,
    }
  },
  data() {
    return {
      resourcesStore: null,
      resources: [],
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();
    this.resources = this.resourcesStore.getResources(this.filter);
  },
}
</script>