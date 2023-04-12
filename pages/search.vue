<template>
  <v-row>
    <v-col>
      <div>
        <h1 class="text-3xl font-bold">
          {{ appName }}
        </h1>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div>
        Herzlich willkommen im Syntagmatikon, einer lexikalischen Plattform, die sich ganz der syntagmatischen
        Beziehung der Sprache widmet! Hier finden Sie eine umfassende Sammlung von Wörtern und Ausdrücken aus
        verschiedenen lexikographischen Ressourcen, die sich durch ihre lineare Abfolge beim Schreiben, Lesen oder
        Sprechen definieren. Die einzelnen Ressourcen sind miteinander verknüpft und es entstehen im Zusammenspiel
        neue Bedeutungskontexte, die sich überblicksartig aber auch im Detail explorativ erkunden lassen.
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      appName: null
    }
  },

  mounted() {
    this.appName = this.$config.public.appName;
  },

  methods: {
    test() {
      alert("test");
    }
  }
}
</script>

<style></style>