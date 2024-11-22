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
        props.title = 'Kategoriale Label';
        props.parent = 'Informationstypen';
    },
}
</script>

<template>
    <p>Kategoriale Label etikettieren bestimmte Einheiten oder Strukturen mit linguistischen klassifikatorischen
        Merkmalen. Diese Markierungen dienen der Gruppierung von sprachlichen Einheiten. Sie sind immer Ergebnisse
        qualitativer Interpretation basierend auf spezifischen Modellen. Sie können bereits in den Korpora im
        Hintergrund vorhanden sein (automatisch annotierte Daten) oder im Nachhinein händisch hinzugefügt werden.</p>

    <p>Im <hi>Syntagmatikon</hi> werden Ausdrücke und Syntagmen bezüglich Wortarten, grammatischen Merkmalen,
        semantischen und thematischen Konzepten, pragmatischen Eigenschaften und Relationen untereinander gelabelt.</p>


    <div>
        <compare title="">
            <template #headers>
                <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
                <v-tab value="1" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_kon']"></resources-list-compact> </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['KoMuX']"></resources-list-compact></v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['PhrasKomp']"></resources-list-compact></v-tab>
                <v-tab value="4" class="nocaps"><resources-list-compact
                        :filter="['Redeeinleiter']"></resources-list-compact></v-tab>
                <v-tab value="5" class="nocaps"><resources-list-compact
                        :filter="['Verlaufsformen']"></resources-list-compact></v-tab>
                <v-tab value="6" class="nocaps"><resources-list-compact
                        :filter="['FesteWV']"></resources-list-compact></v-tab>
                <v-tab value="7" class="nocaps"><resources-list-compact
                        :filter="['WVBF']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/datatypes/categories/categories_all.png" style="text-align: center;" />
                    </div>

                </compare-item>

                <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
                <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
                <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
                <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
                <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

                <compare-item value="1" rkey="PREPCON_kon" webpage="">

                    <p>
                        In <tag rkey="PREPCON_kon"/> gibt es zum einen
                        Label für die Kernbedeutung einer Präposition-Nomen-Verbindung. Zum anderen werden Lückenfüller
                        in den Musterangaben (Angabe: „Lexikalische Erweiterungen“) nach Wortarten und in einigen Fällen
                        zusätzlich nach semantisch-funktionalen Merkmalen klassifiziert.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/prepcon_kernbedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Kernbedeutung im Eintrag „mit Genugtuung – con satisfacción“
                        </div>


                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/prepcon_wortarten_nachBelieben.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Wortarten im Eintrag „nach Belieben X – a su gusto X“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/prepcon_wortarten_mitGenugtuung.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Wortarten und funktionale Merkmale im Eintrag „mit X Genugtuung – con X
                            satisfacción“
                        </div>
                    </template>

                </compare-item>

                <compare-item value="2" rkey="KoMuX" webpage="">

                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        In <tag rkey="KoMuX"/>
                        lassen sich Suchmuster definieren, indem bestimmte formale und/oder lexikalisch-semantische
                        Eigenschaften der
                        Komposita-Konstituenten festgelegt werden.</p>
                    <p>
                        Dabei kann nicht nur nach konkreten Lexemen in Erst- oder Zweitgliedposition gesucht, sondern
                        auch nach
                        abstrakten Eigenschaften gruppiert werden. Eine solche Gruppierung ist möglich, weil jedes
                        Kompositum der
                        Gesamtdaten, bzw. seine Konstituenten, mit kategorialen Labels verstehen ist, die sowohl formale
                        Eigenschaften
                        (Wortbildungstyp; Wortart) als auch semantische Eigenschaften (thematische Kategorie: ARTEFAKT;
                        GESCHEHEN;
                        GRUPPE; ORT; MENSCH; KOMMUNIKATION; KOGNITION; BESITZ; ATTRIBUT; MENGE; SUBSTANZ; ZEIT; KOERPER;
                        NATPHAENOMEN;
                        NAHRUNG; FORM; NATGEGENSTAND; RELATION; TIER; PFLANZE; GEFUEHL; MOTIV) der Konstituenten
                        abdecken.</p>


                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/komux_thematische_cutout.png" alt="" />
                        </div>
                        <div class="caption">
                            Komposita, deren Erst- und Zweitglied auf der Ebene „thematischen Kategorie“ mit dem Label
                            KOMMUNIKATION versehen sind
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/komux_thematische.png" alt="" />
                        </div>
                        <div class="caption">
                            Übersicht über alle kategorialen Label in KoMuX (am Beispiel eines Ausschnitts aus der
                            Treffermenge zu KOMMUNIKATION|KOMMUNIKATION)
                        </div>
                    </template>

                </compare-item>

                <compare-item value="3" rkey="PhrasKomp" webpage="">
                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        In <tag rkey="PhrasKomp"/>
                        können die Phrasenkomposita des Inventars gruppiert werden, und zwar in Abhängigkeit ihres
                        Zweitglied-Lexems
                        bzw. in Abhängigkeit der abstrakten Eigenschaften des Zweitglieds. </p>
                    <p>Eine solche Gruppierung ist möglich, weil jedes Kompositum bzw. jedes Zweitglied des Inventars
                        mit kategorialen
                        Labels verstehen ist, die sowohl formale Eigenschaften (Ableitungstyp) als auch semantische
                        Eigenschaften
                        (semantische Gruppe) abdecken. Diese Label wurden den insgesamt 1.576 Phrasenkomposita des
                        Inventars händisch
                        zugeordnet:
                    </p>
                    <ul>
                        <li>Ableitungstyp: simplizisch; desubstantivisch; deadjektivisch; deverbal</li>
                        <li>Semantische Gruppe: ABSOLUTE KONKRETA; ABSTRAKTA ZUR BESCHREIBUNG EINES STANDPUNKTS;
                            ABSTRAKTA ZUR
                            ‘SCHLAGWORTARTIGE ZUSAMMENFASSUNG’; KOLLEKTIVA; NOMINA QUALITATIS; NOMINA AGENTIS; NOMINA
                            ACTIONIS; NOMINA
                            ACTI; NOMINA LOCI; PERSONENBEZEICHNUNGEN; PLATZHALTER-SUBSTANTIVE; RELATIONALE SUBSTANTIVE;
                            TEMPORALE
                            SUBSTANTIVE; VALENTE SUBSTANTIVE; VALENTE ZGS: RELATIONALE KONKRETA.</li>
                    </ul>

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/phraskomp_deadj.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Treffermenge für Phrasenkomposita mit deadjektivischem Zweitglied
                        </div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/phraskomp_personen.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Treffermenge für Phrasenkomposita mit einer Personenbezeichnung im
                            Zweitglied
                        </div>
                    </template>
                </compare-item>

                <compare-item value="4" rkey="Redeeinleiter" webpage="">

                    <p>
                        In <tag rkey="Redeeinleiter"/> ist, basierend
                        auf den
                        manuellen Annotationen des Redewiedergabe-Korpus, für jeden Redeeinleiter angegeben, ob dieser
                        eine Rede- oder
                        Gedankenwiedergabe einleitet sowie mit welchem Wiedergabetyp (direkt / indirekt), in welcher
                        Position im
                        Syntagma (initial, medial, final) und in welcher Textsorte (fiktional / nicht-fiktional) der
                        Redeeinleiter
                        belegt ist.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/rede_freq.png" width="70%" alt="" />
                        </div>
                        <div class="caption">
                            Die Attribute der Belege, in denen der Redeeinleiter „sagen“ belegt ist.
                        </div>
                    </template>

                </compare-item>

                <compare-item value="5" rkey="Verlaufsformen" webpage="">

                    <p>
                        In <tag rkey="Verlaufsformen"/> werden
                        folgende, manuell
                        zugeordnete, kategoriale Label angezeigt:
                    </p>
                    <ul>
                        <li>Verlaufsformenangabe: Typ der Verlaufsform, in der das Verb im Beleg auftritt
                            (<em>am</em>-Progressiv,
                            Absentiv, <em>beim</em>-Verlaufsform).</li>
                        <li>Objektangabe: Angabe, ob das Verb in der Verlaufsform mit einem direkten Objekt auftritt (ja
                            / nein) (z. B.
                            <em>Jetzt sind wir ein Konzept am Entwickeln</em>).
                        </li>
                        <li>Inkorporationsangabe: Angabe, ob das Verb in der Verlaufsform mit einem inkorporierten
                            Objekt auftritt (ja /
                            nein) (z. B. <em>Wir sind gerade am Ideensammeln</em>). </li>
                        <li>Reflexivitätsangabe: Angabe, ob das Verb in der Verlaufsform mit einem Reflexivum auftritt
                            (ja / nein) (z.
                            B. <em>Doch da sei sich einiges am Verändern</em>). </li>
                        <li>Regionenangabe: Angabe, ob der Beleg einer deutschen, schweizerischen oder österreichischen
                            Quelle
                            entstammt.</li>
                    </ul>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/verlaufsformen.png" alt="" />
                        </div>
                        <div class="caption">
                            Kategoriale Zuordnung mit inkorporierten Objekt <em>Unkraut</em> (beim Unkrautjäten) im
                            Eintrag „jäten“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/verlaufsformen_tabelle.png" alt="" />
                        </div>
                        <div class="caption">
                            Kategoriale Label mit Einstellung ‚Inkorporiertes Objekt (INK): ja‘ in durchsuch- und
                            sortierbarer Tabelle (Rubrik „Erweiterte Suche“)
                        </div>
                    </template>

                </compare-item>

                <compare-item value="6" rkey="FesteWV" webpage="">

                    <p>
                        In <tag rkey="FesteWV"/> in OWID, Rubrik „25
                        Musterartikel“,
                        werden die Stichwörter nach Phrasenkategorie und Mehrwortkategorie (nach Fleischer 1997; Burger
                        2015)
                        klassifiziert.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/festeWV_klassif.png" alt="" />
                        </div>
                        <div class="caption">
                            Kategoriale Label für den Mehrworteintrag „frank und frei“
                        </div>

                    </template>

                </compare-item>

                <compare-item value="7" rkey="WVBF" webpage="">

                    <p>
                        Im <tag rkey="WVBF"/> werden Lückenfüller für
                        Slots in den
                        GRUND-Mustern klassifiziert, sowohl nach Wortarten u/o Phrasen als auch nach semantischen
                        und/oder funktionalen
                        Merkmalen (s. Steyer 2013).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/wvGrund_Netz.png" alt="" />
                        </div>
                        <div class="caption">
                            Label für Wortarten der X-Füller im Hauptknoten „aus GRUND“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/categories/wvGrund_Fueller.png" alt="" />
                        </div>
                        <div class="caption">
                            Semantische Kategorisierung für Adjektiv-Füller im Subknoten „aus ADJ Gründen“
                        </div>

                    </template>

                </compare-item>



            </template>
        </compare>
    </div>

</template>
