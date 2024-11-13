<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/datatypes">
                Zurück zu "Informationstypen"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Kategoriale Label</h1>
    <p>Kategoriale Label etikettieren bestimmte Einheiten oder Strukturen mit linguistischen klassifikatorischen
        Merkmalen. Diese Markierungen dienen der Gruppierung von sprachlichen Einheiten. Sie sind immer Ergebnisse
        qualitativer Interpretation basierend auf spezifischen Modellen. Sie können bereits in den Korpora im
        Hintergrund vorhanden sein (automatisch annotierte Daten) oder im Nachhinein händisch hinzugefügt werden.</p>

    <p>Im <hi>Syntagmatikon</hi> werden Ausdrücke und Syntagmen bezüglich Wortarten, grammatischen Merkmalen,
        semantischen und thematischen Konzepten, pragmatischen Eigenschaften und Relationen untereinander gelabelt.</p>


    <div>
        <compare title="">
            <template #headers>
                <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
                <v-tab value="1" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_kon']"></resources-list-compact> </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['KoMuX']"></resources-list-compact></v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['PhrasKomp']"></resources-list-compact></v-tab>
                <v-tab value="4" class="nocaps"><resources-list-compact
                        :filter="['Redeeinleiter']"></resources-list-compact></v-tab>
                <v-tab value="5" class="nocaps"><resources-list-compact
                        :filter="['Verlaufsformen']"></resources-list-compact></v-tab>
                <v-tab value="6" class="nocaps"><resources-list-compact
                        :filter="['FesteWV']"></resources-list-compact></v-tab>
                <v-tab value="7" class="nocaps"><resources-list-compact
                        :filter="['WVBF']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/dummy/infobox_dummy.png" style="text-align: center;" /> 
                    </div>

                </compare-item>

                <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
                <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
                <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
                <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
                <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

                <compare-item value="1" rkey="PREPCON_kon" webpage="">

                    <p>
                        In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> gibt zum einen
                        Label für die Kernbedeutung einer Präposition-Nomen-Verbindung. Zum anderen werden Lückenfüller
                        in den Musterangaben (Angabe: „Lexikalische Erweiterungen“) nach Wortarten und in einigen Fällen
                        zusätzlich nach semantisch-funktionalen Merkmalen klassifiziert.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/prepcon_kernbedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Kernbedeutung im Eintrag „mit Genugtuung – con satisfacción“
                        </div>


                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/prepcon_wortarten_nachBelieben.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Wortarten im Eintrag „nach Belieben X – a su gusto X“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/prepcon_wortarten_mitGenugtuung.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Wortarten und funktionale Merkmale im Eintrag „mit X Genugtuung – con X
                            satisfacción“
                        </div>
                    </template>

                </compare-item>

                <compare-item value="2" rkey="KoMuX" webpage="">

                    <p>
                        [zu ergänzen]
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                    </template>

                </compare-item>

                <compare-item value="3" rkey="PhrasKomp" webpage="">
                    <p>
                        [zu ergänzen]
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                    </template>
                </compare-item>

                <compare-item value="4" rkey="Redeeinleiter" webpage="">

                    <p>
                        In <resources-list-compact :filter="['Redeeinleiter']"></resources-list-compact> ist, basierend auf den manuellen Annotationen des Redewiedergabe-Korpus, für jeden Redeeinleiter angegeben, ob dieser eine Rede- oder Gedankenwiedergabe einleitet sowie mit welchem Wiedergabetyp (direkt / indirekt), in welcher Position im Syntagma (initial, medial, final) und in welcher Textsorte (fiktional / nicht-fiktional) der Redeeinleiter belegt ist.  
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        <div class="exampleImg">
                         <img src="/img/datatypes/categories/rede_freq.png" width="70%" alt="" />
            </div>
            <div class="caption">
                Die Attribute der Belege, in denen der Redeeinleiter „sagen“ belegt ist. 
            </div>
                    </template>

                </compare-item>

                <compare-item value="5" rkey="Verlaufsformen" webpage="">

                    <p>
                        [zu ergänzen]
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                    </template>

                </compare-item>

                <compare-item value="6" rkey="FesteWV" webpage="">

                    <p>
                        In <resources-list-compact :filter="['FesteWV']"></resources-list-compact> in OWID, Rubrik „25 Musterartikel“, werden die Stichwörter nach Phrasenkategorie und Mehrwortkategorie (nach Fleischer 1997; Burger 2015) klassifiziert.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        
                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/festeWV_klassif.png" alt="" />
                        </div>
                        <div class="caption">
                            Kategoriale Label für den Mehrworteintrag  „frank und frei“
                        </div>

                    </template>

                </compare-item>

                <compare-item value="7" rkey="WVBF" webpage="">

                    <p>
                        Im <resources-list-compact :filter="['WVBF']"></resources-list-compact> werden Lückenfüller für Slots in den GRUND-Mustern klassifiziert, sowohl nach Wortarten u/o Phrasen als auch nach semantischen und/oder funktionalen Merkmalen (s. Steyer 2013).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/wvGrund_Netz.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Wortarten der X-Füller im Hauptknoten „aus GRUND“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/wvGrund_Fueller.png" alt="" />
                        </div>
                        <div class="caption">
                            Semantische Kategorisierung für Adjektiv-Füller im Subknoten „aus ADJ Gründen“
                        </div>

                    </template>

                </compare-item>



            </template>
        </compare>
    </div>

</template>
