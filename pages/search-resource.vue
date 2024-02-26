<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div class="nolink">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <div>
          <h1 class="text-3xl font-bold">
            Ressourcenüberblick
          </h1>
        </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center;">
        <div v-for="x in resources" :key="x"
          style="width: 350px; display: inline-block; margin: 10px; text-align: left; vertical-align: top;">
         
          <v-card style="margin-bottom: 10px;" :elevation="x.rank">
            <v-card-title>
              <a :href="x.url" target="_blank">
                <h2 class="text-xl" v-html="x.nameShort">
                </h2>
              </a>
            </v-card-title>
            <v-card-text>
              <a :href="x.url" target="_blank">
                <img v-if="x.img != undefined" :src="x.img"
                  style="width: 100%; height: auto; margin-bottom: 10px;" />
                <img v-else src="/dummy/resource.png" style="width: 100%; height: auto; margin-bottom: 10px;" />                
                <div v-html="x.description">                  
                </div>
              </a>
              <br />
              <div>
                <v-chip v-for="t in x.tags" color="darkgrey" style="margin: 5px;" :variant="getChipVariant(t)" size="small"
                  @click="switchChip(t)">{{ t }}</v-chip>
              </div>
            </v-card-text>
          </v-card>
        
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
      items: [],
      selected_tags: [],
      resourcesStore: null,
      resources: [],
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();
    this.resources = this.resourcesStore.getResources(null);

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