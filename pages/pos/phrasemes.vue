<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/pos">
                Zurück zu "Wort- und Ausdrucksarten"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Phraseme</h1>
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
                <v-tab value="2" class="nocaps"><resources-list-compact :filter="['MAP']"></resources-list-compact>
                </v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['PhrasKomp']"></resources-list-compact></v-tab>
                <v-tab value="4" class="nocaps"><resources-list-compact
                        :filter="['Redeeinleiter']"></resources-list-compact></v-tab>
                <v-tab value="5" class="nocaps"><resources-list-compact
                        :filter="['WVBF']"></resources-list-compact></v-tab>
                <v-tab value="6" class="nocaps"><resources-list-compact
                        :filter="['FesteWV']"></resources-list-compact></v-tab>
                <v-tab value="7" class="nocaps"><resources-list-compact
                        :filter="['DTWW']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/pos/phrasemes/phrasemes_all.png" style="text-align: center;" />
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
                        In <resources-list-compact :filter="['KoMuX']"></resources-list-compact> können Phraseme neben anderen Wort- und Ausdrucksarten als Erstglied fungieren. Sie werden in dieser Ressource über das Label ‚Phrase‘ erfasst, das auf ein syntaktisches Phrasenmodell in Hein 2015 zurückgeht. Im Gegensatz zu allen anderen Wort- und Ausdrucksarten wurde das Label ‚Phrase‘ aber nicht automatisch zugewiesen, sondern manuell nachannotiert. 
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><span class="pos_highlight">Friede-Freude-Eierkuchen</span>-Stimmung</li>
                                <li><span class="pos_highlight">Erste-Hilfe</span>-Lehrgang</li>
                                <li><span class="pos_highlight">Zwischen-den-Jahren</span>-Feier</li>
                                <li><span class="pos_highlight">Last-Minute</span>-Tipp</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="2" rkey="MAP">

                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        Informationen zu <resources-list-compact :filter="['MAP']"></resources-list-compact>
                        sind noch in Vorbereitung.
                    </p>

                    <template #explain>
                    </template>
                </compare-item>

                <compare-item value="3" rkey="PhrasKomp">
                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        In <resources-list-compact :filter="['PhrasKomp']"></resources-list-compact>
                        können Phraseme, neben festen Sätzen, als Erstglied fungieren. Alternativ zu dieser phraseologischen Perspektive können die Erstglieder von Phrasenkomposita auch unter einer syntaktischen Perspektive, d.h. als Phrasen und Sätze, klassifiziert werden. 
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><span class="pos_highlight">Pleiten-Pech-und-Pannen</span>-Woche</li>
                                <li><span class="pos_highlight">Working-Class</span>-Junge</li>
                                <li><span class="pos_highlight">"Sex and the City"</span>-Mädchen</li>
                                <li><span class="pos_highlight">"Zu mir oder zu dir"</span>-Gequatsche</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="4" rkey="Redeeinleiter">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['Redeeinleiter']"></resources-list-compact> kann man alle
                        Phraseme aus dem
                        Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li>...insbesondere was davon seine eigene Person betrifft, <span
                                        class="pos_highlight">macht</span> der Prinz <span class="pos_highlight">kein
                                        Hehl daraus</span>, daß er die frohe Hoffnung hege...</li>
                                <li>»Erlauben Sie!« <span class="pos_highlight">fiel</span> ihm Salmeyer <span
                                        class="pos_highlight">ins Wort</span>.</li>
                                <li>...plötzlich <span class="pos_highlight">kommt</span> mir <span
                                        class="pos_highlight">in den Sinn</span>: »Wenn er selbst der Engel war...</li>
                                <li>Es läßt sich gar nicht <span class="pos_highlight">in Abrede stellen</span>, daß
                                    dieses Uebereinkommen aus zwei Gesichtspuncten bedenklich erscheinen muß.</li>

                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="5" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['WVBF']"></resources-list-compact> haben lexikalisierte
                        Wortverbindungen
                        mit PRÄPOSITION + GRUND den Status von Phrasem-Knoten.
                    </p>
                    <!-- <div class="exampleImg">
                        <img src="/img/pos/phrasemes/wvGrund_zugriff.png" alt="" />
                    </div>
                    <div class="caption">Zugriff über Phrasem-Knoten in der Struktur Wortverbindungsfeldes</div> -->

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <span class="pos_highlight">aus welchen Gründen auch immer</span></li>
                                <li> <span class="pos_highlight">im Grunde genommen</span></li>
                                <li> <span class="pos_highlight">mit gutem Grund</span></li>
                                <li> <span class="pos_highlight">nicht ohne Grund</span></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="6" rkey="FesteWV">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['FesteWV']"></resources-list-compact> bilden in der Rubrik
                        ‚Musterartikel‘
                        Phraseme die Stichwortliste.
                    </p>

                    <!-- 
                    <div class="exampleImg">
                        <img src="/img/pos/phrasemes/festeWV_mixed.png" alt="" />
                    </div>
                    <div class="caption">Zugriff auf die Musterartikel</div> -->

                    <p>
                        In der Rubrik „Wortverbindungen mit Adjektiven“ bilden Phraseme den zweiten Zugang (neben Adjektiven) in Form einer Stichwortliste.  
                    </p>

                    <!--
                    <div class="exampleImg">
                        <img src="/img/pos/phrasemes/festeWV_adjectives.png" alt="" />
                    </div>
                    <div class="caption">Zugriff auf die „Wortverbindungen mit Adjektiven“</div> -->


                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Rubrik „Musterartikel“</div>
                        <div style="width: 100%; margin-bottom: 20px;">
                            <ul>
                                <li> <span class="pos_highlight">billiger Jakob</span></li>
                                <li> <span class="pos_highlight">eigen Fleisch und Blut</span></li>
                                <li> <span class="pos_highlight">im eigenen Saft schmoren</span></li>
                                <li> <span class="pos_highlight">recht und billig</span></li>
                            </ul>
                        </div>
                        <div class="exampleHeadline">Rubrik „Wortverbindungen mit Adjektiven“</div>
                        <div style="width: 100%;">
                            <ul>
                                <li> <span class="pos_highlight">sich blind verstehen</span></li>
                                <li> <span class="pos_highlight">im Vollbesitz seiner geistigen Kräfte</span></li>
                                <li> <span class="pos_highlight">gesund und munter</span></li>
                                <li> <span class="pos_highlight">jeder halbwegs normale Mensch</span></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="7" rkey="DTWW">
                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['DTWW']"></resources-list-compact> sind neben Nomina und
                        Komposita auch
                        deutsche Phraseme in der Domäne Wirtschaft und ihre türkischen Entsprechungen aufgeführt.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <span class="pos_highlight">ab Werk</span></li>
                                <li> <span class="pos_highlight">Elastizität der Nachfrage</span></li>
                                <li> <span class="pos_highlight">schwarze Zahlen schreiben</span></li>
                                <li> <span class="pos_highlight">Sparen am falschen Ende</span></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>

</template>