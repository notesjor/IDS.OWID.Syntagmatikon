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
        props.title = 'Lexikografische Angaben';
        props.parent = 'Musterzugänge';
    },
}
</script>

<template>

<div>
  <p>In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente von
        Wörterbuchartikeln angeboten</p>
   <div>
    <compare
      :filter="['PREPCON_kon', 'SPRW', 'FesteWV']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/patterns/all_dummy.png" style="text-align: center;"
        />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_kon">
        <p>In <r rkey="PREPCON_kon" /> gibt es für jeden Eintrag den Bereich „Lexikalische Erweiterungen“. Hier werden nicht nur typische Verwendungsmuster zu der beschriebenen Präposition-Nomen-Verbindung dargestellt, sondern diese können auch mit den Mustern der äquivalenten Präposition-Nomen-Verbindung in den Kontrastsprachen Spanisch und Slowakisch verglichen werden.</p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/component/component01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/muster/mitGenugtuung.html" /> 
            Musterangaben zum Eintrag „mit Genugtuung“ in Kontrast zu „con satisfacción“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/component/component02.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/kontrastiv/mit_SUB_emotiv_Genugtuung.html" /> 
           Füller zum Muster „mit [SUBSTANTIV funktional: emotiv] und Genugtuung“ in Kontrast zu Füllern des Musters „con [SUBSTANTIV funktional: emotiv] y satisfacción“
          </div>

        </template>
        </compare-item>

         <compare-item value="2" rkey="SPRW">
        <p> In <r rkey="SPRW" /> ...
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Beispiel fehlt
          </div>

        </template>
        </compare-item>

          <compare-item value="2" rkey="FesteWV">
        <p>
            In <r rkey="FesteWV" /> findet man unter der Angabe „Typische Kontextmuster“ ausgewählte Verwendungsmuster der festen Wortverbindung.
          </p>
        <template #explain>
        <div class="exampleImg">
            <NuxtImage src="/img/patterns/component/component03.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="https://www.owid.de/artikel/309154/publikmachen/0" /> 
            Typische Kontextmuster zum Eintrag „an die große Glocke hängen“
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/patterns/component/component04.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="https://www.owid.de/artikel/309050" /> 
           Typische Kontextmuster zum Eintrag „blinder Aktionismus“
          </div>

        </template>
        </compare-item>
      
      </compare>
    </div>
</div>
</template>
<!-- 
<template>
    <p>In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente von
        Wörterbuchartikeln angeboten, und zwar in
        <r rkey="PREPCON_kon" /> und
        <r rkey="FesteWV" />.
    </p>
    <resources-list :filter="['PREPCON_kon', 'SPRW', 'FesteWV']" />
    <h2>Beispiele</h2>
    <v-carousel style="height:400px">
        <v-carousel-item>
            <img src="/img/patterns/component/component01.png" alt="Beispiel 1 für Lexikografische Angaben" />
        </v-carousel-item>
        <v-carousel-item>
            <img src="/img/patterns/component/component02.png" alt="Beispiel 2 für Lexikografische Angaben" />
        </v-carousel-item>
        <v-carousel-item>
            <img src="/img/patterns/component/component03.png" alt="Beispiel 3 für Lexikografische Angaben" />
        </v-carousel-item>
        <v-carousel-item>
            <img src="/img/patterns/component/component04.png" alt="Beispiel 4 für Lexikografische Angaben" />
        </v-carousel-item>
    </v-carousel>
</template> -->