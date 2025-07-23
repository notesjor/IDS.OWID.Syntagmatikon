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

<div>
  <p>In vielen Ressourcen kann man sich selbst Muster erschließen, zum einen durch automatische Suchen und Sortierungen
    auf der Basis von vorgegebenen Kategorien; zum anderen durch eigene analytische Gruppierungen.</p>
   <div>
    <compare
      :filter="['KoMuX', 'PREPCON_ex', 'PREPCON_temp_art', 'Redeeinleiter', 'Verlaufsformen']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/patterns/all_dummy.png" style="text-align: center;"
        />
        </div>
      </compare-item>

       <compare-item value="1" rkey="KoMuX">
        <p>
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Beispiel aus Komux
          </div>

        </template>
        </compare-item>

      <compare-item value="2" rkey="PREPCON_ex">
        <p>
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic03.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?prep=%C3%BCber" /> 
            Muster mit temporaler Bedeutung in der Liste der Verbindungen mit Präposition <em>über</em> und nachgestellten Nomina
          </div>

        </template>
        </compare-item>

         <compare-item value="3" rkey="PREPCON_temp_art">
        <p>
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic04.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
              <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/index.html" /> 
            Beispiel aus Prepcon_temp_art
          </div>

           <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic04_anderenKwics.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
              <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/htmlfiles/fillerfiles/Filler_Am_o_am_Xx_Ende_1_Field1_XML/Kwics_anderen_125.html" />
            Beispiel aus Prepcon_temp_art
          </div>
        </template>
        </compare-item>

         <compare-item value="4" rkey="Redeeinleiter">
        <p>
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic05.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="https://www.owid.de/plus/redeeinleiter/?search=sagen" /> 
            Beispiel aus Redeeinleiter
          </div>

        </template>
        </compare-item>

         <compare-item value="5" rkey="Verlaufsformen">
        <p>
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic02.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/progdb?scrollToVerb=abbauen" /> 
            Beispiel aus Verlaufsformen
          </div>

        </template>
        </compare-item>
      
      </compare>
    </div>
</div>
</template>

<!-- <template>
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
</template> -->