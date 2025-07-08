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
    props.title = 'Felder';
    props.parent = 'Informationstypen';
  },
}
</script>
<template>
  <p>Die im <hi>Syntagmatikon</hi> verzeichneten Felder sind manuell zusammengestellte Gruppen von Syntagmen und/oder
    Monolexemen
    mit verwandten Gebrauchsmerkmalen. Gebrauchsverwandtschaften können sich u.a. beziehen auf: synonyme oder
    quasisynonyme (Teil-)Bedeutungen bzw. semantische Konzepte; pragmatische Merkmale wie ähnliche kommunikative
    Funktionen, Domänen oder Textsorten usw.</p>

  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['SPRW', 'FesteWV', 'MAP', 'PREPCON_kon', 'PREPCON_temp_art']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/fields/fields_all.png" style="text-align: center;" alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="SPRW" description="Feldangaben im OWID-Sprichwörterbuch">
        <p>
          Die Feldangaben fassen verwandte Sprichwörter im <resources-list-compact
            :filter="['SPRW']"></resources-list-compact> zusammen. Diese
          Gebrauchsverwandtschaft ist selten absolut identisch, sondern bezieht sich in der Regel auf semantische
          oder pragmatische Teilaspekte. Alle Feldkomponenten sind mit dem entsprechenden Wörterbuchartikel
          verlinkt.
        </p>
        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/swbu_part_01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘ im Eintrag: „Man soll
            den Tag nicht vor dem Abend loben“
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="FesteWV"
        description="Feste Wortverbindungen des Deutschen - Modul: Wortverbindungen mit Adjektiv">
        <p>
         Feldangaben umfassen Wortverbindungen mit einer verwandten Bedeutung, entweder mit einer gemeinsamen Komponente (z.B. blind) oder mit gänzlich unterschiedlichen Komponenten (z.B. sich blind verstehen – geistige Verwandtschaft). Diese Angaben werden in
          <r rkey="FesteWV" /> in der Teilressource „Wortverbindungen mit Adjektiven“ nur für ausgewählte Einträge aufgeführt.
        </p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/fwv_part_01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">Semantisches Feld mit der Bedeutung ‚unkritisch‘; ‚die Realität nicht wahrhaben wollen‘
            im Eintrag: „sich blind und taub stellen“</div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="MAP"
        description="Musterbank argumentmarkierender Präpositionen - Information: Prädikate (Verbalprädikate und Prädikatsgefüge)">
        <p>
          In <r rkey="MAP" /> werden Gruppierungen der Daten auf verschiedenen semantischen, grammatischen und lexikalischen Ebenen vorgenommen. Auf der Ebene individueller Muster werden semantische Relationen zwischen deren einzelnen Komponenten sowie zwischen der schematischen Musterbedeutung im Ganzen und der Semantik spezifischer eingesetzter Prädikate beschrieben. Syntaktisch werden Gruppen zugehöriger Belege mit identischer grammatischer Markierung ausgewiesen, lexikalisch Klassen von Prädikaten verschiedener struktureller Typen (z.B. einfache Verben vs. komplexe Prädikatsgefüge). Auf einer höheren Ebene werden semantisch verwandte Muster zu übergeordneten Familien zusammengefasst, die in eigenständigen Beschreibungen behandelt werden.
        </p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/map_respekt_predicates.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/plus/map/article/vor/respekt#predicates" />Einteilung musterinstanziierender Prädikate nach strukturellem Typ</div>
             <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/map_visualisierung.png" alt="Beispielgrafik 2" />
          </div>
          <div class="caption">
            <ScreenshotLink to="https://www.owid.de/plus/map/article/vor/bedrohen" />Feldangabe zur Muster-Familie BEDROHEN</div>
        </template>
      </compare-item>

      <compare-item value="4" rkey="PREPCON_kon"
        description="Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext - Rubrik: „Gebrauchsaspekte“">
        <p>
          In
          <r rkey="PREPCON_kon" /> werden Satellitenfelder im
          Sprachkontrast (Deutsch-Spanisch;
          Deutsch-Slowakisch) dargestellt. Hierbei handelt es sich um qualitativ zusammengefasste Gruppen von
          statistisch ermitteltem Kookkurrenzpartnern einer PN, die bestimmten Gebrauchsaspekten zugeordnet
          wurden. Die Felder sind in der Regel nach Wortarten unterteilt. Es gibt aber auch Fälle, in denen keine
          Wortartenunterscheidung vorgenommen wurde. Es werden zwei Formate angezeigt: als Partnerwort-Wolke und
          als Kookkurrenzliste.
        </p>

        <template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/prepk_part_03.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption"> Wolkendarstellung adjektivischer Satellitenfelder des Gebrauchsaspekts „Thematisierung
            von
            Schwierigkeiten“ von <em>am Anfang</em> und des spanischen Äquivalents <em>al principio</em></div>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/prepk_part_04.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption"> Ausschnitt aus der Kookkurrenzliste adjektivischer Satellitenfelder des
            Gebrauchsaspekts
            „Thematisierung von Schwierigkeiten“ von <em>am Anfang</em></div>
        </template>
      </compare-item>

      <compare-item value="5" rkey="PREPCON_temp_art">
        <p>
          Die Wortfelder in
          <r rkey="PREPCON_temp_art" />
          beinhalten semantisch verwandte Wörter der PN,
          die jeweils mit den entsprechenden Einträgen in <i>elexiko</i> verlinkt sind. Dort findet man
          entweder die lexikografische Beschreibung des (Quasi-)Synonyms oder einen Link zum entsprechenden Profil in
          der CCDB.
        </p>
        <template #explain>

          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/prept_part_01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption"> Verwandte Wörter mit der Grundbedeutung ‚pausenlos‘ im Artikel "ohne Unterlass"</div>
        </template>
      </compare-item>
    </compare>
  </div>
</template>