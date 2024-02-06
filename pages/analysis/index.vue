<template>
  <div style="max-width: 80ch;">
    <v-row>
      <v-col>
        <div>
          <h1>
            Forschungseinblicke
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>Das Syntagmatikon versteht sich auch als interaktive Plattform, auf der Sprachinteressierte befragt werden
            und selbst Fragen stellen können. In diesem Bereich gab und gibt es bereits viele Aktivitäten der Projekte. So
            wecken insbesondere usuelle Wortverbindungen wie Redewendungen und Sprichwörter das Interesse von
            Sprachnutzerinnen und -nutzern.</p>&nbsp;<br />
          <v-text-field label="Fragen/Antworten filtern..." variant="outlined" prepend-icon="mdi-magnify"
            v-model="search"></v-text-field>
          <v-data-table :items="items" :search="search" :headers="headers" style="margin-top: -50px;">
            <template v-slot:item.question="{ item }">
              <NuxtLink :to="'/analysis/'+item.doc">{{ item.question }}</NuxtLink>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Frage',
          align: 'start',
          sortable: false,
          value: 'question',
          titel: 'Frage'
        },
      ],
      items: [
        {
          question: 'Lorem Ipsum dolore?',
          doc: 'dummy'
        },
        {
          question: 'Anfrage Frankfurter Rundschau zu „stolz wie Oskar“',
          doc: 'stolz-wie-oskar'
        },
        {
          question: 'Sit ament et quia dolorum?',
          doc: 'dummy'
        },
        {
          question: 'Lorem Ipsum dolore?',
          doc: 'dummy'
        },
        {
          question: 'Sit ament et quia dolorum?',
          doc: 'dummy'
        },
      ]
    }
  },

  mounted() {
  },

  methods: {
    test() {
      alert("test");
    }
  }
}
</script>

<style scoped>
thead{
  visibility: hidden;
}
</style>