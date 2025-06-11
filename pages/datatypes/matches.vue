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
      :filter="['PREPCON_temp_art', 'PREPCON_kon', 'PhrasKomp', 'Redeeinleiter', 'Verlaufsformen', 'FesteWV', 'SPRW', 'DTWW', 'WVBF']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/matches/matches_all.png" style="text-align: center;" alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_temp_art">
        <p>
          In
          <r rkey="PREPCON_temp_art" /> werden Belege in
          zwei Formen angeboten:
        </p>
        <ul>
          <li>ausgewählte KWICs, die die Autonomie einer Präposition-Nomen-Verbindung (ohne weitere
            Ergänzungen) dokumentieren</li>
          <li>ausgewählte Volltextbelege, die den typischen Gebrauch illustrieren</li>
        </ul>
        <template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/prepcon_temp_amEnde.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            KWIC-Belege im Artikel „am Ende“ (Rubrik „Kurzartikel“)
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/prepcon_temp_amEnde_volltext.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Volltextbelege im Artikel „am Ende“ (Rubrik „Kurzartikel“)
          </div>
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

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/prepcon_kon_kochrezepte_header.png" alt="Beispielgrafik 1" />

            <NuxtImage src="/img/datatypes/matches/prepcon_kon_kochrezepte_deutsch.png" alt="Beispielgrafik 2" />

            <NuxtImage src="/img/datatypes/matches/prepcon_kon_kochrezepte_spanisch.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Belege zum Gebrauchsaspekt ‚Kochrezept‘ im Artikel „nach Belieben – a su gusto“
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_header.png" alt="Beispielgrafik 1" />

            <NuxtImage src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_deutsch.png" alt="Beispielgrafik 2" />

            <NuxtImage src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_slowakisch.png"
              alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Belege für den Gebrauchsaspekt ‚Dominantes Handeln ohne Korrektiv‘ im Artikel „nach Belieben
            - podľa ľubovôle“
          </div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="PhrasKomp">
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
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/phraskomp_gerede.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Ausschnitt aus der Treffermenge zu Phrasenkomposita mit dem Zweitglied <em>Gerede</em> (mit
            ausgeklappten Belegen)
          </div>
        </template>
      </compare-item>

      <compare-item value="4" rkey="Redeeinleiter">
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
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/rede_beleg.png" alt="" />
          </div>
          <div class="caption">
            Ausschnitt aus der Belegliste des Redeeinleiters „sagen“
          </div>

        </template>
      </compare-item>

      <compare-item value="5" rkey="Verlaufsformen">
        <p>
          In
          <r rkey="Verlaufsformen" /> werden manuell
          ausgewählte
          Belege zum Vorkommen eines Verbs in einer, zwei oder alle drei Verlaufsformen angegeben –
          ergänzt um den engen
          Kontext des Belegs.
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/verlaufsformen_beleg_eng.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Beleg für eine <em>am</em>-Progressiv-Verwendung im Eintrag „staunen“
          </div>
        </template>
      </compare-item>

      <compare-item value="6" rkey="FesteWV">
        <p>
          In
          <r rkey="FesteWV" /> illustrieren die
          ausgewählten Belege
          unterschiedliche Aspekte des Gebrauchs.
        </p>
        <p>Rubrik „Musterartikel“</p>
        <ul>
          <li>Bedeutung</li>
          <li>Typische Kontextmuster</li>
          <li>Wertungsaspekt </li>
          <li>Funktion in der Kommunikation</li>
        </ul>
        <p>Rubrik „Wortverbindungen mit Adjektiven“</p>
        <ul>
          <li>Gebrauchsbeschreibung</li>
          <li>Typische Kontextmuster</li>
        </ul>

        <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

        <template #explain>
          <div class="exampleHeadline">Rubrik „Musterartikel“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/festeWV_bedeutung.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Beleg zur Bedeutung im Stichwort „Angst vor der eigenen Courage“ (Rubrik „Musterartikel“)
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/festeWV_wertungsaspekt.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Beleg zum negativen Wertungsaspekt im Stichwort „Angst vor der eigenen Courage“ (Rubrik
            „Musterartikel“)
          </div>

          <div class="exampleHeadline">Rubrik „Wortverbindungen mit
            Adjektiven“</div>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/festeWV_gebrauchsbeschreibung.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Beleg zur Gebrauchsbeschreibung im Artikel „blinder Alarm“ (Rubrik: „Wortverbindungen mit
            Adjektiven“)
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/festeWV_kontextmuster.png" alt="Beispielgrafik 4" />
          </div>
          <div class="caption">
            Beleg zum typischen Kontextmuster <em>sich als blinder Alarm entpuppen</em> im Artikel
            „blinder Alarm“ (Rubrik: „Wortverbindungen mit Adjektiven)


          </div>


        </template>
      </compare-item>

      <compare-item value="7" rkey="SPRW">
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
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/sprw_bedeutung.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Belege zur Bedeutung im Artikel „Der Ton macht die Musik“
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/sprw_ersetzung.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            Belege zum Muster <em>Der/Die X macht/machen die Musik</em> (‚Ersetzung von Komponenten‘) im
            Artikel „Der Ton macht die Musik“
          </div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/sprw_geschichte_gap.png" alt="Beispielgrafik 3" />
          </div>
          <div class="caption">
            Beleg zur Angabe ‚Geschichte‘ im Artikel „Geiz ist geil“
          </div>

        </template>
      </compare-item>

      <compare-item value="8" rkey="DTWW">
        <p>
          In
          <r rkey="SPRW" /> illustrieren bis zu drei
          ausgewählte
          Belege den Gebrauch der deutschen Wortverbindungen in der Domäne Wirtschaft.
        </p>
        <template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/dtww_belege.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Belege zum Eintrag „durchlaufender Posten“
          </div>

        </template>
      </compare-item>

      <compare-item value="9" rkey="WVBF">
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

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/matches/wvGrund.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Belege für die allgemeine Beschreibung des Knoten „mit Grund“
          </div>

        </template>
      </compare-item>
    </compare>
  </div>
</template>