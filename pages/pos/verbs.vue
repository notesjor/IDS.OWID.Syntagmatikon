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
        <!-- NOTE: in Filter werden die Ressourcen angegeben -->
        <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
        <compare :filter="['KoMuX', 'MAP', 'Redeeinleiter', 'Verlaufsformen']">
            <compare-item value="0">
                <div style="text-align: center; width:100%">
                    <NuxtImage src="/img/pos/verbs/verbs_all.png" style="text-align: center;" alt="Beispielgrafik" />
                </div>
            </compare-item>
            <compare-item value="1" rkey="KoMuX">
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
                <p>
                    Informationen zu
                    <r rkey="MAP" />
                    sind noch in Vorbereitung.
                </p>
                <!-- TODO: MAP -->
            </compare-item>
            <compare-item value="3" rkey="Redeeinleiter">
                <p>
                    In
                    <r rkey="Redeeinleiter" /> kann man alle
                    Verben aus dem
                    Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
                </p>
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
                <p>
                    In
                    <r rkey="Verlaufsformen" /> stellt eine
                    Stichwortliste mit
                    über 900 deutschen Verben die primäre Zugriffsstruktur dar. Diese Verben werden in den Einträgen
                    und Belegen
                    immer als Nominalisierungen gebraucht.
                </p>
                <template #explain>
                    <div style="margin-bottom: 20px; width: 100%;">
                        <ul>
                            <li> (am) <m>Abbauen</m>
                            </li>
                            <li> (am) <m>Platzen</m>
                            </li>
                            <li> (beim) <m>Komponieren</m>
                            </li>
                            <li> (beim) <m>Röntgen</m>
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>
        </compare>
    </div>
</template>