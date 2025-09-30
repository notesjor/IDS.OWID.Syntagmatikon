<template>
  <span class="nolink" style="letter-spacing: normal;">
    <R v-for="item in resources" :rkey="item.key">
    </R>
  </span>

</template>

<script>
import { useResourcesStore } from '~/stores/resources';
import R from './R_save.vue';

export default {
  name: "ResourcesList",
  props: {
    filter: { // wenn filter nicht gesetzt, werden alle Ressourcen angezeigt.
      type: Array,
    },
    showDesc: { // wenn showDesc gesetzt, wird die Beschreibung anstelle des nameLong (Standard) angezeigt.
      type: Boolean,
      default: false,
    },
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
