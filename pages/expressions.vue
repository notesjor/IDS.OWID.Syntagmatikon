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
            angesehen und daher ebenso als autonome Einheit betrachtet wie klassischen Wortarten:</p>
        </div>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="container">
          <tile-gradient title="Nomina" color1="#ff7447" color2="#b24132">           
            <resources-list :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'WVBF', 'PhrasKomp']"></resources-list>
          </tile-gradient>

          <tile-gradient title="Verben" color1="#33dcfe" color2="#cb992b">
            <resources-list :filter="['MAP', 'Verlaufsformen']"></resources-list>
          </tile-gradient>

          <tile-gradient title="Präpositionen" color1="#86becb" color2="#54777f">
            <resources-list :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon',, 'MAP', 'Verlaufsformen', 'WVBF']"></resources-list>
          </tile-gradient>

          <tile-gradient title="Adjektive" color1="#97d6e5" color2="#658f99">
               <resources-list :filter="['WVBF', 'KoMuX', 'PREPCON_kon', 'PhrasKomp']"></resources-list>
          </tile-gradient>

          <tile-gradient title="Phraseme" color1="#ff3661" color2="#ff3661">
              <resources-list :filter="['PhrasKomp', 'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'MAP', 'Redeeinleiter', 'DTWW', 'DRI']"></resources-list>
          </tile-gradient>

          <tile-gradient title="Feste Sätze" color1="#ffc036" color2="#cb992b">
               <resources-list :filter="['SpruchList', 'PhrasKomp', 'SPRW']"></resources-list>
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