<template>
  <v-row>
    <v-col>
      <v-alert type="info" title="Hinweis - Prototyp v0.1"
        text="Alle Inhalte dieser Version sind experimentell. Texte, Farben, Grafiken werden im späteren Projektverlauf angepasst."
        variant="tonal" v-if="alert"></v-alert>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div>
        <h1 class="text-3xl font-bold">
          Ressourcen - Liste
        </h1>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div>
        <v-data-table :headers="headers" :items="table"></v-data-table>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <!--<v-data-table :headers="headers" :items="overviewTable" item-value="name" class="elevation-1"></v-data-table>-->
      {{ headers }}
      {{ overviewTable }}
    </v-col>
  </v-row>
</template>

<script>
import { useRessourcesStore } from '../stores/ressources'
const rStore = useRessourcesStore()

export default {
  name: "Ressourcen - Liste",
  theme: { dark: false },
  data() {
    return {
      alert: true,
      overviewTable: null,

      riStore: null
    }
  },



  mounted() {
    setTimeout(() => {
      this.alert = false
    }, 10000);    
  },

  methods: {
    test() {
      alert("test");
    }
  },

  computed: {
    headers() {    
      return rStore.uniqueCategories;
    },
    table(){
      return rStore.info;
    }
  }
}
</script>

<style></style>