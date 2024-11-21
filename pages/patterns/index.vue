<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: var(--TXT-WIDTH); margin:auto">
    <h1>Musterzugänge</h1>
    <p>
      Eines der folgenreichsten Resultate korpusempirischer Forschungen ist die Einsicht, dass linear verfestigte
      Wortfolgen systematisch auf schematischen Vorprägungen, auf Schablonen fußen, die wir Muster nennen. Muster
      werden als semiabstrakte Konstruktionen aufgefasst, bei denen die Slots nicht beliebig, sondern basierend auf
      Merkmalen ähnlicher Art gefüllt werden.
      <br />&nbsp;<br />
      Beispiele für Muster sind:
    </p>
    <ul class="example">
      <li><strong>vor-sich-hin-Muster</strong>: <br /> {das Boot dümpelt; das Brot gammelt; sie paddelt so} vor sich
        hin</li>
      <li><strong>w-x-ist-ist-auch-y-Muster</strong>: <br /> {Licht – Schatten; Rauch – Feuer; Arbeit – Brot} </li>
    </ul>
    <br />
    Im Syntagmatikon kommt die Musterperspektive auf dreifache Weise ins Spiel:
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <empty />
        <headline :h="4">Muster im Syntagmatikon</headline>

        <div class="container">
          <info-box title="Direkter Zugang" :color1="color1" link="/patterns/direct" :filter="['MAP', 'WVBF']">
            In einigen Ressourcen bilden Muster den primären Zugriff auf die aufbereiteten Daten und die
            lexikografischen
            Beschreibungen. Das heißt, alle Informationen sind über das Netzwerk semiabstrakter Schablonen herleitbar.
          </info-box>

          <info-box title="Lexikografische Angabe" :color1="color1" link="/patterns/component"
            :filter="['PREPCON_kon', 'SPRW', 'FesteWV']">
            In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente
            von
            Wörterbuchartikeln angeboten.
          </info-box>

          <info-box title="Dynamische Erschließung" :color1="color1" link="/patterns/dynamic"
            :filter="['KoMuX', 'PREPCON_ex', 'PREPCON_temp', 'Redeeinleiter', 'Verlaufsformen']">
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
      color1: "#F25A40"
    };
  },
}
</script>