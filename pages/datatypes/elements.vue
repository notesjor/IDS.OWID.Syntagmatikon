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
    props.title = 'Komponenten';
    props.parent = 'Informationstypen';
  },
}
</script>

<template>
  <p>Bei diesem Informationstyp handelt es sich um die Auszeichnung und Verlinkung der Komponenten eines Syntagmas, und
    zwar auf zweifache Weise:</p>
  <ul>
    <li>die Oberflächenform, so wie sie in einem Stichwort vorkommt </li>
    <li>die Grundform, die alle Wortformen zu einem Lemma zusammenfasst</li>
  </ul>
  <p>Diese Markierung kann mehreren Zwecken dienen:</p>
  <ul>
    <li>Verlinkungen zwischen den Komponenten auf verschiedenen Seiten</li>
    <li>Sortierung der Wortgruppen nach einer Komponente</li>
    <li>Verlinkung zu Einträgen der Komponenten in anderen Ressourcen</li>
  </ul>
  <p>Im Syntagmatikon sind die Komponenten in der Regel mit den Einträgen im Online-Wörterbuch <NuxtLink
      to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink> bzw. mit externen Quellen verlinkt. </p>


  <div>
    <compare title="">

      <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
      <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
      <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
      <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
      <!-- NOTE: Der Tab kann belieibig benannt werden -->

      <template #headers>
        <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
        <v-tab value="1" class="nocaps"><r rkey="PREPCON_temp"/>
        </v-tab>
        <v-tab value="2" class="nocaps"><resources-list-compact
            :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
        <v-tab value="3" class="nocaps"><r rkey="FesteWV"/></v-tab>
        <v-tab value="4" class="nocaps"><r rkey="SPRW"/></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">

          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/img/datatypes/elements/elements_all.png" style="text-align: center;" />
          </div>

        </compare-item>

        <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
        <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
        <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
        <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
        <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

        <compare-item value="1" rkey="PREPCON_temp">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            In <r rkey="PREPCON_temp"/> werden die Präpositionen und
            die Nomina als Komponenten ausgezeichnet und mit den Artikeln in <NuxtLink
              to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink> verlinkt.
          </p>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/elements/prepcon_temp_combi.png" alt="" />
            </div>
            <div class="caption">
              Komponentenangabe im Eintrag „am Ende“ (Rubrik: „Kurzartikel“) mit Verlinkung zu elexiko-Artikel „Ende“
            </div>
          </template>
        </compare-item>

        <compare-item value="2" rkey="PREPCON_kon">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            In <r rkey="PREPCON_kon"/> werden die Präpositionen und
            Nomen in
            den drei Kontrastsprachen ausgezeichnet. Für die deutschen PNs erfolgt die Verlinkung zu <NuxtLink
              to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink>, für die spanischen zum Online-Wörterbuch
            <NuxtLink to="https://dle.rae.es">Diccionario de la lengua española</NuxtLink>; für die slowakischen zum
            Wörterbuchportal <NuxtLink to="https://slovnik.juls.savba.sk">Slovníkový portál Jazykovedného ústavu Ľ.
              Štúra SAV
            </NuxtLink>.
          </p>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/elements/prepcon_kon_deutsch_combi.png" alt="" />
            </div>
            <div class="caption">
              Komponentenangabe im Eintrag „am Anfang“ mit Verlinkung zum elexiko-Artikel „Anfang“
            </div>

            <div class="exampleImg">
              <img src="/img/datatypes/elements/prepcon_kon_spanisch_combi.png" alt="" />
            </div>
            <div class="caption">
              Komponentenangabe im Eintrag „al principio“ mit Verlinkung zum Eintrag „principio“ im <em>Diccionario de
                la lengua española</em>
            </div>

            <div class="exampleImg">
              <img src="/img/datatypes/elements/prepcon_kon_slowakisch_combi.png" alt="" />
            </div>
            <div class="caption">
              Komponentenangabe im Eintrag „na začiatku“ mit Verlinkung zu den Einträgen für „začiatok“ im
              <em>Slovníkový portál Jazykovedného ústavu Ľ. Štúra SAV</em>
            </div>
          </template>

        </compare-item>

        <compare-item value="3" rkey="FesteWV">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            In <r rkey="FesteWV"/> werden die autosemantischen
            Komponenten
            der Stichwörter einzeln ausgezeichnet und mit den Artikeln in <NuxtLink
              to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink> verlinkt.
          </p>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/elements/festeWV_Angst_combi.png" alt="" />
            </div>
            <div class="caption">
              Komponentenangabe im Artikel „Angst vor der eigenen Courage“ (Rubrik „Musterartikel“) mit Verlinkung zum
              <em>elexiko</em>-Artikel „Angst“
            </div>

            <div class="exampleImg">
              <img src="/img/datatypes/elements/festeWV_normal_combi.png" alt="" />
            </div>
            <div class="caption">
              Komponentenangabe im Artikel „der ganz normale Wahnsinn“ (Rubrik „Wortverbindungen mit Adjektiven“) mit
              Verlinkung zum <em>elexiko</em>-Artikel „normal“
            </div>

          </template>

        </compare-item>


        <compare-item value="4" rkey="SPRW">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            Im <r rkey="SPRW"/> sind alle Komponenten der
            Stichwörter
            ausgezeichnet mit Ausnahmen der unbestimmten und bestimmten Artikel. Beim Anklicken einer Komponente
            erscheint zum
            einen eine Liste mit Links zu allen Einträgen im Sprichwörterbuch, die diese Komponente enthalten, zum
            anderen ein
            Link zum <NuxtLink to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink>-Eintrag.
          </p>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/elements/SPRW_machen_fenster.png" alt="" />
            </div>
            <div class="caption">
              Komponentenangabe im Artikel „Der Ton macht die Musik“ mit Liste der Komponente <em>machen</em>
            </div>

          </template>

        </compare-item>



      </template>
    </compare>
  </div>

</template>