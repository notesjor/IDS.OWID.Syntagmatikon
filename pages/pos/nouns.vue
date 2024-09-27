<template>
      <v-btn>
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
    </v-btn>
    <h1>Nomina</h1>
    <resources-list :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'WVBF', 'PhrasKomp']"></resources-list>
</template>