<template>
  <h1>Felder</h1>
  <p>Die im Syntagmatikon verzeichneten Felder sind manuell zusammengestellte Gruppen von Syntagmen und/oder Monolexemen
    mit verwandten Gebrauchsmerkmalen. Gebrauchsverwandtschaften können sich u.a. beziehen auf: synonyme oder
    quasisynonyme (Teil-)Bedeutungen bzw. semantische Konzepte; pragmatische Merkmale wie ähnliche kommunikative
    Funktionen, Domänen oder Textsorten usw.</p>
  <br />

  <div>
    <compare title="Feldangaben in">

      <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
      <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
      <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
      <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->       
      <!-- NOTE: Der Tab kann belieibig benannt werden -->

      <template #headers>
        <v-tab value="ALL" class="nocaps">allen Ressourcen</v-tab>
        <v-tab value="1" class="nocaps">Sprichwörterbuch</v-tab>
        <v-tab value="2" class="nocaps">Feste Wortverbindungen</v-tab>
        <v-tab value="3" class="nocaps">MAP</v-tab>
        <v-tab value="4" class="nocaps">PREPCON<sup>kontrastiv</sup></v-tab>
        <v-tab value="5" class="nocaps">PREPCON<sup>temporal</sup></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
            consectetur eligendi ipsa consequatur!
          </p>

          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/img/datatypes/fields/fields.png" style="text-align: center;" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
            consectetur eligendi ipsa consequatur!
          </p>
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
            Die Feldangaben fassen verwandte Sprichwörter des OWID-Sprichwörterbuchs zusammen. Diese
            Gebrauchsverwandtschaft ist selten absolut identisch, sondern bezieht sich in der Regel auf semantische
            oder pragmatische Teilaspekte. Alle Feldkomponenten sind mit dem entsprechenden Wörterbuchartikel
            verlinkt.
          </p>

          <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

          <template #explain>
            <p>
              Artikel: „Man soll den Tag nicht vor dem Abend loben“
            </p>
            <img src="/img/datatypes/fields/swbu_part_01.png" alt="" />
            <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>

            <p style="margin-top: 10px;">
              Artikel: „Man sollte sich nicht zu früh freuen“
            </p>
            <img src="/img/datatypes/fields/swbu_part_02.png" alt="" />
            <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>
          </template>
        </compare-item>

        <compare-item value="2" rkey="FesteWV"
          description="Feste Wortverbindungen des Deutschen - Modul: Wortverbindungen mit Adjektiv"
          webpage="/img/datatypes/fields/fwv_fullscreen_01_annotated.png">
          <p>
            Die Feldangaben in „Feste Wortverbindungen Adjektiv“ fassen Einträge dieses OWID-Moduls zusammen, die eine
            verwandte Bedeutung haben, entweder mit einer gemeinsamen Komponente (z.B. <i>blind</i>) oder mit gänzlich
            unterschiedlichen Komponenten (z.B. <i>sich blind verstehen</i> – <i>geistige Verwandtschaft</i>).
          </p>

          <template #explain>
            <p>
              Artikel: „Man soll den Tag nicht vor dem Abend loben“
            </p>
            <img src="/img/datatypes/fields/fwv_part_01.png" alt="" />
            <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>

            <p style="margin-top: 10px;">
              Artikel: „Man sollte sich nicht zu früh freuen“
            </p>
            <img src="/img/datatypes/fields/fwv_part_02.png" alt="" />
            <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>
          </template>
        </compare-item>

        <!-- NOTE: Wenn man eine Seite im gleichen Ordner anlegt - und die Seite identisch (G/k-Schreibung) zum rkey ist
                   dann wird automatisch ein Button erzeugt, der auf die Seite verlinkt. -->

        <compare-item value="3" rkey="MAP"
          description="Musterbank argumentmarkierender Präpositionen - Information: Prädikate (Verbalprädikate und Prädikatsgefüge)"
          webpage="/img/datatypes/fields/map_fullscreen_01_annotated.png">
          <p>
            Die verbalen Prädikatsfelder sind geordnet nach Prädikatstyp (V: Verb, V-m: mediales Verb, PG:
            Prädikatsgefüge, PG-m: mediales Prädikatsgefüge). Alle gelisteten Prädikate sind mit jeweils einem
            Korpusbeleg illustriert. Bei instanziierenden Verben, die auch in der elektronischen Fassung des
            Valenzwörterbuchs <a href="https://grammis.ids-mannheim.de/verbvalenz">VALBU</a> behandelt werden,
            ist der relevante Eintrag verlinkt.
          </p>

          <template #explain>
            <p>
              Archtikel "Furcht"
              <br />&nbsp;
            </p>
            <img src="/img/datatypes/fields/map_part_01.png" alt="" style="margin: 40px 0px 0px -130px;" />
            <p style="margin-top: 10px;">
              Ausschnitt aus Prädikatsfeldern: JMD fürchtet JMDN/ETW.
              <br />&nbsp;
            </p>
          </template>
        </compare-item>

        <compare-item value="4" rkey="PREPCON_kon"
          description="Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext - Rubrik: „Gebrauchsaspekte“"
          webpage="/img/datatypes/fields/prepk_joined_01_annotated.png">
          <p>
            In „PREPCON<sup>online</sup> kontrastiv“ werden Satellitenfelder im Sprachkontrast (Deutsch-Spanisch;
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
            <p>
              Wolkendarstellung adjektivischer Satellitenfelder des Gebrauchsaspekts „Thematisierung von
              Schwierigkeiten“ von am Anfang und des spanischen Äquivalents al principio.
              <br />&nbsp;
            </p>
            <img src="/img/datatypes/fields/prepk_part_03.png" alt="" />
            <p style="margin-top: 10px;">
              Ausschnitt aus Kookkurrenzliste adjektivischer Satellitenfelder des Gebrauchsaspekts
              „Thematisierung von Schwierigkeiten“ von am Anfang.
              <br />&nbsp;
            </p>
            <img src="/img/datatypes/fields/prepk_part_04.png" alt="" />
          </template>
        </compare-item>

        <compare-item value="5" rkey="PREPCON_temp" webpage="/img/datatypes/fields/prept_fullscreen_01_annotated.png">
          <p>
            Die Wortfelder in PREPCON<sup>temporal</sup> Kurzartikel beinhalten semantisch verwandte Wörter der PN,
            die jeweils mit den entsprechenden Einträgen in <i>elexiko</i> verlinkt sind. Im elexiko-Artikel findet man
            entweder die lexikografische Beschreibung des (Quasi-)Synonyms oder einen Link zum entsprechenden Profil in
            der CCDB.
          </p>

          <template #explain>
            <p>
                Verwandte Wörter mit der Grundbedeutung: ‚pausenlos‘ im Artikel ohne Unterlass
              </p>
              <img src="/img/datatypes/fields/prept_part_01.png" alt="" />
              <p style="margin-top: 10px;">
                Klicken Sie auf eines der verlinkten Wörter, gelangen Sie zum <i>elexiko</i>-Artikel.
                Über diesen gelangen Sie dann zum entsprechenden Profil in der CCDB (siehe rote Markierung).
              </p>
              <img src="/img/datatypes/fields/prept_fullscreen_02_annotated.png" alt="" />
          </template>
        </compare-item>
      </template>
    </compare>
  </div>
</template>