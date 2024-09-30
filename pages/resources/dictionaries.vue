<template>
       <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/resources">
            Zurück zu "Ressourcentypen"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Wörterbücher</h1>
    <img src="/img/resources/04.png" alt="Wörterbücher" style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <p>Online-Wörterbücher im Syntagmatikon beinhalten korpusbasierte Wörterbuchartikel im Hypertextformat.
        Unter diese Kategorie fallen sowohl Ressourcen mit einer sehr komprimierten Artikelstruktur (Belege;
        Kategorien; <a href="https://www.owid.de/wb/progdb/start.html">Verlaufsformen</a>; <a
            href="https://www.owid.de/plus/redeeinleiter/">Redeeinleiter</a>) als auch solche mit lexikografisch
        verfassten Texten zu Aspekten wie Bedeutungen, typischen Gebrauchsmerkmalen, Kontexten, Varianten und
        Abwandlungen angereichert mit Korpusdaten (<a
            href="https://www.owid.de/wb/sprw/start.html">Sprichwörterbuch</a>; 
        <a href="https://www.owid.de/artikel/309077">Feste Wortverbindungen</a>; <a
            href="http://wvonline.ids-mannheim.de/idiome_russ/hintergrund.htm">Deutsche Russische Idiome
            online</a>)</p>
    <br />
    <resources-list :filter="['SPRW', 'DRI', 'FesteWV']" :showDesc="false"></resources-list>
</template>