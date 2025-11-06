<script setup>
definePageMeta({
  layout: "full",
})
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Syntagmatikon - Musterzugänge',
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
    <h1>Musterzugänge</h1>
    <p>
      In dieser <hi>Syntagmatikon</hi>-Rubrik werden die Ressourcen entsprechend der Art ihrer Zugänge zu semiabstrakten und abstrakten Mustern bzw. Konstruktionen gebündelt. Muster
      werden als semiabstrakte Konstruktionen aufgefasst, bei denen die Slots nicht beliebig, sondern basierend auf
      Merkmalen ähnlicher Art gefüllt werden.
      <br />&nbsp;<br />
      Beispiele für Muster sind:
    </p>
    <ul class="example">
      <li><strong>Muster BEVORSTEHEN: x-VERB-vor-y</strong>: <br /> {die Firma; der Klub; der Bausektor} {steht; befindet sich} vor {einer großen Herausforderung; schwierigen Zeiten; dem Kollaps}</li>
      <li><strong>wo-x-ist-ist-auch-y-Muster</strong>: <br /> {Licht – Schatten; Rauch – Feuer; Arbeit – Brot} </li>
    </ul>
    <div class="comment-text">
      Jedes Kästchen linkt zu einer Hintergrundseite mit kurzen Erklärungen und Beispielen zu den
      unterschiedlichen Musterzugängen.
    </div>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <empty />
        <headline :h="4">Muster im <hi>Syntagmatikon</hi>
        </headline>

        <div class="container">
          <info-box title="Direkter Zugang" :color1="color1" link="/patterns/direct" :filter="['MAP', 'WVBF']">
            In einigen Ressourcen bilden Muster den primären Zugriff auf die aufbereiteten Daten und die
            lexikografischen
            Beschreibungen. Das heißt, alle Informationen sind über das Netzwerk semiabstrakter Schablonen herleitbar.
          </info-box>

          <info-box title="Lexikografische Angaben" :color1="color1" link="/patterns/component"
            :filter="['PREPCON_kon', 'SPRW', 'FesteWV']">
            In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente
            von
            Wörterbuchartikeln angeboten.
          </info-box>

          <info-box title="Dynamische Erschließung" :color1="color1" link="/patterns/dynamic"
            :filter="['KoMuX', 'PREPCON_ex', 'PREPCON_temp_art', 'Redeeinleiter']">
            In vielen Ressourcen kann man sich selbst Muster erschließen, zum einen durch automatische Suchen und
            Sortierungen auf der Basis von vorgegebenen Kategorien; zum anderen durch eigene analytische Gruppierungen.
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
      color1: "#DB6900"
    };
  },
}
</script>