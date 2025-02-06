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
    props.title = 'KWICs';
    props.parent = 'Informationstypen';
  },
}
</script>

<template>
  <h2>KeyWords In Context: „Schlüsselwörter im Kontext“</h2>
  <p>Wenn man eine Zeichenkette (z.B. ein Wort oder eine Wortgruppe) im Korpus sucht, bekommt man in der Regel Zeilen
    (Konkordanzen) angezeigt, in denen das Suchobjekt vorkommt, ergänzt durch ein wenig Text davor und danach.
    <expand-me>Es handelt sich um Textschnipsel, die nicht immer grammatisch vollständige Sätze sein müssen. Anhand
      solcher
      Konkordanzen lassen sich jedoch bereits wichtige Hinweise gewinnen, in welchen Satzzusammenhängen eine sprachliche
      Einheit häufig verwendet wird (typische Kontextmuster), z.B. häufig eingebettet in wörtliche Rede; mit Modalverben
      oder Negationswörtern verbunden. Bei Wortgruppen kann man bspw. erkennen, wie fest oder variabel sie
      sind.</expand-me>
  </p>
  <p>Im <hi>Syntagmatikon</hi> dienen automatisch ermittelte KWICs nicht nur als empirische Basis, sondern werden in
    einigen
    Ressourcen selbst als lexikografische Informationseinheiten angeboten.
  </p>

  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['PREPCON_ex', 'PREPCON_temp', 'SpruchList', 'SPRW', 'WVBF']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/kwics/kwics_all.png" style="text-align: center;" alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_ex">
        <p>
          In
          <r rkey="PREPCON_ex" /> werden zu jeder
          Präposition-Nomen-Verbindung automatisch ausgewählte KWICs angezeigt (5-25 Zeilen beim Anklicken).
        </p>
        <template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_ex_amEnde.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige in Präpositionentabelle „am“ (nominaler Partner <em>Ende</em>)
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="PREPCON_temp">
        <p>
          In
          <r rkey="PREPCON_temp" /> kann man automatisch
          selektierte
          KWICs an unterschiedlichen Stellen mit einer Zufallsauswahl abrufen:
        </p>

        <p>Rubrik „Kurzartikel“</p>
        <ul>
          <li>in ‚Häufigkeit im Korpus‘ für die jeweilige Suchen/Frequenzen (Groß- und Kleinschreibung;
            Großschreibung;
            Kleinschreibung)</li>
          <li>in ‚Typische Partnerwörter‘ für die jeweiligen Kookkurrenzcluster</li>
          <li>in ‚Muster‘ für die jeweiligen Lückenfüllertabellen</li>
        </ul>
        <p>Rubrik „Inventar“</p>
        <ul>
          <li>Verlinkung zu KWICs in
            <r rkey="PREPCON_ex" />
          </li>
        </ul>
        <template #explain>
          <div class="exampleHeadline">Rubrik „Kurzartikel“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige (Kleinschreibung) im Artikel „ohne Unterlass“ (Rubrik „Kurzartikel“:
            ‚Häufigkeit im Korpus‘)
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass_redet.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige des Kookkurrenz-Clusters <em>ohne Unterlass – redet</em> im Artikel „ohne
            Unterlass“ (Rubrik „Kurzartikel“: ‚Typische Partnerwörter‘)
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass_an_der.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige des Bigram-Füllers <em>an … der</em> (Muster: <em>ohne Unterlass</em> X) im
            Artikel „ohne Unterlass“ (Rubrik „Kurzartikel“: ‚Muster‘)
          </div>

          <div class="exampleHeadline">Rubrik „Inventar“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_temp_amHeiligabend.png" alt="Beispielgrafik 4" />
          </div>
          <div class="caption">
            Ausschnitt aus der KWIC-Verlinkung im Eintrag „am Heiligabend“ (Rubrik „Inventar“: ‚Feiertage‘)
          </div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="PREPCON_kon">
        <p>
          In
          <r rkey="PREPCON_kon" /> kann man automatisch
          selektierte
          KWICs an unterschiedlichen Stellen für die Ausgangssprache Deutsch und die Kontrastsprachen Spanisch und
          Slowakisch
          mit Zufallsauswahl abrufen:
        </p>
        <p>Rubrik „Quantitative Angaben“</p>
        <ul>
          <li>in ‚Häufigkeit im Korpus‘ für die jeweilige Suchen/Frequenzen (Groß- und Kleinschreibung;
            Großschreibung;
            Kleinschreibung)</li>
          <li>in ‚Typische Partnerwörter‘ für die jeweiligen Kookkurrenzcluster</li>
          <li>in ‚Muster‘ für die jeweiligen Lückenfüllertabellen</li>
        </ul>
        <p>Rubrik „Gebrauchsaspekte“</p>
        <ul>
          <li>für die manuell zusammengestellten Satelliten-Felder</li>
        </ul>
        <p>Rubrik „Gebrauchsaspekte“</p>
        <ul>
          <li>für die manuell systematisierten Lückenfüller</li>
        </ul>
        <template #explain>
          <div class="exampleHeadline">Rubrik „Quantitative Angaben“: ‚Häufigkeit im Korpus‘</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantSuche.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige (Großschreibung) im Artikel „mit Genugtuung“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantSucheSpanisch.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige (Kleinschreibung) im Artikel „mit Genugtuung - con satisfacción“
          </div>

          <div class="exampleHeadline">Rubrik „Quantitative Angaben“: ‚Typische Partnerwörter‘)</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantPartner.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige des Kookkurrenz-Clusters <em>mit Genugtuung – erfüllt</em> im Artikel „mit
            Genugtuung“ (KWIC-Angaben nur für deutsche Daten verfügbar)
          </div>

          <div class="exampleHeadline">Rubrik „Quantitative Angaben“: ‚Muster‘)</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantMuster.png" alt="Beispielgrafik 4" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige des Füllers <em>sichtlicher</em> (Muster: <em>mit</em> X <em>Genugtuung</em>)
            im Artikel „mit Genugtuung“
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantMusterSpanisch.png" alt="Beispielgrafik 5" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige des Füllers <em>gran</em> (Muster: <em>con</em> X <em>satisfacción</em>) im
            Artikel „mit Genugtuung – con satisfacción“
          </div>

        </template>
      </compare-item>

      <compare-item value="4" rkey="SpruchList">
        <p>
          In
          <r rkey="SpruchList" /> werden für die weite
          Suchanfrage eines
          Eintrags automatisch selektierte KWICs angezeigt (bis 1000 Zufallsauswahl).
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/spruchList.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige im Eintrag „Ausnahmen bestätigen die Regel“
          </div>
        </template>
      </compare-item>

      <compare-item value="5" rkey="SPRW">
        <p>
          <r rkey="SPRW" /> bietet einen dynamischen Zugang zu
          automatisch
          ermittetelten KWICs und Volltextstellen auf dem aktuellen Stand des DeReKo-W-Archivs. Dazu wurden
          Suchanfragen
          hinterlegt, die bei Aktivierung die COSMAS-II-Suche starten.
        </p>
        <template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/sprw_cosmas.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige im Artikel „Not macht erfinderisch“
          </div>
        </template>
      </compare-item>

      <compare-item value="6" rkey="WVBF">
        <p>
          In
          <r rkey="WVBF" /> werden automatisch selektierte KWICs
          für die
          jeweiligen Knoten angezeigt, sowohl für lexikalisierte Wortverbindungen als auch für Muster (bis zu 2000
          Zufallsauswahl).
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/kwics/wvGrund.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Ausschnitt aus KWIC-Anzeige des Knotens „aus ADJ Gründen“
          </div>
        </template>
      </compare-item>
    </compare>
  </div>
</template>