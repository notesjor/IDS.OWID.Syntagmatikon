<template>
  <v-row>
    <v-col>
      <div>
        <h1 class="text-3xl font-bold">
          Ressourcen finden und durchsuchen
        </h1>
        <p>
          Die Folgende Liste erlaubt einen Überblickssuche in den Ressourcen des Syntagmatikons. <br />
          Die Ressourcen sind nach Kategorien sortiert und können nach verschiedenen Kriterien gefiltert werden.
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-text-field
            label="Bitte Suchausruck eingeben..."
            append-inner-icon="mdi-magnify"
            variant="solo"
          ></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-expansion-panels multiple v-model="panels">
        <v-expansion-panel title="EXPLORATIVE DATENBANKEN" value="edb">
          <v-expansion-panel-text>
            <ul>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">KoMuX</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">PREPCON <sup>(explorativ)</sup></span></li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="DESKRIPTIVE DATENBANKEN" value="ddb">
          <v-expansion-panel-text>
            <ul>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">MAP</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">Wörterbuch Redeeinleiter</span></li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="INVENTARE / SAMMLUNGEN" value="ius">
          <v-expansion-panel-text>
            <ul>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">PhK-Liste</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">SpruuchList</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">PREPCON <sup>teporal</sup></span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">DTWW</span></li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="ONLINE WÖRTERBÜCHER" value="ow">
          <v-expansion-panel-text>
            <ul>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">OWID Sprichwörterbuch</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">OWID Kleines Wörterbuch der Verlaufsformen im Deutschen</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">OWID Feste Wortverbindungen</span></li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="KORPUSZENTRIERTE PRÄSENTATIONSFORMATE" value="kp">
          <v-expansion-panel-text>
            <ul>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">OWID Sprichwörterbuch</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">PREPCON <sup>(temporal)</sup> Kurzartikel</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">PREPCON <sup>(explorativ)</sup></span></li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="PILOT UND EINZELSTUDIEN" value="pue">
          <v-expansion-panel-text>
            <ul>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">DRI online</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">Verietäten Kontakt</span></li>
              <li><v-icon>mdi-book-arrow-right-outline</v-icon><span style="margin-left:10px">Probandenbefragungen Redewendungen</span></li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
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
          <p style="font-size: 16px;">
            <img src="https://www.owid.de/plus/data/img/owidpluslive.png" alt="KoMuX Logo" style="width:50%; margin-right: 10px; float: left;">
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
            <img src="https://www.owid.de/plus/data/img/cowidplus.png" alt="KoMuX Logo" style="width:50%; margin-left: 10px; float: right;">
            Der Muster-Zugang zum Komposita-Inventar bildet nicht nur die zentrale Suchfunktionalität von KoMuX, sondern
            ist auch linguistisch motiviert. Wir betrachten Komposita als konkrete sprachliche Realisierungen von
            zugrundeliegenden abstrakten oder lexikalisch-teilspezifizierten Mustern. Diese Muster wiederum können z.B.
            zur Erklärung von beobachtbaren Produktivitätsunterschieden herangezogen oder – ganz allgemein - als
            Grundprinzip verstanden werden, das erklärt, wie die Komposition grundsätzlich funktioniert bzw. wie sich das
            Inventar von Komposita systematisieren lässt. Der Musteransatz bietet darüber hinaus eine direkte
            Anschlussfähigkeit an Grammatiktheorien wie die Konstruktionsgrammatik (KxG).
          </p>
        </v-card-text>
      </v-card>
  </v-col>
</v-row></template>

<script>
export default {
  theme: { dark: false },
  data() {
    return {
      panels: ['edb', 'ddb', 'ius', 'ow', 'kp', 'pue']
    }
  }
}
</script>
