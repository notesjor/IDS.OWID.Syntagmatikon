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
    props.title = 'Narrative Beschreibungen';
    props.parent = 'Informationstypen';
  },
}
</script>

<template>
  <p>Neben den Korpusdaten nehmen manuell verfasste narrative Kommentare und Beschreibungen einen zentralen Platz in
    nahezu allen Ressourcen des <hi>Syntagmatikons</hi> ein. Diese erläutern unterschiedliche Aspekte des
    sprachlichen Gebrauchs eines Eintrags. Vor allem sind es:</p>
  <ul>
    <li>Bedeutungsbeschreibungen (in der Lexikografie auch Paraphrasen genannt)</li>
    <li>Beschreibungen von Gebrauchsaspekten</li>
    <li>Beschreibungen von Mustern</li>
  </ul>
  <p>Die Beschreibungsformen reichen von kurzen Etikettierungen (z. B. einer Kernbedeutung) über standardisierte
    lexikografische Paraphrasen bis hin zu mehr oder weniger ausführlichen linguistischen Analysetexten.</p>


  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['PREPCON_kon', 'MAP', 'SPRW', 'WVBF', 'FesteWV']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/narration/narration_all.png" style="text-align: center;"
            alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_kon">
        <p>
          In
          <r rkey="PREPCON_kon" /> werden in der
          Ausgangssprache Deutsch und den Kontrastsprachen Spanisch und Slowakisch Gebrauchsaspekte und
          lexikalische Erweiterungen narrativ kommentiert (auf Deutsch).
        </p>
        <template #explain>
          <div class="exampleHeadline">Rubrik: „Gebrauchsaspekte“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/prepcon_kon_gebrauch.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/amAnfang.html" /> Beschreibungstext zum Gebrauchsaspekt ‚Thematisierung von Schwierigkeiten‘ im Artikel „am
            Anfang – al principio“ (Konvergenz)
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/prepcon_kon_gebrauch_div.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/amAnfang.html" /> Beschreibungstext zum Gebrauchsaspekt ‚Rückblicke‘ im Artikel „am Anfang – al principio“
            (Divergenz)
          </div>

          <div class="exampleHeadline">Rubrik: „Lexikalische Erweiterungen“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/prepcon_kon_muster_div.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/muster/mitGenugtuung.html" />Kommentar zur lexikalischen Erweiterung <em>mit einer gewissen Genugtuung</em> des Muster
            <em>mit X Genugtuung</em> im Artikel „mit Genugtuung – con satisfacción“ (Divergenz)
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/prepcon_kon_muster_konv.png" alt="Beispielgrafik 4" />
          </div>
          <div class="caption">
            <ScreenshotLink to="http://uwv.ids-mannheim.de/prepcon/modul3/muster/mitGenugtuung.html" /> Kommentar zu lexikalischen Erweiterung zum Muster <em>mit [(...) ADJ] Genugtuung - con
              [(...) ADJ] satisfacción</em> im Artikel „mit Genugtuung – con satisfacción“
            (Konvergenz)
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="MAP">
        <p>
          Narrative Beschreibungen bilden den Kern von <r rkey="MAP" />. Der Fokus liegt dabei auf den Bedeutungsmerkmalen der beschriebenen Muster. Ausführlich kommentiert werden etwa der Zusammenhang der Musterbedeutung mit der räumlichen Quellbedeutung der jeweiligen Präposition sowie der Zusammenhang mit (und zwischen) verschiedenen Klassen von lexikalischen Füllern, die in einem Muster auftreten. Daneben werden auch etwaige syntaktische, verwendungskontextuelle und phraseologische Besonderheiten illustriert und erläutert.
        </p>
<template #explain>
          <div class="exampleImg">
           <NuxtImage src="/img/datatypes/narration/map_respekt.png" alt="Beispielgrafik 1" /> 
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/plus/map/article/vor/respekt" />Narrative Beschreibungen für das Muster RESPEKT
          </div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="SPRW">
        <p>
          In
          <r rkey="SPRW" /> werden narrative Texte
          und Kommentare zu
          folgenden Aspekten angezeigt:
        </p>
        <ul>
          <li>Bedeutung</li>
          <li>Gebrauchsbesonderheiten</li>
          <li>Formvarianten</li>
          <li>Ersetzung von Komponenten</li>
          <li>Typische Verwendung im Text</li>
        </ul>
        <p>Des Weiteren gibt es Hintergrund- und Fachkommentare. </p><template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/sprw_bedeutung.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/artikel/404227" /> Bedeutungsbeschreibung im Eintrag „Alles hat ein Ende“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/sprw_gebrauch.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/artikel/404227" /> Beschreibungstext für ‚Gebrauchsbesonderheiten‘ im Eintrag „Alles hat ein Ende“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/sprw_verwendung.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
           <ScreenshotLink to="https://www.owid.de/artikel/404227" /> Beschreibungstext für ‚Typische Verwendung im Text‘ im Eintrag „Alles hat ein Ende“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/sprw_varianten.png" alt="Beispielgrafik 4" />
          </div>
          <div class="caption">
           <ScreenshotLink to="https://www.owid.de/artikel/404227" /> Kommentartext für Formvariante <em>Alles hat ein Ende, nur die Wurst hat zwei</em> im
            Eintrag „Alles hat ein Ende“
          </div>

          <p>
            Im Modul „Werbeslogans“ sind zusätzlich narrative Beschreibungen zur Entstehungsgeschichte
            hinterlegt.
          </p>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/sprw_geschichte.png" alt="" />
          </div>
          <div class="caption">
           <ScreenshotLink to="https://www.owid.de/artikel/404075" /> Beschreibungstext in ‚Geschichte‘ im Eintrag „Geiz ist geil“
          </div>
        </template>
      </compare-item>

      <compare-item value="4" rkey="WVBF">
        <p>
          In
          <r rkey="WVBF" /> werden narrative Text in
          unterschiedlicher Form in den einzelnen Knoten angeboten:
        </p>
        <ul>
          <li>prägnante Sätze, die die abstrakte Kernbedeutung paraphrasieren</li>
          <li>ausführliche Fachkommentare, die weitere sprachliche Merkmale dieses Knotens beschreiben
          </li>
          <li>ausführliche Fachkommentare, die Merkmale der Lückenfüller auf einer abstrakten Ebene
            erfassen</li>
          <li>ausführliche Fachkommentare, die die Beziehung zu Kontrasteinheiten thematisieren</li>
        </ul>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/wvGrund_bedeutung.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://wvonline.ids-mannheim.de/wvfelder-v3/uwvnodes_html/aus_welchen_Gruenden_auch_immer_ID1364235183666.html" /> Allgemeine Beschreibung im Knoten „aus welchen Gründen auch immer“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/wvGrund_fueller1.png" alt="Beispielgrafik 2" />
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/wvGrund_fueller2.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
             <ScreenshotLink to="http://wvonline.ids-mannheim.de/wvfelder-v3/uwvnodes_html/aus_ADJ_Gruenden_ID1364235183677.html" /> Ausgewählte Kommentare zu Lückenfüllern im Knoten „aus ADJ Gründen“
          </div>
        </template>
      </compare-item>

      <compare-item value="5" rkey="FesteWV">
        <p>
          <r rkey="FesteWV" /> wurde als experimentelle
          Ressource für
          die korpusbasierte Beschreibung von Wortverbindungen in den Anfangsjahren der
          Online-Lexikografie am IDS
          erarbeitet. Deshalb finden sich in den zwei Teilressourcen unterschiedliche Formen von narrativen
          Gebrauchsbeschreibungen.
        </p>
        <ul>
          <li>In der Teilressource „Musterartikel“ wurden Artikel für unterschiedliche Phrasemtypen erarbeitet,
            mit
            Bedeutungsparaphrasen und Texten zu den Angaben ‚Wertungsaspekt‘‚ ‚Funktion in der
            Kommunikation‘ sowie
            ‘grammatische Besonderheiten‘.</li>
          <li>
            In der Teilressource „Wortverbindungen mit Adjektiven“ wurde getestet, wie man mit einer
            reduzierten
            Artikelstruktur eine größere Lemmastrecke bearbeiten könnte. Hier wurden umfangreichere
            narrative Texte zum
            Gebrauch in einer einzigen Angabe formuliert.
          </li>
        </ul>
        <template #explain>
          <div class="exampleHeadline">Teilressource „Musterartikel“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/festeWV_bedeutung.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
             <ScreenshotLink to="https://www.owid.de/artikel/315656/sich%20frei%20%C3%A4u%C3%9Fern/0" />Bedeutungsbeschreibung im Eintrag „reden, wie einem der Schnabel gewachsen ist“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/festeWV_wertung.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/artikel/309157/unter%20Wert/0" />Beschreibungstext für ‚Wertungsaspekt‘ im Eintrag „billiger Jakob“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/festeWV_funktion.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/artikel/309154/publikmachen/0" />Beschreibungstext für ‚Funktion in der Kommunikation‘ im Eintrag „an die große Glocke
            hängen“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/festeWV_grammatik.png" alt="Beispielgrafik 4" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/artikel/309165/Bewertung%20einer%20(Sprach-)Handlung/0" /> Beschreibungstext für ‚Grammatische Besonderheiten‘ im Artikel „Gut gebrüllt, Löwe“
          </div>

          <div class="exampleHeadline">Teilressource „Wortverbindungen mit Adjektiven“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/narration/festeWV_mitAdj_bedeutung.png" alt="Beispielgrafik 5" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/artikel/309123" /> Gebrauchsbeschreibung im Eintrag „jeder halbwegs normale Mensch“
          </div>

        </template>
      </compare-item>
    </compare>
  </div>
</template>