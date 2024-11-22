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
    props.title = 'Fremdsprachige Äquivalenzen';
    props.parent = 'Informationstypen';
  },
}
</script>
<template>
  <p>Im <hi>Syntagmatikon</hi> dokumentieren zwei Ressourcen den Gebrauch von Syntagmen im Sprachkontrast. Die
    entsprechenden Angaben werden Äquivalenzangaben genannt, d.h. Einheiten der Ausgangssprache Deutsch werden
    Entsprechungen in anderen Sprachen und Korpusbelege hinzugefügt. Diese können 1:1-Entsprechungen auf der
    Formseite sein oder konzeptuelle Entsprechungen, die denselben Bedeutungskern aufweisen, aber auch durch andere
    Wörter und Wortgruppen ausgedrückt werden. </p>

  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
    <compare :filter="['PREPCON_kon', 'DTWW']">
      <compare-item value="ALL" :simple="true">
        <div style="text-align: center; width:100%">
          <img src="/img/datatypes/equivalence/equivalence_all.png" style="text-align: center;" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_kon">
        <p>
          <r rkey="PREPCON_kon" /> beinhaltet eine
          korpusgesteuerte Vergleichstudie von quantitativen Daten, Bedeutungs- und Gebrauchsaspekten
          sowie semi-abstrakten Mustern für die Sprachenpaare Deutsch – Spanisch und Deutsch – Slowakisch;
          ausgehend vom Deutschen. Beschrieben werden die Präposition-Nomen-Verbindungen <em>am Anfang;
            auf Anhieb; mit Genugtuung; nach Belieben</em> und die prototypischen Äquivalente in
          Spanisch (<em>al principio; de inmediato; con satisfacción; a su/... gusto</em>) und Slowakisch
          (<em>na začiatku; na prvý pokus; so zadosťučinením; podľa ľubovôle</em>).
        </p>
        <template #explain>
          <div class="exampleImg">
            <img src="/img/datatypes/equivalence/prepcon_kon_spanisch.png" alt="" />
          </div>
          <div class="caption">
            Äquivalenzpaar Deutsch – Spanisch im Artikel „am Anfang – al principio“
          </div>
          <div class="exampleImg">
            <img src="/img/datatypes/equivalence/prepcon_kon_slowakisch.png" alt="" />
          </div>
          <div class="caption">
            Äquivalenzpaar Deutsch – Slowakisch im Artikel „am Anfang – na začiatku“
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="DTWW">
        <p>
          <r rkey="DTWW" /> ist eine Sammlung fester
          deutsch-türkischer
          Wortverbindungen und Einwortphraseologismen aus der Domäne Wirtschaft. Sie enthält ca. 900
          deutsche Einträge und
          ihre türkischen Entsprechungen mit wörtlichen Übersetzungen ins Deutsche.
        </p>
        <template #explain>
          <div class="exampleImg">
            <img src="/img/datatypes/equivalence/dtww.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Buchstabenstrecke A
          </div>
        </template>
      </compare-item>
    </compare>
  </div>
</template>
