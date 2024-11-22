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
        <comparex :filter="['KoMuX', 'MAP', 'Redeeinleiter', 'Verlaufsformen']">
            <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
            <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

            <compare-item value="0" :simple="true">

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
                    In
                    <r rkey="KoMuX" /> können Verben
                    neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.

                </p>

                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>Fahr</m>bahn
                            </li>
                            <li>
                                <m>Wohn</m>haus
                            </li>
                            <li>
                                <m>Trink</m>wasser
                            </li>
                            <li>
                                <m>Turn</m>verein
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

            <compare-item value="2" rkey="MAP">

                <!-- TODO: Inhalt ergänzen -->
                <p>
                    Informationen zu
                    <r rkey="MAP" />
                    sind noch in Vorbereitung.
                </p>

                <template #explain>
                </template>
            </compare-item>

            <compare-item value="3" rkey="Redeeinleiter">

                <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                <p>
                    In
                    <r rkey="Redeeinleiter" /> kann man alle
                    Verben aus dem
                    Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
                </p>

                <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                <template #explain>
                    <div>
                        <ul>
                            <li> „Doch, ich muß es berichten“, <m>sagte</m> Marie
                                eifrig.</li>
                            <li>
                                »Kann sein,« <m>lachte</m> der Bursche, »daß das einmal
                                ist gewest.
                            </li>
                            <li>
                                Und es kann auch nicht <m>verschwiegen</m> werden, daß
                                unsre Parlamente gegen diesen undeutschen Geist der Zeit kein genügendes Bollwerk
                                bilden
                            </li>
                            <li>
                                Daß ein moderner Fabrikmensch auf einer geistig höheren Stufe steht wie ein früherer
                                Handwerker, wage ich <m>anzuzweifeln</m>.
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>


            <compare-item value="4" rkey="Verlaufsformen">

                <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                <p>
                    In
                    <r rkey="Verlaufsformen" /> stellt eine
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
                            <li> (am) <m>Abbauen</m></li>
                            <li> (am) <m>Platzen</m></li>
                            <li> (beim) <m>Komponieren</m></li>
                            <li> (beim) <m>Röntgen</m></li>
                        </ul>
                    </div>


                </template>
            </compare-item>
        </comparex>
    </div>
</template>