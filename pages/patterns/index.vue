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
            Muster
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>
            Eine der folgenreichsten Resultate korpusempirischer Forschungen ist die Einsicht, dass linear verfestigte
            Wortfolgen systematisch auf schematischen Vorprägungen, auf Schablonen fußen, die wir Muster nennen. Muster
            werden als semiabstrakte Konstruktionen aufgefasst, bei denen die Slots nicht beliebig, sondern basierend auf
            Merkmalen ähnlicher Art gefüllt werden.
            <br />&nbsp;<br />
            Beispiele für Muster sind:
          </p>          
          <ul>
            <li><strong>vor-sich-hin-Muster</strong>: <br /> {das Boot dümpelt; das Brot gammelt; sie paddelt so} vor sich hin</li>
            <li><strong>w-x-ist-ist-auch-y-Muster</strong>: <br /> {Licht – Schatten; Rauch – Feuer; Arbeit – Brot} </li>
          </ul>
          <br />
          Im Syntagmatikon kommt die Musterperspektive auf dreifache Weise ins Spiel: 
          <br />&nbsp;<br />&nbsp;<br />
        </div>
      </v-col>

    </v-row>
  </div>
  <div>
    <v-row style="max-width: 1140px;">
      <v-col cols="12">
        <h2 style="margin:-20px 0px 10px 10px; border-bottom: 3px lightgray solid;">Muster im Syntagmatikon</h2>

        <div class="container">
          <tile title="Direkter Zugang" img="/img/patterns/dummy01.png" link="/patterns/direct">
            In diesen Ressourcen bilden Muster den primären Zugriff auf die aufbereiteten Daten und die lexikografischen Beschreibungen. Das heißt, alle Informationen sind über das Netzwerk semiabstrakter Schablonen herleitbar.
            <resources-list :filter="['MAP', 'WVBF']"/>
          </tile>

          <tile title="Lexikografische Angabe" img="/img/patterns/dummy02.png" link="/patterns/component">
            In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente von Wörterbuchartikeln angeboten, und zwar in „PREPCONkontrastiv und „Feste Wortverbindungen“.
            <resources-list :filter="['PREPCON_kon', 'SPRW']"/>
          </tile>

          <tile title="Dynamische Erschließung" img="/img/patterns/dummy03.png" link="/patterns/dynamic">
            Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich
            gegenüber KWIC?
            <resources-list :filter="['KoMuX', 'PREPCONex', 'PREPCONtemp', 'WÖRE', 'KWViD']"/>
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
}</style>