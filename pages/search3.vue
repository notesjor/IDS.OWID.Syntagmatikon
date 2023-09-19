<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <div>
        <h1 class="text-3xl font-bold">
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
    <v-col>
      <div v-for="x in items" :key="x.id" style="max-width: 450px; margin-left: auto; margin-right: auto;">
        <a :href="x.url" target="_blank">
          <v-card style="margin-bottom: 10px;">
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
          </v-card>
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  theme: { dark: false },
  data() {
    return {
      query: '',
      items: [],

      names: {
        "komux": "KoMuX",
        "sprwb": "Sprichwörterbuch",
        "verla": "Verlaufsformen",
        "prexp": "Prepcon explorativ",
        "preko": "Prepcon kontrastiv",
        "preti": "Prepcon temporal (Inventar)",
        "pretk": "Prepcon temporal (Kurzartikel)",
      }
    }
  },
  methods:{
    getName: function(dic){
      return dic in this.names ? this.names[dic] : dic;
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
        .then(response => response.json())
        .then(result => self.items = result.hits)
        .catch(error => console.log('error', error));
    }
  }
}
</script>

<style scoped>
.v-list-subheader {
  margin-top: 20px !important;
}
</style>