<template>
  <span class="nolink" style="letter-spacing: normal;">
    <v-chip variant="outlined" density="compact">
      <span v-html="item.nameShort" style="font-family: var(--FF-DISPLAY);" /><br />
    </v-chip>
  </span>
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
  },
}
</script>

<style scoped>
.containerItem {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-template-areas:
    "left middle";
  margin: 10px 5px 10px 5px;
  padding: 5px;
  border-bottom: 1px solid #ddd;
}

.containerItem:hover {
  background-color: #ddd;
}

.v-chip {
  margin: 0px 2px 2px 0px;
}

.left {
  grid-area: left;
}

.middle {
  grid-area: middle;
  text-align: left;
  margin-left: 10px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: none;
  margin: 10px 20px 10px 20px;
  border-top: 1px solid #d6d6d6;
  padding-top: 10px;
}

li:hover {
  background-color: #d6d6d6;
}
</style>