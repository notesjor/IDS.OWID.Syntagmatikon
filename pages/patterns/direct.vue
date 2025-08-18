<script setup>
definePageMeta({
  layout: "subpage",
})
</script>
<script>
import { useLayoutStore } from '~/stores/layout';
export default {
  mounted() {
    const props = useLayoutStore();
    props.title = 'Direkter Zugang';
    props.parent = 'Musterzugänge';
  },
}
</script>

<template>
  <p>In diesen Ressourcen bilden Muster den primären Zugriff auf die aufbereiteten Daten und die lexikografischen
    Beschreibungen. Das heißt, alle Informationen sind über das Netzwerk semiabstrakter Schablonen herleitbar.</p>
  <resources-list :filter="['MAP', 'WVBF']" />
  <h2>Beispiele</h2>

  <v-carousel style="height:400px">
    <v-carousel-item>
      <img src="/img/patterns/direct/direct02.png" alt="Beispiel 1 für direkten Musterzugang" />
    </v-carousel-item>
    <v-carousel-item>
      <img src="/img/patterns/direct/direct03.png" alt="Beispiel 2 für direkten Musterzugang" />
    </v-carousel-item>
    <v-carousel-item>
      <img src="/img/patterns/direct/direct01.png" alt="Beispiel 3 für direkten Musterzugang" />
    </v-carousel-item>
  </v-carousel>


</template>