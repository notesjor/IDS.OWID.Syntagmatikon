<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 100%; margin:auto">
    <v-row>
      <v-col cols="5">
        <h1>
          Stichwortsuche
        </h1>

        <div style="margin-top:0px">
          <v-text-field label="Stichwort hier eingeben..." v-model="query"
            append-inner-icon="mdi-magnify"></v-text-field>
        </div>

        <div style="margin-top: -25px;">
          <h3>Gefundene Einträge:</h3>
          <v-col>
            <div style="text-align: center; margin-left: -15px;">
              <v-btn variant="text" density="compact" class="nocaps"
              style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top:-22px; left: -10px; padding:0px 5px"
              @click="search_header_switch = false">
              Alphabetisch
            </v-btn>
            <div style="display: inline-block; margin: -30px 0px 0px 5px;" density="compact">
              <v-switch v-model="search_header_switch"></v-switch>
            </div>
            <v-btn variant="text" density="compact" class="nocaps"
              style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top:-22px; left: 15px; padding:0px 5px"
              @click="search_header_switch = true">
              durchmischt nach Ressourcen
            </v-btn>
            </div>
          </v-col>
        </div>

        <v-pagination v-model="page" :length="searchApi?.pageMax" style="margin:-40px 0px 0px -50px"></v-pagination>
        <!-- SUCH-Ergebnis -->
        <v-tabs-window v-model="search_header">
          <v-tabs-window-item value="byAZ">
            <div v-for="x in results">
              <a :href="x.url" target="_blank" style="text-align: left;"><span v-html="x._formatted.lbl"></span> <span
                  style="font-size: 0.8em; color:#999">(<span
                    v-html="resourcesStore.getResource(x.dic)?.nameShort"></span>)</span></a>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="byGroup">
            <div v-for="g in resultGroups">
              <div style="font-size: 0.8em; color:#999; margin-top:10px" v-html="g"></div>
              <div v-for="x in resultsByGroup(g)">
                <a :href="x.url" target="_blank" style="text-align: left;"><span v-html="x._formatted.lbl"/></a>
              </div>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
        <v-pagination v-model="page" :length="searchApi?.pageMax" style="margin: 0px 0px 0px -50px"></v-pagination>

        <div style="text-align: center;">
          <v-tabs-window v-model="search_header">
            <v-tabs-window-item value="byAZ">
              <v-combobox :items="['10', '25', '50', '100', '250', '500']" variant="outlined"
                style="display: inline-block; width: 5.1em; max-width: 5.1em; margin: 0px 10px 0px 2px"
                v-model="pageSize_ByEntries" density="compact"></v-combobox>
              <div style="display: inline-block; position: relative; top:-38px">Einträge pro Seite</div>
            </v-tabs-window-item>
            <v-tabs-window-item value="byGroup">
              <v-combobox :items="['3', '5', '10', '20', '25', '50', '100']" variant="outlined"
                style="display: inline-block; width: 5.1em; max-width: 5.1em; margin: 0px 10px"
                v-model="pageSize_ByResources" density="compact"></v-combobox>
              <div style="display: inline-block; position: relative; top:-38px">Einträge pro Ressource</div>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-col>
      <v-col cols="7">
        <v-row>
          <v-col>
            <div style="margin-top: -20px;">
              <h3>Facetten:</h3>
            </div>
            <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels1">
              <search-box title="Zugänge" rkey="search_display" color1="#c79b31" color2="#a0ac67"></search-box>
              <search-box title="Ressourcentypen (Zugang)" rkey="search_subtype" color1="#a0ac67"
                color2="#6fc2ab"></search-box>
              <search-box title="Ressourcentypen (Typus)" rkey="search_type" color1="#6fc2ab"
                color2="#38daf7"></search-box>
              <search-box title="Informationstypen" rkey="search_functions" color1="#42dbfb"
                color2="#7ba1c6"></search-box>
              <search-box title="Wort- und Ausdrucksarten" rkey="search_parts" color1="#7ba1c6"
                color2="#5c93a0"></search-box>
              <search-box title="Musterzugang" rkey="search_patterns" color1="#5c93a0" color2="#fa3a65"></search-box>
            </v-expansion-panels>
          </v-col>
          <v-col>
            <div style="margin-top: -20px;">
              <h3>Ressourcen:</h3>
            </div>
            <v-chip v-for="r in resourcesList" :key="r.key" variant="outlined" style="margin: 0px 5px 5px 0px"
              :prepend-icon="r.icon" @click="switchReource(r)">
              <div v-html="r.nameShort" />
            </v-chip>

            <v-dialog v-model="overlay">
              <v-card style="max-width: 45%; margin-left: auto; margin-right: auto;">
                <v-card-title>Hinweis</v-card-title>
                <v-card-text>
                  Die Ressource wurde durch eine Facette ausgeschlossen.
                  Daher kann Sie weder an- noch abgewählt werden.
                  Falls Sie die Ressource dennoch durchsuchen möchten, setzen Sie die Facette zurück.
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="overlay = false">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <div>
            <search-help></search-help>
          </div>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import search from '~/api/search.js';
import { useResourcesStore } from '~/stores/resources';

export default {
  theme: { dark: false },
  data() {
    return {
      overlay: false,
      tab: "t1",
      //letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

      openPanels1: [],
      openPanels2: [],

      searchApi: null,
      results: [],

      resourcesStore: null,

      query: "",
      pageSize_ByEntries: 25,
      pageSize_ByResources: 3,
      page: 1,

      search_header_switch: false,
      search_header: "byAZ"
    }
  },
  mounted() {
    this.searchApi = new search();

    this.resourcesStore = useResourcesStore();

    this.newSearch();
  },
  methods: {
    newSearch() {
      this.page = 1;
      var self = this;
      self.searchApi.search(self.query, self.resourcesStore.resourceUsedForSearch, self.search_header_switch).then(x => {
        self.results = x;
      });
    },
    switchReource(r) {
      if (r.icon == "mdi-circle-off-outline") {
        this.overlay = true;
        return;
      }
      this.resourcesStore.switchResource(r.key);
      this.newSearch();
    },
    resultsByGroup(group){
      return this.results.filter(x => x.dic == group);
    }
  },
  watch: {
    query: function (val) {
      this.newSearch();
    },
    search_header_switch: function (val) {
      this.search_header = val ? "byGroup" : "byAZ";
      this.searchApi.pageSize = val ? this.pageSize_ByResources : this.pageSize_ByEntries;
      this.newSearch();
    },
    page: function (val) {
      var self = this;
      self.searchApi.gotoPage(val).then(x => {
        self.results = x;
      });
    },
    pageSize_ByEntries: function (val) {
      this.searchApi.pageSize = val;
      this.newSearch();
    },
    pageSize_ByResources: function (val) {
      this.searchApi.pageSize = val;
      this.newSearch();
    },
    "resourcesStore.resourceUsedForSearch": function (val) {
      this.newSearch();
    }
  },
  computed: {
    resourcesList: function () {
      if (this.resourcesStore == null)
        return [];

      var data = this.resourcesStore.resourcesState;
      return Object.keys(data).map(x => {
        return {
          key: x,
          nameShort: this.resourcesStore.getResource(x).nameShort,
          icon: data[x] == 1 ? "mdi-check-circle" : data[x] == 0 ? "mdi-circle-outline" : "mdi-circle-off-outline"
        }
      });
    },
    resultGroups: function () {
      var res = new Set();
      this.results.forEach(x => {
        res.add(x.dic);
      });
      return res;
    }
  }
}
</script>

<style scoped>
.v-list-subheader {}

.v-pagination__list>.v-pagination__item {
  background-color: red;
}
</style>

<style>
.highlight {
  font-style: italic;
  border-bottom: 1px dotted #000;
}
</style>