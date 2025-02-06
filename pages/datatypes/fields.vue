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
    <compare :filter="['SPRW', 'FesteWV', 'MAP', 'PREPCON_kon', 'PREPCON_temp']">
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
            Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘ im Artikel: „Man soll
            den Tag nicht vor dem Abend loben“
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="FesteWV"
        description="Feste Wortverbindungen des Deutschen - Modul: Wortverbindungen mit Adjektiv">
        <p>
          Die Feldangaben in
          <r rkey="FesteWV" /> (Rubrik "Wortverbindungen mit Adjektiven")
          fassen Einträge dieses OWID-Moduls zusammen, die eine
          verwandte Bedeutung haben, entweder mit einer gemeinsamen Komponente (z.B. <i>blind</i>) oder mit gänzlich
          unterschiedlichen Komponenten (z.B. <i>sich blind verstehen</i> – <i>geistige Verwandtschaft</i>).
        </p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/fwv_part_01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">Semantisches Feld mit der Bedeutung ‚unkritisch‘; ‚die Realität nicht wahrhaben wollen‘
            im Artikel: „sich blind und taub stellen“</div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="MAP"
        description="Musterbank argumentmarkierender Präpositionen - Information: Prädikate (Verbalprädikate und Prädikatsgefüge)">
        <p>
          Die verbalen Prädikatsfelder in
          <r rkey="MAP" /> sind
          geordnet
          nach Prädikatstyp (V: Verb, V-m: mediales Verb, PG:
          Prädikatsgefüge, PG-m: mediales Prädikatsgefüge). Alle gelisteten Prädikate sind mit jeweils einem
          Korpusbeleg illustriert. Bei instanziierenden Verben, die auch in der elektronischen Fassung des
          Valenzwörterbuchs <a href="https://grammis.ids-mannheim.de/verbvalenz">VALBU</a> behandelt werden,
          ist der relevante Eintrag verlinkt.
        </p>

        <template #explain>
          <div class="exampleImg">
            <NuxtImage src="/img/datatypes/fields/map_part_01.png" alt="Beispielgrafik 1" />
          </div>
          <div class="caption">Ausschnitt aus Prädikatsfeldern im Artikel "Furcht": JMD fürchtet JMDN/ETW.</div>
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

      <compare-item value="5" rkey="PREPCON_temp">
        <p>
          Die Wortfelder in
          <r rkey="PREPCON_temp" /> (Kurzartikel)
          beinhalten semantisch verwandte Wörter der PN,
          die jeweils mit den entsprechenden Einträgen in <i>elexiko</i> verlinkt sind. Im elexiko-Artikel findet man
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