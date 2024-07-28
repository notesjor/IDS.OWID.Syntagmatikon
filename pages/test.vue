<template>
    <h1>Lorem Ipsum</h1>
    <p>Belege sind vom Lexikografen ausgewählte Textabschnitte auf der Basis
        von automatisch ermittelten <a
            href="http://uwv.ids-mannheim.de/prepcon/infotexte/info.html#kwics"><u>Volltextstellen</u></a>.
        Diese Auswahl ist eine herausfordernde Tätigkeit, da in der oft riesigen
        Anzahl automatischer Volltextstellen diejenigen Belege gefunden werden
        müssen, die die jeweiligen Gebrauchsaspekte treffsicher und anschaulich
        illustrieren. Diese Arbeit kann ein Computer nicht leisten.</p>
    <br />

    <!--
    TODO
    TODO: VueFlow einbinden
    TODO: Graph für alle über VueFlow realisieren
    TODO: Tabs - Liste nach oben. 
    -->

    <div>
        <compare>
            <template #headers>
                <v-tab value="4" class="nocaps">Alle</v-tab>
                <v-tab value="one" class="nocaps">KoMuX</v-tab>
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

                <v-tabs-window-item value="one">
                    <v-row style="margin:-5px 0px 0px 10px">
                        <v-col>
                            <v-row style="margin:">
                                <div class="relink">
                                    <a href="http://uwv.ids-mannheim.de/prepcon/modul2/">
                                        <h3 style="display: inline-block;">PREPCON<sup>abc</sup></h3>
                                    </a>
                                </div>
                            </v-row>
                            <v-row>
                                <p style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </v-row>
                        </v-col>

                    </v-row>
                    <v-row style="margin:10px 10px 5px 10px">
                        <img src="/img/datatypes/kook/amEnde_kookzeilen.PNG" style="width:80%" />
                            Dicta itaque sed unde soluta veniam
                            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
                            consectetur eligendi ipsa consequatur!
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
                        consectetur eligendi ipsa consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
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