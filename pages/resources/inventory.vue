<template>
    <h1>Inventare und Sammlungen</h1>
    <p>Inventare im Syntagmatikon sind aus dem Korpus extrahierte oder im
        Korpus überprüfte Sammlungen sprachlicher Ausdrücke ähnlichen Typs. Der
        Wert dieser Ressourcen liegt darin, dass solche Listen die
        Gebräuchlichkeit dieser Einheiten mittels Korpusanalysen dokumentieren.
        In der Zeit vor den Korpora basierten Sammlungen zumeist auf früheren
        Sammlungen und Listen. Es gab ein historisch gewachsenes
        Beispielgedächtnis. Dies führte u.a. zu oft beklagten veralteten
        Beispiele in Wörterbüchern und Lehrwerken.</p>
    <p>Korpusbasierte Inventare können als gesicherte empirische Basis für
        die Forschung als auch Referenzquellen für Wörterbücher und
        Lehrmaterialien von Nutzen sein.</p>
    <p>Ein Inventar kann jedoch nie alle Ausdrücke eines
        Wortschatzausschnittes erfassen, da auch die zugrunde liegende
        Korpusbasis immer nur eine Stichprobe der Sprache darstellt. Aber
        diejenigen Kandidaten, die z.B. eine große Häufigkeit aufweisen, sind
        von gesicherter Usualität.</p>
    <p>Bezüglich der Kandidatenauswahl sind zwei Wege zu unterscheiden:</p>
    <br />&nbsp<br />
    <strong style="text-overflow: ellipsis;">Listeneinträge wurde aus dem Korpus
        ex&shy;tra&shy;hiert:</strong>
    <resources-list :filter="['PHKO']" :showDesc="false"></resources-list>
    <br />&nbsp<br />
    <strong>Existierende Listen wurden im Korpus über&shy;prüft:</strong>
    <resources-list :filter="['SpruchList', 'PhrasKomp', 'PREPCON_temp', 'DTWW']" :showDesc="false"></resources-list>
</template>