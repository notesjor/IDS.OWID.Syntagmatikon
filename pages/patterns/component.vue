<template>
    <h1>Musterangaben als Komponente lexikografischer Beschreibungen</h1>
    <p>In einigen Ressourcen werden von Hand aufbereitete Musterangaben und -visualisierungen als eine Komponente von Wörterbuchartikeln angeboten, und zwar in „PREPCON<sup>kontrastiv</sup> und „Feste Wortverbindungen“.</p>
    <resources-list :filter="['PREPCON_kon', 'SPRW']"/>
    <h2>Beispiele</h2>
    <v-carousel>        
        <v-carousel-item src="/img/patterns/component/component01.png"></v-carousel-item>
        <v-carousel-item src="/img/patterns/component/component02.png"></v-carousel-item>
        <v-carousel-item src="/img/patterns/component/component03.png"></v-carousel-item>
        <v-carousel-item src="/img/patterns/component/component04.png"></v-carousel-item>        
    </v-carousel>
</template>