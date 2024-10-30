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
          <headline :h="1" color1="#fec037" color2="#12cb4b">Wort- und Ausdrucksarten</headline>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>Die Beschreibungskandidaten bzw. Stichwörter im Syntagmatikon sowie
            deren Komponenten basieren auf unterschiedlichen Wort- und
            Ausdrucksarten. Phraseme und feste Sätze werden als geronnene
            Ausdrucksarten angesehen und daher ebenso als autonome Einheit
            betrachtet wie die klassischen Wortarten. Unter Phrasemen werden neben
            Phraseologismen und Idiomen auch Kollokationen und Funktionsverbgefüge
            subsumiert.</p>
          <p>Die Zuordnung der Ressourcen erfolgt nach folgenden Kriterien:</p>
          <ul>
            <li>holistischer Typ (Phraseme, Feste Sätze)</li>
            <li>Hauptkomponenten, die diesen Eintrag zentral
              konstituieren</li>
          </ul>
          <p>Nicht gesondert markiert werden Komponenten von Phrasemen und feste
            Sätzen, da diese potenziell alle Wortarten umfassen können. Hier liegt
            der Fokus auf der gesamten Einheit.</p>
        </div>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="container">
          <info-box title="Nomina" color1="#fec037" color2="#12cb4b" link="pos/nouns" :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'WVBF',
            'PhrasKomp', 'DTWW', 'Redeeinleiter']">
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

          <info-boxt title="Phraseme" color1="#fec037" color2="#12cb4b" link="pos/phrasemes"
            :filter="['PhrasKomp', 'MAP', 'Redeeinleiter', 'DTWW', 'WVBF', 'FesteWV']">
          </info-boxt>

          <info-box title="Feste Sätze" color1="#fec037" color2="#12cb4b" link="pos/sentences"
            :filter="['SpruchList', 'PhrasKomp', 'SPRW']">
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