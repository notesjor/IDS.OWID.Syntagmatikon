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
          <p>Die Beschreibungskandidaten bzw. Stichwörter im Syntagmatikon sowie deren Komponenten basieren auf
            unterschiedlichen Wort- und Ausdrucksarten. Phraseme und feste Sätze werden als geronnene Ausdrucksarten
            angesehen und daher ebenso als autonome Einheit betrachtet wie die klassischen Wortarten:</p>
        </div>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="container">
          <tile-gradient title="Nomina" color1="#33dcfe" color2="#fec037" link="pos/nouns"> 
                   
          </tile-gradient>
         

          <tile-gradient title="Verben" color1="#33dcfe" color2="#fec037" link="pos/verbs">          
          </tile-gradient>

          <tile-gradient title="Präpositionen" color1="#33dcfe" color2="#fec037" link="pos/prepositions">  
          </tile-gradient>

          <tile-gradient title="Adjektive" color1="#33dcfe" color2="#fec037" link="pos/adjectives">
          </tile-gradient>

          <tile-gradient title="Phraseme" color1="#33dcfe" color2="#fec037" link="pos/phrasemes">
          </tile-gradient>

          <tile-gradient title="Feste Sätze" color1="#33dcfe" color2="#fec037" link="pos/sentences">     
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