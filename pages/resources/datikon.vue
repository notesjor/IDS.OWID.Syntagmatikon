<template>
    <h1>Datikon</h1>
    <div>
        <p>Das Datikon enthält dynamisch-flexible Präsentations- und
            Visualisierungsformen, bei denen automatisch ermittelte
            Korpusausschnitte wie KWICs, Kookkurrenzprofile und Slot-Filler-Tabellen
            ins Zentrum der Ressource rücken. Informationen zu usuellem Gebrauch
            sind primär anhand von linguistisch systematisierten, aber authentischen
            Sprachausschnitten ableitbar sind. (<a
                href="http://uwv.ids-mannheim.de/prepcon/infotexte/info.html#sprachaneignung">Sprachaneignung
                durch wiederkehrende Muster</a>)
            Die ordnende Hand bleibt jedoch unverzichtbar. Der Unterschied zu
            herkömmlichen Beschreibungen ist nur, dass die analytische Arbeit – wenn
            man so will – eher im Hintergrund abläuft, damit in großen Teilen
            implizit bleibt, und nicht (oder nur knapp) in Form von metasprachlichen
            Texten sichtbar wird.</p>

    </div>
    <resources-list :filter="['WVBF', 'PREPCON']"></resources-list>
</template>