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
        props.title = 'Pilot- und Einzelstudien';
        props.parent = 'Ressourcentypen';
    },
}
</script>

<template>
    <img src="/img/resources/05.png" alt="Pilot- und Einzelstudien"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <div>
        <p>Bei den Pilotstudien im <hi>Syntagmatikon</hi> handelt es sich um exemplarische Fallstudien zu ausgewählten
            syntagmatischen Aspekten, bei denen neue datennahe Präsentationsformate entwickelt und ausgetestet wurden.
            Im Zentrum stehen Kookkurrenzprofile, Lückenfüllertabellen und KWICs.
            <r rkey="WVBF" /> ist eine netzartige, hierarchische Visualisierung, bei der die Knoten mit Korpusdaten
            und Kommentaren angereichert werden. In
            <r rkey="PREPCON_kon" /> wird ein Vorgehensmodell für die manuelle Aufbereitung von Korpusdaten im
            Sprachkontrast präsentiert.
        </p>
    </div>
    <resources-list :filter="['PREPCON_kon', 'WVBF']"></resources-list>
</template>