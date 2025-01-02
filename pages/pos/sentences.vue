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
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['KoMuX', 'SpruchList', 'PhrasKomp', 'SPRW']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImg src="/img/pos/sentences/sentences_all.png" style="text-align: center;" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="KoMuX">
        <!-- TODO: Inhalt ergänzen -->
        <p>
          In
          <r rkey="KoMuX" />
          können feste Sätze neben anderen Wort- und Ausdrucksarten als Erstglied fungieren. Sie werden über das Label
          ‚Phrase‘ erfasst. Im Gegensatz zu allen anderen Wort- und Ausdrucksarten wurde das Label ‚Phrase‘ aber nicht
          automatisch zugewiesen, sondern manuell nachannotiert.
        </p>

        <template #explain>
          <div>
            <ul>
              <li>
                <m>Do-it-yourself</m>-Kur
              </li>
              <li>
                <m>Geiz-ist-geil</m>-Kampagne
              </li>
              <li>
                <m>Was-wäre-wenn</m>-Spekulation
              </li>
            </ul>
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="SpruchList">
        <p>
          <r rkey="SpruchList" /> bietet eine Liste von
          Sprichwörtern, Sprüchen und festen Gebrauchssätzen des Deutschen.
        </p>
        <template #explain>
          <ul>
            <li>
              <m>Aus die Maus</m>
            </li>
            <li>
              <m>Wer A sagt, muss auch B sagen</m>
            </li>
            <li>
              <m>Quadratisch, praktisch, gut</m>
            </li>
            <li>
              <m>Hätte, hätte, Fahrradkette</m>
            </li>
          </ul>
        </template>
      </compare-item>

      <compare-item value="3" rkey="PhrasKomp">
        <p>
          In
          <r rkey="PhrasKomp" />
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
              <li>
                <m>"Wir sitzen alle in einem Boot"-</m>Gerede
              </li>
              <li>
                <m>"I have a dream"</m>-Rede
              </li>
              <li>
                <m>Ich-kann-Golf-und-Schi-und-Wandern-und-bin-schöner-als-die-andern</m>-Franz
              </li>
            </ul>
          </div>
        </template>
      </compare-item>

      <compare-item value="4" rkey="SPRW">
        <p>
          Die Stichwortliste in
          <r rkey="SPRW" /> enthält 351
          Sprichwörter
          (vollständige Sätze und satzwertige Einheiten). Als gesonderte Liste sind darüber hinaus die Werbeslogans,
          die im
          Sprichwörterbuch enthalten sind, abrufbar.
        </p>
        <template #explain>
          <ul>
            <li>
              <m>Der Klügere gibt nach</m>
            </li>
            <li>
              <m>Eile mit Weile</m>
            </li>
            <li>
              <m>Geiz ist geil</m>
            </li>
            <li>
              <m>Wer A sagt, muss auch B sagen</m>
            </li>
          </ul>
        </template>
      </compare-item>
    </compare>
  </div>
</template>