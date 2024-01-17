<template>
  <div style="max-width: 80ch;">
    <v-row>
      <v-col>
        <div>
          <h1>
            Was ist das Syntagmatikon?
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          Ein Syntagmatikon stellt ein korpuszentriertes Online-Präsentationsformat dar, dass Struktur und Gebrauch linear
          verfestigter lexikalische Ausdrücke und Ausdrucksgruppen auf neuartige Weise darstellt und visualisiert
          (
          <Reference text="Syntagmatik" />). Dieses Format kann man auch als ‚Datikon‘ bezeichnen.

          <br />&nbsp;<br />

          Das Wort Datikon setzt sich zusammen aus (Sprach-)Daten und Lexikon, und genau darum geht es: eine Kombination
          zwischen Sprachmassendaten auf der Basis riesiger Textdatenbanken
          (
          <Reference text="Korpora" />) und linguistisch-lexikografischen
          Informationen, wie man sie in Wörterbüchern oder Lexika findet. Dass Besondere ist, dass neben
          linguistisch-beschreibenden Texten authentische Sprachdaten ins Zentrum rücken, diese also nicht nur als
          empirische Basis dienen, sondern selbst zu Informationseinheiten werden.

          <br />&nbsp;<br />

          Ein Datikon enthält sowohl Informationen, die durch verschieden Analysetypen gewonnen werden:
          <ul>
            <li>rein automatisch
              (
              <Reference text="automatische Daten" />)
            </li>
            <li>semi-automatisch (Sortierung und Systematisierung von automatischen Daten „von Hand“
              <Reference text="semi-automatische Daten" />)
            </li>
            <li>qualitativ
              (
              <Reference text="narrative Kommentare" />;
              <Reference text="kategoriale Angaben" />)
            </li>
          </ul>

          Je nach Zielsetzung und Vorgehen unterscheidet sich der Anteil der Informationstypen in der jeweiligen
          Datikon-Ressource.
          Dem Konzept dieses modularen Onlineformats liegt die Erkenntnis zugrunde, dass die lexikografische Erfassung
          verfestigter Wortgruppen und von lexikalisch geprägten Mustern nicht nach einem fest gefügten
          Beschreibungsraster erfolgen kann, sondern dass nur eine datennahe und dynamisch-flexible Erfassung in
          unterschiedlichen Beschreibungstiefen der Komplexität dieser sprachlichen Phänomene gerecht wird. Anhand von
          linguistisch systematisierten und kommentierten, aber authentischen Sprachdaten wird die Möglichkeit geschaffen,
          Informationen zum usuellen Gebrauch abzuleiten.

          Das Syntagmatikon vereint folgende Ressourcen: 
          <ul>
            <li>explorative Datenbanken</li>
            <li>deskriptive Datenbanken</li>
            <li>semiautomatische Inventare / Sammlungen </li>
            <li>Online-Wörterbücher</li>
            <li>korpuszentrierte Präsentationsformate</li>
            <li>Pilot- und Einzelstudien</li>
          </ul>
          Eine ausführliche Beschreibung finden Sie hier
          <Reference text="Ressourcen" />.

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
    test() {
      alert("test");
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 25px;
}

ol {
  list-style-type: decimal;
  list-style-position: inside;
  margin-left: 25px;
}

ul ul,
ol ul {
  list-style-type: circle;
  list-style-position: inside;
  margin-left: 15px;
}

ol ol,
ul ol {
  list-style-type: lower-latin;
  list-style-position: inside;
  margin-left: 15px;
}</style>