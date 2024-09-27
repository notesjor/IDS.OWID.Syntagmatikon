<template>
      <v-btn>
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
    </v-btn>
    <h1>Präpositionen</h1>
    <resources-list :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon',, 'MAP', 'Verlaufsformen', 'WVBF']"></resources-list>
</template>