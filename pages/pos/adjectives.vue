<template>
    <v-btn>
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
    </v-btn>

    <h1>Adjektive</h1>
    <div>
        <compare title="">

            <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
            <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
            <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
            <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
            <!-- NOTE: Der Tab kann belieibig benannt werden -->

            <template #headers>
                <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
                <v-tab value="1" class="nocaps"><resources-list-compact :filter="['KoMuX']"></resources-list-compact>
                </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['FesteWV']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/pos/adjectives/adjectives_all.png" style="text-align: center;" />
                    </div>

                </compare-item>

                <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
                <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
                <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
                <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
                <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

                <compare-item value="1" rkey="KoMuX">
                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        In <resources-list-compact :filter="['KoMuX']"></resources-list-compact> können Adjektive
                        neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><span class="pos_highlight">Klein</span>kind</li>
                                <li><span class="pos_highlight">Blau</span>licht</li>
                                <li><span class="pos_highlight">Top</span>-spiel</li>
                                <li><span class="pos_highlight">Billig</span>kraft</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="FesteWV">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['FesteWV']"></resources-list-compact> bilden folgende
                        Adjektive die
                        Kernkomponente für die Stichwortliste: <em>blind; geistig; gesund; normal; sanft</em>.
                    </p>
                    <!-- <div class="exampleImg">
                        <img src="/img/pos/adjectives/festeWV.png" alt="" />
                    </div>
                    <div class="caption">Zugriff über die Adjektiv-Stichwortliste</div> -->


                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> (sich) <span class="pos_highlight">blind</span> (und taub stellen)</li>
                                <li> <span class="pos_highlight">geistiger</span> (Vater)</li>
                                <li> (auf) <span class="pos_highlight">gesunden</span> (Beinen stehen)</li>
                                <li> (der ganz) <span class="pos_highlight">normale</span> (Wahnsinn)</li>
                                <li> (Ruhe) <span class="pos_highlight">sanft</span></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>
</template>