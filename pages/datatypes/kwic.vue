<template>
  <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
    <div class="nolink">
      <NuxtLink to="/datatypes">
        Zurück zu "Informationstypen"
      </NuxtLink>
    </div>
  </v-btn>

  <h1>KWICs</h1>
  <h2>KeyWords In Context: „Schlüsselwörter im Kontext“</h2>
  <p>Wenn man eine Zeichenkette (z.B. ein Wort oder eine Wortgruppe) im Korpus sucht, bekommt man in der Regel Zeilen
    (Konkordanzen) angezeigt, in denen das Suchobjekt vorkommt, ergänzt durch ein wenig Text davor und danach. <v-btn
      density="compact" size="small" variant=tonal icon="mdi-plus" @click="toggleDiv"></v-btn></p>
  <div class="more" v-show="isVisible">
    Es handelt sich um Textschnipsel, die nicht immer grammatisch vollständige Sätze sein müssen. Anhand solcher
    Konkordanzen lassen sich jedoch bereits wichtige Hinweise gewinnen, in welchen Satzzusammenhängen eine sprachliche
    Einheit häufig verwendet wird (typische Kontextmuster), z.B. häufig eingebettet in wörtliche Rede; mit Modalverben
    oder Negationswörtern verbunden. Bei Wortgruppen kann man bspw. erkennen, wie fest oder variabel sie sind.</div>
  <p>Im Syntagmatikon dienen automatisch ermittelte KWICs nicht nur als empirische Basis, sondern werden in einigen
    Ressourcen selbst als lexikografische Informationseinheiten angeboten.
  </p>

  <div>
    <compare title="">

      <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
      <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
      <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
      <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
      <!-- NOTE: Der Tab kann belieibig benannt werden -->

      <template #headers>
        <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
        <v-tab value="1" class="nocaps"><resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact>
        </v-tab>
        <v-tab value="2" class="nocaps"><resources-list-compact
            :filter="['PREPCON_temp']"></resources-list-compact></v-tab>
        <v-tab value="3" class="nocaps"><resources-list-compact
            :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
        <v-tab value="4" class="nocaps"><resources-list-compact
            :filter="['SpruchList']"></resources-list-compact></v-tab>
        <v-tab value="5" class="nocaps"><resources-list-compact :filter="['WVBF']"></resources-list-compact></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">

          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/img/datatypes/kwics/kwics_all.png" style="text-align: center;" />
          </div>

        </compare-item>

        <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
        <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
        <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
        <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
        <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

        <compare-item value="1" rkey="PREPCON_ex">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            In <resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact> werden zu jeder
            Präposition-Nomen-Verbindung automatisch ausgewählte KWICs angezeigt (5-25 Zeilen beim Anklicken).
          </p>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_ex_amEnde.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige in Präpositionentabelle „am“ (nominaler Partner <em>Ende</em>)
            </div>
          </template>
        </compare-item>

        <compare-item value="2" rkey="PREPCON_temp">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            In <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact> kann man automatisch
            selektierte
            KWICs an unterschiedlichen Stellen mit einer Zufallsauswahl abrufen:</p>

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
            <li>Verlinkung zu KWICs in <resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact></li>
          </ul>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>
            <div class="exampleHeadline">Rubrik „Kurzartikel“</div>
            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige (Kleinschreibung) im Artikel „ohne Unterlass“ (Rubrik „Kurzartikel“:
              ‚Häufigkeit im Korpus‘)
            </div>

            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass_redet.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige des Kookkurrenz-Clusters <em>ohne Unterlass – redet</em> im Artikel „ohne
              Unterlass“ (Rubrik „Kurzartikel“: ‚Typische Partnerwörter‘)
            </div>

            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass_an_der.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige des Bigram-Füllers <em>an … der</em> (Muster: <em>ohne Unterlass</em> X) im
              Artikel „ohne Unterlass“ (Rubrik „Kurzartikel“: ‚Muster‘)
            </div>

            <div class="exampleHeadline">Rubrik „Inventar“</div>
            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_temp_amHeiligabend.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus der KWIC-Verlinkung im Eintrag „am Heiligabend“ (Rubrik „Inventar“: ‚Feiertage‘)
            </div>
          </template>
        </compare-item>

        <compare-item value="3" rkey="PREPCON_kon">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> kann man automatisch selektierte KWICs an unterschiedlichen Stellen für die Ausgangssprache Deutsch und die Kontrastsprachen Spanisch und Slowakisch mit Zufallsauswahl abrufen:</p>
            <p>Rubrik „Quantitative Angaben“</p>
            <ul>
              <li>in ‚Häufigkeit im Korpus‘ für die jeweilige Suchen/Frequenzen (Groß- und Kleinschreibung; Großschreibung; Kleinschreibung)</li>
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
          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>
            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_kon_quantSuche.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige (Großschreibung) im Artikel „mit Genugtuung“ (Rubrik „Quantitative Angaben“: ‚Häufigkeit im Korpus‘)
            </div>
            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_kon_quantSucheSpanisch.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige (Kleinschreibung) im Artikel „mit Genugtuung - con satisfacción“ (Rubrik „Quantitative Angaben“: ‚Häufigkeit im Korpus‘)
            </div>
            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_kon_quantPartner.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige des Kookkurrenz-Clusters mit Genugtuung – erfüllt im Artikel „mit Genugtuung“ (Rubrik „Quantitative Angaben“: ‚Typische Partnerwörter‘) (KWIC-Export nur für deutsche Daten möglich)  
            </div>

            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_kon_quantMuster.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige des Füllers <em>sichtlicher</em> (Muster: <em>mit</em> X <em>Genugtuung</em>) im Artikel „mit Genugtuung“ (Rubrik „Quantitative Angaben“: ‚Muster‘) 
            </div>

            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_kon_quantMusterSpanisch.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige des Füllers <em>gran</em>  (Muster: <em>con</em> X <em>satisfacción</em>) im Artikel „mit Genugtuung – con satisfacción“ (Rubrik „Quantitative Angaben“: ‚Muster‘)


            </div>

          </template>
        </compare-item>

        <compare-item value="4" rkey="SpruchList">

<!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
<p>
  In <resources-list-compact :filter="['SpruchList']"></resources-list-compact> werden für die weite Suchanfrage eines Eintrags automatisch selektierte KWICs angezeigt (bis 1000 Zufallsauswahl).
</p>

<!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

<template #explain>

  <div class="exampleImg">
    <img src="/img/datatypes/kwics/spruchList.png" alt="" />
  </div>
  <div class="caption">
    Ausschnitt aus KWIC-Anzeige im Eintrag „Ausnahmen bestätigen die Regel“
  </div>
</template>
</compare-item>

<compare-item value="5" rkey="WVBF">

<!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
<p>
  In <resources-list-compact :filter="['WVBF']"></resources-list-compact> werden automatisch selektierte KWICs für die jeweiligen Knoten angezeigt, sowohl für lexikalisierte Wortverbindungen als auch für Muster (bis zu 2000 Zufallsauswahl).
</p>

<!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

<template #explain>

  <div class="exampleImg">
    <img src="/img/datatypes/kwics/wvGrund.png" alt="" />
  </div>
  <div class="caption">
    Ausschnitt aus KWIC-Anzeige im Eintrag „Ausnahmen bestätigen die Regel“
  </div>
</template>
</compare-item>


      </template>
    </compare>
  </div>



</template>
<script>
export default {
  data() {
    return {
      isVisible: false, // initial state of the div (visible)
    };
  },
  methods: {
    toggleDiv() {
      this.isVisible = !this.isVisible; // toggle visibility
    },
  },
};
</script>