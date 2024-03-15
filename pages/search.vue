<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 80ch; margin:auto">
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
  </div>
  <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="4">
      <v-card>
        <v-card-title>
          Stichwort
        </v-card-title>
        <v-card-text>
          <div class="nolink" style="text-align: center; margin-bottom: 10px;">
            <v-btn v-for="letter in letters" :key="letter" variant="text" density="comfortable"
              style="padding: 0px !important; min-width: 15px;" @click="query = letter">
              {{ letter }}
            </v-btn>
          </div>
          <div>
            <v-text-field label="Stichwort" v-model="query" append-inner-icon="mdi-magnify"></v-text-field>
          </div>
        </v-card-text>
      </v-card>
      &nbsp;
      <v-card class="mx-auto">
        <v-card-title>
          Facetten
        </v-card-title>
        <v-card-text>
          <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
            Facetten schränken die Stichwortsuche auf bestimmte Kategorien und Eigenschaften ein.
            Zudem können Sie ein Facette auswählen, nach der die Ergebnisse gruppiert werden.
          </p>
          <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels">
            <search-box title="Ressourcen" name="nameShort"></search-box>
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
    <v-col cols="6" class="nolink">
    <!--
      <div v-if="items == null">
        <v-alert text="Suchen Sie zuerst nach einem Eintrag..." type="info" variant="outlined"></v-alert>
      </div>
    -->
      <div>
        <search-group v-for="x in items" :title="x"></search-group>
      </div>
    </v-col>
  </v-row>
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

      query: "",

      limit: 10,
      syncLock: false
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();
    this.resources = this.resourcesStore.getResources(null);

    this.searchStore = useSearchStore();
    this.searchStore.init(this.resources);        
    console.log(this.searchStore);
  },
  watch: {
    query: function (val) {
      this.searchStore.changeQuery(val);
    }
  },
  computed: {
    items: function (){
      if(this.searchStore == null)
        return [];
      return this.searchStore.getGroups();
    }
  }
}
</script>

<style scoped>
.v-list-subheader {
  margin-top: 20px !important;
}
</style>