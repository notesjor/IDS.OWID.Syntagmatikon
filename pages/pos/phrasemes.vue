<template>
      <v-btn>
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
    </v-btn>
    <h1>Phraseme</h1>
    <resources-list :filter="['PhrasKomp', 'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'MAP', 'Redeeinleiter', 'DTWW', 'DRI']"></resources-list>
</template>