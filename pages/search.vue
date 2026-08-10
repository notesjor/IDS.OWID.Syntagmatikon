<script setup>
definePageMeta({
  layout: "full",
  cauthor: 'Jan Oliver Rüdiger, Annelen Brunner und Kathrin Steyer',
})
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Syntagmatikon - Stichwortsuche',
  meta: [
    {
      name: 'description',
      content: 'Das korpusbasierte Portal Syntagmatikon bietet Informationen zum Gebrauch von sprachlichen Ausdrücken, die durch ihre wiederkehrende lineare Abfolge zu mehr oder weniger festen Wortschatzeinheiten geworden sind.'
    }
  ]
});
</script>

<template>
  <div style="max-width: 100%;">
    <v-row>
      <!-- Linke Spalte -->
      <v-col cols="7">
        <h1>
          Stichwortsuche <span style="font-size: 0.8em; color:#999; margin-top:10px">(insgesamt: {{
            searchApi?.countTotal }} Einträge)</span>
        </h1>

        <!-- SUCH-Eingabemaske -->
        <div style="margin-top:0px">
          <v-text-field label="Stichwort hier eingeben..." v-model="query"
            append-inner-icon="mdi-magnify"></v-text-field>
        </div>

        <!-- Anzeige-Optionen -->
        <div style="display: grid; grid-template-columns: auto 1fr">
          <div style="margin: -12px 0px 0px 0px">
            <v-speed-dial location="bottom center" transition="fade-transition">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" size="large" prepend-icon="mdi-cog" variant="outlined"
                  style="text-transform: none;">
                  Sucharten
                </v-btn>
              </template>

              <v-card>
                <v-card-text>
                  <div style="margin: 20px 10px 0px 0px">
                    <div style="font-weight: 600;">Ausgewähltes Suchart:</div>
                    <v-radio-group v-model="search_exactness">
                      <v-radio key="1" label="Lemmabasierte Suche" :value="1"></v-radio>
                      <v-radio key="2" label="Exakte Wortformsuche" :value="2"></v-radio>
                      <v-radio key="3" label="Unscharfe Wortsuche" :value="3"></v-radio>
                      <v-radio key="4" label="Zeichenkettensuche" :value="4"></v-radio>
                    </v-radio-group>
                  </div>
                </v-card-text>
              </v-card>
            </v-speed-dial>
          </div>
          <div style="margin: -42px 0px 0px 0px; text-align: right">
            <span style="position: relative; top: 0px">Sortierung:</span>
            <span>
              <v-btn variant="text" density="compact" class="nocaps"
                style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top: 0px; text-transform: none;"
                @click="search_header_switch = false">
                alphabetisch
              </v-btn>
              <v-switch v-model="search_header_switch" style="display: inline-block; position: relative; top: 35px;"
                density="compact"></v-switch>
              <v-btn variant="text" density="compact" class="nocaps"
                style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top: 0px; text-transform: none;"
                @click="search_header_switch = true">
                nach Ressourcen
              </v-btn>
            </span>
          </div>
        </div>

        <!-- SUCH-Ergebnis -->
        <v-tabs-window v-model="search_header" style="margin-top: 20px;" v-if="results != null && results.length > 0">
          <v-tabs-window-item value="byAZ">
            <div v-for="x in results">
              <a :href="x.url" target="_blank" style="text-align: left;"><span v-html="x.lbl"></span> <span
                  style="font-size: 0.8em; color:#999">(<span v-html="getResourcesShortName(x.dic)"></span>)</span></a>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="byGroup">
            <div v-for="g in resultGroups">
              <div style="font-size: 0.8em; color:#999; margin-top:10px">
                <span v-html="getResourcesShortNameGroup(g)"></span>
                <span v-if="search_header === 'byGroup'"> ({{ searchApi.count[g[0].dic] }} Einträge)</span>
              </div>
              <div v-for="x in g">
                <!--<span style="font-size: 0.8em; color:#999">{{ String(x.index).padStart(2, "0") }}. </span>-->
                <a :href="x.url" target="_blank" style="text-align: left;"><span v-html="x.lbl" /></a>
              </div>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
        <v-pagination v-model="page" :length="searchApi?.pageMax" style="margin: 0px 0px 0px -50px"></v-pagination>

        <div style="text-align: center">
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
      <!-- Rechte Spalte -->
      <v-col cols="5">
        <v-expansion-panels v-model="searchOptions" multiple>
          <!-- Anleitung Suche -->
          <v-expansion-panel elevation="0" value="help">
            <v-expansion-panel-title style="font-weight: 500; font-size: 1.2em;">
              Wie funktioniert die Suche?
            </v-expansion-panel-title>
            <v-expansion-panel-text style="font-size: 0.8em; margin:-15px 0px -40px 0px;">
              <p>
                Mit der Stichwortsuche können Sie gleichzeitig in allen Ressourcen des <hi>Syntagmatikon</hi> oder
                gezielt in
                ausgewählten Ressourcen recherchieren.
              </p>
              <p>Gesucht werden einzelne Wörter, Wortformen oder Zeichenketten sowie mehrere Wörter in beliebiger
                Reihenfolge in einem Satz. Die Groß- und Kleinschreibung wird dabei nicht berücksichtigt.</p>
              <p>Suchfilter ermöglichen die Auswahl verschiedener Ressourcen und Facetten (Ressourcentypen,
                Informationstypen,
                Wort- und Ausdrucksarten sowie Musterzugänge).</p>
              <p>Alle Trefferlisten (gesamt oder gefiltert) können nach Ressourcen oder alphabetisch sortiert werden.
              </p>
              <div style="margin-bottom: 15px;">
                <a href="/search/info">Detaillierte Informationen zur Suche finden Sie hier.</a>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <!-- Auswahl der Ressourcen -->
          <v-expansion-panel elevation="0" value="resourcesSelection">
            <v-expansion-panel-title style="font-weight: 500; font-size: 1.2em;">
              Ressourcenfilter
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div style="margin-top: -20px;">
                <v-row style="margin:-20px 0px 20px -35px;">
                  <div class="nolink">
                    <v-col>
                      <div style="font-size:14px; display:block; float:left; padding-left:25px">
                        Auswahl:
                      </div>
                      <a @click="selectAll" style="cursor: pointer; font-weight: 600;">
                        <h6
                          style="font-size:14px; display:block; float:left; margin-left:10px; font-variant:small-caps">
                          Alle
                        </h6>
                      </a>
                      <a @click="selectNone" style="cursor: pointer; font-weight: 600;">
                        <h6
                          style="font-size:14px; display:block; float:left; margin:0px 10px 0px 10px; font-variant:small-caps">
                          Keine
                        </h6>
                      </a>
                      <a @click="selectInvert" style="cursor: pointer; font-weight: 600;">
                        <h6 style="font-size:14px; display:block; float:left; font-variant:small-caps">
                          Invertieren
                        </h6>
                      </a>
                    </v-col>
                  </div>
                </v-row>
              </div>
              <v-chip v-for="r in resourcesList" :key="r.key" variant="outlined" style="margin: 0px 5px 5px 0px"
                :prepend-icon="r.icon" @click="switchReource(r)">
                <div v-html="r.nameShort" />
              </v-chip>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <!-- Facetten -->
          <v-expansion-panel elevation="0" value="fineGrain">
            <v-expansion-panel-title style="font-weight: 500; font-size: 1.2em;">
              Facettenfilter
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels1">
                <!-- <search-box title="Zugänge" rkey="search_display" color1="#c79b31" color2="#a0ac67"></search-box>
                <search-box title="Ressourcentypen (Zugang)" rkey="search_subtype" color1="#a0ac67"
                  color2="#6fc2ab"></search-box> -->
                <search-box title="Ressourcentypen" rkey="search_type" color1="#DF0C2F"></search-box>
                <search-box title="Informationstypen" rkey="search_functions" color1="#9716CA"></search-box>
                <search-box title="Wort- und Ausdrucksarten" rkey="search_parts" color1="#0DC513"></search-box>
                <search-box title="Musterzugänge" rkey="search_patterns" color1="#DB6900"></search-box>
              </v-expansion-panels>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

  </div>

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

      searchOptions: ["resourcesSelection", "fineGrain"],
      openPanels1: [],
      openPanels2: [],

      searchApi: null,
      results: [],

      resourcesStore: null,

      query: "",
      pageSize_ByEntries: 25,
      pageSize_ByResources: 3,
      page: 1,

      search_header_switch: true,
      search_header: "byGroup",

      search_exact: true,

      search_exactness: 1,
      search_exactness_syncLock: false,

      search_detail_multiword_labels: [{ text: 'Exakte Wortfolge', value: 0 }, { text: 'Exakte Zeichenfolge', value: 1 }, { text: 'Beliebig', value: 2 }],
      search_detail_layer_labels: [{ text: 'Exakte Wortform', value: 0 }, { text: 'Vereinfachte Form', value: 1 }, { text: 'Lemma', value: 2 }],
      search_detail_fuzzy_labels: [{ text: 'Deaktiviert', value: 0 }, { text: 'Dynamisch', value: 1 }, { text: 'Experimentell', value: 2 }],

      search_detail_multiword: 0,
      search_detail_layer: 2,
      search_detail_fuzzy: 0, // wurde in v4 deaktiviert
    }
  },
  mounted() {
    this.searchApi = new search();

    this.resourcesStore = useResourcesStore();

    this.newSearch();
  },
  methods: {
    newSearch() {
      try {
        this.page = 1;
        var self = this;
        // build grouped sources: for parents with active children, pass an array of child keys;
        // for standalone resources, pass the single key string.
        var grouped = [];
        try {
          var data = this.resourcesStore?.resourcesState || {};
          // build children map
          var childrenMap = {};
          for (var i = 0; i < this.resourcesStore.info.length; i++) {
            var item = this.resourcesStore.info[i];
            if (item.key_relation) {
              childrenMap[item.key_relation] = childrenMap[item.key_relation] || [];
              childrenMap[item.key_relation].push(item.key);
            }
          }

          // iterate over top-level resources (parents and standalones)
          for (var i = 0; i < this.resourcesStore.info.length; i++) {
            var item = this.resourcesStore.info[i];
            if (item.hideInSearch) continue;
            // only consider parents (no key_relation) to avoid duplicates
            if (item.key_relation) continue;

            var children = childrenMap[item.key] || [];
            if (children.length > 0) {
              // collect active child keys
              var activeChildren = children.filter((k) => data[k] === 1);
              if (activeChildren.length > 0) grouped.push(activeChildren);
            } else {
              // standalone: include if active
              if (data[item.key] === 1) grouped.push(item.key);
            }
          }
        } catch (e) {
          grouped = this.resourcesStore?.resourceUsedForSearch || [];
        }

        // choose payload depending on current view: ABC -> flat list, Group -> grouped
        var sourcesForApi = grouped;
        if (!self.search_header_switch) {
          // ABC view: send flat list of active resource keys (children expanded)
          sourcesForApi = this.resourcesStore?.resourceUsedForSearch || [];
        }

        self.searchApi.search(self.query,
          sourcesForApi,
          self.search_header_switch,
          self.search_detail_multiword,
          self.search_detail_layer,
          self.search_detail_fuzzy).then(x => {
            self.results = x;
          });
      } catch {
        // ignore
      }
    },
    switchReource(r) {
      if (r.icon == "mdi-circle-off-outline") {
        this.overlay = true;
        return;
      }
      this.resourcesStore?.switchResource(r.key);
      this.newSearch();
    },
    selectAll() {
      this.resourcesStore?.selectAll();
      this.newSearch();
    },
    selectNone() {
      this.resourcesStore?.selectNone();
      this.newSearch();
    },
    selectInvert() {
      this.resourcesStore?.selectInvert();
      this.newSearch();
    },
    resultsByGroup(group) {
      var res = this.results.filter(x => x.dic == group);
      for (var i = 0; i < res.length; i++) {
        res[i].index = (this.page - 1) * this.pageSize_ByResources + i + 1;
      }
      return res;
    },
    getResourcesShortName(key) {
      return this.resourcesStore?.getResource(key)?.nameShort;
    },
    getResourcesShortNameGroup(key) {
      return this.resourcesStore?.getResource(key[0].dic)?.nameShort;
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
        self.results = x ?? [];
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
    },
    search_exact: function (val) {
      this.searchApi.exact = val;
      this.newSearch();
    },
    search_exactness: function (val) {
      if (this.search_exactness_syncLock)
        return;
      this.search_exactness_syncLock = true;

      // search_detail_multiword: 'Wort oder Wörter' = 0, 'Exakte Zeichenfolge' = 1, 'Beliebig' = 2
      // search_detail_layer_labels: 'Exakte Wortform' = 0, 'Vereinfachte Form' = 1, 'Lemma' = 2

      switch (val) {
        case 1:
          this.search_detail_multiword = 0;
          this.search_detail_layer = 2;
          break;
        case 2:
          this.search_detail_multiword = 0;
          this.search_detail_layer = 0;
          break;
        case 3:
          this.search_detail_multiword = 0;
          this.search_detail_layer = 1;
          break;
        case 4:
          this.search_detail_multiword = 1;
          this.search_detail_layer = 0;
          break;
      }

      this.newSearch();
      this.search_exactness_syncLock = false;
    },
    search_detail_multiword: function (val) {
      if (val !== null && typeof val === 'object' && 'value' in val)
        this.search_detail_multiword = val.value;

      if (this.search_exactness_syncLock)
        return;

      this.newSearch();
    },
    search_detail_layer: function (val) {
      if (val !== null && typeof val === 'object' && 'value' in val)
        this.search_detail_layer = val.value;

      if (this.search_exactness_syncLock)
        return;

      this.newSearch();
    },
    search_detail_fuzzy: function (val) {
      if (val !== null && typeof val === 'object' && 'value' in val)
        this.search_detail_fuzzy = val.value;

      if (this.search_exactness_syncLock)
        return;

      this.newSearch();
    }
  },
  computed: {
    resourcesList: function () {
      if (this.resourcesStore == null) return [];

      var data = this.resourcesStore?.resourcesState;

      // Only show parent resources (no key_relation) as chips
      return this.resourcesStore.info
        .filter((item) => !item.key_relation && !item.hideInSearch)
        .map((item) => {
          var state = data[item.key];
          return {
            key: item.key,
            nameShort: this.getResourcesShortName(item.key),
            icon: state == 1 ? "mdi-check-circle" : state == 0 ? "mdi-circle-outline" : "mdi-circle-off-outline",
          };
        });
    },
    resultGroups: function () {
      var res = {};
      this.results.forEach(x => {
        if (res[x.dic] == null) res[x.dic] = [];
        res[x.dic].push(x);
      });
      return res;
    }
  }
}
</script>

<style scoped>
div.search-exactness-radio::hover {
  background-color: #d1d1d1;
  cursor: pointer;
}

.highlight {
  font-style: italic;
  border-bottom: 1px dotted #000;
}
</style>