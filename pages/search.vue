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
            <search-box title="Ressourcen" :items="search_resources" :enable="group_resources"
              @update="x => reciveUpdate('select_resources', x)"></search-box>
            <search-box title="Zugänge" :items="search_displays" :enable="group_displays"
              @update="x => reciveUpdate('select_displays', x)"></search-box>
            <search-box title="Ressourcentypen (Zugang)" :items="search_subtypes" :enable="group_subtypes"
              @update="x => reciveUpdate('select_subtypes', x)"></search-box>
            <search-box title="Ressourcentypen (Typus)" :items="search_types" :enable="group_types"
              @update="x => reciveUpdate('select_types', x)"></search-box>
            <search-box title="Informationstypen" :items="search_functions" :enable="group_functions"
              @update="x => reciveUpdate('select_functions', x)"></search-box>
            <search-box title="Wort- und Ausdrucksarten" :items="search_parts" :enable="group_parts"
              @update="x => reciveUpdate('select_parts', x)"></search-box>
            <search-box title="Musterzugang" :items="search_patterns" :enable="group_patterns"
              @update="x => reciveUpdate('select_patterns', x)"></search-box>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" class="nolink">
      <div v-if="items == null">
        <v-alert text="Suchen Sie zuerst nach einem Eintrag..." type="info" variant="outlined"></v-alert>
      </div>
      <div v-else>
        <v-card style="padding:10px">
          <!--
          <v-tabs v-model="tab">
            <v-tab value="t1" style="text-transform: none;">
              <v-icon>mdi-database-outline</v-icon> Nach Ressourcen
            </v-tab>
            <v-tab value="t2" style="text-transform: none;">
              <v-icon>mdi-lock-pattern</v-icon> Nach Muster
            </v-tab>
            <v-tab value="t3" style="text-transform: none;">
              <v-icon>mdi-text-search</v-icon> Nur Einträge
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="t1">
              {{ filteredResources }}
            </v-window-item>

            <v-window-item value="t2">
              Two
            </v-window-item>

            <v-window-item value="t3">
              <a :href="x.url" target="_blank" v-for="x in items" :key="x.id">
                <div>
                  <v-card-title>
                    <v-icon>mdi-open-in-new</v-icon> {{ x.key }} <span style="color:#999">({{ getName(x.dic) }})</span>
                  </v-card-title>
                </div>
              </a>
            </v-window-item>
          </v-window>
        -->
          <search-group v-for="x in groups" :key="x" :title="x" :query="query" :resources="filteredResources"></search-group>
        </v-card>
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

      // TODO: Refactoring

      search_resources: null,
      search_displays: null,
      search_types: null,
      search_subtypes: null,
      search_functions: null,
      search_patterns: null,
      search_parts: null,

      group_resources: true,
      group_displays: false,
      group_types: false,
      group_subtypes: false,
      group_functions: false,
      group_patterns: false,
      group_parts: false,

      select_resources: null,
      select_displays: null,
      select_types: null,
      select_subtypes: null,
      select_functions: null,
      select_patterns: null,
      select_parts: null,

      query: "",
      items: null,

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

    this.search_resources = this.getSet("nameShort");
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
    },
    searchNew(query) {
      var self = this;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer 8jRAqq_GbtjdjveIOCxIlnztXjwFbcaMYp-e50HtbrQ");

      var raw = JSON.stringify({
        "q": query,
        //        "filter": [
        //          `dic = ${this.filteredResources.join(" OR ")}`
        //        ],
        "limit": 10
      });

      console.log(raw);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://lexik08.ids-mannheim.de/meilisearch/indexes/syntagmatikon/search", requestOptions)
        .then(response => {
          return response.json();
        })
        .then(result => {
          self.items = result.hits;
        })
        .catch(error => console.log('error', error));
    },
    filterResources(selected, res, prop) {
      if (selected != null) {
        selected.forEach(x => {
          this.resources.filter(y => y[prop].includes(x)).forEach(z => {
            res.delete(z.key);
          });
        });
      }
      return res;
    },
    reciveUpdate(prop, data) {
      if(this.syncLock)
        return;

      this[prop] = data.items;
      
      if(data.enable){
        this.syncLock = true;
        var keys = Object.keys(this.$data);
        var not = prop.replace("select_", "group_");
        keys.forEach(x => {
          if(x.startsWith("group_") && x != not){
            this[x] = false;
          }
        });
        this.syncLock = false;
      }      
      
    }
  },
  computed: {
    filteredResources() {
      var res = [];
      this.resources.forEach(x => {
        res.push(x.key);
      });

      res = this.filterResources(this.select_displays, res, "search_display");
      res = this.filterResources(this.select_types, res, "search_type");
      res = this.filterResources(this.select_subtypes, res, "search_subtype");
      res = this.filterResources(this.select_functions, res, "search_functions");
      res = this.filterResources(this.select_patterns, res, "search_patterns");
      res = this.filterResources(this.select_parts, res, "search_parts");

      return res;
    }
  },
  watch: {
    query: function (val) {
      this.searchNew(val);
    }
  }
}
</script>

<style scoped>
.v-list-subheader {
  margin-top: 20px !important;
}
</style>