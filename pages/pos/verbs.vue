<template>
      <v-btn>
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
    </v-btn>
    <h1>Verben</h1>
    <resources-list :filter="['MAP', 'Verlaufsformen']"></resources-list>
</template>