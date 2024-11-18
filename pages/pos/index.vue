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
            Wort- und Ausdrucksarten
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>Die Beschreibungskandidaten bzw. Stichwörter im SYNTAGMATIKON sowie deren Komponenten basieren auf unterschiedlichen Wort- und Ausdrucksarten. In dieser Rubrik werden jene näher beschrieben, die in mehr als einer Ressource relevant sind.</p>
          <p>Die Zuordnung der Ressourcen zu Wort- und Ausdrucksarten erfolgt gemäß folgender Kriterien:</p>
          <ul>
            <li>Hauptkomponenten, die diesen Eintrag zentral konstituieren</li>
            <li>sprachliche Einheit als Ganzes (Phraseme; feste Sätze)</li>
          </ul>
          <p>Unter Phrasemen werden Phraseologismen, Idiome, Kollokationen (auch nicht-idiomatische) sowie Funktionsverbgefüge subsumiert. Nicht gesondert markiert werden Komponenten von Phrasemen und feste Sätzen, da diese Mehrworteinheiten potenziell alle Wortarten umfassen können. Hier liegt der Fokus auf der gesamten Einheit.</p>
          <p>Jedes Kästchen linkt zu einer Hintergrundseite mit Beispielen für Wort- und Ausdrucksarten in den Ressourcen.</p>
        </div>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="container">
          <info-box title="Nomina" color1="#fec037" color2="#12cb4b" link="pos/nouns" :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'WVBF',
            'PhrasKomp', 'DTWW', 'Redeeinleiter', 'Verlaufsformen']">
          </info-box>

          <info-box title="Verben" color1="#fec037" color2="#12cb4b" link="pos/verbs"
            :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter', 'KoMuX']">
          </info-box>

          <info-box title="Präpositionen" color1="#fec037" color2="#12cb4b" link="pos/prepositions"
            :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'MAP', 'Verlaufsformen', 'WVBF', 'KoMuX']">
          </info-box>

          <info-box title="Adjektive" color1="#fec037" color2="#12cb4b" link="pos/adjectives"
            :filter="['FesteWV', 'KoMuX']">
          </info-box>

          <info-box title="Phraseme" color1="#fec037" color2="#12cb4b" link="pos/phrasemes"
            :filter="['PhrasKomp', 'MAP', 'Redeeinleiter', 'DTWW', 'WVBF', 'FesteWV', 'KoMuX']">
          </info-box>

          <info-box title="Feste Sätze" color1="#fec037" color2="#12cb4b" link="pos/sentences"
            :filter="['KoMuX', 'SpruchList', 'PhrasKomp', 'SPRW']">
          </info-box>

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
  },
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