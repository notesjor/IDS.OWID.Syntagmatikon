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
        <v-tab value="4" class="nocaps">allen Ressourcen</v-tab>
        <v-tab value="1" class="nocaps">Feste Wortverbindungen</v-tab>
        <v-tab value="xxx" class="nocaps">PREPCON<sup>temporal</sup></v-tab>
        <v-tab value="two" class="nocaps">Sprichwörterbuch</v-tab>
        <v-tab value="three" class="nocaps">Item Three</v-tab>
        <v-tab value="two" class="nocaps">Sprichwörterbuch</v-tab>
        <v-tab value="three" class="nocaps">Item Three</v-tab>
      </template>
      <template #tabs>
        <v-tabs-window-item value="4">
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
                  <a href="http://uwv.ids-mannheim.de/prepcon/modul2/">
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

            <resource-explain webpage="../img/datatypes/fields/fullscreen_01_annotated.png">
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











        <v-tabs-window-item value="xxx">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="http://uwv.ids-mannheim.de/prepcon/modul2/">
                    <h3 style="display: inline-block;">PREPCON<sup>temporal</sup></h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  Kurzartikel zu temporalen Präposition-Nomen-Verbindungen im Kontext
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">
            <img src="/img/datatypes/kook/amEnde_kookzeilen.PNG" style="width:80%" />
            Die Wortfelder in PREPCONtemporal_Kurzartikel beinhalten semantisch verwandte Wörter der PN, die jeweils mit
            den entsprechenden Einträgen in elexiko verlinkt sind. Im elexiko-Artikel findet man entweder die
            lexikografische Beschreibung des (Quasi-)Synonyms oder einen Link zum entsprechenden Profil in der CCDB.
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="two" style="padding:0px 0px 0px 0px">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="http://uwv.ids-mannheim.de/prepcon/modul2/">
                    <h3 style="display: inline-block;">PREPCON<sup>temporal</sup></h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  Kurzartikel zu temporalen Präposition-Nomen-Verbindungen im Kontext
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">
            Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
            consectetur eligendi ipsa consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            <img src="/img/datatypes/kook/Clusters_amEnde_1_1_KA_oFW_3.png" style="width: 80%;" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
            consectetur eligendi ipsa consequatur!
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <v-row style="margin:-5px 0px 0px 10px">
            <v-col>
              <v-row style="margin:">
                <div class="relink">
                  <a href="http://uwv.ids-mannheim.de/prepcon/modul2/">
                    <h3 style="display: inline-block;">PREPCON<sup>temporal</sup></h3>
                  </a>
                </div>
              </v-row>
              <v-row>
                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                  Kurzartikel zu temporalen Präposition-Nomen-Verbindungen im Kontext
                </p>
              </v-row>
            </v-col>

          </v-row>
          <v-row style="margin:10px 10px 5px 10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
            consectetur eligendi ipsa consequatur!
            <img src="/img/datatypes/kook/Clusters_amEnde_1_1_KA_oFW_3.png" />
          </v-row>
        </v-tabs-window-item>
      </template>
    </compare>
  </div>
</template>