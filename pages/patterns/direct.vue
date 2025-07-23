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

<div>
  <p>In diesen Ressourcen bilden Muster den primären Zugriff auf die aufbereiteten Daten und die lexikografischen
    Beschreibungen. Das heißt, alle Informationen sind über das Netzwerk semiabstrakter Schablonen herleitbar.</p>

   <div>
    <compare
      :filter="['WVBF', 'MAP']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/patterns/all_dummy.png" style="text-align: center;"
        />
        </div>
      </compare-item>

      <compare-item value="1" rkey="WVBF">
        <p><r rkey="WVBF" /> visualisiert die Vernetzung von Wortverbindungen und semiabstrakten Mustern des Bezugslexems GRUND in Kombination mit den Präpositionen <em>aus; auf; in; mit</em> und <em>ohne</em>. Die primäre Zugriffsstruktur ist eine Netzwerkgrafik, bei der jeder Knoten mit einer Beschreibung eines syntagmatischen Musters verknüpft ist.
          </p>
        <template #explain>
          <div class="exampleImg">
            
            <NuxtImage src="/img/patterns/direct/direct02.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://wvonline.ids-mannheim.de/wvfelder-v3/grund-graphik.html" /> 
            Ausschnitt aus dem Netzwerk des Wortverbindungsfeldes Präp+GRUND mit Mustern in unterschiedlichen Abstraktionsgraden
          </div>
          <div class="exampleImg">
              
            <NuxtImage src="/img/patterns/direct/direct03.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            <ScreenshotLink to="http://wvonline.ids-mannheim.de/wvfelder-v3/uwvnodes_html/aus_ADJ_Gruenden_ID1364235183677.html" />
           Eintrag „aus ADJ Gründen“ im Wortverbindungsfeld Präp+GRUND
          </div>

        </template>
        </compare-item>

         <compare-item value="2" rkey="MAP">
        <p>
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/direct/direct01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Eintrag zum Muster  „Bewährung“ in MAP -- TODO: Austauschen, da muster nicht mehr vorhanden
          </div>

        </template>
        </compare-item>
      
      </compare>
    </div>
</div>
</template>

  <!-- <p>In diesen Ressourcen bilden Muster den primären Zugriff auf die aufbereiteten Daten und die lexikografischen
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
  </v-carousel> -->


