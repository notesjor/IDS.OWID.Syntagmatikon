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
    props.title = 'Lückenfüllertabellen';
    props.parent = 'Informationstypen';
  },
}
</script>

<template>
  <p>Syntagmen zeichnen sich nicht nur dadurch aus, dass sie verfestigte Wortgruppen sind, sondern dass gleichzeitig
    bestimmte Komponenten austauschbar sind. Diese Ersetzung ist aber nicht eine Sache von Sprachspiel oder
    stilistischer Variation. Vielmehr folgt dieser Mechanismus Mustern: Viele Sprachteilhaber füllen diese Slots auf
    vergleichbare Art und Weise. In der Fachsprache spricht man davon, dass beim Weglassen einer oder mehrerer
    Komponenten ein Slot eröffnet wird, der mit lexikalischen Füllern besetzt wird.
    Mithilfe automatischer Methoden, z.B. dem Tool <NuxtLink to="http://uwv.ids-mannheim.de/lexpan/">lexpan
    </NuxtLink>, lässt sich nun ermitteln, welche Füller überproportional
    häufig vorkommen und welche Musterbildungen vorliegen (Rubrik <NuxtLink to="/patterns">Musterzugänge</NuxtLink>
    ). Dazu werden so genannte Lückenfüllertabellen erstellt.</p>

  <p> Im <hi>Syntagmatikon</hi> dienen automatisch ermittelte lexpan-Lückenfüllertabellen nicht nur als empirische
    Basis, sondern werden in einigen Ressourcen selbst als lexikografische Informationseinheiten angeboten.</p>

  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['PREPCON_temp_art', 'PREPCON_kon', 'WVBF']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/patterntables/patterntables_all.png" style="text-align: center;"
            alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_temp_art">
        <p>
          In
          <r rkey="PREPCON_temp_art" /> werden automatisch erstellte Lückenfüllertabellen für die temporalen Zweiworteinheiten werden in der Angabe ‚Muster‘ automatisch erstellte Lückenfüllertabellen für die temporalen Zweiworteinheiten angeboten. Diese illustrieren drei Mustertypen: X-Präposition-Nomen;
          Präposition-X-Nomen (beide X jeweils eine Leerstelle); Präposition-Nomen-X (X zwei Leerstellen).
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/patterntables/prepcon_temp_amXEnde_window.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/htmlfiles/fillerfiles/Filler_Am_o_am_Xx_Ende_1_Field1.html"/> Ausschnitt aus der Lückenfüllertabelle <em>am</em> X <em>Ende</em> im Eintrag „am Ende“ 
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/patterntables/prepcon_temp_amEndeX_window.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/htmlfiles/fillerfiles/Filler_am_o_Am_Ende_X_X_8_Field2_3.html"/>
            Ausschnitt aus der Lückenfüllertabelle <em>am Ende</em> X im Eintrag „am Ende“ 
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="PREPCON_kon">
        <p>
          In
          <r rkey="PREPCON_kon" /> werden automatisch erstellte Lückenfüllertabellen für das Sprachenpaar deutsch-spanisch und deutsch-slowakisch in ‚Quantitative Angaben -Muster‘ dargestellt.
          Da die Tabellen
          auf unterschiedlichen Korpora basieren (DeReKo-W-Archiv; Webkorpora in Sketch Engine), sind die
          quantitativen
          Angaben nicht vergleichbar. Trotzdem weisen bestimmte Füllergruppen in allen Sprachen
          Gemeinsamkeiten auf, was
          für eine über ein spezielles Korpus hinausgehende Verallgemeinerbarkeit spricht (universale
          Beziehungen).
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/patterntables/prepcon_kon_deutsch.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/de/Filler_mit_o_Mit_Xx_Genugtuung_24_Field1.html"/> Ausschnitt aus der Lückenfüllertabelle des Musters <em>mit</em> X <em>Genugtuung</em> im
            Eintrag „mit Genugtuung – con satisfacción“ (Rubrik „Quantitative Angaben: ‚Muster‘)
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/patterntables/prepcon_kon_spanisch.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/es/Filler_con_o_Con_Xx_satisfaccin_35_Field1.html"/> Ausschnitt aus der Lückenfüllertabelle des Musters <em>con</em> X <em>satisfacción</em> im
            Eintrag „mit Genugtuung – con satisfacción“ (Rubrik „Quantitative Angaben: ‚Muster‘)
          </div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="WVBF">
        <p>
          Im
          <r rkey="WVBF" /> werden
          Lückenfüllertabellen für die
          Musterknoten mit klassifizierten Platzhaltern angeboten, z.B. <em>aus</em> ADJ <em>Gründen</em>;
          <em>auf Grund
            von</em> SUB; SUB-G PRON <em>auch immer</em>.
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/patterntables/wvGrund_kontext.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://wvonline.ids-mannheim.de/wvfelder-v3/extrafiles/auf_GRUND/auf_Grund_von_SUB/Fillers_Auf_o_auf_Grund_von_X.xml.html"/> Ausschnitt aus der Lückenfüllertabelle des Musters <em>auf Grund von</em> SUB im Knoten „auf
            Grund X“
          </div>
        </template>
      </compare-item>
    </compare>
  </div>

</template>