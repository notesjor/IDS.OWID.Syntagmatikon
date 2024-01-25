<template>
  <div style="max-width: 80ch; margin:auto">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit voluptate
            molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
            necessitatibus temporibus facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt
            illum ipsa reprehenderit voluptate molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim
            voluptas cumque quos illum necessitatibus temporibus facere.</p>

          <br />&nbsp;<br />

        </div>
      </v-col>

    </v-row>
  </div>
  <div>
    <v-row style="max-width: 1140px;">
      <v-col cols="12">
        <h2 style="margin:-20px 0px 10px 10px; border-bottom: 3px lightgray solid;">Automatische Informationstypen</h2>

        <div class="container">
          <tile title="Frequenzen" img="/img/datatypes/frequenz.jpg" link="/datatypes/frequency">
            Was sagen Frequenzen aus? Welche Aussagen lassen sich damit treffen? Was bedeutet ein Trend?
          </tile>

          <tile title="KWIC (KeyWord In Context)" img="/img/datatypes/kwic.jpg" link="/datatypes/kwic">
            Was sagt ein KWIC-Beleg aus? Welche Aussagen lassen sich damit treffen? Wie lassen sich größere Bedeutungseinheiten damit erschließen?
          </tile>

          <tile title="Volltextstellen" img="/img/datatypes/belege.jpg" link="/datatypes/full-text">
            Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich gegenüber KWIC?
          </tile>

          <tile title="Kookkurrenzprofile" img="/img/datatypes/kookkurrenz.jpg" link="/datatypes/cooccurrence">
            Was sind Kookkurrenzprofile? Wie lassen sich diese Wortpartner statistisch berechnen?
          </tile>

          <tile title="Muster-/Lückenfüllertabellen" img="/img/datatypes/muster.jpg" link="/datatypes/patterntable">
            Wie können Muster-/Lückenfüllertabellen zur Analyse von Wortverbindungen genutzt werden? Welche Aussagen lassen sich damit treffen?
          </tile>

          <tile title="Annotierte Daten" img="/img/datatypes/annotate.jpg" link="/datatypes/annotation">
            Wie werden Daten annotiert und warum? Welche Aussagen lassen sich damit treffen? Was sind übliche Annotationen?
          </tile>      
        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container">


          <tile title="Kategoriale-Label" img="/img/datatypes/category.jpg" link="/datatypes/category">
            Welche Aussage treffen Kategorien? Worin unterscheiden sich bestimtme Kategorien?
          </tile>

          <tile title="Belege" img="/img/datatypes/belege2.jpg" link="/datatypes/matches">
            Warum werden Belege manuell ausgewählt? Wie unterscheiden sich Belege von KWIC? Welche Aussagen lassen sich damit treffen?
          </tile>

          <tile title="Narrative Beschreibung " img="/img/datatypes/narrativ.jpg" link="/datatypes/narration">
            Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich gegenüber KWIC?
          </tile>

          <tile title="Basiselemente" img="/img/datatypes/elemente.jpg" link="/datatypes/elements">
            Was sind Basiselemente? Wie lassen sich diese grundlegenden Elemente kombinieren?
          </tile>

          <tile title="Kontextzeilen" img="/img/datatypes/bezuege.jpg" link="/datatypes/context">
            Wie lassen sich Kontextzeilen nutzen? Welche Aussagen lassen sich damit treffen?
          </tile>

          <tile title="Satellitenfelder" img="/img/datatypes/kreis.jpg" link="/datatypes/fields">
            Wie lassen sich Satellitenfelder nutzen? Welche Aussagen lassen sich damit treffen? Welche Satellitenfelder sind üblich?
          </tile>  

          <tile title="Musterangaben" img="/img/datatypes/pattern.jpg" link="/datatypes/expression">
            Wie lassen sich Musterangaben nutzen? Welche Aussagen lassen sich damit treffen? Welche Musterangaben sind üblich?
          </tile>  
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