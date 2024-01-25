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
    <h3>Beispiele</h3>
    <blockquote>
        <p>Suchfragen in PREPCON<sup>online</sup>:</p>
        <p>unter /+w1:1 Zeitdruck: Suche die Präposition <em>unter</em> in Groß-
            und Kleinschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em>
            (ohne Leerstelle)</p>
        <p>unter /+w1:1 Zeitdruck: Suche die Präposition <em>unter</em> in
            Kleinschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em> (ohne
            Leerstelle)</p>
        <p>Unter /+w1:1 Zeitdruck: Suche die Präposition <em>unter</em> in
            Großschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em> (ohne
            Leerstelle)</p>
        <p>Suchanfragen in SpruchList: …</p>
        <p>ich /+w1:1 liebe /+w1:1 es /w0 (! ODER . ODER : ODER ; ODER "?"):
            Suche die Wortfolge ich liebe es (in Groß- und Kleinschreibung) ohne
            interne Leerstelle mit Satzendezeichen</p>
    </blockquote>
    <br />
    <p>automatisch
        (-&gt; <a href="https://www.ids-mannheim.de/cosmas2/projekt/einsteiger/">COSMAS
            II</a>; <a href="https://www.sketchengine.eu/quick-start-guide/">Sketch
            Engine</a>)</p><br />
    <p><a href="https://www.bubenhofer.com/korpuslinguistik/kurs/index.php?id=web_suche.html">Weiterführende
            Fachinformationen</a></p>
    <br />
    <h3>Beispiele (JOR)</h3><br />
    <kwic-btn-search query="unter /+w1:1 Zeitdruck" language="Cosmas II">unter /+w1:1 Zeitdruck<br />Suche die Präposition
        <em>unter</em> in Groß-
        und Kleinschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em>
        (ohne Leerstelle)</kwic-btn-search><br />
    <kwic-btn-search query="Unter /+w1:1 Zeitdruck" language="Cosmas II">Unter /+w1:1 Zeitdruck<br />Suche die Präposition
        <em>unter</em> in
        Großschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em> (ohne
        Leerstelle)</kwic-btn-search><br />
    <kwic-btn-search query='ich /+w1:1 liebe /+w1:1 es' language="Cosmas II">ich /+w1:1 liebe /+w1:1
        es<br /> Suche die Wortfolge ich liebe es (in Groß- und Kleinschreibung) ohne
        interne Leerstelle mit Satzendezeichen</kwic-btn-search><br /></template>