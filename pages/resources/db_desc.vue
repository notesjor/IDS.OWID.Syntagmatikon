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
        props.title = 'Deskriptive Datenbanken';
        props.parent = 'Ressourcentypen';
    },
}
</script>

<template>
    <NuxtImg src="/img/resources/02.png" alt="Deskriptive Datenbanken"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <p>Die deskriptiven Datenbanken im <hi>Syntagmatikon</hi> stellen eine Kombination aus automatisch erstellten
        Datenmengen und qualitativ erarbeiteten Informationen dar. Die Basis bilden Korpuserhebungen, bei denen
        <NuxtLink to="/datatypes/frequency">Frequenzen</NuxtLink> ermittelt und <NuxtLink to="/datatypes/matches">
            Korpusbelege</NuxtLink> extrahiert wurden. Diese empirische Basis wurde im weiteren Arbeitsverlauf nach
        spezifischen
        linguistischen Modellen manuell ausgewertet und <u>annotiert</u>.
    </p>
    <p>Solche Datenbanken bieten automatische Suchfunktionen an, mit denen die sprachlichen Ausdrucksgruppen
        und -muster (<u>Muster</u>) nach unterschiedlichen linguistischen Kriterien zusammengestellt werden
        können.</p>
    <resources-list :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter']" :showDesc="false"></resources-list>
</template>