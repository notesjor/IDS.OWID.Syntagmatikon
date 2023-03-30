<template>
       <v-row>
          <v-col>
            <v-alert type="info" title="Hinweis - Prototyp v0.1"
              text="Alle Inhalte dieser Version sind experimentell. Texte, Farben, Grafiken werden im späteren Projektverlauf angepasst."
              variant="tonal"></v-alert>
          </v-col>
        </v-row>
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
      appName: null,
      appDescription: null,

      leftIconHref: null,
      rightIconHref: null,

      footerContact: null,
      footerImpressum: null,
      footerDsgvo: null,
    }
  },

  mounted() {
    this.appName = this.$config.public.appName;
    this.appDescription = this.$config.public.appDescription;

    this.leftIconHref = this.$config.public.leftIconHref;
    this.rightIconHref = this.$config.public.rightIconHref;

    this.footerContact = this.$config.public.footerContact;
    this.footerImpressum = this.$config.public.footerImpressum;
    this.footerDsgvo = this.$config.public.footerDsgvo;
  },

  methods: {
    test() {
      alert("test");
    }
  }
}
</script>

<style></style>