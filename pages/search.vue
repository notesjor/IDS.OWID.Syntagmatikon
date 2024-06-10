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
        <div style="margin-bottom: 20px;">
          <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
            Diese Suche erlaubt eine Volltextsuche über alle Einträge im Syntagmatikon.
            Wie im Ressourcenkompass beschrieben, haben die Ressourcen verschiedene Facetten,
            die hier genutzt werden können, um die Stichworte zu filtern.</p>
        </div>
        <div style="margin-top:-10px;">
          <h3>Stichwort:</h3>
        </div>
        <v-card elevation="0">
          <v-card-text style="margin: -20px -20px -20px -20px;">
            <div class="nolink" style="text-align: left; margin-bottom: 10px;">
              <v-btn v-for="letter in letters" :key="letter" variant="text" density="comfortable"
                style="padding: 3.5px !important; min-width: 15px;" @click="query = letter">
                {{ letter }}
              </v-btn>
            </div>
            <div>
              <v-text-field label="Stichwort hier eingeben..." v-model="query"
                append-inner-icon="mdi-magnify"></v-text-field>
            </div>
          </v-card-text>
        </v-card>
        <div style="margin-top: -10px;">
          <h3>Ressourcen:</h3>
        </div>
        <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
          Angewählte Ressourcen werden in die Suche einbezogen. Klicke Sie auf eine Ressource um sie zu aktivieren
          (<v-icon>mdi-check</v-icon>) oder deaktivieren (<v-icon>mdi-check</v-icon>). Ressourcen, die durch eine
          Facette ausgeschlossen sind, werden ebenfalls nicht angezeigt (<v-icon>mdi-cancel</v-icon>).
        </p>
        <v-chip v-for="r in resources" :key="r.key" variant="outlined" style="margin: 0px 5px 5px 0px"
          :prepend-icon="getIcon(r.key)">
          <div v-html="r.nameShort" />
        </v-chip>

        <div style="margin-top: 0px;">
          <h3>Facetten:</h3>
        </div>

        <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
          Facetten schränken die Stichwortsuche auf bestimmte Kategorien und Eigenschaften ein.
          Zudem können Sie ein Facette auswählen, nach der die Ergebnisse gruppiert werden.
        </p>
        <v-row>
          <v-col>
            <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels">
              <search-box title="Zugänge" name="search_display"></search-box>
              <search-box title="Ressourcentypen (Zugang)" name="search_subtype"></search-box>
              <search-box title="Ressourcentypen (Typus)" name="search_type"></search-box>
            </v-expansion-panels>
          </v-col>
          <v-col>
            <v-expansion-panels style="padding: 5px;" multiple v-model="openPanels">
              <search-box title="Informationstypen" name="search_functions"></search-box>
              <search-box title="Wort- und Ausdrucksarten" name="search_parts"></search-box>
              <search-box title="Musterzugang" name="search_patterns"></search-box>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <div style="margin-top: 0px;">
          <h2>Gefundene Einträge:</h2>
        </div>

        <p style="font-size: 0.9em; margin-bottom: 10px; border-left: #999 3px solid; padding-left: 5px;">
          Die hier gelisteten Einträge werden aus den verschiedenen Ressourcen gemixt.
        </p>
        <search-group3 v-for="x in items" :title="x"></search-group3>
        <v-pagination v-model="page" :length="maxPages" density="compact"></v-pagination>
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

      openPanels: [],

      resourcesStore: null,
      searchStore: null,
      resources: [],

      resourcesSelected: [],

      query: "",
      maxPages: 10,
      page: 1,

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
  methods: {
    getIcon(key) {
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
      var res = this.searchStore.getGroups();
      console.log(res);
      return res;
    }
  }
}
</script>

<style scoped>
.v-list-subheader {}
</style>