<template>
      <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Nomina</h1>
    <resources-list :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'WVBF', 'PhrasKomp']"></resources-list>
</template>