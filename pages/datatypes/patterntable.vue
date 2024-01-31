<template>
    <h1>Beispiele für externe Ressourcen</h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias illum adipisci nesciunt eum dolore. Totam numquam
    reprehenderit minima, obcaecati nulla eligendi labore, dicta ad temporibus amet saepe nam libero sed?
    <br />&nbsp;<br />
    <h3>Jede Ressource im Syntagmatikon</h3>
    <btn-external-resource label="Name der Ressouce"
        url="http://uwv.ids-mannheim.de/prepcon/modul2/inventar/inventar_feier.html#ab_Heiligabend">
        Hier eine kurze Beschreibung
    </btn-external-resource>
    <btn-external-resource label="PREPCON"
        url="http://uwv.ids-mannheim.de/prepcon/modul2/inventar/inventar_feier.html#ab_Heiligabend">
        Ab Heiligabend
    </btn-external-resource>
    <btn-external-resource label="KoMuX" resource="KoMuX" query="Bürgermeister">
        Komposita 'Bürgermeister'
    </btn-external-resource>
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque sed nemo quisquam neque. Animi incidunt ullam
    natus labore porro voluptatibus quo, rerum voluptatum, harum neque tempore commodi at reiciendis.
    <br />&nbsp;<br />
    <h3>Externe Ressourcen als Beispiel</h3>
    <btn-korap-search label="KorAP" query='ich /+w1:1 liebe /+w1:1 es' language="Cosmas II">
        Belege für die Abfolge <em>ich liebe es</em> ohne Leerstelle (Cosmas II-Abfrage)
    </btn-korap-search>
    <btn-korap-search label="KorAP" query='[orth=die/i & pos=ART] [orth=unglaubliche/i & pos=ADJA] [pos=NN]'
        language="Poliqarp">
        Poliqarp-Abfrage: <em>[orth=die/i] [orth=unglaubliche/i & pos=ADJA] [pos=NN]</em>
    </btn-korap-search>
    <btn-external-resource label="Kookkurrenzen" url="https://barometer.diskurslinguistik.net/ui_cooccurrence.html">
        Beispiel für eine externe Ressource
    </btn-external-resource>
    <btn-owid-plus-live-search query='ich liebe es'>ich liebe es<br />
        Suche die Wortfolge <em>ich liebe es</em> (in Groß- und Kleinschreibung) ohne
        interne Leerstelle mit Satzendezeichen
    </btn-owid-plus-live-search>
</template>