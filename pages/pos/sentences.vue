<template>
      <v-btn>
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
    </v-btn>
    <h1>Feste Sätze</h1>
    <resources-list :filter="['SpruchList', 'PhrasKomp', 'SPRW']"></resources-list>
</template>