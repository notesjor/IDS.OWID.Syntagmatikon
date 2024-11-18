<template>
  <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
    <div class="nolink">
      <NuxtLink to="/pos">
        Zurück zu "Wort- und Ausdrucksarten"
      </NuxtLink>
    </div>
  </v-btn>
  <h1>Feste Sätze</h1>

  <div>
    <compare title="">

      <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
      <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
      <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
      <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
      <!-- NOTE: Der Tab kann belieibig benannt werden -->

      <template #headers>
        <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
        <v-tab value="1" class="nocaps"><resources-list-compact :filter="['KoMuX']"></resources-list-compact>
        </v-tab>
        <v-tab value="2" class="nocaps"><resources-list-compact :filter="['SpruchList']"></resources-list-compact>
        </v-tab>
        <v-tab value="3" class="nocaps"><resources-list-compact
            :filter="['PhrasKomp']"></resources-list-compact></v-tab>
        <v-tab value="4" class="nocaps"><resources-list-compact :filter="['SPRW']"></resources-list-compact></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">

          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/img/pos/sentences/sentences_all.png" style="text-align: center;" />
          </div>

        </compare-item>

        <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
        <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
        <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
        <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
        <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

        <compare-item value="1" rkey="KoMuX">
          <!-- TODO: Inhalt ergänzen -->
          <p>
            In <resources-list-compact :filter="['KoMuX']"></resources-list-compact>
            können feste Sätze neben anderen Wort- und Ausdrucksarten als Erstglied fungieren. Sie werden über das Label ‚Phrase‘ erfasst. Im Gegensatz zu allen anderen Wort- und Ausdrucksarten wurde das Label ‚Phrase‘ aber nicht automatisch zugewiesen, sondern manuell nachannotiert. 
          </p>

          <template #explain>
            <div>
            <ul>
              <li><span class="pos_highlight">Do-it-yourself</span>-Kur</li>
              <li><span class="pos_highlight">Geiz-ist-geil</span>-Kampagne</li>
              <li><span class="pos_highlight">Was-wäre-wenn</span>-Spekulation</li>
            </ul>
          </div>
          </template>
          </compare-item>

        <compare-item value="2" rkey="SpruchList">

          <p>
            <resources-list-compact :filter="['SpruchList']"></resources-list-compact> bietet eine Liste von
            Sprichwörtern, Sprüchen und festen Gebrauchssätzen des Deutschen.
          </p>
          <!-- <div class="exampleImg">
            <img src="/img/pos/sentences/spruchlist.png" alt="" />
          </div>
          <div class="caption">Stichwortliste</div> -->

          <template #explain>
            <ul>
              <li><span class="pos_highlight">Aus die Maus</span></li>
              <li><span class="pos_highlight">Wer A sagt, muss auch B sagen</span></li>
              <li><span class="pos_highlight">Quadratisch, praktisch, gut</span></li>
              <li><span class="pos_highlight">Hätte, hätte, Fahrradkette</span></li>
            </ul>
          </template>
        </compare-item>

        <compare-item value="3" rkey="PhrasKomp">
          <!-- TODO: Inhalt ergänzen -->
          <p>
            In <resources-list-compact :filter="['PhrasKomp']"></resources-list-compact>
            können feste Sätze, neben Phrasemen, als Erstglied fungieren. Alternativ zu dieser phraseologischen Perspektive können die Erstglieder von Phrasenkomposita auch unter einer syntaktischen Perspektive, d.h. als Phrasen und Sätze, klassifiziert werden. 
          </p>

          <template #explain>
            <div>
            <ul>
              <li>»<span class="pos_highlight">Im-fremden-Bett-schlaf-ich-immer-schlecht</span>-Sensibelchen«</li>
              <li><span class="pos_highlight">"Wir sitzen alle in einem Boot"-</span>Gerede</li>
              <li><span class="pos_highlight">"I have a dream"</span>-Rede</li>
              <li><span class="pos_highlight">Ich-kann-Golf-und-Schi-und-Wandern-und-bin-schöner-als-die-andern</span>-Franz</li>
            </ul>
          </div>
          </template>
          <!-- <p>
            Unter den Zweitgliedern der Phrasenkomposita in <resources-list-compact :filter="['PhrasKomp']"></resources-list-compact> sind auch feste Sätze.
          </p>
         
          <template #explain>   
            <ul>
            <li><span class="pos_highlight">"Ich-bin-dann-mal-weg"</span>-Bedürfnis (Fester Satz: <span class="pos_highlight">Ich bin dann mal weg</span> + 
                Nomen: Bedürfnis)</li>
                </ul>
          </template> -->
        </compare-item>

        <!-- NOTE: Wenn man eine Seite im gleichen Ordner anlegt - und die Seite identisch (G/k-Schreibung) zum rkey ist
                   dann wird automatisch ein Button erzeugt, der auf die Seite verlinkt. -->

        <compare-item value="4" rkey="SPRW">
          <p>
            Die Stichwortliste in <resources-list-compact :filter="['SPRW']"></resources-list-compact> enthält 351
            Sprichwörter
            (vollständige Sätze und satzwertige Einheiten). Als gesonderte Liste sind darüber hinaus die Werbeslogans,
            die im
            Sprichwörterbuch enthalten sind, abrufbar.
          </p>
          <!-- <div class="exampleImg">
            <img src="/img/pos/sentences/sprw_gesamt.png" alt="" />
          </div>
          <div class="caption">Gesamt-Stichwortliste</div>
          <div class="exampleImg">
            <img src="/img/pos/sentences/sprw_slogans.png" alt="" />
          </div>
          <div class="caption">Stichwortliste der Slogans</div> -->


          <template #explain>
            <ul>
              <li><span class="pos_highlight">Der Klügere gibt nach</span></li>
              <li><span class="pos_highlight">Eile mit Weile</span></li>
              <li><span class="pos_highlight">Geiz ist geil</span></li>
              <li><span class="pos_highlight">Wer A sagt, muss auch B sagen</span></li>
            </ul>

          </template>
        </compare-item>
      </template>
    </compare>
  </div>

</template>