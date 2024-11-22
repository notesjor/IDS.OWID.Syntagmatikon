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
    props.title = 'Feste Sätze';
    props.parent = 'Wort- und Ausdrucksarten';
  },
}
</script>

<template>
  <div>
    <compare title="">

      <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
      <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
      <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
      <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
      <!-- NOTE: Der Tab kann belieibig benannt werden -->

      <template #headers>
        <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
        <v-tab value="1" class="nocaps"><r rkey="KoMuX"/>
        </v-tab>
        <v-tab value="2" class="nocaps"><r rkey="SpruchList"/>
        </v-tab>
        <v-tab value="3" class="nocaps"><resources-list-compact
            :filter="['PhrasKomp']"></resources-list-compact></v-tab>
        <v-tab value="4" class="nocaps"><r rkey="SPRW"/></v-tab>
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
            In <r rkey="KoMuX"/>
            können feste Sätze neben anderen Wort- und Ausdrucksarten als Erstglied fungieren. Sie werden über das Label
            ‚Phrase‘ erfasst. Im Gegensatz zu allen anderen Wort- und Ausdrucksarten wurde das Label ‚Phrase‘ aber nicht
            automatisch zugewiesen, sondern manuell nachannotiert.
          </p>

          <template #explain>
            <div>
              <ul>
                <li><m>Do-it-yourself</m>-Kur</li>
                <li><m>Geiz-ist-geil</m>-Kampagne</li>
                <li><m>Was-wäre-wenn</m>-Spekulation</li>
              </ul>
            </div>
          </template>
        </compare-item>

        <compare-item value="2" rkey="SpruchList">

          <p>
            <r rkey="SpruchList"/> bietet eine Liste von
            Sprichwörtern, Sprüchen und festen Gebrauchssätzen des Deutschen.
          </p>
          <!-- <div class="exampleImg">
            <img src="/img/pos/sentences/spruchlist.png" alt="" />
          </div>
          <div class="caption">Stichwortliste</div> -->

          <template #explain>
            <ul>
              <li><m>Aus die Maus</m></li>
              <li><m>Wer A sagt, muss auch B sagen</m></li>
              <li><m>Quadratisch, praktisch, gut</m></li>
              <li><m>Hätte, hätte, Fahrradkette</m></li>
            </ul>
          </template>
        </compare-item>

        <compare-item value="3" rkey="PhrasKomp">
          <!-- TODO: Inhalt ergänzen -->
          <p>
            In <r rkey="PhrasKomp"/>
            können feste Sätze, neben Phrasemen, als Erstglied fungieren. Alternativ zu dieser phraseologischen
            Perspektive
            können die Erstglieder von Phrasenkomposita auch unter einer syntaktischen Perspektive, d.h. als Phrasen und
            Sätze,
            klassifiziert werden.
          </p>

          <template #explain>
            <div>
              <ul>
                <li>»<m>Im-fremden-Bett-schlaf-ich-immer-schlecht</m>-Sensibelchen«</li>
                <li><m>"Wir sitzen alle in einem Boot"-</m>Gerede</li>
                <li><m>"I have a dream"</m>-Rede</li>
                <li><m>Ich-kann-Golf-und-Schi-und-Wandern-und-bin-schöner-als-die-andern</m>-Franz
                </li>
              </ul>
            </div>
          </template>
          <!-- <p>
            Unter den Zweitgliedern der Phrasenkomposita in <r rkey="PhrasKomp"/> sind auch feste Sätze.
          </p>
         
          <template #explain>   
            <ul>
            <li><m>"Ich-bin-dann-mal-weg"</m>-Bedürfnis (Fester Satz: <m>Ich bin dann mal weg</m> + 
                Nomen: Bedürfnis)</li>
                </ul>
          </template> -->
        </compare-item>

        <!-- NOTE: Wenn man eine Seite im gleichen Ordner anlegt - und die Seite identisch (G/k-Schreibung) zum rkey ist
                   dann wird automatisch ein Button erzeugt, der auf die Seite verlinkt. -->

        <compare-item value="4" rkey="SPRW">
          <p>
            Die Stichwortliste in <r rkey="SPRW"/> enthält 351
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
              <li><m>Der Klügere gibt nach</m></li>
              <li><m>Eile mit Weile</m></li>
              <li><m>Geiz ist geil</m></li>
              <li><m>Wer A sagt, muss auch B sagen</m></li>
            </ul>

          </template>
        </compare-item>
      </template>
    </compare>
  </div>

</template>