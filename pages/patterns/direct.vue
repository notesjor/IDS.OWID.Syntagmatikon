<template>
    <h1>Direkter Zugang über Muster</h1>
    <p>In diesen Ressourcen bilden Muster den primären Zugriff auf die aufbereiteten Daten und die lexikografischen
        Beschreibungen. Das heißt, alle Informationen sind über das Netzwerk semiabstrakter Schablonen herleitbar.</p>
    <resources-list :filter="['MAP', 'WVBF']" />
    <h2>Beispiele</h2>
    <v-carousel>
        <v-carousel-item><img src="/img/patterns/direct/direct03.png" /></v-carousel-item>
        <v-carousel-item><img src="/img/patterns/direct/direct01.png" /></v-carousel-item>
        <v-carousel-item><img src="/img/patterns/direct/direct02.png" /></v-carousel-item>
    </v-carousel>
</template>