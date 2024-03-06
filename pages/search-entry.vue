<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <div>
        <h1>
          Suche nach Einträgen
        </h1>
        <p>
          Die Folgende Suche erlaubt einen Type-Ahead-Suche über alle Ressourcen im Syntagmatikon.
          Der Suchausdruck kann an einer beliebigen Stelle im Eintrag vorkommen.
        </p>
        <br />
        <v-text-field label="Bitte Suchausdruck eingeben..." append-inner-icon="mdi-magnify" variant="solo"
          v-model="query"></v-text-field>
      </div>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
  <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="4">
      <v-card class="mx-auto">
        <v-list style="margin-top:-20px">
          <v-list-item style="margin:-20px 0px 0px 0px;">
            <v-list-subheader>
              Ressourcen
            </v-list-subheader>
            <v-expansion-panels style="padding: 5px;" multiple v-model="panels_resources">
              <search-box title="Zugänge" :items="search_displays"></search-box>
              <search-box title="Merkmale" :items="search_subtypes"></search-box>
              <search-box title="Ressourcentypen" :items="search_types"></search-box>
              <search-box title="Daten- und Informationstypen" :items="search_functions"></search-box>
              <search-box title="Wort- und Ausdrucksarten" :items="search_parts"></search-box>
              <search-box title="Muster" :items="search_patterns"></search-box>
            </v-expansion-panels>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="6" class="nolink">
      <div v-if="items == null">
        <v-alert text="Suchen Sie zuerst nach einem Eintrag..." type="info" variant="outlined"></v-alert>
      </div>
      <div v-else v-for="x in items" :key="x.id" style="max-width: 450px; margin-left: auto; margin-right: auto;">
        <a :href="x.url" target="_blank">
          <div style="margin-bottom: 10px;">
            <v-card-title>
              <h2 class="text-xl">
                {{ x.key }}
              </h2>
            </v-card-title>
            <v-card-subtitle>
              <h3 class="text-lg" style="margin-top: -7px;">
                {{ getName(x.dic) }}
              </h3>
            </v-card-subtitle>
          </div>
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';
export default {
  theme: { dark: false },
  data() {
    return {
      resourcesStore: null,
      resources: [],

      search_displays: null,
      search_types: null,
      search_subtypes: null,
      search_functions: null,
      search_patterns: null,
      search_parts: null,

      query: "",
      items: null,

      panels_resources: [0],
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();
    this.resources = this.resourcesStore.getResources(null);

    this.search_displays = this.getSet("search_display");
    this.search_types = this.getSet("search_type");
    this.search_subtypes = this.getSet("search_subtype");
    this.search_functions = this.getSet("search_functions");
    this.search_patterns = this.getSet("search_patterns");
    this.search_parts = this.getSet("search_parts");
  },
  methods: {
    getSet(name) {
      var self = this;
      var res = new Set();

      if (self.resources[0][name] instanceof Array) {        
        self.resources.forEach(x => {
          if (x[name] != null && x[name] != "") {
            x[name].forEach(y => {
              res.add(y);
            });
          }
        });
      }
      else {
        self.resources.forEach(x => {
          if (x[name] != null && x[name] != "") {
            res.add(x[name]);
          }
        });
      }
      return res;
    },
    getName: function (dic) {
      var self = this;
      var res = self.resources.find(x => x.code == dic);
      if (res) {
        return res.title;
      }
      return dic;
    }
  },
  watch: {
    query: function (val) {

      var self = this;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer 8jRAqq_GbtjdjveIOCxIlnztXjwFbcaMYp-e50HtbrQ");

      var raw = JSON.stringify({
        "q": val
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://lexik08.ids-mannheim.de:7700/indexes/syntagmatikon/search", requestOptions)
        .then(response => {
          return response.json();
        })
        .then(result => {
          self.items = result.hits;
        })
        .catch(error => console.log('error', error));
    }
  }
}
</script>

<style scoped>.v-list-subheader {
  margin-top: 20px !important;
}</style>