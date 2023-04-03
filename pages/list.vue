<template>
  <v-row>
    <v-col>
      <v-alert type="info" title="Hinweis - Prototyp v0.1"
        text="Alle Inhalte dieser Version sind experimentell. Texte, Farben, Grafiken werden im späteren Projektverlauf angepasst."
        variant="tonal" v-if="alert"></v-alert>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div>
        <h1 class="text-3xl font-bold">
          Ressourcen - Liste
        </h1>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt esse corrupti minima in aspernatur rerum
        officia quidem quibusdam explicabo accusamus obcaecati placeat at ex, quia cum. Dignissimos perspiciatis libero
        eveniet?
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <!--<v-data-table :headers="headers" :items="overviewTable" item-value="name" class="elevation-1"></v-data-table>-->
      {{ headers }}
      {{ overviewTable }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Ressourcen - Liste",
  theme: { dark: false },
  data() {
    return {
      alert: true,
      overviewTable: null,
    }
  },

  mounted() {
    setTimeout(() => {
      this.alert = false
    }, 10000);    
  },

  methods: {
    test() {
      alert("test");
    }
  },

  computed: {
    headers() {
      console.log(this.$store);      
      return null;//this.$store.state.ressourceData.uniqueCategories;
    },
    overviewTable(){
      console.log(this.$store);
      return null;//this.$store.state.ressourceData.overviewTable;
    }
  }
}
</script>

<style></style>