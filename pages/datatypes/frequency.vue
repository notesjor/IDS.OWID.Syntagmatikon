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
    <btn-owid-plus-live-search query="unter Zeitdruck" language="Cosmas II">unter Zeitdruck<br />Suche die Präposition
        <em>unter</em> in Groß-
        und Kleinschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em>
        (ohne Leerstelle)</btn-owid-plus-live-search><br />
    <btn-owid-plus-live-search query='ich liebe es' language="Cosmas II">ich liebe es<br />
        Suche die Wortfolge ich liebe es (in Groß- und Kleinschreibung) ohne
        interne Leerstelle mit Satzendezeichen</btn-owid-plus-live-search><br />        
</template>