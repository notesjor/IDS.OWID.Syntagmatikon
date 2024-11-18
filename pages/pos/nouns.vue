<template>
  <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
    <div class="nolink">
      <NuxtLink to="/pos">
        Zurück zu "Wort- und Ausdrucksarten"
      </NuxtLink>
    </div>
  </v-btn>
  <h1>Nomina</h1>
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
        <v-tab value="4" class="nocaps"><resources-list-compact :filter="['KoMuX']"></resources-list-compact></v-tab>
        <v-tab value="5" class="nocaps"><resources-list-compact
            :filter="['PhrasKomp']"></resources-list-compact></v-tab>
        <v-tab value="6" class="nocaps"><resources-list-compact
            :filter="['Redeeinleiter']"></resources-list-compact></v-tab>
        <v-tab value="7" class="nocaps"><resources-list-compact
            :filter="['Verlaufsformen']"></resources-list-compact></v-tab>
        <v-tab value="8" class="nocaps"><resources-list-compact :filter="['WVBF']"></resources-list-compact></v-tab>
        <v-tab value="9" class="nocaps"><resources-list-compact :filter="['DTWW']"></resources-list-compact></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">

          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/img/pos/nouns/nouns_all.png" style="text-align: center;" />
          </div>

        </compare-item>

        <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
        <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
        <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
        <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
        <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

        <compare-item value="1" rkey="PREPCON_ex" description="Feldangaben im OWID-Sprichwörterbuch">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            <resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact> bietet einen gesonderten Zugang
            über Nomen-Tabellen an.
          </p>

          <!-- 
          <div class="exampleImg">
            <img src="/img/pos/nouns/prepcon_ex_zugriff_nouns_big.png" alt="" />
          </div>
          <div class="caption">Zugriff über die "Nomen-Perspektive" auf Verbindungen mit dem Nomen <em>Ort</em></div> -->

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>

            <div style="margin-bottom: 20px; width: 100%;">
              <ul>
                <li> (an) <span class="pos_highlight">Bord</span></li>
                <li> (in) <span class="pos_highlight">Ruhe</span></li>
                <li> (auf) <span class="pos_highlight">Nachfrage</span></li>
                <li> (ohne) <span class="pos_highlight">Zweifel</span></li>
              </ul>
            </div>
          </template>



        </compare-item>

        <compare-item value="2" rkey="PREPCON_temp"
          description="Feste Wortverbindungen des Deutschen - Modul: Wortverbindungen mit Adjektiv">
          <p>
            In <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact> kann man ein Inventar von
            Präposition-Nomen-Verbindungen mit Zeit-Nomina abrufen.
          </p>

          <template #explain>
            <div>

              <ul>
                <li>(am) <span class="pos_highlight">Anfang</span></li>
                <li>(vor) <span class="pos_highlight">Sonnenaufgang</span></li>
                <li>(über) <span class="pos_highlight">Nacht</span></li>
                <li>(ohne) <span class="pos_highlight">Unterlass</span></li>
              </ul>
            </div>



          </template>
        </compare-item>

        <!-- NOTE: Wenn man eine Seite im gleichen Ordner anlegt - und die Seite identisch (G/k-Schreibung) zum rkey ist
                   dann wird automatisch ein Button erzeugt, der auf die Seite verlinkt. -->

        <compare-item value="3" rkey="PREPCON_kon"
          description="Musterbank argumentmarkierender Präpositionen - Information: Prädikate (Verbalprädikate und Prädikatsgefüge)">
          <p>
            In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> bilden vier Nomina in
            Verbindung mit
            einer Präposition den Ausgangspunkt für die kontrastive Beschreibung deutsch – spanisch; deutsch-slowakisch.
          </p>

          <template #explain>
            <ul>
              <li>(am) <span class="pos_highlight">Anfang</span> - al principio - na začiatku</li>
              <li>(auf) <span class="pos_highlight">Anhieb</span> - de inmediato - na prvý pokus</li>
              <li>(mit) <span class="pos_highlight">Genugtuung</span> - con satisfacción - so zadosťučinením</li>
              <li>(nach) <span class="pos_highlight">Belieben</span> - a su gusto - podľa ľubovôle</li>
            </ul>

          </template>
        </compare-item>

        <compare-item value="4" rkey="KoMuX" description="">
          <p>
            In <resources-list-compact :filter="['KoMuX']"></resources-list-compact> bilden Nomina die Gruppe der
            Zweitglieder.
            Zum anderen können sie neben anderen Wort- und Ausdrucksarten auch als Erstglieder fungieren.
          </p>

          <template #explain>
            <ul>
              <li><span class="pos_highlight">Fußball</span></li>
              <li>Klein<span class="pos_highlight">kind</span></li>
              <li><span class="pos_highlight">Fahr</span>rad</li>
              <li>Ich-<span class="pos_highlight">Erzähler</span></li>
            </ul>
          </template>
        </compare-item>

        <compare-item value="5" rkey="PhrasKomp">
          <!-- TODO: Inhalt ergänzen -->
          <p>
            Informationen zu <resources-list-compact :filter="['PhrasKomp']"></resources-list-compact>
            sind noch in Vorbereitung.
          </p>

          <template #explain>
          </template>
        </compare-item>

        <compare-item value="6" rkey="Redeeinleiter">
          <p>
            In <resources-list-compact :filter="['Redeeinleiter']"></resources-list-compact> kann man alle Nomen aus dem
            Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
          </p>

          <template #explain>
            <ul>
              <li><span class="pos_highlight">Absicht</span>, sie zu beleidigen...</li>
              <li><span class="pos_highlight">Ahnung</span>, es werde ihm vielleicht nicht gegönnt sein...</li>
              <li>Aber er hält das dem Vater gegebne <span class="pos_highlight">Wort</span>, seine Traute nicht mehr zu
                besuchen.</li>
              <li>Eine dumpfe <span class="pos_highlight">Angst</span>: Sie mißgönnen mir die Erlösung, sind hinter mir,
                verfolgen mich, jagte ihn vorwärts.</li>
            </ul>
          </template>
        </compare-item>

        <compare-item value="7" rkey="Verlaufsformen">
          <p>
            In <resources-list-compact :filter="['Verlaufsformen']"></resources-list-compact> wird der Gebrauch
            nominalisierter
            deutscher Verben hinsichtlich ihres Vorkommens in drei Verlaufsformen dokumentiert.


          </p>

          <template #explain>
            <ul>
              <li>(am) + <span class="pos_highlight">Anrollen</span></li>
              <li>(am) + <span class="pos_highlight">Verfallen</span></li>
              <li>(beim) + <span class="pos_highlight">Pflücken</span></li>
              <li>(beim) + <span class="pos_highlight">Testen</span></li>
            </ul>
          </template>
        </compare-item>

        <compare-item value="8" rkey="WVBF">
          <p>
            In <resources-list-compact :filter="['WVBF']"></resources-list-compact> ist das Nomen <em>Grund</em> der
            zentrale
            Knoten für das Netz präpositionaler Verbindungen.
          </p>

          <template #explain>
            <ul>
              <li>(aus) + <span class="pos_highlight">Grund</span></li>
              <li>(auf) + <span class="pos_highlight">Grund</span></li>
              <li>(im) + <span class="pos_highlight">Grund</span></li>
              <li>(mit) + <span class="pos_highlight">Grund</span></li>
              <li>(ohne) + <span class="pos_highlight">Grund</span></li>
            </ul>
          </template>
        </compare-item>


        <compare-item value="9" rkey="DTWW">
          <p>
            In <resources-list-compact :filter="['DTWW']"></resources-list-compact> sind Nomina sowohl Basiskomponenten
            von
            Kollokationen als auch eigene Einträge verzeichnet.
          </p>

          <template #explain>
            <ul>
              <li>(abnehmende) <span class="pos_highlight">Nachfrage</span></li>
              <li>(anziehende) <span class="pos_highlight">Kurse</span></li>
              <li><span class="pos_highlight">Barausschüttung</span></li>
              <li><span class="pos_highlight">Deckungsschutz</span></li>
            </ul>
          </template>
        </compare-item>

      </template>
    </compare>
  </div>

</template>