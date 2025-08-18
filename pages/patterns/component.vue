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
    props.title = 'Lexikografische Angaben';
    props.parent = 'Musterzugänge';
  },
}
</script>

<template>

  <div>
    <p>In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente von
      Wörterbuchartikeln angeboten</p>
    <div>
      <compare :filter="['PREPCON_kon', 'SPRW', 'FesteWV']">
        <compare-item value="0">
          <div style="text-align: center; width:100%">
            <NuxtImage src="/img/patterns/component/all_component.png" style="text-align: center;" />
          </div>
        </compare-item>

        <compare-item value="1" rkey="PREPCON_kon">
          <p>In
            <r rkey="PREPCON_kon" /> sind Musterangaben („Lexikalische Erweiterungen“) zu Präposition-Nomen-Verbindungen
            sowohl einsprachig Deutsch als auch im Sprachvergleich mit Spanisch oder Slowakisch abrufbar (mit
            ausgewählten Belegen). Es wird zwischen lexikalischen Varianten und semiabstrakten Mustern (feste
            lexikalische Einheiten und variable Slots) unterschieden. Die Slotfüllungen werden qualitativ beschrieben.
            Im Sprachkontrast lassen sich Musterkonvergenz und -divergenz erkennen.
          </p>

          <template #explain>
            <NuxtImage src="/img/patterns/component/component01.png" alt="Beispielgrafik 1"
              to="http://uwv.ids-mannheim.de/prepcon/modul3/muster/mitGenugtuung.html">
              Musterangaben zum Eintrag „mit Genugtuung“ in Kontrast zu „con satisfacción“
            </NuxtImage>
            <NuxtImage src="/img/patterns/component/component02.png" alt="Beispielgrafik 2"
              to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/mit_Genugtuung/kontrastiv/mit_SUB_emotiv_Genugtuung.html">
              Füller zum Muster „mit [SUBSTANTIV funktional: emotiv] und Genugtuung“ in Kontrast zu Füllern des Musters
              „con [SUBSTANTIV funktional: emotiv] y satisfacción“
            </NuxtImage>
          </template>
        </compare-item>

        <compare-item value="2" rkey="SPRW">
          <p> In
            <r rkey="SPRW" /> werden die Musterangaben auf zweifache Weise angezeigt: a) als häufige Varianten in
            Schreibung,
            Wortstellung usw. („Formvarianten“) und b) in Form von kommentierten Füllerangaben („Ersetzung von
            Komponenten“).
          </p>
          <template #explain>
            <NuxtImage src="/img/patterns/component/sprw_uebung_fenster.png" alt="Beispielgrafik 1">
              Musterangaben im Eintrag „Übung macht den Meister“: [<em>Übung macht den</em> NOMEN<sup>KOMPOSITA</sup>]
            </NuxtImage>
          </template>
        </compare-item>

        <compare-item value="2" rkey="FesteWV">
          <p>
            In
            <r rkey="FesteWV" /> werden typische Umgebungsmuster eines Eintrags nach inhaltlichen Kriterien gruppiert
            bzw.
            angeordnet (z.B. typische Nomina oder bewertende lexikalische Einheiten im Vor- oder Nachfeld einer
            Wortverbindung
            mit Adjektiven oder eines Phrasems).
          </p>
          <template #explain>
            <NuxtImage src="/img/patterns/component/component03.png" alt="Beispielgrafik 1"
              to="https://www.owid.de/artikel/309154/publikmachen/0">
              Typische Kontextmuster zum Eintrag „an die große Glocke hängen“
            </NuxtImage>
            <NuxtImage src="/img/patterns/component/component04.png" alt="Beispielgrafik 1"
              to="https://www.owid.de/artikel/309050">
              Typische Kontextmuster zum Eintrag „blinder Aktionismus“
            </NuxtImage>
          </template>
        </compare-item>

      </compare>
    </div>
  </div>
</template>
