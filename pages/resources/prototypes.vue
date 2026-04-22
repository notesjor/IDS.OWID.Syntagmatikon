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
    <NuxtImage src="/img/resources/prototypes.png" alt="Pilot- und Einzelstudien"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <div>
        <p>Die Pilotstudien im <hi>Syntagmatikon</hi> sind exemplarische Fallstudien zu ausgewählten syntagmatischen Aspekten, bei denen neue datennahe Präsentationsformate entwickelt und ausgetestet wurden. Im Zentrum stehen Kookkurrenzprofile, Lückenfüllertabellen und KWICs.</p>
        <p>Vorgehensmodell für die manuelle Aufbereitung von Korpusdaten im Sprachkontrast:</p>
        
    </div><resources-list :filter="['PREPCON_kon']"></resources-list>
    <p>Netzartige, hierarchische Visualisierung von Wortverbindungen und Mustern, bei der die Knoten mit Korpusdaten und Kommentaren angereichert werden:</p>
    <resources-list :filter="['WVBF']"></resources-list>
</template>