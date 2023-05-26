<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <div>
        <h1 class="text-3xl font-bold">
          Ressourcen finden und durchsuchen
        </h1>
        <p>
          Die Folgende Liste erlaubt einen Überblickssuche in den Ressourcen des Syntagmatikons. <br />
          Die Ressourcen sind nach Kategorien sortiert und können nach verschiedenen Kriterien gefiltert werden.
        </p>
        <br />
        <v-text-field label="Bitte Suchausruck eingeben..." append-inner-icon="mdi-magnify" variant="solo"></v-text-field>
      </div>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-card class="mx-auto">
        <v-list style="margin-top:-20px">
          <v-list-item v-for="x in ressources" :key="x.value" style="margin:-20px 0px 0px 0px">
            <v-list-subheader v-if="x.type === 'subheader'">
              {{ x.title }}
            </v-list-subheader>
            <v-list-item v-else :value="x.value" style="margin:5px 0px 5px 0px" prepend-icon="mdi-arrow-right">
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
            KoMuX
          </h2>
        </v-card-title>
        <v-card-sub-title>
          <h2 class="text-lg" style="margin-left:15px">
            Durchsuche mehr als 50.000 Komposita
          </h2>
        </v-card-sub-title>
        <v-card-text>
          <div>
            <v-chip class="ma-2" label text-color="white" variant="outlined" density> <v-icon start
                icon="mdi-tag-outline"></v-icon> Datenbank </v-chip>
            <v-chip class="ma-2" label text-color="white" variant="outlined" density> <v-icon start
                icon="mdi-tag-outline"></v-icon> Explorativ </v-chip>
            <v-chip class="ma-2" label text-color="white" variant="outlined" density> <v-icon start
                icon="mdi-tag-outline"></v-icon> Komposita </v-chip>
            <v-chip class="ma-2" label text-color="white" variant="outlined" density> <v-icon start
                icon="mdi-tag-outline"></v-icon> Häufigkeit </v-chip>
            <v-chip class="ma-2" label text-color="white" variant="outlined" density> <v-icon start
                icon="mdi-tag-outline"></v-icon> Visualisierung </v-chip>
            <v-chip class="ma-2" label text-color="white" variant="outlined" density> <v-icon start
                icon="mdi-tag-outline"></v-icon> Daten </v-chip>
            <v-chip class="ma-2" label text-color="white" variant="outlined" density> <v-icon start
                icon="mdi-tag-outline"></v-icon> Sonstiges </v-chip>
          </div>
          <p style="font-size: 16px; line-height: 23px;">
            <img src="https://www.owid.de/plus/data/img/owidpluslive.png" alt="KoMuX Logo"
              style="width:50%; margin-right: 10px; float: left;">
            KoMuX, der Kompositamuster-Explorer, wurde vom Arbeitsbereich Wortbildungsmuster am Leibniz-Institut für
            deutsche Sprache entwickelt und bietet die Möglichkeit, ein Inventar von ca. 50.000 nominalen Komposita
            gezielt nach zugrundeliegenden abstrakten oder lexikalisch-teilspezifizierten Mustern zu durchsuchen. KoMuX
            basiert auf einer systematischen Datenerhebung, bei der erstmals alle nominalen Komposita automatisch aus dem
            KoGra Untersuchungskorpus, einem Ausschnitt des Deutschen Referenzkorpus (DeReKo), extrahiert wurden – diese
            Datengrundlage ist unseres Wissens bisher die erste ihrer Art. Mit KoMuX wird nun ein Teil dieses
            Komposita-Inventars des Deutschen systematisch durchsuchbar gemacht, und zwar aus einer Muster-Perspektive
            heraus. Auf diese Weise kann man sich Gruppen von Komposita anzeigen lassen, die sich durch die Kombination
            von Erst- und Zweitgliedern mit jeweils spezifischen grammatischen (Wortbildungstyp oder Wortart),
            (semantisch-)thematischen (Kategorien basierend auf GermaNet-Wortfeldern) oder lexikalischen Eigenschaften
            (konkretes Lemma) definieren.
            <br />
            <img src="https://www.owid.de/plus/data/img/cowidplus.png" alt="KoMuX Logo"
              style="width:50%; margin-left: 10px; float: right;">
            Der Muster-Zugang zum Komposita-Inventar bildet nicht nur die zentrale Suchfunktionalität von KoMuX, sondern
            ist auch linguistisch motiviert. Wir betrachten Komposita als konkrete sprachliche Realisierungen von
            zugrundeliegenden abstrakten oder lexikalisch-teilspezifizierten Mustern. Diese Muster wiederum können z.B.
            zur Erklärung von beobachtbaren Produktivitätsunterschieden herangezogen oder – ganz allgemein - als
            Grundprinzip verstanden werden, das erklärt, wie die Komposition grundsätzlich funktioniert bzw. wie sich das
            Inventar von Komposita systematisieren lässt. Der Musteransatz bietet darüber hinaus eine direkte
            Anschlussfähigkeit an Grammatiktheorien wie die Konstruktionsgrammatik (KxG).
          </p>
          <br />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
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
      ]
    }
  }
}
</script>

<style>
.v-list-subheader {
  margin-top: 20px !important;
  ;
}
</style>