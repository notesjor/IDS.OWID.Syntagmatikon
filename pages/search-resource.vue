<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div class="nolink">
    <v-row>
      <v-col>
        <h1 style="width:100%; text-align: center;">
          Ressourcenüberblick
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center;">
        <div v-for="x in resources" :key="x"
          style="width: 350px; display: inline-block; margin: 10px 0px 0px 0px; text-align: left; vertical-align: top;">

          <tile-simple-hover :url="x.url" :nameShort="x.nameShort" :img="x.img" :description="x.description" />

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';

export default {
  theme: { dark: false },
  data() {
    return {
      query: '',
      enable: true,
      items: [],
      selected_tags: [],
      resourcesStore: null,
      resources: [],
      filter: ["KoMuX", 'PREPCON', 'MAP', 'Redeeinleiter', 'SpruchList',
        'DTWW', 'SPRW', 'FesteWV', 'Verlaufsformen', 'WVBF',
        'DRI', 'PhrasKomp', 'Varietäten']
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();
    //this.resources = this.resourcesStore.getResources(null);
    this.resources = this.resourcesStore.getResources(this.filter);
  },
  methods: {
    getName: function (dic) {
      return dic in this.names ? this.names[dic] : dic;
    },
    getChipVariant: function (tag) {
      return this.selected_tags.includes(tag) ? "elevated" : "outlined";
    },
    switchChip: function (tag) {
      if (this.selected_tags.includes(tag)) {
        this.selected_tags = this.selected_tags.filter(x => x != tag);
      } else {
        this.selected_tags.push(tag);
      }

      // sort
      var set = new Set(this.selected_tags);

      for (let i = 0; i < this.resources.length; i++) {
        const entry = this.resources[i];
        if (entry.tags == undefined || entry.tags == null)
          continue;

        var rank = 0;
        for (let j = 0; j < entry.tags.length; j++) {
          if (set.has(entry.tags[j]))
            rank++;
        }

        this.resources[i].rank = rank == 0 ? 1 : ~~(rank / entry.tags.length * 20.0);
      }

      //this.resources.sort((a, b) => b.rank - a.rank);
    }
  },
  /*
  computed: {
    resources_filtered() {
      let resources_filtered = this.resources.filter(x => x.key in ['PREPCON_komp']);
      return resources_filtered;
    }
  },*/
  watch: {
    query: function (val) {
      /*
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
              .then(response => response.json())
              .then(result => self.items = result.hits)
              .catch(error => console.log('error', error));
              */
    },
  }
}
</script>

<style scoped>
.v-list-subheader {
  margin-top: 20px !important;
}
</style>