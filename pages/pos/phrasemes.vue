<template>
         <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Phraseme</h1>
    <resources-list :filter="['PhrasKomp', 'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'MAP', 'Redeeinleiter', 'DTWW']"></resources-list>
</template>