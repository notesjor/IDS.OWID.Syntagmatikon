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
        props.title = 'Phraseme';
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
                <v-tab value="1" class="nocaps"><tag rkey="KoMuX"/>
                </v-tab>
                <v-tab value="2" class="nocaps"><tag rkey="MAP"/>
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
                        In <tag rkey="KoMuX"/> können Phraseme neben
                        anderen Wort- und Ausdrucksarten als Erstglied fungieren. Sie werden in dieser Ressource über
                        das Label ‚Phrase‘ erfasst, das auf ein syntaktisches Phrasenmodell in Hein 2015 zurückgeht. Im
                        Gegensatz zu allen anderen Wort- und Ausdrucksarten wurde das Label ‚Phrase‘ aber nicht
                        automatisch zugewiesen, sondern manuell nachannotiert.
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><m>Friede-Freude-Eierkuchen</m>-Stimmung</li>
                                <li><m>Erste-Hilfe</m>-Lehrgang</li>
                                <li><m>Zwischen-den-Jahren</m>-Feier</li>
                                <li><m>Last-Minute</m>-Tipp</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="2" rkey="MAP">

                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        Informationen zu <tag rkey="MAP"/>
                        sind noch in Vorbereitung.
                    </p>

                    <template #explain>
                    </template>
                </compare-item>

                <compare-item value="3" rkey="PhrasKomp">
                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        In <tag rkey="PhrasKomp"/>
                        können Phraseme, neben festen Sätzen, als Erstglied fungieren. Alternativ zu dieser
                        phraseologischen Perspektive
                        können die Erstglieder von Phrasenkomposita auch unter einer syntaktischen Perspektive, d.h. als
                        Phrasen und
                        Sätze, klassifiziert werden.
                    </p>

                    <template #explain>
                        <div>
                            <ul>
                                <li><m>Pleiten-Pech-und-Pannen</m>-Woche</li>
                                <li><m>Working-Class</m>-Junge</li>
                                <li><m>"Sex and the City"</m>-Mädchen</li>
                                <li><m>"Zu mir oder zu dir"</m>-Gequatsche</li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

                <compare-item value="4" rkey="Redeeinleiter">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <tag rkey="Redeeinleiter"/> kann man alle
                        Phraseme aus dem
                        Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li>...insbesondere was davon seine eigene Person betrifft, <m>macht</m> der Prinz <m>kein
                                        Hehl daraus</m>, daß er die frohe Hoffnung hege...</li>
                                <li>»Erlauben Sie!« <m>fiel</m> ihm Salmeyer <m>ins Wort</m>.</li>
                                <li>...plötzlich <m>kommt</m> mir <m>in den Sinn</m>: »Wenn er selbst der Engel war...</li>
                                <li>Es läßt sich gar nicht <m>in Abrede stellen</m>, daß
                                    dieses Uebereinkommen aus zwei Gesichtspuncten bedenklich erscheinen muß.</li>

                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="5" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <tag rkey="WVBF"/> haben lexikalisierte
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
                                <li> <m>aus welchen Gründen auch immer</m></li>
                                <li> <m>im Grunde genommen</m></li>
                                <li> <m>mit gutem Grund</m></li>
                                <li> <m>nicht ohne Grund</m></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="6" rkey="FesteWV">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <tag rkey="FesteWV"/> bilden in der Rubrik
                        ‚Musterartikel‘
                        Phraseme die Stichwortliste.
                    </p>

                    <!-- 
                    <div class="exampleImg">
                        <img src="/img/pos/phrasemes/festeWV_mixed.png" alt="" />
                    </div>
                    <div class="caption">Zugriff auf die Musterartikel</div> -->

                    <p>
                        In der Rubrik „Wortverbindungen mit Adjektiven“ bilden Phraseme den zweiten Zugang (neben
                        Adjektiven) in Form
                        einer Stichwortliste.
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
                                <li> <m>billiger Jakob</m></li>
                                <li> <m>eigen Fleisch und Blut</m></li>
                                <li> <m>im eigenen Saft schmoren</m></li>
                                <li> <m>recht und billig</m></li>
                            </ul>
                        </div>
                        <div class="exampleHeadline">Rubrik „Wortverbindungen mit Adjektiven“</div>
                        <div style="width: 100%;">
                            <ul>
                                <li> <m>sich blind verstehen</m></li>
                                <li> <m>im Vollbesitz seiner geistigen Kräfte</m></li>
                                <li> <m>gesund und munter</m></li>
                                <li> <m>jeder halbwegs normale Mensch</m></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>


                <compare-item value="7" rkey="DTWW">
                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <tag rkey="DTWW"/> sind neben Nomina und
                        Komposita auch
                        deutsche Phraseme in der Domäne Wirtschaft und ihre türkischen Entsprechungen aufgeführt.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div>
                            <ul>
                                <li> <m>ab Werk</m></li>
                                <li> <m>Elastizität der Nachfrage</m></li>
                                <li> <m>schwarze Zahlen schreiben</m></li>
                                <li> <m>Sparen am falschen Ende</m></li>
                            </ul>
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>

</template>