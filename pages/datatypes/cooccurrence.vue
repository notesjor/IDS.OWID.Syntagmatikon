<template>
     <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/datatypes">
            Zurück zu "Informationstypen"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Kookkurrenzprofile</h1>
    <h2>Typische Partnerwörter</h2>

    <p>Mithilfe statistischer Berechnungen (sog. Kookkurrenzanalysen) lassen sich besondere Anziehungskräfte (Cluster) zwischen Wörtern und Wortgruppen im Korpus ermitteln. Das bedeutet, dass bestimmte sprachliche Einheiten überproportional häufig in der Umgebung des Suchobjekts vorkommen. Dieser „Wort-Magnetismus“ spiegelt sich in Partnerwort-Profilen, deren Auswertung mittlerweile zu den wichtigsten Werkzeugen in der Wörterbucharbeit gehören.</p>  
<p>Die Partnerwort-Cluster lenken den Blick u.a. auf typische Bedeutungen oder Bewertungen, die Sprecher mit einem Wort oder einer Wortgruppe in bestimmten wiederkehrenden Situationen, Diskursen, Domänen usw. verbinden. Solche Profile enthalten auch stark verfestigte Verbindungen, wie Kollokationen oder Redewendungen, die zentrale sprachliche Bausteine (z.B. beim Fremdsprachenerwerb) darstellen. 
    Im Syntagmatikon sind automatisch erstellte Kookkurrenzprofile in folgenden Ressourcen abrufbar:</p>
    <ul>
        <li><resources-list-compact :filter="['PREPCON_temp']"/> (Rubrik „Kurzartikel“) </li>
        <li><resources-list-compact :filter="['PREPCON_kon']"/>  („Quantitative Angaben“) </li>
        <li><resources-list-compact :filter="['WVBF']"/></li>
    </ul>
<p>Zur Interpretation von Kookkurrenzdaten im Syntagmatikon siehe 
    <div class="nolink">
    <nuxt-link to="/examples/kook-am-Ende"> 
        <v-btn prepend-icon="mdi-lightbulb-on" class="nocaps">
       Fallbeispiel <em>am Ende</em>
    </v-btn>
    </nuxt-link>
    </div>
    </p>
   
</template>
