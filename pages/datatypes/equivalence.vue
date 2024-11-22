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
        props.title = 'Fremdsprachige Äquivalenzen';
        props.parent = 'Informationstypen';
    },
}
</script>
<template>
    <p>Im <hi>Syntagmatikon</hi> dokumentieren zwei Ressourcen den Gebrauch von Syntagmen im Sprachkontrast. Die
        entsprechenden Angaben werden Äquivalenzangaben genannt, d.h. Einheiten der Ausgangssprache Deutsch werden
        Entsprechungen in anderen Sprachen und Korpusbelege hinzugefügt. Diese können 1:1-Entsprechungen auf der
        Formseite sein oder konzeptuelle Entsprechungen, die denselben Bedeutungskern aufweisen, aber auch durch andere
        Wörter und Wortgruppen ausgedrückt werden. </p>

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
                        :filter="['DTWW']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/datatypes/equivalence/equivalence_all.png" style="text-align: center;" />
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
                        <tag rkey="PREPCON_kon"/> beinhaltet eine
                        korpusgesteuerte Vergleichstudie von quantitativen Daten, Bedeutungs- und Gebrauchsaspekten
                        sowie semi-abstrakten Mustern für die Sprachenpaare Deutsch – Spanisch und Deutsch – Slowakisch;
                        ausgehend vom Deutschen. Beschrieben werden die Präposition-Nomen-Verbindungen <em>am Anfang;
                            auf Anhieb; mit Genugtuung; nach Belieben</em> und die prototypischen Äquivalente in
                        Spanisch (<em>al principio; de inmediato; con satisfacción; a su/... gusto</em>) und Slowakisch
                        (<em>na začiatku; na prvý pokus; so zadosťučinením; podľa ľubovôle</em>).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/equivalence/prepcon_kon_spanisch.png" alt="" />
                        </div>
                        <div class="caption">
                            Äquivalenzpaar Deutsch – Spanisch im Artikel „am Anfang – al principio“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/equivalence/prepcon_kon_slowakisch.png" alt="" />
                        </div>
                        <div class="caption">
                            Äquivalenzpaar Deutsch – Slowakisch im Artikel „am Anfang – na začiatku“
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="DTWW">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        <tag rkey="DTWW"/> ist eine Sammlung fester
                        deutsch-türkischer
                        Wortverbindungen und Einwortphraseologismen aus der Domäne Wirtschaft. Sie enthält ca. 900
                        deutsche Einträge und
                        ihre türkischen Entsprechungen mit wörtlichen Übersetzungen ins Deutsche.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->
                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/equivalence/dtww.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Buchstabenstrecke A
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>

</template>
