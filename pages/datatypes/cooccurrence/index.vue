<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/datatypes">
                Zurück zu "Informationstypen"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Kookkurrenzprofile</h1>
    <h2>Typische Partnerwörter</h2>

    <p>Mithilfe statistischer Berechnungen (sog. Kookkurrenzanalysen) lassen sich besondere Anziehungskräfte (Cluster)
        zwischen Wörtern und Wortgruppen im Korpus ermitteln. Das bedeutet, dass bestimmte sprachliche Einheiten
        überproportional häufig in der Umgebung des Suchobjekts vorkommen. Dieser „Wort-Magnetismus“ spiegelt sich in
        Partnerwort-Profilen, deren Auswertung mittlerweile zu den wichtigsten Werkzeugen in der Wörterbucharbeit
        gehören.</p>
    <p>Die Partnerwort-Cluster lenken den Blick u.a. auf typische Bedeutungen oder Bewertungen, die Sprecher mit einem
        Wort oder einer Wortgruppe in bestimmten wiederkehrenden Situationen, Diskursen, Domänen usw. verbinden. Solche
        Profile enthalten auch stark verfestigte Verbindungen, wie Kollokationen oder Redewendungen, die zentrale
        sprachliche Bausteine (z.B. beim Fremdsprachenerwerb) darstellen.
    </p>
    <p>Im <hi>Syntagmatikon</hi> dienen automatisch ermittelte Kookkurrenzpofile nicht nur als empirische Basis, sondern
        werden in einigen Ressourcen selbst als lexikografische Informationseinheiten angeboten.</p>

    <div>
        <compare title="">
            <template #headers>
                <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
                <v-tab value="1" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_temp']"></resources-list-compact> </v-tab>
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
                        <img src="/img/datatypes/cooccurrence/cooccurrence_all.png" style="text-align: center;" />
                    </div>

                </compare-item>

                <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
                <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
                <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
                <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
                <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

                <compare-item value="1" rkey="PREPCON_temp" webpage="" buttonUrl="">

                    <p>
                        In <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact> sind in der
                        Rubrik „Kurzartikel“ Kookkurrenzprofile einschließlich der KWIC-Cluster der jeweiligen
                        Präposition-Nomen-Verbindung unter der Überschrift „Typische Partnerwörter“ hinterlegt. Beim
                        Anklicken der Wolkenvisualisierung erhält man die Kookkurrenzliste einschließlich bis zu 50 KWIC
                        zu jedem Cluster (statistische Zufallsauswahl).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/cooccurrence/prepcon_temp_wordcloud.png" alt="" />
                        </div>
                        <div class="caption">
                            Wolkendarstellung von Kookkurrenzen im Artikel „am Ende“
                        </div>


                        <div class="exampleImg">
                            <img src="/img/datatypes/cooccurrence/prepcon_temp_kook.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus Kookkurrenzliste im Artikel „am Ende“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/cooccurrence/prepcon_temp_kwics.png" alt="" />
                        </div>
                        <div class="caption">
                            KWIC-Cluster im Artikel „am Ende“
                        </div>
                    </template>

                </compare-item>

                <compare-item value="2" rkey="PREPCON_kon" webpage="">

                    <p>
                        In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> werden
                        Kookkurrenzprofile für das
                        Sprachenpaar deutsch-spanisch und deutsch-slowakisch dargestellt. Da die Profile auf
                        unterschiedlichen Korpora
                        basieren (DeReKo-W-Archiv; Webkorpora in Sketch Engine), sind die quantitativen Angaben nicht
                        vergleichbar.
                        Trotzdem weisen bestimmte Partnerwortgruppen in allen Sprachen Gemeinsamkeiten auf, was für eine
                        über ein
                        spezielles Korpus hinausgehende Verallgemeinerbarkeit spricht (universale Beziehungen).
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/cooccurrence/prepcon_kon_wolken.png" alt="" />
                        </div>
                        <div class="caption">
                            Wolkendarstellung von Kookkurrenzen in den Artikeln „nach Belieben“ und „a su gusto“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/cooccurrence/prepcon_kon_kook_deutsch.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus Kookkurrenzliste im Artikel „nach Belieben“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/cooccurrence/prepcon_kon_kook_spanisch.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus Kookkurrenzliste im Artikel „a su gusto“
                        </div>
                    </template>

                </compare-item>

                <compare-item value="3" rkey="WVBF" webpage="">
                    <p>
                        Im <resources-list-compact :filter="['WVBF']"></resources-list-compact> werden in ausgewählten
                        Knoten
                        Kookkurrenzprofile von Einwort-Kontrasteinheiten angezeigt, z.B. bei <em>aus gutem Grund</em>;
                        <em>mit
                            Grund</em> das <em>berechtigerweise</em>-Profil oder bei <em>im tiefsten Grunde</em> das
                        <em>eigentlich</em>-Profil. Durch diesen Vergleich wird deutlich, in welchen Kontexten die
                        Wortverbindung
                        synonym zu seinem Einwortäquivalent ist, in welche sich beide Ausdrücke aber auch unterscheiden.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/cooccurrence/wvfeld_eigentlich.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschitt aus dem Kookkurrenzprofil von <em>eigentlich</em> im WV-Feld-Knoten „im tiefsten
                            Grunde“
                        </div>
                    </template>
                </compare-item>

            </template>
        </compare>
    </div>

</template>
