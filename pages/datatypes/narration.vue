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
        props.title = 'Narrative Beschreibungen';
        props.parent = 'Informationstypen';
    },
}
</script>

<template>
    <p>Neben den Korpusdaten nehmen manuell verfasste narrative Kommentare und Beschreibungen einen zentralen Platz in
        nahezu allen Ressourcen des <hi>Syntagmatikons</hi> ein. Diese erläutern unterschiedliche Aspekte des
        sprachlichen Gebrauchs eines Eintrags. Vor allem sind es:</p>
    <ul>
        <li>Bedeutungsbeschreibungen (in der Lexikografie auch Paraphrasen genannt)</li>
        <li>Beschreibungen von Gebrauchsaspekten</li>
        <li>Beschreibungen von Mustern</li>
    </ul>
    <p>Die Beschreibungsformen reichen von kurzen Etikettierungen (z. B. einer Kernbedeutung) über standardisierte
        lexikografische Paraphrasen bis hin zu mehr oder weniger ausführlichen linguistischen Analysetexten.</p>


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
                        <img src="/img/datatypes/narration/narration_all.png" style="text-align: center;" />
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
                        In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> werden in der
                        Ausgangssprache Deutsch und den Kontrastsprachen Spanisch und Slowakisch Gebrauchsaspekte und
                        lexikalische Erweiterungen narrativ kommentiert (auf Deutsch).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Rubrik: „Gebrauchsaspekte“</div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/prepcon_kon_gebrauch.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext zum Gebrauchsaspekt ‚Thematisierung von Schwierigkeiten‘ im Artikel „am
                            Anfang – al principio“ (Konvergenz)
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/prepcon_kon_gebrauch_div.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext zum Gebrauchsaspekt ‚Rückblicke‘ im Artikel „am Anfang – al principio“
                            (Divergenz)
                        </div>

                        <div class="exampleHeadline">Rubrik: „Lexikalische Erweiterungen“</div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/prepcon_kon_muster_div.png" alt="" />
                        </div>
                        <div class="caption">
                            Kommentar zu lexikalischen Erweiterung <em>mit einer gewissen Genugtuung</em> des Muster
                            <em>mit X Genugtuung</em> im Artikel „mit Genugtuung – con satisfacción“ (Divergenz)
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/prepcon_kon_muster_konv.png" alt="" />
                        </div>
                        <div class="caption">
                            Kommentar zu lexikalischen Erweiterung zum Muster <em>mit [(...) ADJ] Genugtuung - con
                                [(...) ADJ] satisfacción</em> im Artikel „mit Genugtuung – con satisfacción“
                            (Konvergenz)
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

                <compare-item value="3" rkey="SPRW">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['SPRW']"></resources-list-compact> werden narrative Texte
                        und Kommentare zu
                        folgenden Aspekten angezeigt:</p>
                    <ul>
                        <li>Bedeutung</li>
                        <li>Gebrauchsbesonderheiten</li>
                        <li>Formvarianten</li>
                        <li>Ersetzung von Komponenten</li>
                        <li>Typische Verwendung im Text</li>
                    </ul>
                    <p>Des Weiteren gibt es Hintergrund- und Fachkommentare. </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/sprw_bedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Bedeutungsbeschreibung im Artikel „Alles hat ein Ende“
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/sprw_gebrauch.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext für ‚Gebrauchsbesonderheiten‘ im Artikel „Alles hat ein Ende“
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/sprw_verwendung.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext für ‚Typische Verwendung im Text‘ im Artikel „Alles hat ein Ende“
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/sprw_varianten.png" alt="" />
                        </div>
                        <div class="caption">
                            Kommentartext für Formvariante <em>Alles hat ein Ende, nur die Wurst hat zwei</em> im
                            Artikel „Alles hat ein Ende“
                        </div>

                        <p>
                            Im Modul „Werbeslogans“ sind zusätzlich narrative Beschreibungen zur Entstehungsgeschichte
                            hinterlegt.
                        </p>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/sprw_geschichte.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext in ‚Geschichte‘ im Artikel „Geiz ist geil“
                        </div>
                    </template>
                </compare-item>

                <compare-item value="4" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['WVBF']"></resources-list-compact> werden narrative Text in
                        unterschiedlicher Form in den einzelnen Knoten angeboten:
                    </p>
                    <ul>
                        <li>prägnante Sätze, die die abstrakte Kernbedeutung paraphrasieren</li>
                        <li>ausführliche Fachkommentare, die weitere sprachliche Merkmale dieses Knotens beschreiben
                        </li>
                        <li>ausführliche Fachkommentare, die Merkmale der Lückenfüller auf einer abstrakten Ebene
                            erfassen</li>
                        <li>ausführliche Fachkommentare, die die Beziehung zu Kontrasteinheiten thematisieren</li>
                    </ul>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/wvGrund_bedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Allgemeine Beschreibung im Knoten „aus welchen Gründen auch immer“
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/wvGrund_fueller1.png" alt="" />
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/wvGrund_fueller2.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausgewählte Kommentare zu Lückenfüllern im Knoten „aus ADJ Gründen“
                        </div>
                    </template>
                </compare-item>

                <compare-item value="5" rkey="FesteWV">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <resources-list-compact :filter="['FesteWV']"></resources-list-compact> wurde als experimentelle
                        Ressource für
                        die korpusbasierte Beschreibung von Wortverbindungen in den Anfangsjahren der
                        Online-Lexikografie am IDS
                        erarbeitet. Deshalb finden sich in den zwei Rubriken unterschiedliche Formen von narrativen
                        Gebrauchsbeschreibungen.
                    </p>
                    <ul>
                        <li>In der Rubrik „Musterartikel“ wurden Artikel für unterschiedliche Phrasemtypen erarbeitet,
                            mit
                            Bedeutungsparaphrasen und Texten zu den Angaben ‚Wertungsaspekt‘‚ ‚Funktion in der
                            Kommunikation‘ sowie
                            ‘grammatische Besonderheiten‘.</li>
                        <li>
                            In der Rubrik „Wortverbindungen mit Adjektiven“ wurde getestet, wie man mit einer
                            reduzierten
                            Artikelstruktur eine größere Lemmastrecke bearbeiten könnte. Hier wurden umfangreichere
                            narrative Texte zum
                            Gebrauch in einer einzigen Angabe formuliert.
                        </li>
                    </ul>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleHeadline">Rubrik „Musterartikel“</div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/festeWV_bedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Bedeutungsbeschreibung im Artikel „reden, wie einem der Schnabel gewachsen ist“
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/festeWV_wertung.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext für ‚Wertungsaspekt‘ im Artikel „billiger Jakob“
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/festeWV_funktion.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext für ‚Funktion in der Kommunikation‘ im Artikel „an die große Glocke
                            hängen“
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/festeWV_grammatik.png" alt="" />
                        </div>
                        <div class="caption">
                            Beschreibungstext für ‚Grammatische Besonderheiten‘
                        </div>

                        <div class="exampleHeadline">Rubrik „Wortverbindungen mit Adjektiven“</div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/narration/festeWV_mitAdj_bedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Gebrauchsbeschreibung im Artikel „jeder halbwegs normale Mensch“
                        </div>

                    </template>
                </compare-item>

            </template>
        </compare>
    </div>
</template>