<template>
        <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Verben</h1>
    <resources-list :filter="['MAP', 'Verlaufsformen']"></resources-list>
</template>