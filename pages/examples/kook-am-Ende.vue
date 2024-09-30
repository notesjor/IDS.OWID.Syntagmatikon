<template>
     <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/examples">
            Zurück zu "Fallbeispiele"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Kookkurrenzprofile: Beispiel <em>am Ende</em></h1>
    <div >Beispiel aus  <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact></div>
    <v-carousel>
                        <v-carousel-item><img src="/img/datatypes/kook/amEnde_kookzeilen.PNG" /></v-carousel-item>
                        <v-carousel-item><img src="/img/datatypes/kook/Clusters_amEnde_1_1_KA_oFW_3.png" /></v-carousel-item>
                    </v-carousel>

    <p>Das <u><em>am Ende</em>-Profil</u> zeigt u.a. folgendes: Bestimmte
                Partnerwörter deuten auf feste Wendungen hin wie <em>Licht</em>
                (<em>Licht a</em>. <em>E</em>. <em>des Tunnels</em>, <em>leeren
                    Händen</em> (<em>a</em>. <em>E</em>. <em>mit leeren Händen
                    dastehen</em>) oder <em>Fahnenstange</em> (<em>a</em>. <em>E</em>.
                <em>der Fahnenstange angelangen</em>). Typische assoziierte Nomina
                bilden ab, dass <em>am Ende</em> in bestimmten Wortgruppen temporal
                (<em>Jahres</em>; <em>Abends</em>; <em>Wochenendes</em>); lokal
                (<em>Augustinerstraße</em>; <em>Linkskurve</em>;
                <em>Strafraumgrenze</em>) oder bezogen auf Ereignisse
                (<em>Gottesdienstes</em>; <em>Gesprächs</em>; <em>Weltkriegs</em>)
                verwendet wird. Partnerwörter wie <em>Applaus</em> oder <em>fehlte
                    Quäntchen</em> wiederum sind Label für typische Kontexte (Applaus gibt
                es am Ende eines Konzerts; Ein Quäntchen Glück fehlt oft im sportlichen
                Wettkampf). Die Teilbedeutung ‚schließlich‘/‘letztlich‘ als Ausdruck des
                In-Aussichtstellens eines finalen Resultats wird besonders bei verbalen
                Partnerwörtern wie <em>reichte</em> (<em>reichte es am Ende nicht</em>)
                oder heraus (<em>was</em> a. E. <em>herausspringt</em>) angezeigt.
            </p>
            <p>Es kann es auch Resultate geben, die falsch oder gar unsinnig
                erscheinen (z.B. das Zeichen <strong>&amp;</strong> im <em><u>am
                        Ende-Profil</u></em>). Aber der Computer „konstatiert“ nur blind jedwede
                statistische Auffälligkeit. Die Beurteilung der Aussagekraft von Daten
                muss der Mensch treffen. Beispiele für inhaltliche Gruppierungen von
                Partnerwörtern findet man in PREPCON<sup>online</sup> kontrastiv (s.
                <u>Satellitenfelder</u>) und automatisch (<a
                    href="https://www1.ids-mannheim.de/kl/projekte/methoden/ka.html">Kookkurrenzanalyse</a>
                s. <a href="https://www1.ids-mannheim.de/kl/projekte/methoden/ur.html">Belica
                    1995</a>; <a href="https://www.sketchengine.eu/guide/concordance-a-tool-to-search-a-corpus/">CA
                    in Sketch Engine</a>).
            </p>
    
</template>