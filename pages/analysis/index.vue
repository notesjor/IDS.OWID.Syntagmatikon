<template>
  <div style="max-width: 86ch;">
    <v-row>
      <v-col>
        <div>
          <h1>
            Kaleidoskop
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
        <div> 
          <NuxtLink :to="'http://wvonline.ids-mannheim.de/umfrage2014.htm'">Befragungen zu Redewendungen</NuxtLink></div>
        <div>&nbsp;</div>
        <div>Wendungen mit...</div>
        <div style="margin-left:20px">Schnee</div>
        <div style="margin-left:20px">Körperteilen</div>
        <div style="margin-left:20px">Farben</div>
        <div>&nbsp;</div>
        <div>Was bedeutet...</div>
        <div style="margin-left:20px">
          <NuxtLink :to="'/analysis/stolz-wie-oskar'">"frech wie Oskar"</NuxtLink>
          </div>
        <div style="margin-left:20px">"in der Klemme sein"</div>
        <div>&nbsp;</div>
       <div>Amerikanische Lehnsprichwörter</div>
       <div>&nbsp;</div>
       <div>
        <NuxtLink :to="'http://wvonline.ids-mannheim.de/kurzstudie/index.htm'">WDR-Kurzstudie zu 'mathematischen' Wörtern</NuxtLink>
        </div>
            <!-- -
          <v-text-field label="Fragen/Antworten filtern..." variant="outlined" prepend-icon="mdi-magnify"
            v-model="search"></v-text-field> -->
            <!--
          <v-data-table :items="items" :search="search" :headers="headers" style="margin-top: -50px;">
            <template v-slot:item.question="{ item }">
              <NuxtLink :to="'/analysis/'+item.doc">{{ item.question }}</NuxtLink>
            </template>
          </v-data-table>
        -->
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