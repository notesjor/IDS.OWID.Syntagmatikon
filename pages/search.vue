<script setup>
definePageMeta({
  layout: "full",
})
</script>

<!--
    TODO: Liste gruppiert nach Ressourcen (Ressourcen als Gruppe)
    TODO: Auswahl wieviele Artikel pro Ressource angezeigt werden
    TODO: Hilfetext soll nach dem Anzeigen der Liste unterhalb der Facetten erscheinen
    -->

<template>
  <div style="max-width: 100%; margin:auto">
    <v-row>
      <v-col cols="4">
        <v-tabs-window v-model="resultsTab">
          <v-tabs-window-item value="help">
            <div style="margin-top: 0px;">
              <search-help></search-help>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="results">
            <div style="margin-top: 0px;">
              <h2>Gefundene Einträge:</h2>
              <v-col>
                <v-btn variant="text" density="compact" class="nocaps"
                  style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top:-22px; left: -10px; padding:0px 5px"
                  @click="this.search_header_switch = false">
                  Alphabetisch
                </v-btn>
                <div style="display: inline-block; margin: -30px 0px 0px 5px;" density="compact">
                  <v-switch v-model="search_header_switch"></v-switch>
                </div>
                <v-btn variant="text" density="compact" class="nocaps"
                  style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top:-22px; left: 15px; padding:0px 5px"
                  @click="this.search_header_switch = true">
                  Gruppiert nach Ressource
                </v-btn>
              </v-col>
            </div>
            <v-pagination v-model="page" :length="maxPages" density="compact"
              style="margin:-40px 0px 0px -50px"></v-pagination>
            <search-group4 v-for="x in items" :title="x"></search-group4>
          </v-tabs-window-item>
        </v-tabs-window>

        <div v-if="resultsTab != 'help'"></div>
        <v-btn v-else @click="this.resultsTab = 'results'" class="nocaps">Zeige alle Einträge</v-btn>
      </v-col>
      <v-col cols="7">
        <div>
          <v-tabs-window v-model="search_header">
            <v-tabs-window-item value="byAZ">
              <h1>
                <div style="display: inline-block; position: relative; top:-42px">Suche nach</div>
                <v-combobox :items="['10', '25', '50', '100', '250', '500']" variant="outlined"
                  style="display: inline-block; width: 5.1em; max-width: 5.1em; margin: 0px 10px"></v-combobox>
                <div style="display: inline-block; position: relative; top:-42px">Einträgen</div>
              </h1>
            </v-tabs-window-item>
            <v-tabs-window-item value="byGroup">
              <h1>
                <div style="display: inline-block; position: relative; top:-42px">Suche nach</div>
                <v-combobox :items="['3', '5', '10', '20', '25', '50', '100']" variant="outlined"
                  style="display: inline-block; width: 5.1em; max-width: 5.1em; margin: 0px 10px"></v-combobox>
                <div style="display: inline-block; position: relative; top:-42px">Einträgen pro Ressource</div>
              </h1>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
        <div style="margin-top:-30px">
          <v-text-field label="Stichwort hier eingeben..." v-model="query"
            append-inner-icon="mdi-magnify"></v-text-field>
        </div>
        <v-row>
          <v-col>
            <div style="margin-top: -20px;">
              <h3>Facetten:</h3>
            </div>
            <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels1">
              <search-box3 title="Zugänge" name="search_display" color1="#c79b31" color2="#a0ac67"></search-box3>
              <search-box3 title="Ressourcentypen (Zugang)" name="search_subtype" color1="#a0ac67"
                color2="#6fc2ab"></search-box3>
              <search-box3 title="Ressourcentypen (Typus)" name="search_type" color1="#6fc2ab"
                color2="#38daf7"></search-box3>
              <search-box3 title="Informationstypen" name="search_functions" color1="#42dbfb"
                color2="#7ba1c6"></search-box3>
              <search-box3 title="Wort- und Ausdrucksarten" name="search_parts" color1="#7ba1c6"
                color2="#5c93a0"></search-box3>
              <search-box3 title="Musterzugang" name="search_patterns" color1="#5c93a0" color2="#fa3a65"></search-box3>
            </v-expansion-panels>
          </v-col>
          <v-col>
            <div style="margin-top: -20px;">
              <h3>Ressourcen:</h3>
            </div>
            <v-chip v-for="r in resourcesList" :key="r.key" variant="outlined" style="margin: 0px 5px 5px 0px"
              :prepend-icon="r.icon" @click="toggleResource(r.key)">
              <div v-html="r.nameShort" />
            </v-chip>
          </v-col>
        </v-row>
        <v-row>
          <div v-if="resultsTab == 'help'"></div>
          <div v-else>
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
import { useSearchStore } from '~/stores/search';

export default {
  theme: { dark: false },
  data() {
    return {
      tab: "t1",
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

      openPanels1: [],
      openPanels2: [],

      searchApi: null,

      resourcesStore: null,
      searchStore: null,
      resources: [],

      resourcesSelected: [],

      query: "",
      maxPages: 10,
      page: 1,

      limit: 10,
      syncLock: false,

      resultsTab: "help",
      search_header_switch: false
    }
  },
  mounted() {
    this.searchApi = new search();
    this.searchApi.search("stadt", ["KoMuX"], true)
    console.log(this.searchApi)

    this.resourcesStore = useResourcesStore();
    this.resources = this.resourcesStore.getResources(null);
    this.resourcesSelected = this.resources.map(x => x.key);

    this.searchStore = useSearchStore();
    this.searchStore.init(this.resources);
  },
  methods: {
    toggleResource(key) {
      if (this.resourcesSelected.includes(key)) {
        this.resourcesSelected = this.resourcesSelected.filter(x => x != key);
      } else {
        this.resourcesSelected.push(key);
      }
    }
  },
  watch: {
    query: function (val) {
      this.searchStore.changeQuery(val);
    },
    resultsTab: function (val) {
      this.teleportHelp = val == 'help' ? "#helpDefault" : "#helpExtend";
    },
    search_header_switch: function (val) {
      this.searchStore.updateGroup(val ? "nameLong" : "nameShort");
      console.log("search_header_switch", val);
    }
  },
  computed: {
    search_header: {
      get: function () {
        return this.search_header_switch ? "byGroup" : "byAZ";
      }
    },

    items: function () {
      if (this.searchStore == null)
        return [];
      var res = this.searchStore.getGroups();
      return res;
    },

    resourcesList: function () {
      return this.resources.map(x => {
        return {
          key: x.key,
          nameShort: x.nameShort,
          icon: this.resourcesSelected.includes(x.key) ? "mdi-check-circle" : "mdi-circle-outline"
        }
      });
    }
  }
}
</script>

<style scoped>
.v-list-subheader {}
</style>