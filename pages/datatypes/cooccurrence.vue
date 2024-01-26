<template>
    <h1>Typische Partnerwörter</h1>
    <h2>(Kookkurrenzprofile)</h2>
    <p>Mithilfe statistischer Berechnungen (sog. <a
            href="https://www1.ids-mannheim.de/kl/projekte/methoden/ka.html">Kookkurrenzanalysen</a>)
        lassen sich besondere Anziehungskräfte (Cluster) zwischen Wörtern und
        Wortgruppen im Korpus ermitteln. Das bedeutet, dass bestimmte
        sprachliche Einheiten überproportional häufig in der Umgebung des
        Suchobjekts vorkommen. Dieser „Wort-Magnetismus“ spiegelt sich in
        Partnerwort-Profilen, deren Auswertung mittlerweile zu den wichtigsten
        Werkzeugen in der Wörterbucharbeit gehören.</p>
    <p>DENN: Die Partnerwort-Cluster lenken den Blick u.a. auf typische
        Bedeutungen oder Bewertungen, die Sprecher mit einem Wort oder einer
        Wortgruppe in bestimmten wiederkehrenden Situationen, Diskursen, Domänen
        usw. verbinden. Solche Profile enthalten auch stark verfestigte
        Verbindungen, wie Kollokationen oder Redewendungen, die zentrale
        sprachliche Bausteine (z.B. beim Fremdsprachenerwerb) darstellen.</p>
    <p>Neben den Profil-Listen lassen sich in PREPCON<sup>online</sup>
        zusätzlich die den Clustern zugrunde liegenden <u>KWICs</u> abrufen.</p>
    <br />
    <h3>Beispiel</h3>
    <v-window v-model="tab">
        <v-window-item value="1">
            <p>Das <u><em>am Ende</em>-Profil</u> zeigt u.a. folgendes: Bestimmte
                Partnerwörter deuten auf feste Wendungen hin wie <em>Licht</em>
                (<em>Licht a</em>. <em>E</em>. <em>des Tunnels</em>, <em>leeren
                    Händen</em> (<em>a</em>. <em>E</em>. <em>mit leeren Händen
                    dastehen</em>) oder <em>Fahnenstange</em> (<em>a</em>. <em>E</em>.
                <em>der Fahnenstange angelangen</em>). Typische assoziierte Nomina
                bilden ab, dass <em>am Ende</em> in bestimmten Wortgruppen temporal
                (<em>Jahres</em>; <em>Abends</em>; <em>Wochenendes</em>); lokal
                (<em>Augustinerstraße</em>; <em>Linkskurve</em>;
                <em>Strafraumgrenze</em>) oder bezogen auf Ereignisse
                (<em>Gottesdienstes</em>; <em>Gesprächs</em>; <em>Weltkriegs</em>)
                verwendet wird. Partnerwörter wie <em>Applaus</em> oder <em>fehlte
                    Quäntchen</em> wiederum sind Label für typische Kontexte (Applaus gibt
                es am Ende eines Konzerts; Ein Quäntchen Glück fehlt oft im sportlichen
                Wettkampf). Die Teilbedeutung ‚schließlich‘/‘letztlich‘ als Ausdruck des
                In-Aussichtstellens eines finalen Resultats wird besonders bei verbalen
                Partnerwörtern wie <em>reichte</em> (<em>reichte es am Ende nicht</em>)
                oder heraus (<em>was</em> a. E. <em>herausspringt</em>) angezeigt.
            </p>
            <p>Es kann es auch Resultate geben, die falsch oder gar unsinnig
                erscheinen (z.B. das Zeichen <strong>&amp;</strong> im <em><u>am
                        Ende-Profil</u></em>). Aber der Computer „konstatiert“ nur blind jedwede
                statistische Auffälligkeit. Die Beurteilung der Aussagekraft von Daten
                muss der Mensch treffen. Beispiele für inhaltliche Gruppierungen von
                Partnerwörtern findet man in PREPCON<sup>online</sup> kontrastiv (s.
                <u>Satellitenfelder</u>)
            </p>
            <p>automatisch (-&gt; <a href="https://www1.ids-mannheim.de/kl/projekte/methoden/ka.html">Kookkurrenzanalyse</a>
                s. <a href="https://www1.ids-mannheim.de/kl/projekte/methoden/ur.html">Belica
                    1995</a>; <a href="https://www.sketchengine.eu/guide/concordance-a-tool-to-search-a-corpus/">CA
                    in Sketch Engine</a>)</p>
        </v-window-item>

        <v-window-item value="2">
            <iframe src="https://barometer.diskurslinguistik.net/ui_cooccurrence.html" width="100%" height="450px"></iframe>
        </v-window-item>
    </v-window>
    <br />
    <v-tabs v-model="tab">
        <v-tab value="1">Original</v-tab>
        <v-tab value="2">JOR</v-tab>
    </v-tabs>
</template>

<script>
export default {
    data: () => ({
        tab: "1",
    }),
}
</script>