<script setup>
definePageMeta({
  layout: "full",
  ctitle: "Ressourcentypen im Syntagmatikon",
})
</script>

<template>
  <div style="max-width: var(--TXT-WIDTH); margin:auto">
    <h1>Ressourcentypen</h1>
    <p>In dieser <hi>Syntagmatikon</hi>-Rubrik werden die Ressourcen nach folgenden Kriterien gebündelt: Menge an aufbereiteten Daten, Grad der Vollständigkeit sowie Verhältnis von automatischer Datenaufbereitung, manueller Bearbeitung und linguistisch-lexikografischer Beschreibung.</p>
    <p>Die aufgeführten Beispielressourcen sind jeweils die prototypischen Vertreter. Gleichzeitig gibt es zahlreiche
      Überschneidungen zwischen den Ressourcen: Eine Datenbank kann z.B. gleichzeitig als Inventar verstanden werden wie
      <r rkey='PREPCON_ex' /> oder
      <r rkey='KoMuX' />.
    </p>
    <div class="comment-text">Jedes Kästchen führt zu einer Hintergrundseite mit Screenshots und kurzen Erklärungen zur
      Charakteristik der
      einzelnen Ressourcen.</div>
  </div>
  <div>
    <v-row>
      <v-col>
        <empty />
        <headline :h="4">Ressourcentypen im <hi>Syntagmatikon</hi>
        </headline>
        <div class="container nolink">
          <info-box title="Explorative Datenbanken" link="/resources/db_expl" :filter="['KoMuX', 'PREPCON_ex']"
            :color1="color1">
            Primär automatisch erstellte Informationen zu umfassenden Sprachausschnitten auf der Basis von
            Korpusdaten
          </info-box>

          <info-box title="Deskriptive Datenbanken" link="/resources/db_desc"
            :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter']" :color1="color1">
            Eine Kombination aus automatisch erstellten
            Datenmengen und qualitativ erarbeiteten Informationen
          </info-box>

          <info-box title="Inventare und Sammlungen" link="/resources/inventory"
            :filter="['SpruchList', 'PhrasKomp', 'PREPCON_temp', 'DTWW']" :color1="color1">
            Aus dem Korpus extrahierte oder im
            Korpus überprüfte Sammlungen sprachlicher Ausdrücke ähnlichen Typs
          </info-box>

          <info-box title="Online-Wörterbücher" link="/resources/dictionaries" :filter="['SPRW', 'FesteWV']"
            :color1="color1">
            Korpusbasierte Wörterbuchartikel im Hypertextformat
          </info-box>

          <info-box title="Pilotstudien" link="/resources/prototypes" :filter="['PREPCON_kon', 'WVBF']"
            :color1="color1">
            Linguistische Studien bzw. lexikografische Beschreibungen zu ausgewählten Phänomen
          </info-box>

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  theme: { dark: false },
  data() {
    return {
      color1: "#DF0C2F"
    };
  },
}
</script>