<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/examples">
                Zurück zu "Fallbeispiele"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Kookkurrenzprofile: Beispiel <em>am Ende</em></h1>
    <div class="caption">Beispiel aus <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact></div>
    <v-carousel>
        <v-carousel-item><img src="/img/datatypes/kook/amEnde_kookzeilen.png" /></v-carousel-item>
        <v-carousel-item><img src="/img/datatypes/kook/Clusters_amEnde_1_1_KA_oFW_3.png" /></v-carousel-item>
    </v-carousel>

    <p>Das <u><em>am Ende</em>-Profil</u> zeigt u.a. folgendes:</p>
    <p>Bestimmte Partnerwörter bzw. -wortgruppen deuten auf feste Wendungen
        hin wie <span class="pos_highlight">Tunnel Licht</span> (<em>Licht am Ende des
            Tunnels</em>): <span class="pos_highlight">Fahnenstange angelangt</span> (<em>am Ende der Fahnenstange angelangen</em>), <span class="pos_highlight">Latein</span>
        (<em>am Ende mit seinem Latein sein</em>). In bestimmten Clustern deuten
        weitere in der Umgebung häufig vorkommende Wörter auf typische
        Verwendungen hin, z. B. <span class="pos_highlight">erkennbar</span> bei <span class="pos_highlight">Tunnel Licht</span>
        (<em>es ist Licht am Ende des Tunnels erkennbar</em>).
    </p>
    <p>Typische assoziierte Nomina bilden ab, dass <em>am Ende</em> in
        bestimmten Wortgruppen temporal <span class="pos_highlight">Tages</span>; <span class="pos_highlight">Jahrhunderts</span>;
        <span class="pos_highlight">Wochenendes</span>; lokal <span class="pos_highlight">Augustinerstraße</span>;
        <span class="pos_highlight">Linkskurve</span>; 
        <span class="pos_highlight">Strafraumgrenze</span> oder bezogen auf
        Ereignisse <span class="pos_highlight">Gottesdienstes</span>; <span class="pos_highlight">Gesprächs</span>;
        <span class="pos_highlight">Weltkriegs</span> verwendet wird.
    </p>
    <p>Partnerwörter wie <span class="pos_highlight">Applaus</span> oder <span class="pos_highlight">fehlte Quäntchen</span>
        wiederum sind Label für typische Kontexte (Applaus gibt es am Ende eines
        Konzerts; Ein Quäntchen Glück fehlt am Ende oft im sportlichen
        Wettkampf).</p>
    <p>Die Teilbedeutung ‚schließlich‘/‘letztlich‘ als Ausdruck des
        In-Aussichtstellens eines finalen Resultats wird besonders bei verbalen
        Partnerwörtern wie <span class="pos_highlight">reichte</span> (<em>reichte es am Ende nicht</em>)
        oder <span class="pos_highlight">heraus</span> (<em>was am Ende herausspringt</em>)
        angezeigt.  <v-btn density="compact" size="small" variant=tonal icon="mdi-plus" @click="toggleDiv"></v-btn></p>
        <div class="more" v-show="isVisible">
    <p>Kookkurrenzlisten bieten immer nur erste Anhaltspunkte. Für die
        eigentliche Interpretation sind die „dahinter liegenden“ geclusterten
        Kontexte (KWICs, Volltextstellen) unabdingbar.</p>
    <p>Es kann es darüber hinaus Resultate geben, die falsch oder gar
        unsinnig erscheinen (z.B. das Zeichen <span class="pos_highlight">&amp;</span> im
        <em><u>am Ende-Profil</u></em>). Aber der Computer „konstatiert“ nur
        blind jedwede statistische Auffälligkeit. Die Beurteilung der
        Aussagekraft von Daten muss der Mensch treffen.
    </p>
    </div>

</template>

<script>
export default {
    data() {
      return {
        isVisible: false, // initial state of the div (visible)
      };
    },
    methods: {
      toggleDiv() {
        this.isVisible = !this.isVisible; // toggle visibility
      },
    },
  };
  </script>