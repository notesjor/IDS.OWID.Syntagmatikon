<template>
  <div class="nolink">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>
        <div>
          <h1 class="text-3xl font-bold">
            Korpusmethoden erklärt
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit voluptate
          molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
          necessitatibus temporibus facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit voluptate
          molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
          necessitatibus temporibus facere.
        </div>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <div class="container">
          <NuxtLink v-for="item in items" :key="item" :to="'/guide/info/' + item.page" style="margin-right: 20px;">
            <v-card class="mx-auto" max-width="355" style="margin-bottom: 20px; padding-bottom: 10px;">
              <div style="max-height: 1px;">
                <img :src="'/guide/methods/' + item.image" :alt="item.title"
                  style="object-fit: cover; object-position: center center;">
              </div>

              <v-card-title style="margin: 75px 0px 5px -20px">
                <div style="position:relative; display: inline; background-color: rgba(255, 255, 255, 0.75); padding: 5px 5px 5px 20px;">{{ item.title }}</div>
              </v-card-title>

              <v-card-text>
                {{ item.subtitle }}
              </v-card-text>

            </v-card>
          </NuxtLink>
        </div>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "korpus.jpg",
          title: "Was ist ein Korpus?",
          subtitle: "Definition und Verwendung (Suchabfragen)",
          page: "korpus"
        },
        {
          image: "frequenz.jpg",
          title: "Frequenzen",
          subtitle: "Analysieren, auswerten und vergleichen von Frequenzen",
          page: "korpus"
        },
        {
          image: "kwic.jpg",
          title: "KWIC und Volltext",
          subtitle: "Wie man mit Belegen im Korpus umgeht",
          page: "korpus"
        },
        {
          image: "kookkurrenz.jpg",
          title: "Kookkurrenzen",
          subtitle: "Typische Partnerwörter und ihre Verwendung",
          page: "korpus"
        },
        {
          image: "muster.jpg",
          title: "Mustersuche",
          subtitle: "Slot-Filler-Analysen praxisnah erklärt",
          page: "korpus"
        },
        {
          image: "belege.jpg",
          title: "Belege",
          subtitle: "Wonach wählt man Belege aus?",
          page: "korpus"
        },
      ]
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>