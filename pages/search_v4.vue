<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 100%; margin:auto">
    <v-row>
      <v-col cols="7">
        <div>
          <h1>
            Suche nach Einträgen
          </h1>
        </div>
        <div>
          <v-text-field label="Stichwort hier eingeben..." v-model="query"
            append-inner-icon="mdi-magnify"></v-text-field>
        </div>
        <div style="margin-top: -20px;">
          <h3>Ressourcen:</h3>
        </div>
        <v-chip v-for="r in resources" :key="r.key" variant="outlined" style="margin: 0px 5px 5px 0px"
          :prepend-icon="getIcon(r.key)">
          <div v-html="r.nameShort" />
        </v-chip>

        <div style="margin-top: 0px;">
          <h3>Facetten:</h3>
        </div>

        <v-row>
          <v-col>
            <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels1">
              <search-box3 title="Zugänge" name="search_display" color1="#c79b31" color2="#a0ac67"></search-box3>
              <search-box3 title="Ressourcentypen (Zugang)" name="search_subtype" color1="#a0ac67"
                color2="#6fc2ab"></search-box3>
              <search-box3 title="Ressourcentypen (Typus)" name="search_type" color1="#6fc2ab"
                color2="#38daf7"></search-box3>
            </v-expansion-panels>
          </v-col>
          <v-col>
            <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels2">
              <search-box3 title="Informationstypen" name="search_functions" color1="#42dbfb"
                color2="#7ba1c6"></search-box3>
              <search-box3 title="Wort- und Ausdrucksarten" name="search_parts" color1="#7ba1c6"
                color2="#5c93a0"></search-box3>
              <search-box3 title="Musterzugang" name="search_patterns" color1="#5c93a0" color2="#fa3a65"></search-box3>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-tabs-window v-model="currentTab">
          <v-tabs-window-item value="help">
            <div style="margin-top: 0px;">
              <h2>Wie funktioniert die Suche?</h2>
              <p style="font-size: 0.9em; margin-bottom: 10px; word-wrap: break-word;">
                Dieses Suche erlaubt es, alle Ressourcen im Syntagmatikon gleichzeitig abzufragen.
                Wie im Res&shy;sour&shy;cen&shy;kom&shy;pass be&shy;schrie&shy;ben, haben die Ressourcen verschiedene
                Facetten,
                die hier genutzt werden können, um die Stichworte zu filtern.</p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <i>Stichwortsuche:</i> Geben Sie ein beliebiges Stichwort ein, um danach zu suchen.
              </p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <i>Angewählte Ressourcen:</i>
                werden in die Suche einbezogen. Klicke Sie auf eine Ressource um sie zu aktivieren
                <v-icon>mdi-check-circle</v-icon> oder deaktivieren <v-icon>mdi-circle-outline</v-icon>. Ressourcen, die
                durch eine
                Facette ausgeschlossen sind, werden ebenfalls nicht angezeigt <v-icon>mdi-circle-off-outline</v-icon>.
              </p>
              <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
                <i>Facetten:</i> schränken die Stichwortsuche auf bestimmte Kategorien und Eigenschaften ein.
                Zudem können Sie ein Facette auswählen, nach der die Ergebnisse gruppiert werden.
              </p>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="results">
            <div style="margin-top: 0px;">
              <h2>Gefundene Einträge:</h2>
            </div>
            <search-group3 v-for="x in items" :title="x"></search-group3>
            <v-pagination v-model="page" :length="maxPages" density="compact"></v-pagination>
          </v-tabs-window-item>
        </v-tabs-window>

        <v-tabs v-model="currentTab">
          <v-tab value="help">Hilfe</v-tab>
          <v-tab value="results">Ergebnisse</v-tab>
        </v-tabs>
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

      openPanels1: [],
      openPanels2: [],

      resourcesStore: null,
      searchStore: null,
      resources: [],

      resourcesSelected: [],

      query: "",
      maxPages: 10,
      page: 1,

      limit: 10,
      syncLock: false,

      currentTab: 0
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();
    this.resources = this.resourcesStore.getResources(null);
    this.resourcesSelected = this.resources.map(x => x.key);

    this.searchStore = useSearchStore();
    this.searchStore.init(this.resources);
  },
  methods: {
    getIcon(key) {
      return this.resourcesSelected.includes(key) ? "mdi-check-circle" : "mdi-circle-outline";
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
      var res = this.searchStore.getGroups();
      return res;
    }
  }
}
</script>

<style scoped>
.v-list-subheader {}
</style>