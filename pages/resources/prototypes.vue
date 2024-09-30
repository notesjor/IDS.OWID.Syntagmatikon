<template>
       <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/resources">
            Zurück zu "Ressourcentypen"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Pilot- und Einzelstudien</h1>
    <img src="/img/resources/05.png" alt="Pilot- und Einzelstudien" style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <div>
        Korpuszentrierte Präsentationsformate betonen die Analyse manuell systematisierter Korpusdaten. Hierbei
        werden Gebrauchsmerkmale direkt aus authentischen Sprachdaten erschlossen, um die Sprache realitätsnah zu
        erforschen. Optionale narrative Kommentare bieten zusätzlichen Kontext, ohne den Fokus von den primären
        Korpusdaten abzulenken.
    </div>
    <resources-list :filter="['PREPCON_kon', 'WVBF']"></resources-list>
</template>