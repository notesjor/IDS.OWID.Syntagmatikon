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
    props.title = 'Frequenzangaben';
    props.parent = 'Informationstypen';
  },
}
</script>

<template>
  <p>Frequenzen (die Häufigkeit des Vorkommens eines Suchobjekts) werden auf der Basis von Suchanfragen (queries) zum
    Zwecke der Bestimmung von Gebräuchlichkeit im Korpus berechnet. Man kann davon ausgehen, dass besonders häufige
    Phänomene eher einen typischen Aspekt des Sprachgebrauchs in den jeweiligen Korpora abbilden als seltene. Allerdings
    sind Frequenzen nur Anhaltspunkte, denn es spielen viele Faktoren bei der automatischen Häufigkeitsermittlung eine
    Rolle. Deshalb sollten auch die Ko- und Kontexte in die Analyse einbezogen werden.
    <expand-me>Generell gibt es keine Häufigkeit in der Sprache an sich (z.B. die häufigsten Sprichwörter oder Komposita
      des
      Deutschen), sondern immer nur eine relative in Bezug auf die vorher formulierte Suchanfrage fußend auf der zu
      einem
      bestimmten Zeitpunkt ausgewählten Korpusbasis. Es geht also eher um Frequenzbereiche und Häufigkeitstrends bzw.
      -proportionen.
    </expand-me>
  </p>
  <p>Im <hi>Syntagmatikon</hi> dienen Frequenzen nicht nur als empirische Basis, sondern werden selbst als
    lexikografische Informationseinheiten angeboten:</p>
  <ul>
    <li>in Form von Frequenzlisten.</li>
    <li>als Häufigkeitsangaben zu einzelnen Einträgen/Stichwörtern.
    </li>
  </ul>
  <br />

  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare
      :filter="['KoMuX', 'PhrasKomp', 'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'SpruchList', 'WVBF', 'Redeeinleiter']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImg src="/img/datatypes/frequency/frequencies_all.png" style="text-align: center;" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="KoMuX" description="Frequenzangaben in KoMuX">
        <p>
          In
          <r rkey="KoMuX" /> werden zum einen Gesamtfrequenzen
          für abstrakte oder lexikalisch teil-spezifizierte Komposita-Muster angezeigt. Solche Muster sind über
          formale und/oder lexikalisch-semantische Eigenschaften der Konstituenten definiert und dienen als
          Suchmuster.
        </p>
        <p>Zum anderen werden
          Einzelfrequenzen für jedes Kompositum angezeigt, das zu einem bestimmten Suchmuster gehört.</p>
        <p>Neben diesen auf ein bestimmtes Suchmuster beschränkten Frequenzangaben kann man sich außerdem anzeigen
          lassen, wie häufig
          die in einer Suchanfrage enthaltenen Komposita-Konstituenten innerhalb der Gesamtdaten vorkommen (z.B.: Wie
          oft kommt die Konstituente Fußball insgesamt als Erstglied bzw. als Zweitglied vor?) </p>
        <p>Ein besonderes frequenzbezogenes Feature besteht darin, dass zu jedem Suchmuster Visualisierungen
          angezeigt werden, welche die Frequenzverläufe innerhalb der Treffermenge illustrieren (z.B.: Wie ist die
          Verteilung der Wortarten innerhalb eines bestimmten Suchmusters?)</p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/komux_hauptsuche.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Treffermenge zum Suchmuster [[KOMPOSTIUM][KOMPOSITUM]]<sub>Kompositum</sub>
          </div>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/komux_konstituenten.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Konstituenten-Ansicht für das Suchmuster
            [[KOMPOSTIUM][KOMPOSITUM]]<sub>Kompositum</sub>
          </div>

          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/komux_wortarten.png" alt="" />
          </div>
          <div class="caption">
            Grafische Darstellung der Wortartenverteilung innerhalb des Suchmusters
            [[KOMPOSTIUM][KOMPOSITUM]]<sub>Kompositum</sub>
          </div>

        </template>
      </compare-item>

      <compare-item value="2" rkey="PhrasKomp" description="Frequenzangaben in PhrasKomp">
        <p>
          In
          <r rkey="PhrasKomp" />
          werden zum einen Einzelfrequenzen für jedes Phrasenkompositum des Inventars angezeigt. Zum anderen kann man
          sich
          Frequenzen für bestimmte Gruppen von Phrasenkomposita anzeigen lassen, die jeweils über formale und/oder
          lexikalisch-semantische Eigenschaften des Zweitglieds definiert werden:
        </p>
        <ul>
          <li>Konkretes Zweitgliedlexem</li>
          <li>Ableitungstyp des Zweitglieds</li>
          <li>Abstrakte semantische Gruppe des Zweitglieds</li>
        </ul>
        <template #explain>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/phraskomp_part_01.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Liste der Phrasenkomposita mit Frequenzangaben
          </div>

          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/phraskomp_gerede.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Treffermenge für Phrasenkomposita mit dem Zweitglied <em>Gerede</em>
          </div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="PREPCON_ex">
        <p>
          In
          <r rkey="PREPCON_ex" /> werden die absoluten und
          relativen
          Frequenzen der
          Präposition-Nomen-Verbindungen in zwei Formaten aufgeführt: Präpositionstabellen und Nomentabellen.
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prepe_part_01.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Frequenzliste für Verbindungen mit Präposition <em>über</em> und nachgestellten Nomen
          </div>

          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prepe_part_02.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Frequenzliste für Verbindungen mit Nomen <em>Nacht</em> und vorangestellten
            Präpositionen
          </div>
        </template>
      </compare-item>

      <compare-item value="4" rkey="PREPCON_temp">
        <p>
          <r rkey="PREPCON_temp" /> bietet zwei Typen von
          Frequenzangaben
          an:
        </p>
        <ul>
          <li>Häufigkeitsangaben für eine PN in „Kurzartikel zu temporalen Zweiworteinheiten“ mit drei Frequenzen und
            ihren zugrunde liegenden Suchanfragen Präposition in (Groß- und Kleinschreibung zusammen/einzeln plus
            Nomen in unmittelbarer Folge)</li>
          <li>Frequenzliste in „Inventar temporaler Präposition-Nomen-Verbindungen“ mit Häufigkeitsangaben, die aus
            <r rkey="PREPCON_ex" /> übernommen wurden und mit den Einträgen dort verlinkt sind.
          </li>
        </ul>

        <template #explain>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prept_part_01.png" alt="" />
          </div>
          <div class="caption">
            Frequenzangaben zu Suchanfragen im Artikel „über Nacht“:
          </div>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prept_part_02.png" alt="" />
          </div>
          <div class="caption">
            Durch Klick auf die Frequenzen wird die dazugehörige Suchanfrage und Korpusinformation gezeigt.
          </div>

          <p style="margin-top: 10px;">

          </p>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prept_part_03.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus den Frequenzangaben der Kategorie FEIERTAGE. Die Einträge sind mit
            <r rkey="PREPCON_ex" /> verlinkt.
          </div>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prept_part_04.png" alt="" />
          </div>
          <div class="caption">
            Verlinkter Eintrag „Heiligabend“ in
            <r rkey="PREPCON_ex" />
          </div>
        </template>
      </compare-item>

      <compare-item value="5" rkey="PREPCON_kon"
        description="Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext - Rubrik: „Quantitative Angaben“">
        <p>
          In
          <r rkey="PREPCON_kon" /> lassen sich die
          Frequenzangaben
          sowohl für die deutsche PN als auch
          für die Sprachenpaare deutsch – spanisch und deutsch-slowakisch abrufen. Da die Frequenzerhebungen in den
          Kontrastsprachen in anderen Korpora (z.B. Webkorpora in Sketch Engine) durchgeführt wurden, sind die
          Frequenzen nicht aufeinander abbildbar, sondern nur in der jeweiligen Sprache zu interpretieren.
        </p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prepk_part_01.png" alt="" />
          </div>
          <div class="caption">
            Darstellung von Frequenzen und Suchanfragen für die Präposition-Nomen-Kombination "am Anfang" – "al
            principio" (Deutsch-Spanisch).
          </div>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/prepk_part_02.png" alt="" />
          </div>
          <div class="caption">
            Durch Anklicken der Frequenzen wird die dazugehörige Suchanfrage und Korpusinformation gezeigt.
          </div>

        </template>
      </compare-item>

      <compare-item value="6" rkey="SpruchList" description="Frequenzangaben in SpruchList">

        <p>
          Die Frequenzangaben in
          <r rkey="SpruchList" /> basieren
          auf engen
          und weiten Suchanfragen, die ebenfalls abrufbar sind.
          Enge Suchanfragen umfassen die Wortformen des Spruchnamens in unmittelbarer Abfolge im Satz (ohne Lücken).
          Weite Suchanfragen umfassen die Komponenten im Satz (mit unterschiedlichen Wortformen), einer gewissen
          syntaktischen Varianz und unter Zulassung von Lücken.
        </p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/spruchlist_part_01.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Frequenzliste von SpruchList mit eingeblendeten Suchanfragen für den Eintrag <em>Ende
              gut, alles gut</em>
          </div>
        </template>
      </compare-item>

      <compare-item value="7" rkey="WVBF" description="Frequenzangaben im Wortverbindungsfeld GRUND">

        <p>
          In
          <r rkey="WVBF" /> werden zwei Suchanfragen angegeben:
          Präposition in Klein- sowie Großschreibung plus eine
          Wortform des Lemma GRUND in unmittelbarer Folge. In bestimmten Fällen kann die Suchanfrage weitere Elemente
          enthalten, z.B. um nicht zutreffende Belege auszuschließen, die andere Wortverbindungen oder Muster
          erfassen.
        </p>

        <template #explain>

          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/wvg_part_01.png" alt="" />
          </div>
          <div class="caption">
            Frequenzangaben zum PN-Knoten "mit Grund" und zugrunde liegende Suchanfragen
          </div>

          <p style="margin-top: 10px;">

          </p>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/wvg_part_02.png" alt="" />
          </div>
          <div class=caption>Frequenzangaben zum PN-Knoten "im Grunde" und zugrunde liegende Suchanfragen</div>

        </template>
      </compare-item>

      <compare-item value="8" rkey="Redeeinleiter"
        description="Frequenzangaben im 'Kleinen Wörterbuch der Redeeinleiter'">

        <p>
          In
          <r rkey="Redeeinleiter" /> ist in der Spalte
          „Redeeinleiter“
          in Klammern nachfolgend auf den jeweiligen Redeeinleiter hinterlegt, wie häufig dieser im
          Redewiedergabe-Korpus
          belegt ist. In der Spalte „Attribute“ ist hinterlegt, wie häufig der jeweilige Redeeinleiter im
          Redewiedergabe-Korpus mit dem jeweiligen Attribut belegt ist.
        </p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImg src="/img/datatypes/frequency/rede_freq.png" width="70%" alt="" />
          </div>
          <div class="caption">
            Die Frequenz des Redeeinleiters „sagen“ im Redewiedergabe-Korpus insgesamt und aufgespaltet nach
            Attributen.
          </div>
        </template>
      </compare-item>
    </compare>
  </div>
</template>