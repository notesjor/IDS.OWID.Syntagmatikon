<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/pos">
                Zurück zu "Wort- und Ausdrucksarten"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Präpositionen</h1>
    <div>
        <compare title="">

            <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
            <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
            <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
            <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
            <!-- NOTE: Der Tab kann belieibig benannt werden -->

            <template #headers>
                <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
                <v-tab value="1" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_ex']"></resources-list-compact>
                </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_temp']"></resources-list-compact></v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
                <v-tab value="4" class="nocaps"><resources-list-compact
                        :filter="['KoMuX']"></resources-list-compact></v-tab>
                <v-tab value="5" class="nocaps"><resources-list-compact
                        :filter="['MAP']"></resources-list-compact></v-tab>
                <v-tab value="6" class="nocaps"><resources-list-compact
                        :filter="['Verlaufsformen']"></resources-list-compact></v-tab>
                <v-tab value="7" class="nocaps"><resources-list-compact
                        :filter="['WVBF']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/pos/prepositions/prepositions_all.png" style="text-align: center;" />
                    </div>

                </compare-item>

                <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
                <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
                <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
                <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
                <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

                <compare-item value="1" rkey="PREPCON_ex">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact> bietet einen
                        gesonderten Zugang über Präpositionen-Tabellen (insgesamt 80 Präpositionen).
                    </p>
                    <!-- <div class="exampleImg">
                        <img src="/img/pos/prepositions/prepcon_ex_zugriff_big.png" alt="" />
                    </div>
                    <div class="caption">Zugriff über die 'Präpositions-Perspektive' auf Verbindungen mit der
                        Präposition <em>am</em></div> -->

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <span class="pos_highlight">vor</span> (Ort)</li>
                                <li> <span class="pos_highlight">hinter</span> (Glas)</li>
                                <li> <span class="pos_highlight">durch</span> (Zufall)</li>
                                <li> <span class="pos_highlight">auf</span> (Anfrage)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="PREPCON_temp">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact> kann man ein
                        Inventar von
                        Präposition-Nomen-Verbindungen anhand einer Präpositionen-Stichwortliste abrufen.
                    </p>
                    <!-- <div class="exampleImg">
                        <img src="/img/pos/prepositions/prepcon_temp_zugriff_artikel_big.png" alt="" />
                    </div>
                    <div class="caption">Zugriff über die Präpositionen-Stichwortliste</div> -->

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <span class="pos_highlight">am</span> (Ende)</li>
                                <li> <span class="pos_highlight">für</span> (Jahre)</li>
                                <li> <span class="pos_highlight">im</span> (Augenblick)</li>
                                <li> <span class="pos_highlight">vor</span> (Urzeiten)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="3" rkey="PREPCON_kon">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> bilden vier
                        Präpositionen in
                        Verbindung mit Nomina den Ausgangspunkt für die kontrastive Beschreibung deutsch – spanisch;
                        deutsch –
                        slowakisch.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <span class="pos_highlight">am</span> (Anfang) - <span
                                        class="pos_highlight">al</span> (principio) - <span
                                        class="pos_highlight">na</span> (začiatku)</li>
                                <li> <span class="pos_highlight">auf</span> (Anhieb) - <span
                                        class="pos_highlight">de</span> (inmediato) - <span
                                        class="pos_highlight">na</span> (prvý pokus)</li>
                                <li>
                                    <span class="pos_highlight">mit</span> (Genugtuung) - <span
                                        class="pos_highlight">con</span> (satisfacción) - <span
                                        class="pos_highlight">so</span> (zadosťučinením)
                                </li>
                                <li>
                                    <span class="pos_highlight">nach</span> (Belieben) - <span
                                        class="pos_highlight">a</span> (su gusto) - <span
                                        class="pos_highlight">podľa</span> (ľubovôle)
                                </li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="4" rkey="KoMuX">
                    <p>
                        In <resources-list-compact :filter="['KoMuX']"></resources-list-compact>
                        können Präpositionen
                        neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><span class="pos_highlight">Mit</span>-Juror</li>
                                <li><span class="pos_highlight">Mit</span>Drehbuchautor</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="5" rkey="MAP">
                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        Informationen zu <resources-list-compact :filter="['MAP']"></resources-list-compact>
                        sind noch in Vorbereitung.
                    </p>

                    <template #explain>
                    </template>
                </compare-item>


                <compare-item value="6" rkey="Verlaufsformen">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['Verlaufsformen']"></resources-list-compact> werden
                        deutsche Verben neben
                        dem Absentiv hinsichtlich ihres Vorkommens in zwei Verlaufsformen mit Präpositionen dargestellt:
                        am-Progressiv
                        und beim-Verlaufsform.


                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <span class="pos_highlight">am</span> (Feiern)</li>
                                <li> <span class="pos_highlight">am</span> (Kippen)</li>
                                <li> <span class="pos_highlight">beim</span> (Abbauen)</li>
                                <li> <span class="pos_highlight">beim</span> (Jäten)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="7" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['WVBF']"></resources-list-compact> entfaltet sich ein
                        WV-Netz um das
                        Bezugslemma GRUND anhand der Präpositionen <em>aus; auf; im; mit; ohne</em>.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <span class="pos_highlight">aus</span> (welchen Gründen auch immer)</li>
                                <li> <span class="pos_highlight">mit</span> (Grund)</li>
                                <li> <span class="pos_highlight">im</span> (Grunde PRON SUB)</li>
                                <li> <span class="pos_highlight">ohne</span> (SUB von Gründen)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>
</template>