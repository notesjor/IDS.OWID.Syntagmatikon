<script setup>
definePageMeta({
    layout: "subpage",
})
</script>
<script>
import { useLayoutStore } from '~/stores/layout';
export default {
    mounted() {
        const props = useLayoutStore();
        props.title = 'Präpositionen';
        props.parent = 'Wort- und Ausdrucksarten';
    },
}
</script>

<template>
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
                        <r rkey="PREPCON_ex"/> bietet einen
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
                                <li> <m>vor</m> (Ort)</li>
                                <li> <m>hinter</m> (Glas)</li>
                                <li> <m>durch</m> (Zufall)</li>
                                <li> <m>auf</m> (Anfrage)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="PREPCON_temp">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <r rkey="PREPCON_temp"/> kann man ein
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
                                <li> <m>am</m> (Ende)</li>
                                <li> <m>für</m> (Jahre)</li>
                                <li> <m>im</m> (Augenblick)</li>
                                <li> <m>vor</m> (Urzeiten)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="3" rkey="PREPCON_kon">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <r rkey="PREPCON_kon"/> bilden vier
                        Präpositionen in
                        Verbindung mit Nomina den Ausgangspunkt für die kontrastive Beschreibung deutsch – spanisch;
                        deutsch –
                        slowakisch.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <m>am</m> (Anfang) - <m>al</m> (principio) - <m>na</m> (začiatku)</li>
                                <li> <m>auf</m> (Anhieb) - <m>de</m> (inmediato) - <m>na</m> (prvý pokus)</li>
                                <li>
                                    <m>mit</m> (Genugtuung) - <m>con</m> (satisfacción) - <m>so</m> (zadosťučinením)
                                </li>
                                <li>
                                    <m>nach</m> (Belieben) - <m>a</m> (su gusto) - <m>podľa</m> (ľubovôle)
                                </li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="4" rkey="KoMuX">
                    <p>
                        In <r rkey="KoMuX"/>
                        können Präpositionen
                        neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><m>Mit</m>-Juror</li>
                                <li><m>Mit</m>Drehbuchautor</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="5" rkey="MAP">
                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        Informationen zu <r rkey="MAP"/>
                        sind noch in Vorbereitung.
                    </p>

                    <template #explain>
                    </template>
                </compare-item>


                <compare-item value="6" rkey="Verlaufsformen">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <r rkey="Verlaufsformen"/> werden
                        deutsche Verben neben
                        dem Absentiv hinsichtlich ihres Vorkommens in zwei Verlaufsformen mit Präpositionen dargestellt:
                        am-Progressiv
                        und beim-Verlaufsform.


                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <m>am</m> (Feiern)</li>
                                <li> <m>am</m> (Kippen)</li>
                                <li> <m>beim</m> (Abbauen)</li>
                                <li> <m>beim</m> (Jäten)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="7" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <r rkey="WVBF"/> entfaltet sich ein
                        WV-Netz um das
                        Bezugslemma GRUND anhand der Präpositionen <em>aus; auf; im; mit; ohne</em>.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <m>aus</m> (welchen Gründen auch immer)</li>
                                <li> <m>mit</m> (Grund)</li>
                                <li> <m>im</m> (Grunde PRON SUB)</li>
                                <li> <m>ohne</m> (SUB von Gründen)</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>
</template>