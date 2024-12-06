<script setup>
definePageMeta({
  layout: "subpage",
})
</script>
<script>
import { useLayoutStore } from '~/stores/layout';
export default {
  mounted() {
    const props = useLayoutStore();
    props.title = 'Explorative Datenbanken';
    props.parent = 'Ressourcentypen';
  },
}
</script>

<template>
  <v-row>
    <v-col>
      <div>
        <p>
          <img src="/img/resources/01.png" alt="Explorative Datenbanken"
            style="float:right; margin: 1em 1em 0 1em; width: 40%;" />

          Die explorativen Datenbanken im <hi>Syntagmatikon</hi> bieten Informationen zu umfassenden Sprachausschnitten auf
          der Basis von Korpusdaten (aktuell: Komposita und Präposition-Nomen-Verbindungen). Solche Datenbanken
          zeichnen sich dadurch aus, dass sie primär automatisch erstellt wurden und keine qualitativen Angaben
          enthalten (z.B. Bedeutungsbeschreibungen). Sie bieten einen strukturierten Zugang zu sprachlichen
          Massendaten: Mithilfe von Suchen kann man sich Zusammenhänge innerhalb eines Wortschatzausschnitts
          erschließen, die sonst aufgrund der schieren Masse nicht sichtbar wären. Wie die Ergebnisse zu
          interpretieren sind, hängt dann vom Erkenntnisinteresse ab. Man muss aber immer damit rechnen, dass es
          Befunde gibt, die nicht in das eigene Erwartungsraster passen, denn der Computer „rechnet“ nur.
        </p>
        <resources-list :filter="['KoMuX', 'PREPCON_ex']" :showDesc="false"></resources-list>

      </div>
    </v-col>
  </v-row>
</template>