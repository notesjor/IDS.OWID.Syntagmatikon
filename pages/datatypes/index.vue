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
          <div class="question" title="Frequenzen" img="/img/datatypes/frequenzen.PNG" link="/datatypes/frequency">
            Was sagen Frequenzen aus? Welche Aussagen lassen sich damit treffen? Was bedeutet ein Trend?
          </div>

          <div class="question" title="KWIC (KeyWord In Context)" img="/img/datatypes/kwics.PNG" link="/datatypes/kwic">
            Was sagt ein KWIC-Beleg aus? Welche Aussagen lassen sich damit treffen? Wie lassen sich größere Bedeutungseinheiten damit erschließen?
          </div>
<!--
          <div class="question" title="Volltextstellen" img="/img/datatypes/belege.jpg" link="/datatypes/full-text">
            Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich gegenüber KWIC?
          </div>
        -->

          <div class="question" title="Kookkurrenzprofile" img="/img/datatypes/kook.PNG" link="/datatypes/cooccurrence">
            Was sind Kookkurrenzprofile? Wie lassen sich diese Wortpartner statistisch berechnen?
          </div>

          <div class="question" title="Muster-/Lückenfüllertabellen" img="/img/datatypes/muster.PNG" link="/datatypes/patterntable">
            Wie können Muster-/Lückenfüllertabellen zur Analyse von Wortverbindungen genutzt werden? Welche Aussagen lassen sich damit treffen?
          </div>

          <div class="question" title="Annotierte Daten" img="/img/datatypes/auto_anno.PNG" link="/datatypes/annotation">
            Wie werden Daten annotiert und warum? Welche Aussagen lassen sich damit treffen? Was sind übliche Annotationen?
          </div>      
        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container">


          <div class="question" title="Kategoriale Label" img="/img/datatypes/kategorial.PNG" link="/datatypes/category">
            Welche Aussage treffen Kategorien? Worin unterscheiden sich bestimtme Kategorien?
          </div>

          <div class="question" title="Belege" img="/img/datatypes/belege.PNG" link="/datatypes/matches">
            Warum werden Belege manuell ausgewählt? Wie unterscheiden sich Belege von KWIC? Welche Aussagen lassen sich damit treffen?
          </div>

          <div class="question" title="Narrative Beschreibung " img="/img/datatypes/narrativeBeschreibungen.PNG" link="/datatypes/narration">
            Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich gegenüber KWIC?
          </div>

          <div class="question" title="Basiselemente" img="/img/datatypes/basiselemente.PNG" link="/datatypes/elements">
            Was sind Basiselemente? Wie lassen sich diese grundlegenden Elemente kombinieren?
          </div>

          <div class="question" title="Kontextzeilen" img="/img/datatypes/kontextzeilen.PNG" link="/datatypes/context">
            Wie lassen sich Kontextzeilen nutzen? Welche Aussagen lassen sich damit treffen?
          </div>

          <div class="question" title="Felder" img="/img/datatypes/felder.PNG" link="/datatypes/fields">
            Wie lassen sich Satellitenfelder nutzen? Welche Aussagen lassen sich damit treffen? Welche Satellitenfelder sind üblich?
          </div>  

          <div class="question" title="Fremdsprachige Äquivalenz" img="/img/datatypes/aequivalenz.PNG" link="/datatypes/expression">
            Wie lassen sich Musterangaben nutzen? Welche Aussagen lassen sich damit treffen? Welche Musterangaben sind üblich?
          </div>  
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
div.question {
  max-width: 350px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #d6d6d6;
  border-radius: 25px; /* Abgerundete Form */
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: all 0.3s;
  position: relative; /* Hinzugefügt für das Pseudoelement */
}

div.question:after { /* Pfeil am unteren Rand */
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #d6d6d6;
  border-bottom: 0;
  margin-left: -10px;
}
</style>

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