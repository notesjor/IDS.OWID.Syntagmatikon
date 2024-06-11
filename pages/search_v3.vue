<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 100%; margin:auto">
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" elevation="0">
          <v-card-title>
            Facetten
          </v-card-title>
          <v-card-text>
            <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels">
              <search-box title="Zugänge" name="search_display"></search-box>
              <search-box title="Ressourcentypen (Zugang)" name="search_subtype"></search-box>
              <search-box title="Ressourcentypen (Typus)" name="search_type"></search-box>
              <search-box title="Informationstypen" name="search_functions"></search-box>
              <search-box title="Wort- und Ausdrucksarten" name="search_parts"></search-box>
              <search-box title="Musterzugang" name="search_patterns"></search-box>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="7">
        <div>
          <h3>Ressourcen:</h3>
        </div>
        <v-chip v-for="r in resources" :key="r.key" variant="outlined" style="margin: 0px 5px 5px 0px" :prepend-icon="getIcon(r.key)"><div v-html="r.nameShort"/></v-chip>
        <div>
          <h3>Stichwort:</h3>
        </div>
        <v-card elevation="0">
          <v-card-text style="margin: -20px -10px 0px -20px;">
            <div class="nolink" style="text-align: left; margin-bottom: 10px;">
              <v-btn v-for="letter in letters" :key="letter" variant="text" density="comfortable"
                style="padding: 3.5px !important; min-width: 15px;" @click="query = letter">
                {{ letter }}
              </v-btn>
            </div>
            <div>
              <v-text-field label="Stichwort hier eingeben..." v-model="query" append-inner-icon="mdi-magnify"></v-text-field>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="4">        
        
      </v-col>
      <v-col cols="8" class="nolink">
        <!--
      <div v-if="items == null">
        <v-alert text="Suchen Sie zuerst nach einem Eintrag..." type="info" variant="outlined"></v-alert>
      </div>
    -->
        <div style="margin-top:-380px;">
          <search-group2 v-for="x in items" :title="x"></search-group2>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';
import { useSearchStore } from '~/stores/search';

export default {
  theme: { dark: false },
  data() {
    return {
      tab: "t1",
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

      openPanels: [1],

      resourcesStore: null,
      searchStore: null,
      resources: [],

      resourcesSelected: [],

      query: "",

      limit: 10,
      syncLock: false
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();
    this.resources = this.resourcesStore.getResources(null);
    this.resourcesSelected = this.resources.map(x => x.key);

    this.searchStore = useSearchStore();
    this.searchStore.init(this.resources);
  },
  methods:{
    getIcon(key){
      // if key is in resourcesSelected than return mdi-check
      console.log(this.resourcesSelected.includes(key));
      return this.resourcesSelected.includes(key) ? "mdi-check" : "mdi-check-bold";      
    }
  },
  watch: {
    query: function (val) {
      this.searchStore.changeQuery(val);
    }
  },
  computed: {
    items: function () {
      if (this.searchStore == null)
        return [];
      return this.searchStore.getGroups();
    }
  }
}
</script>

<style scoped>
.v-list-subheader {
  
}
</style>