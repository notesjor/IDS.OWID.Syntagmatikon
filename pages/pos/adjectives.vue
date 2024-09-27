<template>
     <v-btn>
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
    </v-btn>
    
    <h1>Adjektive</h1>
    <resources-list :filter="['WVBF', 'KoMuX', 'PREPCON_kon', 'PhrasKomp']"></resources-list>
</template>