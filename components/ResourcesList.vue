<template>
    <div class="containerItem" v-for="item in resources" :key="item.key">
        <div class="left"><v-icon>mdi-open-in-new</v-icon></div>
        <div class="middle"><b v-html="item.nameShort"/><br />{{ item.nameLong }}</div>
    </div>
</template>

<script>
import { useRessourcesStore } from '~/stores/ressources';

export default {
    name: "ResourcesList",
    props: {
        filter: {
            type: Array,
        },
    },
    data() {
        return {
            resourcesStore: null,
            resources: [],
        }
    },
    mounted() {
        console.log(this.filter);
        this.resourcesStore = useRessourcesStore();
        console.log(this.resourcesStore);
        this.resources = this.resourcesStore.getResources(this.filter);
        console.log(this.resources);
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
  border-top: 1px solid #ddd;
}
.containerItem:hover {
  background-color: #ddd;
}
.left { grid-area: left; }
.middle { grid-area: middle; text-align: left; margin-left: 10px; }

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