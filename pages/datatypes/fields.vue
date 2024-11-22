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
  <p>Die im Syntagmatikon verzeichneten Felder sind manuell zusammengestellte Gruppen von Syntagmen und/oder Monolexemen
    mit verwandten Gebrauchsmerkmalen. Gebrauchsverwandtschaften können sich u.a. beziehen auf: synonyme oder
    quasisynonyme (Teil-)Bedeutungen bzw. semantische Konzepte; pragmatische Merkmale wie ähnliche kommunikative
    Funktionen, Domänen oder Textsorten usw.</p>

  <div>
    <compare title="">

      <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
      <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
      <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
      <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
      <!-- NOTE: Der Tab kann belieibig benannt werden -->

      <template #headers>
        <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
        <v-tab value="1" class="nocaps"><r rkey="SPRW"/> </v-tab>
        <v-tab value="2" class="nocaps"><r rkey="FesteWV"/></v-tab>
        <v-tab value="3" class="nocaps"><r rkey="MAP"/></v-tab>
        <v-tab value="4" class="nocaps"><resources-list-compact
            :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
        <v-tab value="5" class="nocaps"><resources-list-compact
            :filter="['PREPCON_temp']"></resources-list-compact></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">

          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/img/datatypes/fields/fields_all.png" style="text-align: center;" />
          </div>

        </compare-item>

        <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
        <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
        <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
        <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
        <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

        <compare-item value="1" rkey="SPRW" description="Feldangaben im OWID-Sprichwörterbuch"
          webpage="/img/datatypes/fields/swb_fullscreen_01_annotated.png">

          <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
          <p>
            Die Feldangaben fassen verwandte Sprichwörter im <resources-list-compact
              :filter="['SPRW']"></resources-list-compact> zusammen. Diese
            Gebrauchsverwandtschaft ist selten absolut identisch, sondern bezieht sich in der Regel auf semantische
            oder pragmatische Teilaspekte. Alle Feldkomponenten sind mit dem entsprechenden Wörterbuchartikel
            verlinkt.
          </p>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/fields/swbu_part_01.png" alt="" />
            </div>
            <div class="caption">
              Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘ im Artikel: „Man soll
              den Tag nicht vor dem Abend loben“
            </div>
          </template>



        </compare-item>

        <compare-item value="2" rkey="FesteWV"
          description="Feste Wortverbindungen des Deutschen - Modul: Wortverbindungen mit Adjektiv"
          webpage="/img/datatypes/fields/fwv_fullscreen_01_annotated.png">
          <p>
            Die Feldangaben in <r rkey="FesteWV"/> (Untergruppe
            "Adjektive")
            fassen Einträge dieses OWID-Moduls zusammen, die eine
            verwandte Bedeutung haben, entweder mit einer gemeinsamen Komponente (z.B. <i>blind</i>) oder mit gänzlich
            unterschiedlichen Komponenten (z.B. <i>sich blind verstehen</i> – <i>geistige Verwandtschaft</i>).
          </p>

          <template #explain>
            <div class="exampleImg">
              <img src="/img/datatypes/fields/fwv_part_01.png" alt="" />
            </div>
            <div class="caption">Semantisches Feld mit der Bedeutung ‚unkritisch‘; ‚die Realität nicht wahrhaben wollen‘
              im Artikel: „sich blind und taub stellen“</div>

          </template>
        </compare-item>

        <!-- NOTE: Wenn man eine Seite im gleichen Ordner anlegt - und die Seite identisch (G/k-Schreibung) zum rkey ist
                   dann wird automatisch ein Button erzeugt, der auf die Seite verlinkt. -->

        <compare-item value="3" rkey="MAP"
          description="Musterbank argumentmarkierender Präpositionen - Information: Prädikate (Verbalprädikate und Prädikatsgefüge)"
          webpage="/img/datatypes/fields/map_fullscreen_01_annotated.png">
          <p>
            Die verbalen Prädikatsfelder in <r rkey="MAP"/> sind
            geordnet
            nach Prädikatstyp (V: Verb, V-m: mediales Verb, PG:
            Prädikatsgefüge, PG-m: mediales Prädikatsgefüge). Alle gelisteten Prädikate sind mit jeweils einem
            Korpusbeleg illustriert. Bei instanziierenden Verben, die auch in der elektronischen Fassung des
            Valenzwörterbuchs <a href="https://grammis.ids-mannheim.de/verbvalenz">VALBU</a> behandelt werden,
            ist der relevante Eintrag verlinkt.
          </p>

          <template #explain>
            <div class="exampleImg">
              <img src="/img/datatypes/fields/map_part_01.png" alt="" />
            </div>
            <div class="caption">Ausschnitt aus Prädikatsfeldern im Artikel "Furcht": JMD fürchtet JMDN/ETW.</div>

          </template>
        </compare-item>

        <compare-item value="4" rkey="PREPCON_kon"
          description="Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext - Rubrik: „Gebrauchsaspekte“"
          webpage="/img/datatypes/fields/prepk_joined_01_annotated.png">
          <p>
            In <r rkey="PREPCON_kon"/> werden Satellitenfelder im
            Sprachkontrast (Deutsch-Spanisch;
            Deutsch-Slowakisch) dargestellt. Hierbei handelt es sich um qualitativ zusammengefasste Gruppen von
            statistisch ermitteltem Kookkurrenzpartnern einer PN, die bestimmten Gebrauchsaspekten zugeordnet
            wurden. Die Felder sind in der Regel nach Wortarten unterteilt. Es gibt aber auch Fälle, in denen keine
            Wortartenunterscheidung vorgenommen wurde. Es werden zwei Formate angezeigt: als Partnerwort-Wolke und
            als Kookkurrenzliste.
          </p>

          <!-- NOTE: Werden Nummern im Screenshot verwendet, dann bitte in Arial (fett), Krei #ff0000, Schrift #ffffff setzen -->
          <!-- NOTE: Im Text können diese Marker mit <enum v="1" /> erzeugt werden - v = Nummer. -->

          <template #webpagetext>
            <p style="margin: 10px 0px">
              Jeder Artikel enthält eine Wolkendarstellung adjektivischer Satellitenfelder des Gebrauchsaspekts
              (siehe
              <enum v="1" />).
              Mit einem Klick auf diese Darstellung gelangen Sie zu einer vollständigen Kookkurrenzliste (siehe
              <enum v="2" />).
            </p>
          </template>

          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/fields/prepk_part_03.png" alt="" />
            </div>
            <div class="caption"> Wolkendarstellung adjektivischer Satellitenfelder des Gebrauchsaspekts „Thematisierung
              von
              Schwierigkeiten“ von <em>am Anfang</em> und des spanischen Äquivalents <em>al principio</em></div>

            <div class="exampleImg">
              <img src="/img/datatypes/fields/prepk_part_04.png" alt="" />
            </div>
            <div class="caption"> Ausschnitt aus der Kookkurrenzliste adjektivischer Satellitenfelder des
              Gebrauchsaspekts
              „Thematisierung von Schwierigkeiten“ von <em>am Anfang</em></div>
          </template>
        </compare-item>

        <compare-item value="5" rkey="PREPCON_temp" webpage="/img/datatypes/fields/prept_fullscreen_01_annotated.png">
          <p>
            Die Wortfelder in <r rkey="PREPCON_temp"/> (Kurzartikel)
            beinhalten semantisch verwandte Wörter der PN,
            die jeweils mit den entsprechenden Einträgen in <i>elexiko</i> verlinkt sind. Im elexiko-Artikel findet man
            entweder die lexikografische Beschreibung des (Quasi-)Synonyms oder einen Link zum entsprechenden Profil in
            der CCDB.
          </p>


          <template #explain>

            <div class="exampleImg">
              <img src="/img/datatypes/fields/prept_part_01.png" alt="" />
            </div>
            <div class="caption"> Verwandte Wörter mit der Grundbedeutung ‚pausenlos‘ im Artikel "ohne Unterlass"</div>




          </template>
        </compare-item>
      </template>
    </compare>
  </div>


</template>