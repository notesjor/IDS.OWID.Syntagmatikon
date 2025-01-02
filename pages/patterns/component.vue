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
        props.title = 'Lexikografische Angaben';
        props.parent = 'Musterzugänge';
    },
}
</script>

<template>
    <p>In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente von
        Wörterbuchartikeln angeboten, und zwar in
        <r rkey="PREPCON_kon" /> und
        <r rkey="FesteWV" />.
    </p>
    <resources-list :filter="['PREPCON_kon', 'SPRW', 'FesteWV']" />
    <h2>Beispiele</h2>
    <v-carousel style="height:400px">
        <v-carousel-item>
            <NuxtImg src="/img/patterns/component/component01.png" />
        </v-carousel-item>
        <v-carousel-item>
            <NuxtImg src="/img/patterns/component/component02.png" />
        </v-carousel-item>
        <v-carousel-item>
            <NuxtImg src="/img/patterns/component/component03.png" />
        </v-carousel-item>
        <v-carousel-item>
            <NuxtImg src="/img/patterns/component/component04.png" />
        </v-carousel-item>
    </v-carousel>
</template>