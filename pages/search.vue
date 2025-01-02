<script setup>
definePageMeta({
  layout: "full",
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
      <v-col cols="6">
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
        <div style="margin: -60px 0px 40px 0px;">
          <span style="position: relative; top: 0px">Anzeige-Optionen:</span>
          <span>
            <v-btn variant="text" density="compact" class="nocaps"
              style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top: 0px"
              @click="search_header_switch = false">
              alphabetisch
            </v-btn>
            <v-switch v-model="search_header_switch" style="display: inline-block; position: relative; top: 35px"
              density="compact"></v-switch>
            <v-btn variant="text" density="compact" class="nocaps"
              style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top: 0px"
              @click="search_header_switch = true">
              sortiert nach Ressourcen
            </v-btn>
          </span>
        </div>

        <!-- Genauigkeit der Suche -->

        <div style="margin: -75px 0px 50px 0px;">
          <span style="position: relative; top: 0px">Genauigkeit der Suche:</span>
          <span>
            <v-btn variant="text" density="compact" class="nocaps"
              style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top: 0px"
              @click="search_exact = false">
              unscharf
            </v-btn>
            <v-switch v-model="search_exact" style="display: inline-block; position: relative; top: 35px"
              density="compact"></v-switch>
            <v-btn variant="text" density="compact" class="nocaps"
              style="font-size: 0.9em; color:#999; display: inline-block; position: relative; top: 0px"
              @click="search_exact = true">
              exakte Zeichenfolge
            </v-btn>
          </span>
        </div>


        <!-- SUCH-Ergebnis -->
        <v-tabs-window v-model="search_header" style="margin-top: -40px;">
          <v-tabs-window-item value="byAZ">
            <div v-for="x in results">
              <a :href="x.url" target="_blank" style="text-align: left;"><span v-html="x._formatted.lbl"></span> <span
                  style="font-size: 0.8em; color:#999">(<span v-html="getResourcesShortName(x.dic)"></span>)</span></a>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="byGroup">
            <div v-for="g in resultGroups">
              <div style="font-size: 0.8em; color:#999; margin-top:10px">
                <span v-html="getResourcesShortName(g)"></span>
                <span> ({{ searchApi.count[g] }} Einträge)</span>
              </div>
              <div v-for="x in resultsByGroup(g)">
                <span style="font-size: 0.8em; color:#999">{{ String(x.index).padStart(2, "0") }}. </span>
                <a :href="x.url" target="_blank" style="text-align: left;"><span v-html="x._formatted.lbl" /></a>
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
      <v-col cols="6">
        <v-expansion-panels v-model="searchOptions" multiple>
          <!-- Anleitung Suche -->
          <v-expansion-panel elevation="0" value="help">
            <v-expansion-panel-title style="font-weight: 500; font-size: 1.2em;">
              Wie funktioniert die Suche?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p style="font-size: 0.9em; margin-bottom: 10px; word-wrap: break-word;">Mit einer Eingabe im Suchfeld
                ("Stichwort hier eingeben...") können alle Ressourcen im <hi>Syntagmatikon</hi> gleichzeitig durchsucht
                werden.
                Wird kein Stichwort eingegeben, sieht man die Gesamtstichwortlisten. Der Klick auf einen Treffer führt
                direkt zur entsprechenden Ressource.
              </p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <b>Anzeige-Optionen:</b> Die Anzeige "sortiert nach Ressourcen" zeigt jeweils drei Treffer pro Ressource
                pro Seite und erlaubt so einen Überblick über die Treffermengen der jeweiligen Ressourcen. Die Anzeige
                "alphabetisch" zeigt alle Treffer in alphabetischer Reihenfolge.
              </p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <b>Genauigkeit der Suche:</b>
                Hier kann gesteuert werden, ob Treffer die eingegebene Zeichenfolge exakt
                enthalten müssen oder eine gewisse Varianz erlaubt ist. <b>Achtung: Diese Funktion ist experimentell.
                  "Unscharf" kann zu unerwarteten Treffern führen.</b>
              </p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <b>Ressourcen:</b> Hier können einzelne Ressourcen direkt aktiviert
                <v-icon>mdi-check-circle</v-icon> oder deaktiviert <v-icon>mdi-circle-outline</v-icon> werden. Treffer
                in deaktivierten Ressourcen werden ausgeblendet.
              </p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <b>Facetten:</b> Hier können Ressourcen anhand ihrer Merkmale ('Facetten') gefiltert werden.
                Beschreibungen der Facetten findet man im Ressourcenkompass. Ist eine Ressource aufgrund des
                Facetten-Filters deaktiviert, wird sie mit dem folgenden Symbol markiert:
                <v-icon>mdi-circle-off-outline</v-icon>
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <!-- Auswahl der Ressourcen -->
          <v-expansion-panel elevation="0" value="resourcesSelection">
            <v-expansion-panel-title style="font-weight: 500; font-size: 1.2em;">
              Ressourcen
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
              Facetten
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

      search_exact: true
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
        self.searchApi.search(self.query, self.resourcesStore.resourceUsedForSearch, self.search_header_switch).then(x => {
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
    },
    search_exact: function (val) {
      this.searchApi.exact = val;
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
          nameShort: this.getResourcesShortName(x),
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