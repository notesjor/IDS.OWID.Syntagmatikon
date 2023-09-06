<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <div>
        <h1 class="text-3xl font-bold">
          Suche nach Ressourcen
        </h1>
        <p>
          Die Folgende Suche erlaubt einen Type-Ahead-Suche über alle Ressourcen im Syntagmatikon.
          Die Ressourcen sind nach Kategorien sortiert und können nach verschiedenen Kriterien gefiltert werden.
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
              <v-expansion-panel title="Ressourcen-Typus">
                <v-expansion-panel-text>
                  <v-checkbox density="compact" hide-details="true" label="Datenbank"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Inventar"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Sammlung"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Wörterbuch"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Präsentationsformat"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Pilot-/Einzelstudie"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Ressourcen-Subtypus">
                <v-expansion-panel-text>
                  <v-checkbox density="compact" hide-details="true" label="Deskriptiv"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Explorativ"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
          <v-list-item style="margin:-20px 0px 0px 0px;">
            <v-list-subheader>
              Artikel/Datenpunkt
            </v-list-subheader>
            <v-expansion-panels style="padding: 5px;" multiple>
              <v-expansion-panel title="Klassifikation">
                <v-expansion-panel-text>
                  <v-checkbox density="compact" hide-details="true" label="Datenpunkt"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Wörterbuchartikel"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Kurzbeschreibung"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Analyse"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Umfrage"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Übersetzung"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Anzahl an Token">
                <v-expansion-panel-text>
                  <v-slider v-model="slider2"></v-slider>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Umfang">
                <v-expansion-panel-text>
                  <v-range-slider v-model="slider1" strict></v-range-slider>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
          <v-list-item style="margin:-20px 0px 0px 0px;">
            <v-list-subheader>
              Lorem Ipsum
            </v-list-subheader>
            <v-expansion-panels style="padding: 5px;" multiple>
              <v-expansion-panel title="Dolore sit amet">
                <v-expansion-panel-text>
                  <v-checkbox density="compact" hide-details="true" label="Datenbank"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Inventar"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Sammlung"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Wörterbuch"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Präsentationsformat"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Pilot-/Einzelstudie"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Typik">
                <v-expansion-panel-text>
                  <v-checkbox density="compact" hide-details="true" label="Deskriptiv"></v-checkbox>
                  <v-checkbox density="compact" hide-details="true" label="Explorativ"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="6">
      <div v-for="r in ressources" :key="r">
        <v-card class="mx-auto" style="margin-top: 10px">
          <v-card-title>
            <div class="text-xl font-bold">
              <v-icon style="transform: rotate(30deg);">mdi-square-outline</v-icon>
              {{ r.title }}
            </div>
            <div class="text-sm">
              {{ r.subtitle }}
            </div>
          </v-card-title>
          <v-card-text>
            <div class="text-sm">
              {{ r.tags }}
            </div>
          </v-card-text>
        </v-card>    
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  theme: { dark: false },
  data() {
    return {
      query: "",
      items: [],

      panels_resources: [0],

      slider1: [20, 40],
      slider2: 50,

      ressources: [
        //{ "title": "Explorative Datenbanken", type: "subheader", value: 1000 },
        { "title": "KoMuX", value: 1100, subtitle: "Durchsuche mehr als 50.000 Komposita" },
        { "title": "PREPCON (explorativ)", value: 1200, subtitle: "Präpositionale Wortverbindungen in unterschiedlichen Beschreibungstiefen" },

        //{ "title": "Deskriptive Datenbanken", type: "subheader", value: 2000 },
        { "title": "MAP", value: 2100, subtitle: "Musterbank Argumentmarkierender Präpositionen" },
        { "title": "Wörterbuch Redeeinleiter", value: 2200, subtitle: "Musterbank Argumentmarkierender Präpositionen" },

        //{ "title": "Inventare und Sammlungen", type: "subheader", value: 3000 },
        { "title": "PhK-Liste", value: 3100, subtitle: "Musterbank unterschiedlichen Präpositionen" },
        { "title": "SpruchList", value: 3200, subtitle: "Wortverbindungen Durchsuche Präpositionen" },
        { "title": "PREPCON (teporal)", value: 3300, subtitle: "Musterbank Argumentmarkierender Präpositionen" },
        { "title": "DTWW", value: 3400, subtitle: "Musterbank Beschreibungstiefen Präpositionen" },

        //{ "title": "Online Wörterbücher", type: "subheader", value: 4000 },
        { "title": "OWID Sprichwörterbuch", value: 4100, subtitle: "Musterbank unterschiedlichen Komposita" },
        { "title": "OWID Kleines Wörterbuch der Verlaufsformen im Deutschen", value: 4200, subtitle: "Wortverbindungen unterschiedlichen Präpositionen" },
        { "title": "OWID Feste Wortverbindungen", value: 4300, subtitle: "Musterbank Beschreibungstiefen Präpositionen" },

        //{ "title": "Korpuszentrierte Präsentationsformate", type: "subheader", value: 5000 },
        { "title": "OWID Sprichwörterbuch", value: 5100 },
        { "title": "PREPCON (teporal)", value: 5200 },
        { "title": "PREPCON (explorativ)", value: 5300 },

        //{ "title": "Pilot- und Einzelstudien", type: "subheader", value: 6000 },
        { "title": "DRI online", value: 6100 },
        { "title": "Verietäten Kontakt", value: 6200 },
        { "title": "Probandenbefragungen Redewendungen", value: 6300 }
      ]
    }
  },
  watch: {
    query: function (val) {

      var self = this;
      // returns json like this: [[{"ID":36,"Dictionary":"Deutsch-türkische Wortverbindungen Wirtschaft","Entry":" ","Position":0},{"ID":5,"Dictionary":"PREPCONonline temporal - Inventar","Entry":"ab\tAugust","Position":0},{"ID":17,"Dictionary":"PREPCONonline temporal - Inventar","Entry":"ab\tDonnerstagnacht","Position":0}]]

      fetch("http://lexik02.ids-mannheim.de/spillT/search?q=" + encodeURIComponent(val.toLowerCase()))
        .then(response => response.json())
        .then(data => {
          var tmp = data[0];
          tmp.forEach(function (item) {
            item.Entry = item.Entry.replace(/\t/g, " ");
          });
          self.$data.items = tmp;
        });
    }
  }
}
</script>

<style scoped>
.v-list-subheader {
  margin-top: 20px !important;
}
</style>