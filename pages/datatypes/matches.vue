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
    props.title = 'Belege';
    props.parent = 'Informationstypen';
  },
}
</script>

<template>
  <p>Belege sind vom Lexikografen ausgewählte Textausschnitte auf der Basis von Korpusdaten. Belege können manuell
    ausgewählte KWICs sein, aber ebenso mehrere Sätze oder ganze Textabschnitte. Ihre Auswahl ist eine der
    anspruchsvollsten Aufgaben in der lexikografischen Praxis. In der oft riesigen Anzahl automatisch ermittelter
    Textfragmente müssen diejenigen gefunden werden, die die jeweiligen Gebrauchsaspekte treffsicher und anschaulich
    illustrieren und dabei aber gut verständlich sind, ohne weitere Erklärungen oder Hintergrundwissen hinzuziehen
    zu müssen. Diese Arbeit kann ein Computer nicht leisten.</p>
  <p>
    Im <hi>Syntagmatikon</hi> finden sich Belege unterschiedlicher Natur in nahezu allen Ressourcen.
  </p>

  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare
      :filter="['PREPCON_temp', 'PREPCON_kon', 'MAP', 'PhrasKomp', 'Redeeinleiter', 'Verlaufsformen', 'FesteWV', 'SPRW', 'DTWW', 'WVBF']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/matches/matches_all.png" style="text-align: center;" alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_temp">
        <p>
          In der Rubrik <b>Kurzartikel</b> von
          <r rkey="PREPCON_temp" /> werden Belege in
          zwei Formen angeboten:
        </p>
        <ul>
          <li>ausgewählte KWICs, die die Autonomie einer Präposition-Nomen-Verbindung (ohne weitere
            Ergänzungen) dokumentieren</li>
          <li>ausgewählte Volltextbelege, die den typischen Gebrauch illustrieren</li>
        </ul>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/prepcon_temp_amEnde.png" alt="Beispielgrafik 1"
            to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/index.html">KWIC-Belege im
            Eintrag „am Ende“</NuxtImage>
          <NuxtImage src="/img/datatypes/matches/prepcon_temp_amEnde_volltext.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/index.html">Volltextbelege
            im Eintrag „am Ende“</NuxtImage>
        </template>
      </compare-item>

      <compare-item value="2" rkey="PREPCON_kon">
        <p>
          In
          <r rkey="PREPCON_kon" /> illustrieren die
          Belege in der
          Ausgangssprache Deutsch und den Kontrastsprachen Spanisch und Slowakisch Gebrauchsaspekte. Bei
          den
          fremdsprachigen Äquivalenten wird zusätzlich eine wörtliche Übersetzung der Belege angegeben.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/prepcon_kon_kochrezepte_header.png" alt="Beispielgrafik 1"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html" />
          <NuxtImage src="/img/datatypes/matches/prepcon_kon_kochrezepte_deutsch.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html" />
          <NuxtImage src="/img/datatypes/matches/prepcon_kon_kochrezepte_spanisch.png" alt="Beispielgrafik 3"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html">
            Belege zum Gebrauchsaspekt ‚Kochrezept‘ im Eintrag „nach Belieben – a su gusto“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_header.png" alt="Beispielgrafik 1"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html" />
          <NuxtImage src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_deutsch.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html" />
          <NuxtImage src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_slowakisch.png" alt="Beispielgrafik 3"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html">
            Belege für den Gebrauchsaspekt ‚Dominantes Handeln ohne Korrektiv‘ im Eintrag „nach Belieben
            - podľa ľubovôle“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="3" rkey="MAP">
        <p>
          Die Belege zu den einzelnen Mustern erscheinen in den einzelnen Einträgen der Musterbank als Beispiele, sie
          können
          aber auch mittels der Suche direkt gefunden werden. Textbelege erscheinen in den
          <r rkey="MAP" />-Einträgen als illustrierende Beispiele mit farbiger Hervorhebung der Musterelemente. Zudem
          kann am
          Ende eines Eintrags für jedes Prädikat, das in dem behandelten Muster auftritt, ein exemplarischer Korpusbeleg
          eingeblendet werden. In der Suche kann die komplette Datenbasis eingesehen werden.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/map_belege_medial.png" alt="Beispielgrafik 1"
            to="https://www.owid.de/plus/map/kwic">
            Belege mit erweiterter Annotation für
            Medialkonstruktionen
          </NuxtImage>
          <NuxtImage src="/img/datatypes/matches/map_belege_schutz.png" alt="Beispielgrafik 2"
            to="https://www.owid.de/plus/map/article/vor/bedrohen/schutz#predicates">
            Belege für
            Prädikate des Musters SCHUTZ
          </NuxtImage>
        </template>
        <!-- TODO: MAP -->
      </compare-item>

      <compare-item value="4" rkey="PhrasKomp">
        <p>
          In
          <r rkey="PhrasKomp" />
          wird zu jedem der 1.575 Phrasenkomposita des Inventars ein manuell ausgewählter Beleg angeführt,
          der die
          Verwendung und Bedeutung der jeweiligen Bildung prototypisch illustriert. Die Belege enthalten
          das jeweilige
          Phrasenkompositum, ergänzt um den engen textuellen Kontext. Die Belege sind in den
          Ergebnistabellen
          standardmäßig ausgeblendet und lassen sich für jedes Phrasenkompositum separat aufklappen.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/phraskomp_gerede.png" alt="Beispielgrafik 1">
            Ausschnitt aus der Treffermenge zu Phrasenkomposita mit dem Zweitglied <em>Gerede</em> (mit
            ausgeklappten Belegen)
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="5" rkey="Redeeinleiter">
        <p>
          In
          <r rkey="Redeeinleiter" /> ist in der
          Spalte „Beleg“ je
          Redeeinleiter jeweils ein Beleg pro Attributekombination hinterlegt. Der Beleg besteht aus dem
          Satz, der den
          Redeeinleiter enthält, sowie, wenn vorhanden, den vorangehenden und nachfolgenden Satz. Auf den
          Beleg-Satz folgt
          darunter eine Angabe zur Attributkombination des jeweiligen Redeeinleiters. Hierunter findet
          sich ein
          anklickbarer Link zu der Datei aus dem Redewiedergabe-Korpus, aus dem der Beleg entnommen ist.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/rede_beleg.png" alt=""
            to="https://www.owid.de/plus/redeeinleiter/?search=sagen">
            Ausschnitt aus der Belegliste des Redeeinleiters „sagen“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="6" rkey="Verlaufsformen">
        <p>
          In
          <r rkey="Verlaufsformen" /> werden manuell
          ausgewählte
          Belege zum Vorkommen eines Verbs in einer, zwei oder alle drei Verlaufsformen angegeben –
          ergänzt um den engen
          Kontext des Belegs.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/verlaufsformen_beleg_eng.png" alt="Beispielgrafik 1"
            to="https://www.owid.de/artikel/403302?pos=25">
            Beleg für eine
            <em>am</em>-Progressiv-Verwendung im Eintrag „staunen“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="7" rkey="FesteWV">
        <p>
          In
          <r rkey="FesteWV" /> illustrieren die
          ausgewählten Belege
          unterschiedliche Aspekte des Gebrauchs.
        </p>
        <p>Teilressource „Musterartikel“</p>
        <ul>
          <li>Bedeutung</li>
          <li>Typische Kontextmuster</li>
          <li>Wertungsaspekt </li>
          <li>Funktion in der Kommunikation</li>
        </ul>
        <p>Teilressource „Wortverbindungen mit Adjektiven“</p>
        <ul>
          <li>Gebrauchsbeschreibung</li>
          <li>Typische Kontextmuster</li>
        </ul>

        <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

        <template #explain>
          <div class="exampleHeadline">Rubrik „Musterartikel“</div>
          <NuxtImage src="/img/datatypes/matches/festeWV_bedeutung.png" alt="Beispielgrafik 1"
            to="https://www.owid.de/artikel/309155/Bef%C3%BCrchtung/0">Beleg zur Bedeutung im
            Stichwort „Angst vor der eigenen Courage“ (Rubrik „Musterartikel“)</NuxtImage>
          <NuxtImage src="/img/datatypes/matches/festeWV_wertungsaspekt.png" alt="Beispielgrafik 2"
            to="https://www.owid.de/artikel/309155/Bef%C3%BCrchtung/0">
            Beleg zum negativen
            Wertungsaspekt im Stichwort „Angst vor der eigenen Courage“ (Rubrik
            „Musterartikel“)
          </NuxtImage>
          <div class="exampleHeadline">Rubrik „Wortverbindungen mit
            Adjektiven“</div>
          <NuxtImage src="/img/datatypes/matches/festeWV_gebrauchsbeschreibung.png" alt="Beispielgrafik 3"
            to="https://www.owid.de/artikel/309051">
            Beleg zur Gebrauchsbeschreibung im Eintrag
            „blinder Alarm“ (Rubrik: „Wortverbindungen mit
            Adjektiven“)
          </NuxtImage>
          <NuxtImage src="/img/datatypes/matches/festeWV_kontextmuster.png" alt="Beispielgrafik 4"
            to="https://www.owid.de/artikel/309051">
            Beleg zum typischen Kontextmuster <em>sich als
              blinder Alarm entpuppen</em> im Eintrag
            „blinder Alarm“ (Rubrik: „Wortverbindungen mit Adjektiven)
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="8" rkey="SPRW">
        <p>
          Im
          <r rkey="SPRW" /> werden Volltextbelege zu
          folgenden
          Aspekten angezeigt:
        </p>
        <ul>
          <li>Bedeutung</li>
          <li>Gebrauchsbesonderheiten</li>
          <li>Formvarianten </li>
          <li>Ersetzung von Komponenten</li>
          <li>Typische Verwendung im Text</li>
        </ul>
        <p>Im Modul „Werbeslogans“ sind zusätzlich Volltext-Belege zur Entstehungsgeschichte hinterlegt.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/sprw_bedeutung.png" alt="Beispielgrafik 1"
            to="https://www.owid.de/artikel/401837">
            Belege zur Bedeutung im Eintrag „Der Ton macht die
            Musik“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/matches/sprw_ersetzung.png" alt="Beispielgrafik 2"
            to="https://www.owid.de/artikel/401837">
            Belege zum Muster <em>Der/Die X macht/machen die
              Musik</em> (‚Ersetzung von Komponenten‘) im
            Eintrag „Der Ton macht die Musik“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/matches/sprw_geschichte_gap.png" alt="Beispielgrafik 3"
            to="https://www.owid.de/artikel/404075">
            Beleg zur Angabe ‚Geschichte‘ im Eintrag „Geiz ist
            geil“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="9" rkey="DTWW">
        <p>
          In
          <r rkey="DTWW" /> illustrieren bis zu drei
          ausgewählte
          Belege den Gebrauch der deutschen Wortverbindungen in der Domäne Wirtschaft.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/dtww_belege.png" alt="Beispielgrafik 1"
            to="http://wvonline.ids-mannheim.de/dtww/dtww_komplett.htm#d">
            Belege im Eintrag
            „durchlaufender Posten“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="10" rkey="WVBF">
        <p>
          In
          <r rkey="WVBF" />werden Volltextbelege in
          folgenden Knoten
          und Subangaben angezeigt:
        </p>
        <ul>
          <li>Wortverbindungsknoten: für ‚Allgemeine Beschreibung‘; ‚Kontextanalyse‘; Kontrastanalyse</li>
          <li>Musterknoten: für die Füller der Slots</li>
        </ul>
        <template #explain>
          <NuxtImage src="/img/datatypes/matches/wvGrund.png" alt="Beispielgrafik 1"
            to="http://wvonline.ids-mannheim.de/wvfelder-v3/uwvnodes_html/mit_Grund_ID1364235183644.html">
            Belege für
            die allgemeine Beschreibung des Knotens „mit Grund“
          </NuxtImage>
        </template>
      </compare-item>
    </compare>
  </div>
</template>