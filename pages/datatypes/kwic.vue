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
<p>Wenn man eine Zeichenkette (z.B. ein Wort oder eine Wortgruppe) im Korpus sucht, bekommt man in der Regel Zeilen (Konkordanzen) angezeigt, in denen das Suchobjekt vorkommt, ergänzt durch ein wenig Text davor und danach. <v-btn density="compact" size="small" variant=tonal icon="mdi-plus" @click="toggleDiv"></v-btn></p>
<div class="more" v-show="isVisible">
Es handelt sich um Textschnipsel, die nicht immer grammatisch vollständige Sätze sein müssen. Anhand solcher Konkordanzen lassen sich jedoch bereits wichtige Hinweise gewinnen, in welchen Satzzusammenhängen eine sprachliche Einheit häufig verwendet wird (typische Kontextmuster), z.B. häufig eingebettet in wörtliche Rede; mit Modalverben oder Negationswörtern verbunden. Bei Wortgruppen kann man bspw. erkennen, wie fest oder variabel sie sind.</div>
<p>Im Syntagmatikon dienen automatisch ermittelte KWICs nicht nur als empirische Basis, sondern werden in einigen Ressourcen selbst als lexikografische Informationseinheiten  angeboten. 
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
        <v-tab value="1" class="nocaps" ><resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact> </v-tab>
        <v-tab value="2" class="nocaps"><resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact></v-tab>
        <v-tab value="3" class="nocaps"><resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
        <v-tab value="4" class="nocaps"><resources-list-compact :filter="['SpruchList']"></resources-list-compact></v-tab>
        <v-tab value="5" class="nocaps"><resources-list-compact :filter="['WVBF']"></resources-list-compact></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">
          
          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/dummy/infobox_dummy.png" style="text-align: center;" />
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
            In <resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact> werden zu jeder Präposition-Nomen-Verbindung automatisch ausgewählte KWICs angezeigt (5-25 Zeilen beim Anklicken).
          </p>
        
          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>
          
            <div class="exampleImg">
              <img src="/img/datatypes/kwics/prepcon_ex_amEnde.png" alt=""/>
            </div>
            <div class="caption">
              Ausschnitt aus KWIC-Anzeige in Tabelle zur Präposition „am“ (nominaler Partner <em>Ende</em>)
            </div>
          </template>
        </compare-item>

        <compare-item value="1" rkey="PREPCON_temp">

<!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
<p>
  In <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact> wird ein Zugang zu KWICs in beiden Rubriken angeboten.</p>

<p>In der Rubrik „Kurzartikel“ werden in der Angabe „Häufigkeit im Korpus“ für jeweilige Suche (Groß- und Kleinschreibung: Großschreibung: Kleinschreibung) automatisch selektierte KWICs angezeigt (bis zu 50 Zufallsauswahl).</p>

<!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

<template #explain>

  <div class="exampleImg">
    <img src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass.png" alt=""/>
  </div>
  <div class="caption">
    Ausschnitt aus KWIC-Anzeige im Artikel „ohne Unterlass“ (Kleinschreibung)
  </div>
</template>
</compare-item>

<compare-item value="1" rkey="PREPCON_kon">

<!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
<p>
  In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> 
</p>
<!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

<template #explain>

  <div class="exampleImg">
    <img src="/img/datatypes/kwics/prepcon_temp_ohneUnterlass.png" alt=""/>
  </div>
  <div class="caption">
    Ausschnitt aus KWIC-Anzeige im Artikel „ohne Unterlass“ (Kleinschreibung)
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