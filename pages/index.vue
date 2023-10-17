<template>
  <div style="max-width: 80ch;">
    <v-row>
      <v-col>
        <div>
          <h1 class="text-3xl font-bold">
            Projekt-Startseite
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          Das Portal Syntagmatikon bietet Informationen zum Gebrauch von sprachlichen Ausdrücken, die durch ihre
          wiederkehrende lineare Abfolge zu mehr oder weniger festen Wortschatzeinheiten geworden sind: Phraseologismen,
          Sprichwörter und Sprüche; Kollokationen; Komposita und andere Wortbildungseinheiten;
          Präpositionen-Substantiv-Kombinationen; Verb-Präpositionen-Kombinationen; wortgruppenartige Redeeinleiter.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <!--<annotatedSampelMulti></annotatedSampelMulti>-->
          <Sampler2></Sampler2>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          Diese Einheiten wurden in unterschiedlichen IDS-Projekten auf der Basis sehr großer Korpora erforscht und in
          Online-Wörterbüchern, Datenbanken oder Sammlungen aufbereitet. Das Syntagmatikon verknüpft und visualisiert
          diese Ressourcen auf vielfältige Weise und macht so interessante Zusammenhänge und Vernetzungen im Wortschatz
          sichtbar.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          Eine Besonderheit stellen erklärende Texte mit unterschiedlichen Informationstiefen dar, die als Leitfaden eine
          Kompassfunktion für das gesamte Portal erfüllen. Ergebnisse und Datenformate unserer Grundlagenforschung werden
          so transparent dargestellt, dass sich andere „andocken“ und die Angebote für ihre Zwecke nutzen und
          weiterverarbeiten können, z. B. im Bereich Deutsch als Fremdsprache.
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