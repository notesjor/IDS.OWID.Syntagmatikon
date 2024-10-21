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
          <tile-gradient title="Nomina"  color1="#12cb4b" color2="#fec037" link="pos/nouns">  
            <resources-list-compact :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'WVBF', 
            'PhrasKomp', 'DTWW', 'Redeeinleiter']"></resources-list-compact>    
          </tile-gradient>
         

          <tile-gradient title="Verben" color1="#12cb4b" color2="#fec037" link="pos/verbs">   
            <resources-list-compact :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter', 'KoMuX']"></resources-list-compact>       
          </tile-gradient>

          <tile-gradient title="Präpositionen" color1="#12cb4b" color2="#fec037"  link="pos/prepositions"> 
            <resources-list-compact :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'MAP', 'Verlaufsformen', 'WVBF', 'KoMuX']"></resources-list-compact> 
          </tile-gradient>

          <tile-gradient title="Adjektive" color1="#12cb4b" color2="#fec037"  link="pos/adjectives">
            <resources-list-compact :filter="['FesteWV', 'KoMuX']"></resources-list-compact>
          </tile-gradient>

          <tile-gradient title="Phraseme" color1="#12cb4b" color2="#fec037"  link="pos/phrasemes">
            <resources-list-compact :filter="['PhrasKomp', 'MAP', 'Redeeinleiter', 'DTWW', 'WVBF', 'FesteWV']"></resources-list-compact>
          </tile-gradient>

          <tile-gradient title="Feste Sätze" color1="#12cb4b" color2="#fec037"  link="pos/sentences">  
            <resources-list-compact :filter="['SpruchList', 'PhrasKomp', 'SPRW']"></resources-list-compact>  
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