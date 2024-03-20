<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 86ch; margin:auto">
    <v-row>
      <v-col>
        <div>
          <h1>
            Daten- und Informationstypen
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit
            voluptate
            molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
            necessitatibus temporibus facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deserunt
            illum ipsa reprehenderit voluptate molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis
            enim
            voluptas cumque quos illum necessitatibus temporibus facere.</p>

          <br />&nbsp;<br />

        </div>
      </v-col>

    </v-row>
  </div>
  <div style="max-width: 100ch;">
    <v-row style="max-width: 1140px;">
      <v-col cols="12">
        <h2 style="margin:-20px 0px 10px 10px; border-bottom: 3px lightgray solid;">Automatische Informationstypen</h2>

        <div class="container" style="margin-left: -20px;">
          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Frequenzen" link="/datatypes/frequency">
            <b>Häufigkeit des Vorkommens eines sprachlichen Ausdrucks im Korpus, ermittelt mithilfe von Zählungen
              und/oder Suchanfragen (queries)</b>
            <br>
            <br>
            Was kann man anhand Frequenzangaben im Syntagmatikon ablesen?
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="KWIC (KeyWord In Context)" link="/datatypes/kwic">
            <b>Zeilen (Konkordanzen), in denen das Suchobjekt vorkommt (Textschnipsel)</b>
            <br>
            <br>
            Was sagen KWIC-Angaben im Syntagmatikon über den Gebrauch einer sprachlichen Einheit aus?
          </tile-gradient>
          <!--
          <tile title="Volltextstellen" img="/img/datatypes/belege.jpg" link="/datatypes/full-text">
            Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich gegenüber KWIC?
          </tile>
        -->

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Kookkurrenzprofile" link="/datatypes/cooccurrence">
            <b>Durch statistische Berechnungen (sog. Kookkurrenzanalysen) ermittelte Partnerwort-Profile
              (überproportional häufiges Miteinandervorkommen von Wörtern und Wortgruppen)</b>
            <br>
            <br>
            Welche Hinweise liefern Kookkurrenzangaben im Syntagmatikon auf Bedeutung, Gebrauch und Festigkeit?
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Muster-/Lückenfüllertabellen" link="/datatypes/patterntable">
            <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque recusandae dolorem quae eum ipsum
              sapiente itaque officia reiciendis enim</b>
            <br>
            <br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque recusandae dolorem quae eum ipsum
            sapiente itaque officia reiciendis enim?
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Annotierte Daten" link="/datatypes/annotation">
            <b>Durch automatische Annotationsprogramme kategorisierte Korpusdaten (z.B. nach Wortarten, Satztypen,
              semantischen Kategorien). </b>
            <br>
            <br>
            Wie führen solche getaggten Daten im Syntagmatikon zur linguistischen Klassifikation von sprachlichen
            Phänomenen?
          </tile-gradient>
        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container" style="margin-left: -20px;">


          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Kategoriale Label" link="/datatypes/category">
            <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque recusandae dolorem quae eum ipsum
              sapiente itaque officia reiciendis enim</b>
            <br>
            <br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque recusandae dolorem quae eum ipsum
            sapiente itaque officia reiciendis enim?
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Belege" link="/datatypes/matches">
            <b>Manuell ausgewählte KWICs und größere Volltextstellen</b>
            <br>
            <br>
            Nach welchen Kriterien werden illustrative Belegangaben im Syntagmatikon ausgewählt und wozu tragen sie bei?
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Narrative Beschreibung " link="/datatypes/narration">
            <b>Beschreibende Autorentexte, die ein Phänomen erklären</b>
            <br>
            <br>
            Welche unterschiedlichen Typen narrativer Texte prägen das Syntagmatikon?
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Basiselemente" link="/datatypes/elements">
            <b>Auszeichnung der einzelnen Komponenten einer Wortverbindung und Verlinkung mit anderen Einträgen. </b>
            <br>
            <br>
            Wie werden mithilfe der Basiselementangaben im Syntagmatikon Beziehungen zu Einwortlexemen hergestellt und
            unterschiedliche Gruppen gebildet?
          </tile-gradient>


          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Felder" link="/datatypes/fields">
            <b>Nach inhaltlichen Kriterien manuell zusammengestellte Gruppen von sprachlichen Einheiten mit verwandten
              Gebrauchsmerkmalen</b>
            <br>
            <br>
            Wie vielfältig sind Feldangaben im Syntagmatikon?
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Fremdsprachige Äquivalenz" link="/datatypes/expression">
            <b>Angabe von Entsprechungen in anderen Sprachen</b>
            <br>
            <br>
            Wie kann man mittels Äquivalenzangaben– und beschreibungen im Syntagmatikon den Gebrauch von Ausdrücken im
            Sprachvergleich verstehen?
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