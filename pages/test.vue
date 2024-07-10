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
    <div>
        <compare>
            <template #headers>
                <v-tab value="one">KoMuX</v-tab>
                <v-tab value="two">Sprichwörterbuch</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </template>
            <template #tabs>
                <v-tabs-window-item value="one">
                    <v-row>
                        <v-col cols="4" style="padding:20px">
                            <v-row><div class="relink"><a href="http://uwv.ids-mannheim.de/prepcon/modul2/"><h3 style="display: inline-block;">PREPCON<sup>abc</sup></h3></a></div></v-row>
                            <v-row><p style="color:darkgray; font-size: 0.8em; font-style: italic;">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></v-row>
                            <v-row><img src="/img/sources/prepcon_kon.PNG" alt=""></v-row>
                        </v-col>
                        <v-col cols="8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
                            consectetur eligendi ipsa consequatur!
                            <img src="/img/datatypes/kook/amEnde_kookzeilen.PNG" />
                            Dicta itaque sed unde soluta veniam
                            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
                            consectetur eligendi ipsa consequatur!
                        </v-col>
                    </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="two" style="padding:0px 0px 0px 0px">
                    <v-row>
                        <v-col cols="4" style="padding:20px">
                            <v-row><div class="relink"><a href="http://uwv.ids-mannheim.de/prepcon/modul2/"><h3 style="display: inline-block;">PREPCON<sup>temporal</sup></h3></a></div></v-row>
                            <v-row><p style="color:darkgray; font-size: 0.8em; font-style: italic;">Kurzartikel zu temporalen Präposition-Nomen-Verbindungen im Kontext</p></v-row>
                            <v-row><img src="/img/sources/prepcon_temp.PNG" alt=""></v-row>
                        </v-col>
                        <v-col cols="8">
                            <img src="/img/datatypes/kook/Clusters_amEnde_1_1_KA_oFW_3.png" />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
                            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
                            consectetur eligendi ipsa consequatur!
                        </v-col>
                    </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="three">
                    <v-row>
                        <v-col cols="4" style="padding:20px">
                            <v-row><div class="relink"><a href="http://uwv.ids-mannheim.de/prepcon/modul2/"><h3 style="display: inline-block;">PREPCON<sup>temporal</sup></h3></a></div></v-row>
                            <v-row><p style="color:darkgray; font-size: 0.8em; font-style: italic;">Kurzartikel zu temporalen Präposition-Nomen-Verbindungen im Kontext</p></v-row>
                            <v-row><img src="/img/sources/prepcon_temp.PNG" alt=""></v-row>
                        </v-col>
                        <v-col cols="8">                            
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
                            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
                            consectetur eligendi ipsa consequatur!
                            <img src="/img/datatypes/kook/Clusters_amEnde_1_1_KA_oFW_3.png" />
                        </v-col>
                    </v-row>
                </v-tabs-window-item>
            </template>
        </compare>
    </div>
</template>