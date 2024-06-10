<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 86ch; margin:auto">
    <v-row>
      <v-col>
        <div>
          <h1>
            Suche nach Einträgen
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div style="margin-bottom: 20px;">
          <p>Diese Suche erlaubt eine Volltextsuche über alle Einträge im Syntagmatikon.
            Wie im Ressourcenkompass beschrieben, haben die Ressourcen verschiedene Facetten,
            die hier genutzt werden können, um die Stichworte zu filtern.</p>
        </div>
      </v-col>
    </v-row>
    <v-row style="margin-top:-30px">
      <v-col>
        <div>
          <h3>Ressourcen:</h3>
        </div>
        <v-chip v-for="r in resources" :key="r.key" variant="outlined" style="margin: 0px 5px 5px 0px" :prepend-icon="getIcon(r.key)"><div v-html="r.nameShort"/></v-chip>
      </v-col>
    </v-row>
    <v-row style="margin-top:-10px">
      <v-col>
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
  <div style="max-width: 100%; margin:auto">
    <v-row>
      <v-col cols="4">        
        <v-card class="mx-auto" elevation="0">
          <v-card-title>
            Facetten
          </v-card-title>
          <v-card-text>
            <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
              Facetten schränken die Stichwortsuche auf bestimmte Kategorien und Eigenschaften ein.
              Zudem können Sie ein Facette auswählen, nach der die Ergebnisse gruppiert werden.
            </p>
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
      <v-col cols="8" class="nolink">
        <!--
      <div v-if="items == null">
        <v-alert text="Suchen Sie zuerst nach einem Eintrag..." type="info" variant="outlined"></v-alert>
      </div>
    -->
        <div>
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