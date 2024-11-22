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
        props.title = 'Adjektive';
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
                <v-tab value="1" class="nocaps"><r rkey="KoMuX"/>
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
                        In <r rkey="KoMuX"/> können Adjektive
                        neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><m>Klein</m>kind</li>
                                <li><m>Blau</m>licht</li>
                                <li><m>Top</m>-spiel</li>
                                <li><m>Billig</m>kraft</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="FesteWV">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <r rkey="FesteWV"/> bilden folgende
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
                                <li> (sich) <m>blind</m> (und taub stellen)</li>
                                <li> <m>geistiger</m> (Vater)</li>
                                <li> (auf) <m>gesunden</m> (Beinen stehen)</li>
                                <li> (der ganz) <m>normale</m> (Wahnsinn)</li>
                                <li> (Ruhe) <m>sanft</m></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>
</template>