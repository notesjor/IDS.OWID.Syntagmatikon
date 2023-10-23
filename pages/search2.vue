<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <div>
        <h1 class="text-3xl font-bold">
          Suche nach Ressourcen
        </h1>
        <p>
          Die einzelnen Ressourcen im Syntagmatikon sind mit verschiedenen Kategorien und Eigenschaften verschlagwortet.
          Klicken Sie auf die entsprechenden Schlagworte, um ähnliche Ressourcen anzuzeigen.
        </p>
      </div>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
  <v-row>
    <v-col style="text-align: center;">
      <div v-for="x in ressources" :key="x" style="width: 350px; display: inline-block; margin: 10px; text-align: left; vertical-align: top;">
        <a :href="x.url" target="_blank">
          <v-card style="margin-bottom: 10px;">
            <v-card-title>
              <h2 class="text-xl">
                {{ x.title }}
              </h2>
            </v-card-title>
            <v-card-subtitle>
              <h3 class="text-lg" style="margin-top: -7px; text-wrap:wrap;">
                {{ x.subtitle }}
              </h3>
            </v-card-subtitle>
            <v-card-text>
              <img v-if="x.img != undefined" :src="'/sources/' + x.img" style="width: 100%; height: auto; margin-bottom: 10px;"/>
              <img v-else src="/sources/prepcon_temporal.jpg" style="width: 100%; height: auto; margin-bottom: 10px;" />

              <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam non officia vitae, est cumque ea tenetur quasi quidem id hic facilis necessitatibus architecto totam neque, animi consectetur rem eos? Unde.
              </div>

              <div>
                <v-chip 
                v-for="t in x.tags" 
                color="darkgrey" 
                style="margin: 5px;" 
                :variant="getChipVariant(t)"
                @click="switchChip(t)">{{ t }}</v-chip>
              </div>
            </v-card-text>
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
      },

      selected_tags: ["Datenbank"],

      ressources: [
        //{ "title": "Explorative Datenbanken", type: "subheader", value: 1000 },
        { "title": "KoMuX", code: "komux", value: 1100, subtitle: "Durchsuche mehr als 50.000 Komposita", img: "komux.jpg", tags: ["Komposita", "Datenbank", "Explorativ"] },
        { "title": "PREPCON (explorativ)", code: "prexp", value: 1200, subtitle: "Präpositionale Wortverbindungen in unterschiedlichen Beschreibungstiefen", img: "prepcon_explorativ.jpg", tags: ["Wortverbindungen", "Datenbank", "Explorativ"] },

        //{ "title": "Deskriptive Datenbanken", type: "subheader", value: 2000 },
        { "title": "MAP", code: "map", value: 2100, subtitle: "Musterbank Argumentmarkierender Präpositionen", tags: ["Muster", "Datenbank", "Desktiptiv"] },
        { "title": "Wörterbuch Redeeinleiter", value: 2200, subtitle: "Musterbank Argumentmarkierender Präpositionen", img: "redeeinleiter.jpg", tags: ["Redeeinleiter", "Datenbank", "Desktiptiv"] },

        //{ "title": "Inventare und Sammlungen", type: "subheader", value: 3000 },
        { "title": "PhK-Liste", value: 3100, subtitle: "Musterbank unterschiedlichen Präpositionen", tags: ["Inventar", "Sammlung"] },
        { "title": "SpruchList", value: 3200, subtitle: "Wortverbindungen Durchsuche Präpositionen", tags: ["Inventar", "Sammlung", "Sprichwort"] },
        { "title": "PREPCON (teporal)", code: "pretk", value: 3300, subtitle: "Musterbank Argumentmarkierender Präpositionen", img: "prepcon_temporal.jpg", tags: ["Temporal", "Inventar", "Sammlung"] },
        { "title": "DTWW", value: 3400, subtitle: "Musterbank Beschreibungstiefen Präpositionen", tags:["Mehrsprachig", "Türkisch", "Inventar", "Sammlung"] },

        //{ "title": "Online Wörterbücher", type: "subheader", value: 4000 },
        { "title": "OWID Sprichwörterbuch", code: "sprwb", value: 4100, subtitle: "Musterbank unterschiedlichen Komposita", tags: ["Sprichwort", "Wörterbuch", "Online"] },
        { "title": "OWID Kleines Wörterbuch der Verlaufsformen im Deutschen", code: "verla", value: 4200, subtitle: "Wortverbindungen unterschiedlichen Präpositionen", tags: ["Verlaufsform", "Wörterbuch", "Online"] },
        { "title": "OWID Feste Wortverbindungen", value: 4300, subtitle: "Musterbank Beschreibungstiefen Präpositionen", tags: ["Wortverbindungen", "Wörterbuch", "Online"] },

        //{ "title": "Korpuszentrierte Präsentationsformate", type: "subheader", value: 5000 },
        { "title": "OWID Sprichwörterbuch", value: 5100, tags: ["Sprichwort", "Korpus", "Online"] },
        { "title": "PREPCON (teporal)", code: "preti", value: 5200, img: "prepcon_temporal.jpg", tags: ["Temporal", "Korpus", "Online"] },
        { "title": "PREPCON (explorativ)", value: 5300, img: "prepcon_explorativ.jpg", tags: ["Explorativ", "Korpus", "Online"] },

        //{ "title": "Pilot- und Einzelstudien", type: "subheader", value: 6000 },
        { "title": "DRI online", value: 6100, tags: ["Mehrsprachig", "Russisch", "Online"] },
        { "title": "Verietäten Kontakt", value: 6200, tags: ["Mehrsprachig", "Varietäten", "Online"] },
        { "title": "Probandenbefragungen Redewendungen", value: 6300, tags: ["Probandenbefragungen", "Redewendung", "Einzelstudie"] }
      ]
    }
  },
  methods:{
    getName: function(dic){
      return dic in this.names ? this.names[dic] : dic;
    },
    getChipVariant: function(tag){
      return this.selected_tags.includes(tag) ? "elevated" : "outlined";
    },
    switchChip: function(tag){
      if(this.selected_tags.includes(tag)){
        this.selected_tags = this.selected_tags.filter(x => x != tag);
      }else{
        this.selected_tags.push(tag);
      }
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