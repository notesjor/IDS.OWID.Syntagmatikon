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
        props.title = 'Lückenfüllertabellen';
        props.parent = 'Informationstypen';
    },
}
</script>

<template>
    <p>Syntagmen zeichnen sich nicht nur dadurch aus, dass sie verfestigte Wortgruppen sind, sondern dass gleichzeitig
        bestimmte Komponenten austauschbar sind. Diese Ersetzung ist aber nicht eine Sache von Sprachspiel oder
        stilistischer Variation. Vielmehr folgt dieser Mechanismus Mustern: Viele Sprachteilhaber füllen diese Slots auf
        vergleichbare Art und Weise. In der Fachsprache spricht man davon, dass beim Weglassen einer oder mehrerer
        Komponenten ein Slot eröffnet wird, der mit lexikalischen Füllern besetzt wird.
        Mithilfe automatischer Methoden, z.B. dem Tool <NuxtLink to="http://uwv.ids-mannheim.de/lexpan/">lexpan
        </NuxtLink>, lässt sich nun ermitteln, welche Füller überproportional
        häufig vorkommen und welche Musterbildungen vorliegen (Rubrik <NuxtLink to="/patterns">Musterzugänge</NuxtLink>
        ). Dazu werden so genannte Lückenfüllertabellen erstellt.</p>

    <p> Im <hi>Syntagmatikon</hi> dienen automatisch ermittelte lexpan-Lückenfüllertabellen nicht nur als empirische
        Basis, sondern werden in einigen Ressourcen selbst als lexikografische Informationseinheiten angeboten.</p>

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
                        :filter="['PREPCON_temp']"></resources-list-compact>
                </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['WVBF']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/datatypes/patterntables/patterntables_all.png" style="text-align: center;" />
                    </div>

                </compare-item>

                <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
                <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
                <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
                <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
                <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

                <compare-item value="1" rkey="PREPCON_temp">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <tag rkey="PREPCON_temp"/> werden
                        automatisch erstellte Lückenfüllertabellen für die temporalen Zweiworteinheiten in der Rubrik
                        „Kurzartikel“ angeboten. Diese illustrieren drei Mustertypen: X-Präposition-Nomen;
                        Präposition-X-Nomen (beide X jeweils eine Leerstelle); Präposition-Nomen-X (X zwei Leerstellen).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/patterntables/prepcon_temp_amXEnde_window.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Lückenfüllertabelle <em>am</em> X <em>Ende</em> im Artikel „am Ende“
                            (Rubrik „Kurzartikel“; ‚Muster‘)
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/patterntables/prepcon_temp_amEndeX_window.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Lückenfüllertabelle <em>am Ende</em> X im Artikel „am Ende“ (Rubrik
                            „Kurzartikel“; ‚Muster‘)
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="PREPCON_kon">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <tag rkey="PREPCON_kon"/> werden
                        automatisch erstellte
                        Lückenfüllertabellen für das Sprachenpaar deutsch-spanisch und deutsch-slowakisch dargestellt.
                        Da die Tabellen
                        auf unterschiedlichen Korpora basieren (DeReKo-W-Archiv; Webkorpora in Sketch Engine), sind die
                        quantitativen
                        Angaben nicht vergleichbar. Trotzdem weisen bestimmte Füllergruppen in allen Sprachen
                        Gemeinsamkeiten auf, was
                        für eine über ein spezielles Korpus hinausgehende Verallgemeinerbarkeit spricht (universale
                        Beziehungen).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/patterntables/prepcon_kon_deutsch.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Lückenfüllertabelle des Musters <em>mit</em> X <em>Genugtuung</em> im
                            Artikel „mit Genugtuung – con satisfacción“ (Rubrik „Quantitative Angaben: ‚Muster‘)
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/patterntables/prepcon_kon_spanisch.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Lückenfüllertabelle des Musters <em>con</em> X <em>satisfacción</em> im
                            Artikel „mit Genugtuung – con satisfacción“ (Rubrik „Quantitative Angaben: ‚Muster‘)
                        </div>
                    </template>
                </compare-item>

                <compare-item value="3" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        Im <tag rkey="WVBF"/> werden
                        Lückenfüllertabellen für die
                        Musterknoten mit klassifizierten Platzhaltern angeboten, z.B. <em>aus</em> ADJ <em>Gründen</em>;
                        <em>auf Grund
                            von</em> SUB; SUB-G PRON <em>auch immer</em>.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/patterntables/wvGrund_kontext.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Lückenfüllertabelle des Musters <em>auf Grund von</em> SUB im Knoten „auf
                            Grund X“
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>

</template>