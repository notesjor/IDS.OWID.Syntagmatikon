<script setup>
definePageMeta({
  layout: "subpage"
})
</script>
<script>
import { useLayoutStore } from '~/stores/layout';
export default {
  mounted() {
    const props = useLayoutStore();
    props.title = 'Dynamische Erschließung';
    props.parent = 'Musterzugänge';
  },
}
</script>


<template>

  <div>
    <p>In vielen Ressourcen kann man sich selbst Muster erschließen, zum einen durch automatische Suchen und
      Sortierungen
      auf der Basis von vorgegebenen Kategorien; zum anderen durch eigene analytische Gruppierungen.</p>
    <div>
      <compare :filter="['KoMuX', 'PREPCON_ex', 'PREPCON_temp_art', 'Redeeinleiter']">
        <compare-item value="0">
          <div style="text-align: center; width:100%">
            <NuxtImage src="/img/patterns/dynamic/all_dynamic.png" style="text-align: center;" />
          </div>
        </compare-item>

        <compare-item value="1" rkey="KoMuX">
          <p>Komposita können als Realisierungen abstrakter und semiabstrakter Muster verstanden werden. Über die
            <r rkey="KoMuX" />-Suche kann das Komposita-Inventar gezielt nach beiden Typen von Mustern durchsucht
            werden, indem grammatische Merkmale (Wortbildungstyp oder Wortart), semantisch-thematische und/oder
            lexikalische Eigenschaften (konkretes Lemma) für das Erst- und Zweitglied spezifiziert werden.
          </p>
          <p>Dies ermöglicht z.B. das Herausfiltern aller ADJEKTIV-NOMEN-Komposita (z.B. <em>Kleinkind</em>) oder
            solcher Komposita, in denen eine Konstituente wiederum ein Kompositum ist (z.B.
            <em>Frauenfußballweltmeister</em>). Zudem können auch Muster mit einem konkreten lexikalischen Anker
            definiert werden, z.B. Komposita mit dem Zweitglied <em>Mann</em> (z.B. <em>Lederjacken-Mann</em>,
            <em>Museumsmann</em>, …). Die Konstituenten eines Kompositums lassen sich durch die Auswahl bestimmter
            semantisch-thematischer Kategorien (basierend auf GermaNet-Wortfeldern) auch abstrakter definieren, indem
            nach Mustern wie SUBSTANZ-ARTEFAKT (z.B. <em>Betonmauer</em>) gesucht wird.
          </p>
          <template #explain>
            <NuxtImage src="/img/patterns/dynamic/dynamic01.png" alt="Beispielgrafik 1">
              Suchmaske mit Spezifikationsmöglichkeiten für das Erst- und Zweitglied
            </NuxtImage>
          </template>
        </compare-item>

        <compare-item value="2" rkey="PREPCON_ex">
          <p>In
            <r rkey="PREPCON_ex" /> lassen sich in den Präpositionen- oder Nomentabellen bestimmte wiederkehrende Muster
            auf der
            einen Seite und Einschränkungen des Gebrauchs auf der anderen Seiten identifizieren. So zeigt die
            Nomentabelle der
            Präposition <em>über</em> eine auffällige Häufung von Zeitnomina in den hohen Frequenzrängen (<em>Jahre;
              Jahrzehnte;
              Monate; Wochen</em> usw.), was auf ein Muster [<em>über</em> NOMEN<sub>TEMPORAL</sub>] mit der Bedeutung
            „ein
            gefühlt längerer Zeitraum“ hindeutet. Die dazu abrufbaren KWICs untermauern diese Bedeutung, weil dort eine
            Häufung
            von Adverbien wie <em>hinweg, hinaus</em> und des Verbs <em>hinziehen</em> zu beobachten ist.
          </p>
          <p> Ein Beispiel für starke Beschränkung ist das Nomen <em>Belieben</em>, das in unmittelbarer Voranstellung
            nur die
            Präpositionen <em>nach</em> (<em>nach Belieben</em>) und <em>ins</em> (<em>ins Belieben stellen</em>)
            aufweist.
          </p>
          <template #explain>
            <NuxtImage src="/img/patterns/dynamic/dynamic03.png" alt="Beispielgrafik 1"
              to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?prep=%C3%BCber">
              Muster mit temporaler Bedeutung in der Liste der Verbindungen mit Präposition <em>über</em> und
              nachgestellten Nomina
            </NuxtImage>
            <NuxtImage src="/img/patterns/dynamic/prepcon_ex_belieben.png" alt="Beispielgrafik 2"
              to="http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?noun=Belieben">
              Ausschließliche Verbindungen mit nur zwei Präpositionen (<em>nach</em> und <em>ins</em>) im Eintrag
              „Belieben“
            </NuxtImage>
          </template>
        </compare-item>

        <compare-item value="3" rkey="PREPCON_temp_art">
          <p>In
            <r rkey="PREPCON_temp_art" /> lassen sich anhand der hinterlegten automatisch erstellen Lückenfüllertabellen
            Muster
            erschließen und zwar sowohl im Vor- und Nachfeld einer Präposition-Nomen-Verbindungen als auch intern
            zwischen
            diesen beiden Komponenten.
          </p>
          <p>Im Eintrag „am Ende“ erkennt man bspw. eine Füllergruppe, die ein lokales Muster generiert: [<em>am</em>
            ADJ<sub>LOKAL</sub> (<em>unteren; oberen; südlichen; nördlichen</em> ...) <em>Ende</em>].
            Die Nachfeldergänzungen zeigen z.B. das Muster, bei dem <em>am Ende</em> als Kopf einer Genitivkonstruktion
            für den
            Abschluss eines Events oder Zeitintervalls (<em>Saison; Tages; Jahres</em> ...) verwendet wird.
          </p>
          <template #explain>
            <NuxtImage src="/img/patterns/dynamic/prepcon_temp_amXEnde.png" alt="Beispielgrafik 1"
              to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/index.html">
              Interne Füllergruppe mit lokalen Adjektiven im Eintrag „am Ende“: Muster [<em>am</em>
              ADJEKTIV<sub>LOKAL</sub> <em>Ende</em>]
            </NuxtImage>
            <NuxtImage src="/img/patterns/dynamic/prepcon_temp_amEndeX.png" alt="Beispielgrafik 2"
              to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/htmlfiles/fillerfiles/Filler_Am_o_am_Xx_Ende_1_Field1_XML/Kwics_anderen_125.html">
              Füllergruppe im Nachfeld mit Zeit- oder Eventnomina im Eintrag „am Ende“: Muster [<em>am Ende</em>
              NOMEN<sub>TEMPORAL_GENITIV</sub>]
            </NuxtImage>
          </template>
        </compare-item>

        <compare-item value="4" rkey="Redeeinleiter">
          <p>In
            <r rkey="Redeeinleiter" /> können die Redeeinleiter bspw. nach ihrer Position relativ zum Inhalt der
            Wiedergabe
            (initial, final oder medial) und dem Wiedergabetyp (direkt, indirekt) gefiltert werden, um syntagmatische
            Muster zu
            erschließen.
          </p>
          <p>Hinweis: Die Spalte "Beleg" enthält immer eine Liste mit jeweils einem Beleg pro Attributkombination, in
            der ein
            Redeeinleiter belegt ist. Die jeweilige Attributkombination ist unter dem Beleg aufgeführt.
          </p>
          <template #explain>
            <NuxtImage src="/img/patterns/dynamic/redeeinleiter.png" alt="Beispielgrafik 1">
              Beispiele für Einleiter von direkter Rede, die in finaler Position stehen
            </NuxtImage>
          </template>
        </compare-item>
      </compare>
    </div>
  </div>
</template>
