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
  <p>Im <hi>Syntagmatikon</hi> sind die Komponenten in der Regel mit den Einträgen im Online-Wörterbuch <NuxtLink
      to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink> bzw. mit externen Quellen verlinkt. </p>


  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['PREPCON_temp_art', 'PREPCON_kon', 'FesteWV', 'SPRW']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/elements/elements_all.png" style="text-align: center;"
            alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_temp_art">
        <p>
          In
          <r rkey="PREPCON_temp_art" /> werden die Präpositionen und
          die Nomina als Komponenten ausgezeichnet und mit den Artikeln in <NuxtLink
            to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink> verlinkt.
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/prepcon_temp_combi.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Komponentenangabe im Eintrag „am Ende“ (Rubrik: „Kurzartikel“) mit Verlinkung zu elexiko-Artikel „Ende“
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="PREPCON_kon">
        <p>
          In
          <r rkey="PREPCON_kon" /> werden die Präpositionen und
          Nomen in
          den drei Kontrastsprachen ausgezeichnet. Für die deutschen PNs erfolgt die Verlinkung zu <NuxtLink
            to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink>, für die spanischen zum Online-Wörterbuch
          <NuxtLink to="https://dle.rae.es">Diccionario de la lengua española</NuxtLink>; für die slowakischen zum
          Wörterbuchportal <NuxtLink to="https://slovnik.juls.savba.sk">Slovníkový portál Jazykovedného ústavu Ľ.
            Štúra SAV
          </NuxtLink>.
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/prepcon_kon_deutsch_combi.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Komponentenangabe im Eintrag „am Anfang“ mit Verlinkung zum elexiko-Artikel „Anfang“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/prepcon_kon_spanisch_combi.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Komponentenangabe im Eintrag „al principio“ mit Verlinkung zum Eintrag „principio“ im <em>Diccionario de
              la lengua española</em>
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/prepcon_kon_slowakisch_combi.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Komponentenangabe im Eintrag „na začiatku“ mit Verlinkung zu den Einträgen für „začiatok“ im
            <em>Slovníkový portál Jazykovedného ústavu Ľ. Štúra SAV</em>
          </div>
        </template>

      </compare-item>

      <compare-item value="3" rkey="FesteWV">
        <p>
          In
          <r rkey="FesteWV" /> werden die autosemantischen
          Komponenten
          der Stichwörter einzeln ausgezeichnet und mit den Artikeln in <NuxtLink
            to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink> verlinkt.
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/festeWV_Angst_combi.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Komponentenangabe im Artikel „Angst vor der eigenen Courage“ (Rubrik „Musterartikel“) mit Verlinkung zum
            <em>elexiko</em>-Artikel „Angst“
          </div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/festeWV_normal_combi.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Komponentenangabe im Artikel „der ganz normale Wahnsinn“ (Rubrik „Wortverbindungen mit Adjektiven“) mit
            Verlinkung zum <em>elexiko</em>-Artikel „normal“
          </div>
        </template>
      </compare-item>

      <compare-item value="4" rkey="SPRW">
        <p>
          Im
          <r rkey="SPRW" /> sind alle Komponenten der
          Stichwörter
          ausgezeichnet mit Ausnahmen der unbestimmten und bestimmten Artikel. Beim Anklicken einer Komponente
          erscheint zum
          einen eine Liste mit Links zu allen Einträgen im Sprichwörterbuch, die diese Komponente enthalten, zum
          anderen ein
          Link zu einem Eintrag in <NuxtLink to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink>. Des Weiteren kann eine Liste aller Komponenten mit den dazugehörigen Sprichwörtern abgerufen werden.
        </p>
        <template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/SPRW_machen_fenster.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Komponentenangabe im Artikel „Der Ton macht die Musik“ mit Liste der Komponente <em>machen</em>
          </div>

           <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/bla.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Liste von Sprichworteinträgen mit der Komponente <em>machen</em> und Verlinkung zum elexiko-Eintrag „machen“ <em>machen</em>
          </div>

           <div class="exampleImg">
            <NuxtImage src="/img/datatypes/elements/bla.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Ausschnitt aus der Liste aller Komponenten im Sprichwörterbuch
          </div>
        </template>
      </compare-item>
    </compare>
  </div>
</template>