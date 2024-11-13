<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/datatypes">
                Zurück zu "Informationstypen"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Narrative Beschreibungen</h1>
    <p>Neben den Korpusdaten nehmen manuell verfasste narrative Kommentare und Beschreibungen einen zentralen Platz in
        nahezu allen Ressourcen des Syntagmatikons ein. Diese erläutern unterschiedliche Aspekte des sprachlichen
        Gebrauchs eines Eintrags. Vor allem sind es:</p>
    <ul>
        <li>Bedeutungsbeschreibungen (in der Lexikografie auch Paraphrasen genannt)</li>
        <li>Beschreibungen von Gebrauchsaspekten</li>
        <li>Beschreibungen von Mustern</li>
    </ul>
    <p>Die Beschreibungsformen reichen von kurzen Etikettierungen (z. B. einer Kernbedeutung) über standardisierte
        lexikografische Paraphrasen bis hin zu mehr oder weniger ausführlichen linguistischen Analysetexten.</p>


    <div>
        <compare>

            <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
            <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
            <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
            <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
            <!-- NOTE: Der Tab kann belieibig benannt werden -->

            <template #headers>
                <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
                <v-tab value="1" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_kon']"></resources-list-compact>
                </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['MAP']"></resources-list-compact></v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['SPRW']"></resources-list-compact></v-tab>
                <v-tab value="4" class="nocaps"><resources-list-compact
                        :filter="['WVBF']"></resources-list-compact></v-tab>
                <v-tab value="5" class="nocaps"><resources-list-compact
                        :filter="['FesteWV']"></resources-list-compact></v-tab>
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

                <compare-item value="1" rkey="PREPCON_kon">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> TODO
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Dummy</div>
                        <div class="exampleImg">
                            <img src="" alt="" />
                        </div>
                        <div class="caption">
                            dummy
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="MAP">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['MAP']"></resources-list-compact> TODO
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Dummy</div>
                        <div class="exampleImg">
                            <img src="" alt="" />
                        </div>
                        <div class="caption">
                            dummy
                        </div>
                    </template>
                </compare-item>

                <compare-item value="3" rkey="SPRW">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['SPRW']"></resources-list-compact> TODO
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Dummy</div>
                        <div class="exampleImg">
                            <img src="" alt="" />
                        </div>
                        <div class="caption">
                            dummy
                        </div>
                    </template>
                </compare-item>

                <compare-item value="4" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['WVBF']"></resources-list-compact> TODO
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Dummy</div>
                        <div class="exampleImg">
                            <img src="" alt="" />
                        </div>
                        <div class="caption">
                            dummy
                        </div>
                    </template>
                </compare-item>

                <compare-item value="5" rkey="FesteWV">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['FesteWV']"></resources-list-compact> TODO
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Dummy</div>
                        <div class="exampleImg">
                            <img src="" alt="" />
                        </div>
                        <div class="caption">
                            dummy
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>
</template>