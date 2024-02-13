<template>
    <h1>Dynamische Erschließung von Mustern</h1>
    <p>In vielen Ressourcen kann sich der Nutzer selbst Muster erschließen, zum einen durch automatische Suchen und
        Sortierungen; zum anderen durch eigene analytische Gruppierungen.</p>
    <resources-list :filter="['KoMuX', 'PREPCON_ex', 'PREPCON_temp', 'Redeeinleiter', 'Verlaufsformen']"/>
    <h2>Beispiele</h2>
    <v-carousel>        
        <v-carousel-item src="/img/patterns/dynamic/dynamic01.png"></v-carousel-item>
        <v-carousel-item src="/img/patterns/dynamic/dynamic02.png"></v-carousel-item>
        <v-carousel-item src="/img/patterns/dynamic/dynamic03.png"></v-carousel-item>
        <v-carousel-item src="/img/patterns/dynamic/dynamic04.png"></v-carousel-item>
        <v-carousel-item src="/img/patterns/dynamic/dynamic05.png"></v-carousel-item>
    </v-carousel>
</template>