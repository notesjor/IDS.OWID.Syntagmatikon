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
            Informationstypen
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>
            Die Rubrik bündelt die Ressourcen unter dem Gesichtspunkt der Charakteristik ihrer Angaben (Informationstypen). Es wird zwischen rein automatischen und manuell bearbeiteten Daten unterschieden.</p>
            <p> Die Hintergrundtexte zeigen anhand anschaulicher Beispiele aus den Ressourcen, welche Fragen sich mit den jeweiligen Informationstypen bezüglich sprachlicher Struktur, Bedeutung, Gebrauch, Festigkeit, Varianz sowie Musterhaftigkeit beantworten lassen. Es handelt sich explizit nicht um ein Tutorial etwa zur Korpuslinguistik, sondern um einen Leitfaden zur Interpretation der im Syntagmatikon dargestellten Ergebnisse. 
</p>

          <br />&nbsp;<br />

        </div>
      </v-col>

    </v-row>
  </div>
  <div style="max-width: 100ch;">
    <v-row style="max-width: 1140px;">
      <v-col cols="12">
        <h2 style="margin:-20px 0px 10px 10px; border-bottom: 3px lightgray solid;">Automatische Informationstypen</h2>

        <div class="container">
          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Frequenzen" link="/datatypes/frequency">
            Häufigkeit des Vorkommens eines sprachlichen Ausdrucks im Korpus, ermittelt mithilfe von Zählungen
              und/oder Suchanfragen (queries)
            <br>
            <br>
            <b>Was kann man anhand Frequenzangaben im Syntagmatikon ablesen?</b>
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="KWIC (KeyWord In Context)" link="/datatypes/kwic">
            Zeilen (Konkordanzen), in denen das Suchobjekt vorkommt (Textschnipsel)
            <br>
            <br>
            <b>Was sagen KWIC-Angaben im Syntagmatikon über den Gebrauch einer sprachlichen Einheit aus?</b>
          </tile-gradient>
          <!--
          <tile title="Volltextstellen" img="/img/datatypes/belege.jpg" link="/datatypes/full-text">
            Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich gegenüber KWIC?
          </tile>
        -->

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Kookkurrenzprofile" link="/datatypes/cooccurrence">
            Durch statistische Berechnungen (sog. Kookkurrenzanalysen) ermittelte Partnerwort-Profile
              (überproportional häufiges Miteinandervorkommen von Wörtern und Wortgruppen)
            <br>
            <br>
            <b>Welche Hinweise liefern Kookkurrenzangaben im Syntagmatikon auf Bedeutung, Gebrauch und Festigkeit?</b>
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Lückenfüllertabellen" link="/datatypes/patterntable">
            Durch automatische Auswertung ermittelte Füllerhäufigkeiten innerhalb eines Musterslots
            <br>
            <br>
            <b>Welche Schlüsse lassen sich anhand der Füllertabellen im Syntagmatikon in Bezug auf die Festigkeit und Varianz syntagmatischer Einheiten ziehen?</b>
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Annotierte Daten" link="/datatypes/annotation">
            Durch automatische Annotationsprogramme kategorisierte Korpusdaten (z.B. nach Wortarten, Satztypen, semantischen Kategorien).
            <br>
            <br>
            <b>Wie führen solche getaggten Daten im Syntagmatikon zur linguistischen Klassifikation von sprachlichen
            Phänomenen?</b>
          </tile-gradient>
        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container">


          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Kategoriale Label" link="/datatypes/category">
            Linguistische Etikettierung von Merkmalen sprachlicher Einheiten
            <br>
            <br>
            <b>Welche Aussagekraft haben kategoriale Zuschreibungen im Syntagmatikon bezüglich verwandter sprachlicher Muster?</b>
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Belege" link="/datatypes/matches">
            Manuell ausgewählte KWICs und größere Volltextstellen
            <br>
            <br>
            <b>Nach welchen Kriterien werden illustrative Belegangaben im Syntagmatikon ausgewählt und wozu tragen sie bei?</b>
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Narrative Beschreibung " link="/datatypes/narration">
            Beschreibende Autorentexte, die ein Phänomen erklären
            <br>
            <br>
            <b>Welche unterschiedlichen Typen narrativer Texte prägen das Syntagmatikon?</b>
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Basiselemente" link="/datatypes/elements">
            Auszeichnung der einzelnen Komponenten einer Wortverbindung und Verlinkung mit anderen Einträgen.
            <br>
            <br>
            <b>Wie werden mithilfe der Basiselementangaben im Syntagmatikon Beziehungen zu Einwortlexemen hergestellt und
            unterschiedliche Gruppen gebildet?</b>
          </tile-gradient>


          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Felder" link="/datatypes/fields">
            Nach inhaltlichen Kriterien manuell zusammengestellte Gruppen von sprachlichen Einheiten mit verwandten
              Gebrauchsmerkmalen
            <br>
            <br>
            <b>Wie vielfältig sind Feldangaben im Syntagmatikon?</b>
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Fremdsprachige Äquivalenz" link="/datatypes/expression">
            Angabe von Entsprechungen in anderen Sprachen
            <br>
            <br>
            <b>Wie kann man mittels Äquivalenzangaben und -beschreibungen im Syntagmatikon den Gebrauch von Ausdrücken im
            Sprachvergleich verstehen?</b>
          </tile-gradient>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  theme: { dark: false },
  data() {
    return {
      highlight: null,
    };
  },
  mounted() {
    if (this.$route.query.highlight) {
      this.highlight = this.$route.query.highlight;
    }
  },
  methods: {
    highlightItem(item) {
      return this.highlight == item ?
        "max-width: 350px; margin:10px; border: 3px solid black" :
        "max-width: 350px; margin:10px";
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}

td {
  text-align: center;
}
</style>
<style scoped>
.v-list-subheader {}
</style>
<style scoped>
.containerItem {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-template-areas:
    "left middle";
  margin: 10px 5px 10px 5px;
  padding: 5px;
  border-top: 1px solid #ddd;
}

.containerItem:hover {
  background-color: #ddd;
}

.left {
  grid-area: left;
}

.middle {
  grid-area: middle;
  text-align: left;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: none;
  margin: 10px 20px 10px 20px;
  border-top: 1px solid #d6d6d6;
  padding-top: 10px;
}

li:hover {
  background-color: #d6d6d6;
}
</style>