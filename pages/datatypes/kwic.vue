<template>
 <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/datatypes">
            Zurück zu "Informationstypen"
        </NuxtLink>
        </div> 
    </v-btn>

<h1>KWICs</h1>
    <h2>KeyWords In Context: „Schlüsselwörter im Kontext“</h2>
<p>Wenn man eine Zeichenkette (z.B. ein Wort oder eine Wortgruppe) im Korpus sucht, bekommt man in der Regel Zeilen (Konkordanzen) angezeigt, in denen das Suchobjekt vorkommt, ergänzt durch ein wenig Text davor und danach. <v-btn density="compact" size="small" variant=tonal icon="mdi-plus" @click="toggleDiv"></v-btn></p>
<div class="more" v-show="isVisible">
Es handelt sich um Textschnipsel, die nicht immer grammatisch vollständige Sätze sein müssen. Anhand solcher Konkordanzen lassen sich jedoch bereits wichtige Hinweise gewinnen, in welchen Satzzusammenhängen eine sprachliche Einheit häufig verwendet wird (typische Kontextmuster), z.B. häufig eingebettet in wörtliche Rede; mit Modalverben oder Negationswörtern verbunden. Bei Wortgruppen kann man bspw. erkennen, wie fest oder variabel sie sind.</div>
<p>Im Syntagmatikon dienen automatisch ermittelte KWICs nicht nur als empirische Basis, sondern werden selbst als lexikografische Informationseinheiten in folgenden Ressourcen angeboten: 
    <resources-list-compact :filter="['WVBF', 
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'SpruchList']"></resources-list-compact> 
</p>

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