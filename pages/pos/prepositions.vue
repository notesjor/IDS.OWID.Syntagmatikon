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
        <!-- NOTE: in Filter werden die Ressourcen angegeben -->
        <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
        <compare :filter="['PREPCON_ex', 'PREPCON_temp_inv', 'PREPCON_temp_art', 'PREPCON_kon', 'KoMuX', 'MAP', 'Verlaufsformen', 'WVBF']">
            <compare-item value="0">
                <div style="text-align: center; width:100%">
                    <NuxtImage src="/img/pos/prepositions/prepositions_all.png" style="text-align: center;"
                        alt="Beispielgrafik" />
                </div>
            </compare-item>

            <compare-item value="1" rkey="PREPCON_ex">
                <p>
                    <r rkey="PREPCON_ex" /> bietet einen
                    gesonderten Zugang über Präpositionen-Tabellen (insgesamt 80 Präpositionen).
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>vor</m> (Ort)
                            </li>
                            <li>
                                <m>hinter</m> (Glas)
                            </li>
                            <li>
                                <m>durch</m> (Zufall)
                            </li>
                            <li>
                                <m>auf</m> (Anfrage)
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

             <compare-item value="2" rkey="PREPCON_temp_inv">
                <p>
                    In
                    <r rkey="PREPCON_temp_inv" /> kann man ein
                    Inventar von
                    Präposition-Nomen-Verbindungen anhand einer Präpositionen-Stichwortliste abrufen.
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>ab</m> (Mittag)
                            </li>
                            <li>
                                <m>an</m> (Wochenenden)
                            </li>
                            <li>
                                <m>bis</m> (Ostern)
                            </li>
                            <li>
                                <m>nach</m> (Sonnenuntergang)
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

            <compare-item value="2" rkey="PREPCON_temp_art">
                <p>
                    In
                    <r rkey="PREPCON_temp_art" /> kann man
                    Artikel zu
                    Präposition-Nomen-Verbindungen anhand einer Präpositionen-Stichwortliste abrufen.
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>am</m> (Ende)
                            </li>
                            <li>
                                <m>für</m> (Jahre)
                            </li>
                            <li>
                                <m>im</m> (Augenblick)
                            </li>
                            <li>
                                <m>vor</m> (Urzeiten)
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

            <compare-item value="3" rkey="PREPCON_kon">
                <p>
                    In
                    <r rkey="PREPCON_kon" /> bilden vier
                    Präpositionen in
                    Verbindung mit Nomina den Ausgangspunkt für die kontrastive Beschreibung deutsch – spanisch;
                    deutsch –
                    slowakisch.
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>am</m> (Anfang) - <m>al</m> (principio) - <m>na</m> (začiatku)
                            </li>
                            <li>
                                <m>auf</m> (Anhieb) - <m>de</m> (inmediato) - <m>na</m> (prvý pokus)
                            </li>
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
                    In
                    <r rkey="KoMuX" />
                    können Präpositionen
                    neben anderen Wort- und Ausdrucksarten als Erstglieder fungieren.
                </p>

                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>Mit</m>-Juror
                            </li>
                            <li>
                                <m>Mit</m>-Drehbuchautor
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>
            <compare-item value="5" rkey="MAP">
            <p>
            Beschreibungsgegenstand von <r rkey="MAP" /> sind Konstruktionen mit ursprünglich räumlichen Präpositionen in abstrakter Verwendung (<em>an etwas leiden, auf etwas beharren, um etwas kämpfen</em>; siehe unten stehende Beispiele). Für jede behandelte Präposition gibt es einen Überblicksartikel, der das gesamte Spektrum ihrer abstrakten, „grammatischen“ Verwendungen zusammenfasst und einen Überblick über alle zugehörigen Muster und Musterfamilien bietet.
            </p>
            <template #explain>
                    <div> 
                        <ul>
                            <li> Immer mehr Menschen leiden <m>an</m> Allergien. </li>
                            <li>
                               Der Zeuge beharrt <m>auf</m> seiner Aussage. 
                            </li>
                            <li>
                                Die Kandidaten kämpfen <m>um</m> jede Stimme.
                            </li>
                        </ul>
                    </div>
                    </template>
            </compare-item>

            <compare-item value="6" rkey="Verlaufsformen">
                <p>
                    In
                    <r rkey="Verlaufsformen" /> werden
                    deutsche Verben neben
                    dem Absentiv hinsichtlich ihres Vorkommens in zwei Verlaufsformen mit Präpositionen dargestellt:
                    am-Progressiv
                    und beim-Verlaufsform.
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>am</m> (Feiern)
                            </li>
                            <li>
                                <m>am</m> (Kippen)
                            </li>
                            <li>
                                <m>beim</m> (Abbauen)
                            </li>
                            <li>
                                <m>beim</m> (Jäten)
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>

            <compare-item value="7" rkey="WVBF">
                <p>
                    In
                    <r rkey="WVBF" /> entfaltet sich ein
                    WV-Netz um das
                    Bezugslemma GRUND anhand der Präpositionen <em>aus; auf; im; mit; ohne</em>.
                </p>
                <template #explain>
                    <div>
                        <ul>
                            <li>
                                <m>aus</m> (welchen Gründen auch immer)
                            </li>
                            <li>
                                <m>mit</m> (Grund)
                            </li>
                            <li>
                                <m>im</m> (Grunde PRON SUB)
                            </li>
                            <li>
                                <m>ohne</m> (SUB von Gründen)
                            </li>
                        </ul>
                    </div>
                </template>
            </compare-item>
        </compare>
    </div>
</template>