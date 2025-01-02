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
        props.title = 'Online-Wörterbücher';
        props.parent = 'Ressourcentypen';
    },
}
</script>

<template>
    <NuxtImage src="/img/resources/04.png" alt="Wörterbücher" style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <p>Online-Wörterbücher im <hi>Syntagmatikon</hi> beinhalten korpusbasierte Einträge im Hypertextformat mit
        lexikografisch verfassten Texten zu Bedeutungen, typischen Gebrauchsmerkmalen, Kontexten, Varianten und
        Abwandlungen, semantischen und pragmatischen Feldern und Verlinkungen angereichert mit Korpusbelegen und anderen
        Korpusdaten.</p>
    <br />
    <resources-list :filter="['SPRW', 'FesteWV']" :showDesc="false"></resources-list>
</template>