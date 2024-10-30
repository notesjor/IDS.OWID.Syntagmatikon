<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/resources">
                Zurück zu "Ressourcentypen"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Online-Wörterbücher</h1>
    <img src="/img/resources/04.png" alt="Wörterbücher" style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <p>Online-Wörterbücher im <hi>Syntagmatikon</hi> beinhalten korpusbasierte Einträge im Hypertextformat mit
        lexikografisch verfassten Texten zu Bedeutungen, typischen Gebrauchsmerkmalen, Kontexten, Varianten und
        Abwandlungen, semantischen und pragmatischen Feldern und Verlinkungen angereichert mit Korpusbelegen und anderen
        Korpusdaten.</p>
    <br />
    <resources-list :filter="['SPRW', 'FesteWV']" :showDesc="false"></resources-list>
</template>