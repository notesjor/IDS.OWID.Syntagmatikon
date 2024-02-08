<template>
    <h1>Wörterbücher</h1>
    <p>Online-Wörterbücher im Syntagmatikon beinhalten korpusbasierte Wörterbuchartikel im Hypertextformat.
        Unter diese Kategorie fallen sowohl Ressourcen mit einer sehr komprimierten Artikelstruktur (Belege;
        Kategorien <a href="https://www.owid.de/wb/progdb/start.html">Verlaufsformen</a>; <a
            href="https://www.owid.de/plus/redeeinleiter/">Redeeinleiter</a>)als auch solche mit lexikografisch
        verfassten Texte zu Aspekten wie Bedeutungen, typischen Gebrauchsmerkmalen, Kontexten, Varianten und
        Abwandlungen angereichert mit Korpusdaten (<a href="https://www.owid.de/wb/sprw/start.html">Sprichwörterbuch</a>;
        Feste <a href="https://www.owid.de/artikel/309077">Wortverbindungen</a>; <a
            href="http://wvonline.ids-mannheim.de/idiome_russ/hintergrund.htm">Deutsche Russische Idiome
            online</a>)</p>
            <br />
            <resources-list :filter="['SPRW', 'DRI']" :showDesc="false"></resources-list>
</template>