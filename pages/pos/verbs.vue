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
        props.title = 'Verben';
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
                <v-tab value="1" class="nocaps"><resources-list-compact :filter="['KoMuX']"></resources-list-compact>
                </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['MAP']"></resources-list-compact></v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['Redeeinleiter']"></resources-list-compact></v-tab>
                <v-tab value="4" class="nocaps"><resources-list-compact
                        :filter="['Verlaufsformen']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/pos/verbs/verbs_all.png" style="text-align: center;" />
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
                        In <resources-list-compact :filter="['KoMuX']"></resources-list-compact> können Verben
                        neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.

                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li>
                                    <span class="pos_highlight">Fahr</span>bahn
                                </li>
                                <li>
                                    <span class="pos_highlight">Wohn</span>haus
                                </li>
                                <li>
                                    <span class="pos_highlight">Trink</span>wasser
                                </li>
                                <li>
                                    <span class="pos_highlight">Turn</span>verein
                                </li>
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

                <compare-item value="3" rkey="Redeeinleiter">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['Redeeinleiter']"></resources-list-compact> kann man alle
                        Verben aus dem
                        Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> „Doch, ich muß es berichten“, <span class="pos_highlight">sagte</span> Marie
                                    eifrig.</li>
                                <li>
                                    »Kann sein,« <span class="pos_highlight">lachte</span> der Bursche, »daß das einmal
                                    ist gewest.
                                </li>
                                <li>
                                    Und es kann auch nicht <span class="pos_highlight">verschwiegen</span> werden, daß
                                    unsre Parlamente gegen diesen undeutschen Geist der Zeit kein genügendes Bollwerk
                                    bilden
                                </li>
                                <li>
                                    Daß ein moderner Fabrikmensch auf einer geistig höheren Stufe steht wie ein früherer
                                    Handwerker, wage ich <span class="pos_highlight">anzuzweifeln</span>.
                                </li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="4" rkey="Verlaufsformen">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['Verlaufsformen']"></resources-list-compact> stellt eine
                        Stichwortliste mit
                        über 900 deutschen Verben die primäre Zugriffsstruktur dar. Diese Verben werden in den Einträgen
                        und Belegen
                        immer als Nominalisierungen gebraucht.
                    </p>
                    <!-- <div class="exampleImg">
                        <img src="/img/pos/verbs/verben_verlaufsformen.png" alt="" />
                    </div>
                    <div class="caption">
                        Ausschnitt aus der Stichwortliste
                    </div> -->


                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div style="margin-bottom: 20px; width: 100%;">
                            <ul>
                                <li> (am) <span class="pos_highlight">Abbauen</span></li>
                                <li> (am) <span class="pos_highlight">Platzen</span></li>
                                <li> (beim) <span class="pos_highlight">Komponieren</span></li>
                                <li> (beim) <span class="pos_highlight">Röntgen</span></li>
                            </ul>
                        </div>


                    </template>
                </compare-item>
            </template>
        </compare>
    </div>
</template>