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
        <!-- NOTE: in Filter werden die Ressourcen angegeben -->
        <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
        <compare :filter="['KoMuX', 'MAP', 'PhrasKomp', 'Redeeinleiter', 'WVBF', 'FesteWV', 'DTWW']">
            <compare-item value="0">
                <div style="text-align: center; width:100%">
                    <NuxtImg src="/img/pos/phrasemes/phrasemes_all.png" style="text-align: center;" />
                </div>
            </compare-item>

            <compare-item value="1" rkey="KoMuX">
                <p>
                    In
                    <r rkey="KoMuX" /> können Phraseme neben
                    anderen Wort- und Ausdrucksarten als Erstglied fungieren. Sie werden in dieser Ressource über
                    das Label ‚Phrase‘ erfasst, das auf ein syntaktisches Phrasenmodell in Hein 2015 zurückgeht. Im
                    Gegensatz zu allen anderen Wort- und Ausdrucksarten wurde das Label ‚Phrase‘ aber nicht
                    automatisch zugewiesen, sondern manuell nachannotiert.
                </p>

                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>Friede-Freude-Eierkuchen</m>-Stimmung
                            </li>
                            <li>
                                <m>Erste-Hilfe</m>-Lehrgang
                            </li>
                            <li>
                                <m>Zwischen-den-Jahren</m>-Feier
                            </li>
                            <li>
                                <m>Last-Minute</m>-Tipp
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

            <compare-item value="3" rkey="PhrasKomp">
                <p>
                    In
                    <r rkey="PhrasKomp" />
                    können Phraseme, neben festen Sätzen, als Erstglied fungieren. Alternativ zu dieser
                    phraseologischen Perspektive
                    können die Erstglieder von Phrasenkomposita auch unter einer syntaktischen Perspektive, d.h. als
                    Phrasen und
                    Sätze, klassifiziert werden.
                </p>

                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>Pleiten-Pech-und-Pannen</m>-Woche
                            </li>
                            <li>
                                <m>Working-Class</m>-Junge
                            </li>
                            <li>
                                <m>"Sex and the City"</m>-Mädchen
                            </li>
                            <li>
                                <m>"Zu mir oder zu dir"</m>-Gequatsche
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

            <compare-item value="4" rkey="Redeeinleiter">
                <p>
                    In
                    <r rkey="Redeeinleiter" /> kann man alle
                    Phraseme aus dem
                    Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
                </p>
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
                <p>
                    In
                    <r rkey="WVBF" /> haben lexikalisierte
                    Wortverbindungen
                    mit PRÄPOSITION + GRUND den Status von Phrasem-Knoten.
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>aus welchen Gründen auch immer</m>
                            </li>
                            <li>
                                <m>im Grunde genommen</m>
                            </li>
                            <li>
                                <m>mit gutem Grund</m>
                            </li>
                            <li>
                                <m>nicht ohne Grund</m>
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

            <compare-item value="6" rkey="FesteWV">
                <p>
                    <r rkey="FesteWV" /> bilden in der Rubrik
                    ‚Musterartikel‘
                    Phraseme die Stichwortliste.
                </p>
                <p>
                    In der Rubrik „Wortverbindungen mit Adjektiven“ bilden Phraseme den zweiten Zugang (neben
                    Adjektiven) in Form
                    einer Stichwortliste.
                </p>

                <template #explain>
                    <div class="exampleHeadline">Rubrik „Musterartikel“</div>
                    <div style="width: 100%; margin-bottom: 20px;">
                        <ul>
                            <li>
                                <m>an die große Glocke hängen</m>
                            </li>
                            <li>
                                <m>Dienst nach Vorschrift</m>
                            </li>
                            <li>
                                <m>das Rad neu erfinden</m>
                            </li>
                            <li>
                                <m>Stich ins Wespennest</m>
                            </li>
                        </ul>
                    </div>
                    <div class="exampleHeadline">Rubrik „Wortverbindungen mit Adjektiven“</div>
                    <div style="width: 100%;">
                        <ul>
                            <li>
                                <m>blinder Alarm</m>
                            </li>
                            <li>
                                <m>geistiger Vater</m>
                            </li>
                            <li>
                                <m>gesunder Menschenverstand</m>
                            </li>
                            <li>
                                <m>sanfter Druck</m>
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

            <compare-item value="7" rkey="DTWW">
                <p>
                    In
                    <r rkey="DTWW" /> sind neben Nomina und
                    Komposita auch
                    deutsche Phraseme in der Domäne Wirtschaft und ihre türkischen Entsprechungen aufgeführt.
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>ab Werk</m>
                            </li>
                            <li>
                                <m>Elastizität der Nachfrage</m>
                            </li>
                            <li>
                                <m>schwarze Zahlen schreiben</m>
                            </li>
                            <li>
                                <m>Sparen am falschen Ende</m>
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>
        </compare>
    </div>

</template>