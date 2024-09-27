<template>
    <v-btn>
        <NuxtLink to="/datatypes">
            Zurück zu "Informationstypen"
        </NuxtLink>
    </v-btn>
    <h1>KWICs</h1>
    <h2>Keyword-in-Context: “Schlüsselwort im Kontext”</h2>
    <p>Wenn man eine Zeichenkette (z.B. ein Wort oder eine Wortgruppe) im
        Korpus sucht, bekommt man in der Regel Zeilen (Konkordanzen) angezeigt,
        in denen das Suchobjekt vorkommt, ergänzt durch ein wenig Text davor und
        danach. Es handelt sich um Textschnipsel, die nicht immer grammatisch
        vollständige Sätze sein müssen. Anhand solcher Konkordanzen lassen sich
        jedoch bereits wichtige Hinweise gewinnen, in welchen Satzzusammenhängen
        eine sprachliche Einheit häufig verwendet wird (typische Kontextmuster),
        z.B. häufig eingebettet in wörtliche Rede; mit Modalverben oder
        Negationswörtern verbunden. Bei Wortgruppen kann man bspw. erkennen, wie
        fest oder variabel sie sind.</p>
    <p>Im Syntagmatikon werden KWICs nicht nur als Analysebasis verwendet,
        sondern auch als lexikografische Angaben als auch händisch sortierte
        KWICs als Kurzbelege angeben:</p>
        <br/>
    <h3>Beispiele</h3><br />
    <btn-korap-search query="unter /+w1:1 Zeitdruck" language="Cosmas II">unter /+w1:1 Zeitdruck<br />Suche die Präposition
        <em>unter</em> in Groß-
        und Kleinschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em>
        (ohne Leerstelle)</btn-korap-search><br />
    <btn-korap-search query="Unter /+w1:1 Zeitdruck" language="Cosmas II">Unter /+w1:1 Zeitdruck<br />Suche die Präposition
        <em>unter</em> in
        Großschreibung unmittelbar gefolgt vom Nomen <em>Zeitdruck</em> (ohne
        Leerstelle)</btn-korap-search><br />
    <btn-korap-search query='ich /+w1:1 liebe /+w1:1 es' language="Cosmas II">ich /+w1:1 liebe /+w1:1
        es<br /> Suche die Wortfolge ich liebe es (in Groß- und Kleinschreibung) ohne
        interne Leerstelle mit Satzendezeichen</btn-korap-search><br />
</template>