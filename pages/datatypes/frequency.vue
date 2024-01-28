<template>
    <h1>Frequenz</h1>
    <p>Frequenzen werden auf der Basis von Suchanfragen (queries) im Korpus
        berechnet. Dabei gibt es keine Häufigkeit in der Sprache an sich (z.B.
        die häufigsten Sprichwörter oder Komposita des Deutschen), sondern immer
        nur eine relative in Bezug auf die vorher formulierte Suchanfrage
        basierend auf der zu einem bestimmten Zeitpunkt ausgewählten
        Korpusbasis. Es geht also eher um Frequenzbereiche und Häufigkeitstrends
        bzw. -proportionen).</p>
    <br />
    <h3>Beispiele</h3><br />
    <v-window v-model="tab">
        <v-window-item value="1">
            <p>Suchfragen in PREPCONonline:</p>
            <p>unter /+w1:1 Zeitdruck: Suche die Präposition unter in Groß- und
                Kleinschreibung unmittelbar gefolgt vom Nomen Zeitdruck (ohne
                Leerstelle)</p>
            <p>unter /+w1:1 Zeitdruck: Suche die Präposition unter in
                Kleinschreibung unmittelbar gefolgt vom Nomen Zeitdruck (ohne
                Leerstelle)</p>
            <p>Unter /+w1:1 Zeitdruck: Suche die Präposition unter in Großschreibung
                unmittelbar gefolgt vom Nomen Zeitdruck (ohne Leerstelle)</p>
            <p>Suchanfragen in SpruchList: …</p>
            <p>ich /+w1:1 liebe /+w1:1 es /w0 (! ODER . ODER : ODER ; ODER "?"):
                Suche die Wortfolge ich liebe es (in Groß- und Kleinschreibung) ohne
                interne Leerstelle mit Satzendezeichen</p>
            <br />
            <p>automatisch (-&gt; <a href="https://www.ids-mannheim.de/cosmas2/projekt/einsteiger/">COSMAS
                    II</a>; <a href="https://www.sketchengine.eu/quick-start-guide/">Sketch
                    Engine</a>)</p>


        </v-window-item>

        <v-window-item value="2">
            <btn-owid-plus-live-search query="unter Zeitdruck">unter Zeitdruck<br />Suche die
                Präposition <em>unter</em> in Groß-
                und Kleinschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em>
                (ohne Leerstelle)</btn-owid-plus-live-search><br />
            <btn-owid-plus-live-search query='ich liebe es'>ich liebe es<br />
                Suche die Wortfolge <em>ich liebe es</em> (in Groß- und Kleinschreibung) ohne
                interne Leerstelle mit Satzendezeichen</btn-owid-plus-live-search><br />
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