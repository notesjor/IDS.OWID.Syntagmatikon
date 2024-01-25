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
            Als Nomina werden alle Wörter bezeichnet, die als Subjekte, Objekte, Prädikative oder Adverbiale in einem Satz
            auftreten können. Sie werden in der Regel durch Artikel begleitet und können in der Regel durch Pronomen
            ersetzt werden. Nomina können in der Regel durch Adjektive näher bestimmt werden. Sie können in der Regel
            durch Verben näher bestimmt werden. Sie können in der Regel durch Adverbien näher bestimmt werden. Sie können
            in der Regel durch Präpositionen näher bestimmt werden. Sie können in der Regel durch Nomina näher bestimmt
            werden. Sie können in der Regel durch Genitive näher bestimmt werden. Sie können in der Regel durch
            Partizipien näher bestimmt werden. Sie können in der Regel durch Infinitive näher bestimmt werden. Sie können
            in der Regel durch Nebensätze näher bestimmt werden. Sie können in der Regel durch Präpositionalphrasen näher
            bestimmt werden. Sie können in der Regel durch Adverbialphrasen näher bestimmt werden.
            <resources-list :filter="['PREPCON', 'KoMuX', 'WVBF', 'PHKO']"></resources-list>
          </tile>

          <tile title="Verben" img="/dummy/dummy_04.png">
            Als Verben werden alle Wörter bezeichnet, die als Prädikate in einem Satz auftreten können. Sie werden in der
            Regel durch Nomina begleitet und können in der Regel durch Pronomen ersetzt werden. Verben können in der Regel
            durch Adverbien näher bestimmt werden. Sie können in der Regel durch Präpositionen näher bestimmt werden. Sie
            können in der Regel durch Nomina näher bestimmt werden. Sie können in der Regel durch Genitive näher bestimmt
            werden. Sie können in der Regel durch Partizipien näher bestimmt werden. Sie können in der Regel durch
            Infinitive näher bestimmt werden. Sie können in der Regel durch Nebensätze näher bestimmt werden. Sie können
            in der Regel durch Präpositionalphrasen näher bestimmt werden. Sie können in der Regel durch Adverbialphrasen
            näher bestimmt werden.
            <resources-list :filter="['MAP', 'KWViD']"></resources-list>
          </tile>

          <tile title="Präpositionen" img="/dummy/dummy_05.png">
            Als Präpositionen werden alle Wörter bezeichnet, die als Präpositionen in einem Satz auftreten können. Sie
            werden in der Regel durch Nomina begleitet und können in der Regel durch Pronomen ersetzt werden.
            Präpositionen können in der Regel durch Nomina näher bestimmt werden. Sie können in der Regel durch Genitive
            näher bestimmt werden. Sie können in der Regel durch Partizipien näher bestimmt werden. Sie können in der
            Regel durch Infinitive näher bestimmt werden. Sie können in der Regel durch Nebensätze näher bestimmt werden.
            Sie können in der Regel durch Präpositionalphrasen näher bestimmt werden. Sie können in der Regel durch
            Adverbialphrasen näher bestimmt werden.
            <resources-list :filter="['PREPCON', 'MAP', 'WVBF']"></resources-list>
          </tile>

          <tile title="Adjektive" img="/dummy/dummy_06.png">
            Als Adjektive werden alle Wörter bezeichnet, die als Attribute in einem Satz auftreten können. Sie werden in
            der Regel durch Nomina begleitet und können in der Regel durch Pronomen ersetzt werden. Adjektive können in
            der Regel durch Adverbien näher bestimmt werden. Sie können in der Regel durch Präpositionen näher bestimmt
            werden. Sie können in der Regel durch Nomina näher bestimmt werden. Sie können in der Regel durch Genitive
            näher bestimmt werden. Sie können in der Regel durch Partizipien näher bestimmt werden. Sie können in der
            Regel durch Infinitive näher bestimmt werden. Sie können in der Regel durch Nebensätze näher bestimmt werden.
            Sie können in der Regel durch Präpositionalphrasen näher bestimmt werden. Sie können in der Regel durch
            Adverbialphrasen näher bestimmt werden.
            <resources-list :filter="['WVBF', 'KoMuX', 'PREPCONkon', 'PHKO']"></resources-list>
          </tile>

          <tile title="Phraseme" img="/dummy/dummy_07.png">
            Als Phrasem werden alle Wörter bezeichnet, die als Prädikate in einem Satz auftreten können. Sie werden in der
            Regel durch Nomina begleitet und können in der Regel durch Pronomen ersetzt werden. Verben können in der Regel
            durch Adverbien näher bestimmt werden. Sie können in der Regel durch Präpositionen näher bestimmt werden. Sie
            können in der Regel durch Nomina näher bestimmt werden. Sie können in der Regel durch Genitive näher bestimmt
            werden. Sie können in der Regel durch Partizipien näher bestimmt werden. Sie können in der Regel durch
            Infinitive näher bestimmt werden. Sie können in der Regel durch Nebensätze näher bestimmt werden. Sie können
            in der Regel durch Präpositionalphrasen näher bestimmt werden. Sie können in der Regel durch Adverbialphrasen
            näher bestimmt werden.
            <resources-list :filter="['PHKO', 'PREPCON', 'MAP', 'WÖRE', 'DTWW', 'DRI']"></resources-list>
          </tile>

          <tile title="Fest Sätze" img="/dummy/dummy_08.png">
            Als 'Feste Sätze' werden alle Abfolgen von Wörtern bezeichnet. In der Regel handelt es sich um Sätze, die in
            der Regel in der gleichen Form auftreten und in der Regel eine feste Bedeutung haben. Sie werden in der Regel
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis eius aspernatur, corrupti ex dignissimos
            reprehenderit incidunt nemo nesciunt, tempora earum excepturi nobis! Dolore blanditiis illo dolorem nobis eum,
            fugit optio!
            <resources-list :filter="['SpruchList', 'PHKO', 'SPRW']"></resources-list>
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