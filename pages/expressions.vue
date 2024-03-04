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
          <br />&nbsp;<br />
        </div>
      </v-col>

    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="container">
          <tile title="Nomina" img="/dummy/dummy_03.png">
           
            <resources-list :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'WVBF', 'PhrasKomp']"></resources-list>
          </tile>

          <tile title="Verben" img="/dummy/dummy_04.png">
           
            <resources-list :filter="['MAP', 'Verlaufsformen']"></resources-list>
          </tile>

          <tile title="Präpositionen" img="/dummy/dummy_05.png">
            <resources-list :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon',, 'MAP', 'Verlaufsformen', 'WVBF']"></resources-list>
          </tile>

          <tile title="Adjektive" img="/dummy/dummy_06.png">
               <resources-list :filter="['WVBF', 'KoMuX', 'PREPCON_kon', 'PhrasKomp']"></resources-list>
          </tile>

          <tile title="Phraseme" img="/dummy/dummy_07.png">
              <resources-list :filter="['PhrasKomp', 'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'MAP', 'Redeeinleiter', 'DTWW', 'DRI']"></resources-list>
          </tile>

          <tile title="Feste Sätze" img="/dummy/dummy_08.png">
               <resources-list :filter="['SpruchList', 'PhrasKomp', 'SPRW']"></resources-list>
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