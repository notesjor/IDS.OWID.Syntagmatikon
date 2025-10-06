<script setup>
definePageMeta({
  layout: "full",
})
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Syntagmatikon - Wort- und Ausdrucksarten',
  meta: [
    {
      name: 'description',
      content: 'Das korpusbasierte Portal Syntagmatikon bietet Informationen zum Gebrauch von sprachlichen Ausdrücken, die durch ihre wiederkehrende lineare Abfolge zu mehr oder weniger festen Wortschatzeinheiten geworden sind.'
    }
  ]
});
</script>

<template>
  <div style="max-width: var(--TXT-WIDTH); margin:auto">
    <h1>
      Wort- und Ausdrucksarten
    </h1>
    <p>In dieser <hi>Syntagmatikon</hi>-Rubrik werden die Ressourcen entsprechend bestimmter Wort- und Ausdrucksarten ihrer Einträge oder relevanter Komponenten gebündelt, wenn sie in mehr als einer Ressource vorkommen.</p>
    <p>Die Zuordnung erfolgt gemäß folgender Kriterien:</p>
    <ul>
      <li>Hauptkomponenten, die diesen Eintrag zentral konstituieren</li>
      <li>sprachliche Einheit als Ganzes (Phraseme; feste Sätze)</li>
    </ul>
    <p>Unter Phrasemen werden Phraseologismen, Idiome, Kollokationen (auch nicht-idiomatische) sowie Funktionsverbgefüge
      subsumiert. Nicht gesondert markiert werden Komponenten von Phrasemen und festen Sätzen, da diese
      Mehrworteinheiten
      potenziell alle Wortarten umfassen können. Hier liegt der Fokus auf der gesamten Einheit.</p>
    <div>Jedes Kästchen linkt zu einer Hintergrundseite mit Beispielen für Wort- und Ausdrucksarten in
      den Ressourcen.</div>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <empty />
        <headline :h="4">Wort- und Ausdrucksarten im <hi>Syntagmatikon</hi>
        </headline>
        <div class="container">
          <info-box title="Nomina" :color1="color1" link="pos/nouns" :filter="['PREPCON_ex', 'PREPCON_temp_inv', 'PREPCON_temp_art', 'PREPCON_kon', 'KoMuX', 'WVBF',
            'PhrasKomp', 'DTWW', 'Redeeinleiter', 'Verlaufsformen']">
          </info-box>

          <info-box title="Verben" :color1="color1" link="pos/verbs"
            :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter', 'KoMuX']">
          </info-box>

          <info-box title="Präpositionen" :color1="color1" link="pos/prepositions"
            :filter="['PREPCON_ex', 'PREPCON_temp_inv', 'PREPCON_temp_art', 'PREPCON_kon', 'MAP', 'Verlaufsformen', 'WVBF', 'KoMuX']">
          </info-box>

          <info-box title="Adjektive" :color1="color1" link="pos/adjectives" :filter="['FesteWV', 'KoMuX']">
          </info-box>

          <info-box title="Phraseme" :color1="color1" link="pos/phrasemes"
            :filter="['PhrasKomp', 'MAP', 'Redeeinleiter', 'DTWW', 'WVBF', 'FesteWV', 'KoMuX']">
          </info-box>

          <info-box title="Feste Sätze" :color1="color1" link="pos/sentences"
            :filter="['KoMuX', 'SpruchList', 'PhrasKomp', 'SPRW']">
          </info-box>

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
      color1: "#0DC513"
    };
  },
}
</script>