<template>
  <h1>Felder</h1>
  <p>Die im Syntagmatikon verzeichneten Felder sind manuell zusammengestellte Gruppen von Syntagmen und/oder Monolexemen
    mit verwandten Gebrauchsmerkmalen. Gebrauchsverwandtschaften können sich u.a. beziehen auf: synonyme oder
    quasisynonyme (Teil-)Bedeutungen bzw. semantische Konzepte; pragmatische Merkmale wie ähnliche kommunikative
    Funktionen, Domänen oder Textsorten usw.</p>
  <br />

  <!--
  TODO
  TODO: VueFlow einbinden
  TODO: Graph für alle über VueFlow realisieren
  TODO: Tabs - Liste nach oben. 
  -->

  <div>
    <compare title="Feldangaben in">
      <template #headers>
        <v-tab value="ALL" class="nocaps">allen Ressourcen</v-tab>
        <v-tab value="1" class="nocaps">Sprichwörterbuch</v-tab>
        <v-tab value="2" class="nocaps">Feste Wortverbindungen</v-tab>
        <v-tab value="3" class="nocaps">MAP</v-tab>
        <v-tab value="4" class="nocaps">PREPCON<sup>kontrastiv</sup></v-tab>
        <v-tab value="5" class="nocaps">PREPCON<sup>temporal</sup></v-tab>
      </template>
      <template #tabs>
        <v-tabs-window-item value="ALL">
          <v-row>
            <v-col cols="12" style="border-left: #DDD 3px solid; padding-left: 10px;">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
              amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
              consectetur eligendi ipsa consequatur!
              <div style="text-align: center; width:100%">
                <img src="/dummy/graph.jpg" style="text-align: center;" />
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
              amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
              consectetur eligendi ipsa consequatur!
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="1" style="padding:0px 0px 0px 0px">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="https://www.owid.de/wb/sprw/start.html">
                    <h3 style="display: inline-block;">Sprichwörterbuch</h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  Feldangaben im OWID-Sprichwörterbuch
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">

            <p>
              Die Feldangaben fassen verwandte Sprichwörter des OWID-Sprichwörterbuchs zusammen. Diese
              Gebrauchsverwandtschaft ist selten absolut identisch, sondern bezieht sich in der Regel auf semantische
              oder pragmatische Teilaspekte. Alle Feldkomponenten sind mit dem entsprechenden Wörterbuchartikel
              verlinkt.
            </p>

            <resource-explain webpage="../img/datatypes/fields/swb_fullscreen_01_annotated.png">
              <p style="margin-top: 10px;">
                Artikel: „Man soll den Tag nicht vor dem Abend loben“
              </p>
              <img src="/img/datatypes/fields/swb_part_01.png" alt="">
              <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>

              <p style="margin-top: 10px;">
                Artikel: „Man sollte sich nicht zu früh freuen“
              </p>
              <img src="/img/datatypes/fields/swb_part_02.png" alt="">
              <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>
            </resource-explain>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="2" style="padding:0px 0px 0px 0px">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="https://www.owid.de/wb/uwv/start.html">
                    <h3 style="display: inline-block;">Feste Wortverbindungen</h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  Feste Wortverbindungen des Deutschen - Modul: Wortverbindungen mit Adjektiv
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">

            <p>
              Die Feldangaben in „Feste Wortverbindungen Adjektiv“ fassen Einträge dieses OWID-Moduls zusammen, die eine
              verwandte Bedeutung haben, entweder mit einer gemeinsamen Komponente (z.B. <i>blind</i>) oder mit gänzlich
              unterschiedlichen Komponenten (z.B. <i>sich blind verstehen</i> – <i>geistige Verwandtschaft</i>).
            </p>

            <resource-explain webpage="../img/datatypes/fields/fwv_fullscreen_01_annotated.png">
              <p style="margin-top: 10px;">
                Artikel: „Man soll den Tag nicht vor dem Abend loben“
              </p>
              <img src="/img/datatypes/fields/fwv_part_01.png" alt="">
              <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>

              <p style="margin-top: 10px;">
                Artikel: „Man sollte sich nicht zu früh freuen“
              </p>
              <img src="/img/datatypes/fields/fwv_part_02.png" alt="">
              <p>Feldangabe zu verwandten Sprichwörtern in der Teilbedeutung ‚vorsichtiges Abwarten‘</p>
            </resource-explain>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="3" style="padding:0px 0px 0px 0px">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="http://lexik02.ids-mannheim.de/vas-v7/">
                    <h3 style="display: inline-block;">MAP</h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  Musterbank argumentmarkierender Präpositionen - Information: Prädikate (Verbalprädikate und
                  Prädikatsgefüge)
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">

            <div class="relink">
              <p>
                Die verbalen Prädikatsfelder sind geordnet nach Prädikatstyp (V: Verb, V-m: mediales Verb, PG:
                Prädikatsgefüge, PG-m: mediales Prädikatsgefüge). Alle gelisteten Prädikate sind mit jeweils einem
                Korpusbeleg illustriert. Bei instanziierenden Verben, die auch in der elektronischen Fassung des
                Valenzwörterbuchs <a href="https://grammis.ids-mannheim.de/verbvalenz">VALBU</a> behandelt werden,
                ist der relevante Eintrag verlinkt.
              </p>
            </div>

            <resource-explain webpage="../img/datatypes/fields/map_fullscreen_01_annotated.png">
              <p style="margin-top: 10px;">
                Ausschnitt aus Prädikatsfeldern: JMD fürchtet JMDN/ETW. Für jeden Prädikatstyp sehen Sie am Ende
                des Artikels eine Liste mit zugeordneten Prädikaten (siehe
                <enum v="1" />). Mit einem Klick auf
                "Beispiele" (siehe
                <enum v="2" />) können Sie sich die Belege zu den Prädikaten anzeigen lassen.
                <br />&nbsp;
              </p>
              <img src="/img/datatypes/fields/map_part_01.png" alt="">
            </resource-explain>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="4" style="padding:0px 0px 0px 0px">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="http://lexik02.ids-mannheim.de/vas-v7/">
                    <h3 style="display: inline-block;">PREPCON<sup>kontrastiv</sup></h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  PREPCON<sup>kontrastiv</sup> - Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext
                  <br />
                  Rubrik: „Gebrauchsaspekte“
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">

            <div class="relink">
              <p>
                In „PREPCON<sup>online</sup> kontrastiv“ werden Satellitenfelder im Sprachkontrast (Deutsch-Spanisch;
                Deutsch-Slowakisch) dargestellt. Hierbei handelt es sich um qualitativ zusammengefasste Gruppen von
                statistisch ermitteltem Kookkurrenzpartnern einer PN, die bestimmten Gebrauchsaspekten zugeordnet
                wurden. Die Felder sind in der Regel nach Wortarten unterteilt. Es gibt aber auch Fälle, in denen keine
                Wortartenunterscheidung vorgenommen wurde. Es werden zwei Formate angezeigt: als Partnerwort-Wolke und
                als Kookkurrenzliste.
              </p>
            </div>

            <resource-explain webpage="../img/datatypes/fields/prepk_joined_01_annotated.png">
              <template #webpage-text>
                <p style="margin: 10px 0px">
                  Jeder Artikel enthält eine Wolkendarstellung adjektivischer Satellitenfelder des Gebrauchsaspekts
                  (siehe
                  <enum v="1" />).
                  Mit einem Klick auf diese Darstellung gelangen Sie zu einer vollständigen Kookkurrenzliste (siehe
                  <enum v="2" />).
                </p>
              </template>

              <p style="margin-top: 10px;">
                Wolkendarstellung adjektivischer Satellitenfelder des Gebrauchsaspekts „Thematisierung von
                Schwierigkeiten“ von am Anfang und des spanischen Äquivalents al principio.
                <br />&nbsp;
              </p>
              <img src="/img/datatypes/fields/prepk_part_03.png" alt="">
              <p style="margin-top: 10px;">
                Ausschnitt aus Kookkurrenzliste adjektivischer Satellitenfelder des Gebrauchsaspekts
                „Thematisierung von Schwierigkeiten“ von am Anfang.
                <br />&nbsp;
              </p>
              <img src="/img/datatypes/fields/prepk_part_04.png" alt="">
            </resource-explain>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="5" style="padding:0px 0px 0px 0px">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="http://lexik02.ids-mannheim.de/vas-v7/">
                    <h3 style="display: inline-block;">PREPCON<sup>temporal</sup></h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  PREPCON<sup>temporal</sup> - Kurzartikel zu temporalen Präposition-Nomen-Verbindungen im Kontext
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">

            <div class="relink">
              <p>
                Die Wortfelder in PREPCON<sup>temporal</sup> Kurzartikel beinhalten semantisch verwandte Wörter der PN, die jeweils
                mit den entsprechenden Einträgen in <i>elexiko</i> verlinkt sind. Im elexiko-Artikel findet man entweder die
                lexikografische Beschreibung des (Quasi-)Synonyms oder einen Link zum entsprechenden Profil in der CCDB.
              </p>
            </div>

            <resource-explain webpage="../img/datatypes/fields/map_fullscreen_01_annotated.png">
              <p style="margin-top: 10px;">
                Ausschnitt aus Prädikatsfeldern: JMD fürchtet JMDN/ETW. Für jeden Prädikatstyp sehen Sie am Ende
                des Artikels eine Liste mit zugeordneten Prädikaten (siehe
                <enum v="1" />). Mit einem Klick auf
                "Beispiele" (siehe
                <enum v="2" />) können Sie sich die Belege zu den Prädikaten anzeigen lassen.
                <br />&nbsp;
              </p>
              <img src="/img/datatypes/fields/map_part_01.png" alt="">
            </resource-explain>
          </v-row>
        </v-tabs-window-item>
      </template>
    </compare>
  </div>
</template>