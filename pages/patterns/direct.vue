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
          <NuxtImage src="/img/patterns/direct/all_direct.png" style="text-align: center;"
        />
        </div>
      </compare-item>

      <compare-item value="1" rkey="WVBF">
        <p><r rkey="WVBF" /> visualisiert die Vernetzung von Wortverbindungen und semiabstrakten Mustern des Bezugslexems GRUND in Kombination mit den Präpositionen <em>aus, auf, in, mit</em> und <em>ohne</em>. Jeder Knoten bündelt automatische Korpusdaten (KWICs, Belege, Slotfüller, Kookkurrenzen u.a.) und qualitative Interpretation dieser Daten für die jeweilige Wortverbindung bzw. das semiabstrakte Muster.</p>
        <p>So wird im Muster-Knoten [<em>aus</em> ADJ <em>Gründen</em>] beschrieben, welcher semantisch-pragmatischen Natur die unterschiedliche Füllergruppen sind: z. B.  Adjektive, die sich auf konkrete Ursachen oder Motiven beziehen oder Adjektive, die die Nachvollziehbarkeit von Ursachen und Motiven thematisieren.
          </p>
        <template #explain>
          <div class="exampleImg">
            
            <NuxtImage src="/img/patterns/direct/direct02.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://wvonline.ids-mannheim.de/wvfelder-v3/grund-graphik.html" /> 
            Ausschnitt aus dem Netzwerk des Wortverbindungsfeldes Präp+GRUND mit Mustern auf unterschiedlichen Abstraktionsebenen
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
        <p>Die primären Beschreibungsobjekte in <r rkey="MAP" /> sind Muster bestehend aus einem (meist verbalen) Prädikat und einer Präposition in abstrakter Verwendung. Durch die musterbasierte Perspektive unterscheidet  <r rkey="MAP" /> sich von traditionellen valenzlexikografischen Beschreibungen, bei denen Valenzmuster ausgehend von Valenzträgern (meist Verben) dargestellt werden.</p>
        <p>Direkt zugänglich sind die <r rkey="MAP" />-Muster über die Musterübersicht und über die Schaltfläche „Muster“ in der Belegsuche. Darüber hinaus sind die <r rkey="MAP" />-Muster in der Belegsuche über ihre semantischen Merkmale (Schaltfläche „Schlagworte“) und ihre instanziierenden Prädikate (Schaltfläche „Lemma“) zugänglich.
          </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/patterns/direct/direct_map1.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Primärer Zugriff über die Musterübersicht
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/patterns/direct/direct_map_suche.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Belegsuche - ausgeklappt ist der Zugriff über die Prädikate der Muster („Lemma“)
          </div>

        </template>
        </compare-item>
      
      </compare>
    </div>
</div>
</template>

 