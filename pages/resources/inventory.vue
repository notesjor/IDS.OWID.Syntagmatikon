<script setup>
definePageMeta({
    layout: "subpage",
})
</script>
<script>
import { useLayoutStore } from '~/stores/layout';
export default {
    mounted() {
        const props = useLayoutStore();
        props.title = 'Inventare und Sammlungen';
        props.parent = 'Ressourcentypen';
    },
}
</script>

<template>
    <NuxtImage src="/img/resources/inventory.png" alt="Inventare und Sammlungen"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <p>Die Inventare im <hi>Syntagmatikon</hi> sind aus dem Korpus extrahierte oder im Korpus überprüfte große Sammlungen
        sprachlicher Ausdrücke ähnlichen Typs.</p>
    <p>In der Zeit vor den Korpora basierten Sammlungen zumeist auf früheren Sammlungen und Listen. Es gab ein
        historisch gewachsenes Beispielgedächtnis. Dies führte u.a. zu oft beklagten veralteten Beispielen in
        Wörterbüchern und Lehrwerken. Korpusbasierte Inventare können dagegen sowohl als gesicherte empirische Basis für
        die Forschung als auch als Referenzquellen für Wörterbücher und Lehrmaterialien von Nutzen sein.</p>
    <p>Ein Inventar kann jedoch nie alle Ausdrücke eines Wortschatzausschnittes erfassen, da auch die zugrundeliegende
        Korpusbasis immer nur eine Stichprobe der Sprache darstellt. Aber diejenigen Kandidaten, die z.B. eine große
        Häufigkeit aufweisen, sind von gesicherter Gebräuchlichkeit.</p>
    <p>Bezüglich der Kandidatenauswahl sind zwei Wege zu unterscheiden:</p>
    <p>Listeneinträge wurden aus dem Korpus
        ex&shy;tra&shy;hiert:</p>
    <resources-list :filter="['PhrasKomp', 'PREPCON_temp']" :showDesc="false"></resources-list>
    <p>Existierende Listen wurden im Korpus überprüft:</p>
    <resources-list :filter="['SpruchList', 'DTWW']" :showDesc="false"></resources-list>
</template>