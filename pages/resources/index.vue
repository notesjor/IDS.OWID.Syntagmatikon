<script setup>
definePageMeta({
  layout: "full"
})
</script>

<template>
  <div style="max-width: var(--TXT-WIDTH); margin:auto">
    <h1>Ressourcentypen</h1>
    <p>Das <hi>Syntagmatikon</hi> vereint sehr unterschiedliche Ressourcentypen. Die Zuordnungen basieren auf Kriterien
      wie Menge der aufbereiteten Daten, Grad der Vollständigkeit sowie Verhältnis von automatischer Datenaufbereitung;
      händischer Bearbeitung und linguistisch-lexikografischer Beschreibung.</p>
    <p>Die aufgeführten Beispielressourcen sind jeweils die prototypischen Vertreter. Gleichzeitig gibt es zahlreiche
      Überschneidungen zwischen den Ressourcen: Eine Datenbank kann z.B. gleichzeitig als Inventar verstanden werden wie
      <r rkey='PREPCON_ex' /> oder
      <r rkey='KoMuX' />.
    </p>
    <p>Jedes Kästchen linkt zu einer Hintergrundseite mit Screenshots und kurzen Erklärungen zur Charakteristik der
      einzelnen Ressourcen.</p>
  </div>
  <div>
    <v-row>
      <v-col>
        <empty />
        <headline :h="4">Ressourcentypen im Syntagmatikon</headline>
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