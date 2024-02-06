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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo iusto illo adipisci. Labore, magnam
            nihil praesentium architecto fugit voluptas quis quo minus similique numquam ut corrupti saepe rerum vel.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus quasi tempora! Accusamus similique
            sint necessitatibus, et reiciendis amet commodi ex quam exercitationem. Tempore at, libero rerum ducimus
            excepturi delectus ab enim, deleniti earum nulla perspiciatis totam adipisci alias iste itaque voluptate ex
            officiis?
            Nobis. Iusto fuga ducimus expedita accusamus, iste totam. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Tempore at, libero rerum ducimus
            excepturi delectus ab enim, deleniti earum nulla perspiciatis totam adipisci alias iste itaque voluptate ex
            officiis? Nobis.
            <resources-list :filter="['MAP', 'KWViD']"></resources-list>
          </tile>

          <tile title="Präpositionen" img="/dummy/dummy_05.png">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nemo sed asperiores exercitationem ad, totam harum assumenda sint neque unde, nihil cumque consectetur sunt. Sed aut incidunt fugit illum ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos vero beatae nostrum quia commodi magnam, quae repellat unde aut enim sint, earum harum delectus, rem aliquid est modi temporibus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam vero ullam quos dicta, unde nulla sint quo vitae impedit dolorum voluptatem quasi vel quis ab at nihil ut eius.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate alias dignissimos molestias reprehenderit delectus vel aut doloremque repellat quasi officiis. Distinctio deserunt recusandae qui sequi in eius ducimus nisi beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis molestias pariatur error laborum saepe ratione sed voluptatum aliquid iure eius modi dolores dolorum tenetur quasi voluptates ad, quae necessitatibus.
            <resources-list :filter="['PREPCON', 'MAP', 'WVBF']"></resources-list>
          </tile>

          <tile title="Adjektive" img="/dummy/dummy_06.png">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro laborum hic, molestias ex aliquid labore, recusandae quasi dolorem accusamus doloribus dicta assumenda facere quod aut ad odit neque accusantium id!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, a amet? Nihil iste explicabo nisi assumenda nam deleniti consectetur blanditiis cumque odio obcaecati saepe consequuntur, fugiat asperiores sequi ducimus quaerat.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum earum esse nemo nulla sapiente hic consequatur commodi aliquam fugiat dicta debitis alias sequi voluptatibus, laborum reprehenderit totam at, atque ullam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ipsa asperiores dolore voluptatibus laudantium minus, id, delectus perspiciatis eligendi vel quod odio aspernatur aliquam non quis veniam excepturi ea qui.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae in, repellat quos iure perspiciatis impedit rerum corporis mollitia quidem minima asperiores dolorum quibusdam totam. Beatae porro ratione vero non!
            <resources-list :filter="['WVBF', 'KoMuX', 'PREPCONkon', 'PHKO']"></resources-list>
          </tile>

          <tile title="Phraseme" img="/dummy/dummy_07.png">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi eligendi veniam laboriosam magnam porro harum nihil. Perferendis adipisci facere optio iure esse expedita eveniet reprehenderit ducimus hic dolor! Ipsum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse maxime optio ipsa corrupti rerum inventore suscipit autem quisquam ea! Excepturi itaque tempore ipsam totam dolores quod debitis neque dolorem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos quia voluptates nemo quo ea, sapiente debitis nostrum aliquid sunt eligendi. Nam quod soluta, ipsa ab debitis molestias tenetur alias?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatibus facere quod. Incidunt explicabo dolores quas quae mollitia dolor minima amet, sunt, ullam corrupti rem necessitatibus? Rem laboriosam asperiores doloremque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt provident temporibus aliquid magni, tempore pariatur maxime, dolorem architecto saepe fuga delectus similique dicta earum quidem debitis fugit accusamus doloribus corrupti.
            <resources-list :filter="['PHKO', 'PREPCON', 'MAP', 'WÖRE', 'DTWW', 'DRI']"></resources-list>
          </tile>

          <tile title="Fest Sätze" img="/dummy/dummy_08.png">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt, nostrum, ducimus laboriosam eveniet nam vel veniam, alias earum quia optio. Cumque, adipisci ut vitae natus dicta officiis perspiciatis vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nihil, odio voluptas, officiis rem deleniti at laborum sed voluptatum ad et corporis earum? Obcaecati beatae aperiam aspernatur accusamus distinctio atque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rem maiores provident incidunt autem amet aspernatur nihil neque, temporibus vitae facilis voluptatibus nam molestiae excepturi alias obcaecati dolore delectus distinctio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus architecto temporibus labore dolorem sunt iusto, pariatur expedita porro explicabo reiciendis maiores ducimus quasi aspernatur libero nostrum! Iste, culpa quaerat?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet minima aspernatur porro, pariatur inventore mollitia veritatis nemo magni sit quia sunt amet ipsa sequi suscipit error officia odit id! Deleniti.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque soluta voluptate dolore quam tempore, perspiciatis aut eligendi, sit reprehenderit aspernatur debitis in explicabo animi suscipit! Labore, porro laborum. Numquam, doloribus!
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