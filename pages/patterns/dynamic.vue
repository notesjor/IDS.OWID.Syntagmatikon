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
    props.title = 'Dynamische Erschließung';
    props.parent = 'Musterzugänge';
  },
}
</script>

<template>
  <p>In vielen Ressourcen kann man sich selbst Muster erschließen, zum einen durch automatische Suchen und Sortierungen
    auf der Basis von vorgegebenen Kategorien; zum anderen durch eigene analytische Gruppierungen.</p>
  <resources-list :filter="['KoMuX', 'PREPCON_ex', 'PREPCON_temp', 'Redeeinleiter', 'Verlaufsformen']" />
  <h2>Beispiele</h2>
  <v-carousel style="height:400px">
    <v-carousel-item>
      <img src="/img/patterns/dynamic/dynamic01.png" alt="Beispiel 1 für dynamische Erschließung" />
    </v-carousel-item>
    <v-carousel-item>
      <img src="/img/patterns/dynamic/dynamic02.png" alt="Beispiel 2 für dynamische Erschließung" />
    </v-carousel-item>
    <v-carousel-item>
      <img src="/img/patterns/dynamic/dynamic03.png" alt="Beispiel 3 für dynamische Erschließung" />
    </v-carousel-item>
    <v-carousel-item>
      <img src="/img/patterns/dynamic/dynamic04.png" alt="Beispiel 4 für dynamische Erschließung" />
    </v-carousel-item>
    <v-carousel-item>
      <img src="/img/patterns/dynamic/dynamic05.png" alt="Beispiel 5 für dynamische Erschließung" />
    </v-carousel-item>
  </v-carousel>
</template>