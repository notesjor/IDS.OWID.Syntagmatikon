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
          <NuxtImage src="/img/patterns/dynamic/all_dynamic.png" style="text-align: center;"
        />
        </div>
      </compare-item>

       <compare-item value="1" rkey="KoMuX">
        <p>Die musterbasierte Suche in <r rkey="KoMuX" /> beruht darauf, dass grammatische Merkmale (Wortbildungstyp oder Wortart), (semantisch-)thematische (Wortfelder) und/oder lexikalische Eigenschaften (konkretes Lemma) für das Erst- und Zweitglied spezifiziert werden. Dies ermöglicht es beispielsweise, gezielt nach allen Komposita, deren Zweitglied <em>Mann</em> ist (z.B. <em>Lederjacken-Mann</em>), nach ADJEKTIV-NOMEN-Komposita (z.B. <em>Kleinkind</em>) oder auch nach SUBSTANZ-ARTEFAKT-Komposita (z.B. <em>Betonmauer</em>) zu recherchieren. 
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Suchmaske mit Spezifikationsmöglichkeiten für das Erst- und Zweitglied
          </div>

        </template>
        </compare-item>

      <compare-item value="2" rkey="PREPCON_ex">
        <p>In <r rkey="PREPCON_ex"/> lassen sich in den Präpositionen- oder Nomentabellen bestimmte wiederkehrende Muster auf der einen Seite und Einschränkungen des Gebrauchs auf der anderen Seiten identifizieren. So zeigt die Nomentabelle der Präposition <em>über</em> eine auffällige Häufung von Zeitnomina in den hohen Frequenzrängen (<em>Jahre; Jahrzehnte; Monate; Wochen</em> usw.), was auf ein Muster [<em>über</em> NOMEN<sub>TEMPORAL</sub>] mit der Bedeutung „ein gefühlt längerer Zeitraum“ hindeutet. Die dazu abrufbaren KWICs untermauern diese Bedeutung, weil dort eine Häufung von Adverbien wie <em>hinweg, hinaus</em> und des Verbs <em>hinziehen</em> zu beobachten ist.</p>
        <p> Ein Beispiel für starke Beschränkung ist das Nomen <em>Belieben</em>, das in unmittelbarer Voranstellung nur die Präpositionen <em>nach</em> (<em>nach Belieben</em>) und <em>ins</em> (<em>ins Belieben stellen</em>) aufweist.
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic03.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?prep=%C3%BCber" /> 
            Muster mit temporaler Bedeutung in der Liste der Verbindungen mit Präposition <em>über</em> und nachgestellten Nomina
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/prepcon_ex_belieben.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?noun=Belieben" /> 
            Ausschließliche Verbindungen mit nur zwei Präpositionen (<em>nach</em> und <em>ins</em>) in der Liste der Verbindungen mit dem Nomen „Belieben“
          </div>

        </template>
        </compare-item>

         <compare-item value="3" rkey="PREPCON_temp_art">
        <p>In <r rkey="PREPCON_temp_art"/> lassen sich anhand der hinterlegten automatisch erstellen Lückenfüllertabellen Muster erschließen und zwar sowohl im Vor- und Nachfeld einer Präposition-Nomen-Verbindungen als auch intern zwischen diesen beiden Komponenten.
          </p>
          <p>Im Eintrag „am Ende“ erkennt man bspw. eine Füllergruppe, die ein lokales Muster generiert: [<em>am</em> ADJ<sub>LOKAL</sub> (<em>unteren; oberen; südlichen; nördlichen</em> ...) <em>Ende</em>]. 
Die Nachfeldergänzungen zeigen z.B. das Muster, bei dem <em>am Ende</em> als Kopf einer Genitivkonstruktion für den Abschluss eines Events oder Zeitintervalls (<em>Saison; Tages; Jahres</em> ...) verwendet wird. 
</p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/prepcon_temp_amXEnde.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
              <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/index.html" /> 
            Interne Füllergruppe mit lokalen Adjektiven im Eintrag „am Ende“: Muster [<em>am</em> ADJEKTIV<sub>LOKAL</sub> <em>Ende</em>]
          </div>

           <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/prepcon_temp_amEndeX.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
              <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/htmlfiles/fillerfiles/Filler_Am_o_am_Xx_Ende_1_Field1_XML/Kwics_anderen_125.html" />
            Füllergruppe im Nachfeld mit Zeit- oder Eventnomina im Eintrag „am Ende“: Muster [<em>am Ende</em> NOMEN<sub>TEMPORAL_GENITIV</sub>]
          </div>
        </template>
        </compare-item>

         <compare-item value="4" rkey="Redeeinleiter">
        <p>In <r rkey="Redeeinleiter"/> können die Redeeinleiter u.a. nach ihrer Position relativ zum Inhalt der Wiedergabe (initial, final oder medial) gefiltert werden, um syntagmatische Muster zu erschließen. 
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/dynamic/dynamic05_tight.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="https://www.owid.de/plus/redeeinleiter/?search=sagen" /> 
            Ausschnitt aus der Ergebnisliste für die Suche nach Redeeinleitern mit <em>sagen</em>, die in initialer Position stehen
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