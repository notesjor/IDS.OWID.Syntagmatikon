<template>
  <div style="max-width: 120ch;">
    <v-row>
      <v-col>
        <div>
          <h1 class="text-3xl font-bold">
            Ressourcen erklärt
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit voluptate
          molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
          necessitatibus temporibus facere?

          <br />&nbsp;<br />

        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-list style="margin-top:-20px">
            <v-list-item v-for="(x, i) in ressources" :key="x.value" style="margin:-20px 0px 0px 0px">
              <v-list-subheader v-if="x.type === 'subheader'">
                {{ x.title }}
              </v-list-subheader>
              <v-list-item v-else :value="x.value" style="margin:5px 0px 5px 0px" prepend-icon="mdi-arrow-right"
                @click="load(i)">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ x.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ x.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <!--
              <div style="margin:3px -7px 0px -7px">
                <v-chip class="ma-2" label text-color="white" variant="outlined" v-for="tag in x.tags" :key="tag">
                  <v-icon start icon="mdi-tag-outline"></v-icon> {{ tag }}
                </v-chip>
              </div>
            -->
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            <h2 class="text-2xl">
              {{ currentItem.title }}
            </h2>
          </v-card-title>
          <v-card-sub-title>
            <h2 class="text-lg" style="margin-left:15px">
              {{ currentItem.subtitle }}
            </h2>
          </v-card-sub-title>
          <v-card-text>
            <p style="font-size: 16px; line-height: 23px;" v-html="currentItem.html">
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" :href="currentItem.link">Zur Ressource</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table id="kreuztabelle" style=" margin-left: auto; margin-right: auto;">
      <thead>
        <tr>
          <th rowspan="2"></th>
          <th colspan="2" class="text-xl font-extralight" style="text-align:center; background-color: rgba(0,0,0,0.05);">Datenbank</th>
          <th colspan="3" class="text-xl font-extralight" style="text-align:center; background-color: rgba(0,0,0,0.10);">Nachschlagen</th>
          <th colspan="2" class="text-xl font-extralight" style="text-align:center; background-color: rgba(0,0,0,0.15);">Analysen</th>
        </tr>
        <tr>
          <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.05);">
            <span>Explorativ</span></th>
          <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.05);">
            <span>Deskriptiv</span></th>
          <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
            <span>Inventar</span></th>
          <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
            <span>Sammlung</span></th>
          <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
            <span>Wörterbuch</span></th>
          <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.15);">
            <span>Korpusanalyse</span></th>
          <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.15);">
            <span>Pilot-/Einzelstudie</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <!--<td rowspan="2" class="text-lg">Zeile 1</td>-->
          <td style="text-align: right;">KoMuX</td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr>
          <td style="text-align: right;">Prepcon <sup>(explorativ)</sup></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><!--<v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon>--></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <td style="text-align: right;">MAP</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr>
          <td style="text-align: right;">Wörterbuch Redeeinleiter</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><!--<v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon>--></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <td style="text-align: right;">PhK-Liste</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr>
          <td style="text-align: right;">Prepcon <sup>(explorativ)</sup></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <td style="text-align: right;">MAP</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><!--<v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon>--></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr>
          <td style="text-align: right;">Wörterbuch Redeeinleiter</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <td style="text-align: right;">PhK-Liste</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr>
          <td style="text-align: right;">Prepcon <sup>(explorativ)</sup></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <td style="text-align: right;">MAP</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
        </tr>
        <tr>
          <td style="text-align: right;">Wörterbuch Redeeinleiter</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>          
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
        </tr>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <td style="text-align: right;">PhK-Liste</td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
          <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
          <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
        </tr>
      </tbody>
    </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  theme: { dark: false },
  data() {
    return {
      ressources: [
        { "title": "Explorative Datenbanken", type: "subheader", value: 1000 },
        { "title": "KoMuX", value: 1100, tags: ["Datenbank", "Explorativ", "Komposita", "Häufigkeit"], subtitle: "Durchsuche mehr als 50.000 Komposita" },
        { "title": "PREPCON (explorativ)", value: 1200, subtitle: "Präpositionale Wortverbindungen in unterschiedlichen Beschreibungstiefen" },

        { "title": "Deskriptive Datenbanken", type: "subheader", value: 2000 },
        { "title": "MAP", value: 2100, subtitle: "Musterbank Argumentmarkierender Präpositionen" },
        { "title": "Wörterbuch Redeeinleiter", value: 2200, subtitle: "Musterbank Argumentmarkierender Präpositionen" },

        { "title": "Inventare und Sammlungen", type: "subheader", value: 3000 },
        { "title": "PhK-Liste", value: 3100, subtitle: "Musterbank unterschiedlichen Präpositionen" },
        { "title": "SpruchList", value: 3200, subtitle: "Wortverbindungen Durchsuche Präpositionen" },
        { "title": "PREPCON (teporal)", value: 3300, subtitle: "Musterbank Argumentmarkierender Präpositionen" },
        { "title": "DTWW", value: 3400, subtitle: "Musterbank Beschreibungstiefen Präpositionen" },

        { "title": "Online Wörterbücher", type: "subheader", value: 4000 },
        { "title": "OWID Sprichwörterbuch", value: 4100, subtitle: "Musterbank unterschiedlichen Komposita" },
        { "title": "OWID Kleines Wörterbuch der Verlaufsformen im Deutschen", value: 4200, subtitle: "Wortverbindungen unterschiedlichen Präpositionen" },
        { "title": "OWID Feste Wortverbindungen", value: 4300, subtitle: "Musterbank Beschreibungstiefen Präpositionen" },

        { "title": "Korpuszentrierte Präsentationsformate", type: "subheader", value: 5000 },
        { "title": "OWID Sprichwörterbuch", value: 5100 },
        { "title": "PREPCON (teporal)", value: 5200 },
        { "title": "PREPCON (explorativ)", value: 5300 },

        { "title": "Pilot- und Einzelstudien", type: "subheader", value: 6000 },
        { "title": "DRI online", value: 6100 },
        { "title": "Verietäten Kontakt", value: 6200 },
        { "title": "Probandenbefragungen Redewendungen", value: 6300 }
      ],

      items: {
        0: {
          title: "KoMuX",
          subtitle: "Durchsuche mehr als 50.000 Komposita",
          html: "<img src=\"https://www.owid.de/plus/data/img/cowidplus.png\" alt=\"KoMuX Logo\" style=\"width:50%; margin-left: 10px; float: right;\"> Mit dieser vom Arbeitsbereich Wortbildungsmuster entwickelten Webanwendung kann man ein Inventar von über 50.000 nominalen Komposita gezielt nach abstrakten oder lexikalisch-teilspezifizierten Mustern durchsuchen. Kompositagruppen werden durch grammatische (Wortbildungstyp oder Wortart) oder lexikalische Eigenschaften (konkretes Lemma) der Erst- und Zweitglieder definiert. Visualisierungen unterstützen dabei, die Ergebnismenge näher zu analysieren.",
          link: "https://www.owid.de/plus/komux/"
        },
        1: {
          title: "PREPCON (explorativ)",
          subtitle: "Präpositionale Wortverbindungen in unterschiedlichen Beschreibungstiefen",
          html: "<strong>Inhalt:</strong> ca. 80.000 PNs des Deutschen (68 Präposition-Tabellen; 30.000 Nomen-Tabellen)<br/><strong>Nutzerfunktionalität:</strong> Abrufen von systematisierten Korpusdaten (<a>KWICs</a>, <a>Volltextstellen</a>, <a>KOOK-Profile</a>, <a>lexpan-Mustertabellen</a>) und narrativen Kommentaren; Navigieren durch Verlinkungen",
          link: "http://uwv.ids-mannheim.de/prepcon/modul1/index.html"
        }
      },

      currentItem: {
          title: "KoMuX",
          subtitle: "Durchsuche mehr als 50.000 Komposita",
          html: "<img src=\"https://www.owid.de/plus/data/img/cowidplus.png\" alt=\"KoMuX Logo\" style=\"width:50%; margin-left: 10px; float: right;\"> Mit dieser vom Arbeitsbereich Wortbildungsmuster entwickelten Webanwendung kann man ein Inventar von über 50.000 nominalen Komposita gezielt nach abstrakten oder lexikalisch-teilspezifizierten Mustern durchsuchen. Kompositagruppen werden durch grammatische (Wortbildungstyp oder Wortart) oder lexikalische Eigenschaften (konkretes Lemma) der Erst- und Zweitglieder definiert. Visualisierungen unterstützen dabei, die Ergebnismenge näher zu analysieren.",
          link: "https://www.owid.de/plus/komux/"
        },
    }
  },

  mounted() {
    this.load(0);
  },

  methods: {
    load(id) {
      id--;
      if (id >= this.items.length)
        id = 0;      
      this.currentItem = this.items[id];
    }
  }

}
</script>
<style scoped>
a {
  text-decoration: underline;
}
td {
  text-align: center;
}
</style>
<style scoped>
.v-list-subheader {}
</style>