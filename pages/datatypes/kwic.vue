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
    <compare
      :filter="['PREPCON_ex', 'PREPCON_temp_art', 'PREPCON_temp_inv', 'PREPCON_kon', 'SpruchList', 'SPRW', 'WVBF']">
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
          <NuxtImage src="/img/datatypes/kwics/prepcon_ex_amEnde_kwics_Praeppers.png" alt="Beispielgrafik 1"
            to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?prep=am">
            Ausschnitt aus KWIC-Anzeige in Präpositionentabelle „am“ (nominaler Partner <em>Ende</em>)
          </NuxtImage>
          <NuxtImage src="/img/datatypes/kwics/prepcon_ex_amEnde_kwics_Nomenpers.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?noun=Ende">
            Ausschnitt aus KWIC-Anzeige in Nomentabelle „Ende“ (präpositionaler Partner <em>Ende</em>)
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="2" rkey="PREPCON_temp_art">
        <p>
          In
          <r rkey="PREPCON_temp_art" /> sind KWICs in folgenden Angaben abrufbar:
        </p>
        <ul>
          <li>in ‚Häufigkeit im Korpus‘ (für die jeweilige Suchanfragen)</li>
          <li>in ‚Typische Partnerwörter‘ (für die jeweiligen Kookkurrenzcluster)</li>
          <li>in ‚Muster‘ (für die jeweiligen Lückenfüllertabellen)</li>
        </ul>

        <template #explain>
          <NuxtImage src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass.png" alt="Beispielgrafik 1"
            to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/ohne_Unterlass/htmlfiles/fillerfiles/Kwics_ohne_1.html">
            Ausschnitt aus KWIC-Anzeige (Kleinschreibung) im Eintrag „ohne Unterlass“ (Rubrik „Kurzartikel“:
            ‚Häufigkeit im Korpus‘)
          </NuxtImage>
          <NuxtImage src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass_redet.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/ohne_Unterlass/htmlfiles/clusterfiles/Clusters_ohneUnterlass_1_1_KA_oFW_1_XML/Kwics_redet_267.html">
            Ausschnitt aus KWIC-Anzeige des Kookkurrenz-Clusters <em>ohne Unterlass – redet</em> im Eintrag „ohne
            Unterlass“ (Rubrik „Kurzartikel“: ‚Typische Partnerwörter‘)
          </NuxtImage>
          <NuxtImage src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass_an_der.png" alt="Beispielgrafik 3"
            to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/ohne_Unterlass/htmlfiles/fillerfiles/Filler_ohne_o_Ohne_Unterlass_X_X_9_Field2_3_XML/Kwics_an__der_2989.html">
            Ausschnitt aus KWIC-Anzeige des Bigram-Füllers <em>an … der</em> (Muster: <em>ohne Unterlass</em> X) im
            Eintrag „ohne Unterlass“ (Rubrik „Kurzartikel“: ‚Muster‘)
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="3" rkey="PREPCON_temp_inv">
        <p>
          In
          <r rkey="PREPCON_temp_inv" /> linken die Einträge auf die KWICs von
          <r rkey="PREPCON_ex" />.
        </p>

        <template #explain>
          <NuxtImage src="/img/datatypes/kwics/prepcon_temp_amHeiligabend.png" alt="Beispielgrafik 4"
            to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?noun=Heiligabend">
            Ausschnitt
            aus der KWIC-Verlinkung im Eintrag „am Heiligabend“ (Rubrik „Inventar“: ‚Feiertage‘)
          </NuxtImage>
        </template>
      </compare-item>


      <compare-item value="4" rkey="PREPCON_kon">
        <p>
          In
          <r rkey="PREPCON_kon" /> kann man automatisch
          selektierte
          KWICs an unterschiedlichen Stellen für die Ausgangssprache Deutsch und die Kontrastsprachen Spanisch und
          Slowakisch
          mit Zufallsauswahl abrufen.
        </p>
        <p>In „Quantitative Angaben“</p>
        <ul>
          <li>in ‚Häufigkeit im Korpus‘ für die jeweilige Suchen/Frequenzen (Groß- und Kleinschreibung;
            Großschreibung;
            Kleinschreibung)</li>
          <li>in ‚Typische Partnerwörter‘ für die jeweiligen Kookkurrenzcluster</li>
          <li>in ‚Muster‘ für die jeweiligen Lückenfüllertabellen</li>
        </ul>
        <p>In „Gebrauchsaspekte“</p>
        <ul>
          <li>für die manuell zusammengestellten Satelliten-Felder</li>
        </ul>
        <p>In „Gebrauchsaspekte“</p>
        <ul>
          <li>für die manuell systematisierten Lückenfüller</li>
        </ul>
        <template #explain>
          <div class="exampleHeadline">„Quantitative Angaben“: ‚Häufigkeit im Korpus‘</div>
          <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantSuche.png" alt="Beispielgrafik 1"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/de/Kwics_Mit_Genugtuung_25.html">
            Ausschnitt aus KWIC-Anzeige (Großschreibung) im Eintrag „mit Genugtuung“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantSucheSpanisch.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/es/Overview_2020_11_25_17h03m10s.html">
            Ausschnitt aus KWIC-Anzeige (Kleinschreibung) im Eintrag „mit Genugtuung - con satisfacción“
          </NuxtImage>
          <div class="exampleHeadline">„Quantitative Angaben“: ‚Typische Partnerwörter‘</div>
          <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantPartner.png" alt="Beispielgrafik 3"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/de/Clusters_mitGenugtuungKA_4_XML/Kwics_erfuellt_265.html">
            Ausschnitt aus KWIC-Anzeige des Kookkurrenz-Clusters <em>mit Genugtuung – erfüllt</em> im Eintrag „mit
            Genugtuung“ (KWIC-Angaben nur für deutsche Daten verfügbar)
          </NuxtImage>
          <div class="exampleHeadline">„Quantitative Angaben“: ‚Muster‘</div>
          <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantMuster.png" alt="Beispielgrafik 4"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/de/Filler_mit_o_Mit_Xx_Genugtuung_24_Field1_XML/Kwics_sichtlicher_7810.html">
            Ausschnitt aus KWIC-Anzeige des Füllers <em>sichtlicher</em> (Muster: <em>mit</em> X <em>Genugtuung</em>)
            im Eintrag „mit Genugtuung“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/kwics/prepcon_kon_quantMusterSpanisch.png" alt="Beispielgrafik 5"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/es/Filler_con_o_Con_Xx_satisfaccin_35_Field1_XML/Kwics_gran_1192.html">
            Ausschnitt aus KWIC-Anzeige des Füllers <em>gran</em> (Muster: <em>con</em> X <em>satisfacción</em>) im
            Eintrag „mit Genugtuung – con satisfacción“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="5" rkey="SpruchList">
        <p>
          In
          <r rkey="SpruchList" /> lassen sich zu jedem Eintrag automatisch selektierte KWICs (Zufallswahl 1000) für die
          weite
          Suchanfrage abrufen.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/kwics/spruchList.png" alt="Beispielgrafik 1">
            KWIC-Ausschnitt für die weite Suchanfrage im Eintrag „Ausnahmen bestätigen die Regel“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="6" rkey="SPRW">
        <p>
          <r rkey="SPRW" /> bietet einen direkten Zugang zur Korpussuche. Als Ergebnis werden alle automatisch
          selektierten
          KWICs und Volltextstellen im W-Archiv angezeigt.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/kwics/sprw_cosmas.png" alt="Beispielgrafik 1"
            to="https://www.owid.de/artikel/401775">
            Ausschnitt aus KWIC-Anzeige im Eintrag „Not macht
            erfinderisch“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="7" rkey="WVBF">
        <p>
          In
          <r rkey="WVBF" /> werden automatisch selektierte KWICs
          für die
          jeweiligen Knoten angezeigt, sowohl für lexikalisierte Wortverbindungen als auch für Muster (bis zu 2000
          Zufallsauswahl).
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/kwics/wvGrund.png" alt="Beispielgrafik 1"
            to="http://wvonline.ids-mannheim.de/wvfelder-v3/extrafiles/aus_GRUND/aus_X_Gruenden/Kwics_Aus_o_aus_X_Gruenden.xml.html">
            Ausschnitt aus KWIC-Anzeige des Knotens „aus ADJ Gründen“</NuxtImage>
        </template>
      </compare-item>
    </compare>
  </div>
</template>