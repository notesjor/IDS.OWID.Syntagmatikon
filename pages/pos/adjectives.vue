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
    props.title = 'Adjektive';
    props.parent = 'Wort- und Ausdrucksarten';
  },
}
</script>

<template>
  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['KoMuX', 'FesteWV']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImg src="/img/pos/adjectives/adjectives_all.png" style="text-align: center;" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="KoMuX">
        <p>
          In
          <r rkey="KoMuX" /> können Adjektive
          neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.
        </p>
        <template #explain>
          <div>
            <ul>
              <li>
                <m>Klein</m>kind
              </li>
              <li>
                <m>Blau</m>licht
              </li>
              <li>
                <m>Top</m>-spiel
              </li>
              <li>
                <m>Billig</m>kraft
              </li>
            </ul>
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="FesteWV">
        <p>
          In
          <r rkey="FesteWV" /> bilden folgende
          Adjektive die
          Kernkomponente für die Stichwortliste: <em>blind; geistig; gesund; normal; sanft</em>.
        </p>
        <template #explain>
          <div>
            <ul>
              <li> (sich) <m>blind</m> (und taub stellen)</li>
              <li>
                <m>geistiger</m> (Vater)
              </li>
              <li> (auf) <m>gesunden</m> (Beinen stehen)</li>
              <li> (der ganz) <m>normale</m> (Wahnsinn)</li>
              <li> (Ruhe) <m>sanft</m>
              </li>
            </ul>
          </div>
        </template>
      </compare-item>
    </compare>
  </div>
</template>