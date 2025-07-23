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

        <!-- Genauigkeit der Suche -->
        <!--<div style="margin: -50px 0px 50px 0px;">
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
        </div>-->
        <div style="margin: -20px 0px 50px 0px;">
          <div style="display: flex; align-items: center;">
            <div style="flex: 1;">
              <v-slider v-model="search_exactness" :min="1" :max="5" :step="1" :ticks="search_exactness_labels"
                show-ticks="always" label="Genauigkeit:" style="max-width: 100%;" :color="search_exactness_custom"
                tick-size="4"></v-slider>
            </div>
            <div style="flex: 0 0 auto; margin-left: 12px;">
              <v-btn rounded="true" elevation="1"
                :icon="search_exactness_panel.length > 0 ? 'mdi-menu-up' : 'mdi-menu-down'"
                :color="search_exactness_panel.length > 0 ? 'blue' : 'white'"
                @click="search_exactness_panel = search_exactness_panel.length > 0 ? [] : [0]"></v-btn>
            </div>
          </div>
        </div>
        <v-expansion-panels v-model="search_exactness_panel" elevation="0" v-if="search_exactness_panel.length > 0">
          <v-expansion-panel style="margin-top: -50px; padding-bottom: -10px;">
            <v-expansion-panel-text>
              <v-row>
                <v-col cols="4" style="padding: 15px 0px;">
                  <v-combobox label="Mehrwortsuche" :items="search_detail_multiword_labels" item-title="text"
                    item-value="value" variant="outlined" density="compact"
                    v-model="search_detail_multiword"></v-combobox>
                </v-col>
                <v-col cols="4" style="padding: 15px 5px;">
                  <v-combobox label="Suchebene" :items="search_detail_layer_labels" item-title="text" item-value="value"
                    variant="outlined" density="compact" v-model="search_detail_layer"></v-combobox>
                </v-col>
                <v-col cols="4" style="padding: 15px 0px;">
                  <v-combobox label="Unscharfe Suche" :items="search_detail_fuzzy_labels" item-title="text"
                    item-value="value" variant="outlined" density="compact" v-model="search_detail_fuzzy"></v-combobox>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <!-- Anzeige-Optionen -->
        <div
          :style="search_exactness_panel.length === 1 ? 'margin: -45px 0px 50px 0px; text-align: center;' : 'margin: -60px 0px 50px 0px; text-align: center;'">
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

        <!-- SUCH-Ergebnis -->
        <v-tabs-window v-model="search_header" style="margin-top: -40px;">
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
            <v-expansion-panel-text>
              <p style="font-size: 0.9em; margin-bottom: 10px; word-wrap: break-word;">Mit einer Eingabe im Suchfeld
                ("Stichwort hier eingeben...") können alle Ressourcen im <hi>Syntagmatikon</hi> gleichzeitig durchsucht
                werden.
                Wird kein Stichwort eingegeben, sieht man die Gesamtstichwortlisten. Der Klick auf einen Treffer führt
                direkt zur entsprechenden Ressource.
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
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <b>Anzeige-Optionen:</b> Die Anzeige "sortiert nach Ressourcen" zeigt jeweils drei Treffer pro Ressource
                pro Seite und erlaubt so einen Überblick über die Treffermengen der jeweiligen Ressourcen. Die Anzeige
                "alphabetisch" zeigt alle Treffer in alphabetischer Reihenfolge.
              </p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <span><b>Genauigkeit:</b> Über den Parameter Genauigkeit kann bestimmt werden, wie genau sich die Suche
                  an die Eingaben hält. Es gibt fünf <strong>Suchprofile</strong> (<em>Exakt, Eng, Flexibel, Vage</em> 
                  oder <em>Kreativ</em>) die unterschiedliche Voreinstellungen bereithalten.&nbsp;
                </span>
                <span>Über den Button rechts neben dem Schieberegler öffnen Sie die
                  <strong>Detaileinstellungen</strong> zur manuellen Einstellung der Suche.<br/><br/></span>
                <span>Drei Einstellungsebenen stehen zur Verfügung:</span>

              <ul style="word-break: break-word; overflow-wrap: anywhere; hyphens: auto; text-align: left; margin-left: 5px;">
                <li style="margin-left: 0;">
                  <em>Mehrwortsuche:</em>
                  <ul style="margin-left: 15px;">
                    <li style="margin-left: 0;"><strong>Exakte Abfolge:</strong> sucht genau die eingegebene Wortfolge.</li>
                    <li style="margin-left: 0;"><strong>Beliebige Reihenfolge:</strong> alle Wörter müssen vorkommen, Reihenfolge egal.</li>
                    <li style="margin-left: 0;"><strong>Beliebiges Wort:</strong> es genügt, wenn ein Wort gefunden wird (mehr ist besser).</li>
                  </ul>
                </li>
                <li style="margin-left: 0;">
                  <em>Suchebene:</em>
                  <ul style="margin-left: 15px">
                    <li style="margin-left: 0;"><strong>Exakte Wortform:</strong> sucht nach der eingegebenen Schreibweise.</li>
                    <li style="margin-left: 0;"><strong>Lemmatisiert:</strong> berücksichtigt Grundformen.</li>
                    <li style="margin-left: 0;"><strong>Reduziertes Lemma:</strong> sucht noch allgemeiner.</li>
                  </ul>
                </li>
                <li style="margin-left: 0;">
                  <em>Unscharfe Suche:</em>
                  <ul style="margin-left: 15px;">
                    <li style="margin-left: 0;"><strong>Deaktiviert:</strong> nur genaue Treffer.</li>
                    <li style="margin-left: 0;"><strong>Dynamisch:</strong> erlaubt leichte Abweichungen, abhängig von der Wortlänge.</li>
                    <li style="margin-left: 0;"><strong>Experimentell:</strong> sehr weite Suche, Ergebnisse oft ungenau.</li>
                  </ul>
                </li>
              </ul>
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

      search_exact: true,

      search_exactness_panel: [0],
      search_exactness_custom: "black",
      search_exactness: 3,
      search_exactness_sync: true,
      search_exactness_labels: {
        1: 'Exakt',
        2: 'Eng',
        3: 'Flexibel',
        4: 'Vage',
        5: 'Kreativ'
      },

      search_detail_multiword_labels: [{ text: 'Exakte Abfolge', value: 0 }, { text: 'Beliebige Reihenfolge', value: 1 }, { text: 'Beliebiges Wort', value: 2 }],
      search_detail_layer_labels: [{ text: 'Exakte Wortform', value: 0 }, { text: 'Lemmatisiert', value: 1 }, { text: 'Reduziertes Lemma', value: 2 }],
      search_detail_fuzzy_labels: [{ text: 'Deaktiviert', value: 0 }, { text: 'Dynamisch', value: 1 }, { text: 'Experimentell', value: 2 }],

      search_detail_multiword: 1,
      search_detail_layer: 1,
      search_detail_fuzzy: 1,
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
    },
    search_exactness: function (val) {
      if (!this.search_exactness_sync)
        return;

      switch (val) {
        case 1:
          this.search_detail_multiword = this.search_detail_layer = this.search_detail_fuzzy = 0;
          break;
        case 2:
          this.search_detail_multiword = this.search_detail_layer = 1;
          this.search_detail_fuzzy = 0;
          break;
        case 3:
          this.search_detail_multiword = this.search_detail_layer = this.search_detail_fuzzy = 1;
          break;
        case 4:
          this.search_detail_multiword = this.search_detail_layer = 2;
          this.search_detail_fuzzy = 1;
          break;
        case 5:
          this.search_detail_multiword = this.search_detail_layer = this.search_detail_fuzzy = 2;
          break;
      }
    },
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