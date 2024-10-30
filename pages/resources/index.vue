<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 80ch; margin:auto">
    <v-row>
      <v-col>
        <headline :h="1" color1="#ff3661" color2="#3468eb">Ressourcentypen</headline>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>Das <hi>Syntagmatikon</hi> vereint sehr unterschiedliche Ressourcentypen, die
            im Folgenden kurz charakterisiert werden. Als Kriterien dienten der Grad
            der Exhaustivität sowie das Verhältnis von automatischer
            Datenaufbereitung; händischer Bearbeitung und
            linguistisch-lexikografischer Beschreibung.</p>
          <p>
            Die aufgeführten Beispielressourcen sind jeweils die prototypischen Vertreter.
            Das heißt, dass diese hauptsächlich durch den zuvor
            beschriebenen Typ charakterisiert sind. Gleichzeitig gibt es zahlreiche
            Überschneidungen zwischen den Ressourcen: Eine Datenbank kann z.B.
            gleichzeitig als Inventar verstanden werden wie
            PREPCON<sup>explorativ</sup> oder KoMuX. Um diese Mehrfachzuordnung
            sichtbar zu machen, wurden Suchattribute hinzugefügt, die eine
            automatische Bündelung nach spezifischen Kriterien ermöglichen.</p>
        </div>
      </v-col>
    </v-row>
  </div>
  <div style="max-width: 100ch;">
    <v-row>
      <v-col cols="12">
        <div class="container nolink">
          <info-box title="Explorative Datenbanken" link="/resources/db_expl" :filter="['KoMuX', 'PREPCON_ex']"
            color1="#ff3661" color2="#3468eb">
            Primär automatisch erstellte Informationen zu umfassenden Sprachausschnitten auf der Basis von
            Korpusdaten
          </info-box>

          <info-box title="Deskriptive Datenbanken" link="/resources/db_desc"
            :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter']" color1="#ff3661" color2="#3468eb">
            Eine Kombination aus automatisch erstellten
            Datenmengen und qualitativ erarbeiteten Informationen
          </info-box>

          <info-box title="Inventare und Sammlungen" link="/resources/inventory"
            :filter="['SpruchList', 'PhrasKomp', 'PREPCON_temp', 'DTWW']" color1="#ff3661" color2="#3468eb">
            Aus dem Korpus extrahierte oder im
            Korpus überprüfte Sammlungen sprachlicher Ausdrücke ähnlichen Typs
          </info-box>

          <info-box title="Online-Wörterbücher" link="/resources/dictionaries" :filter="['SPRW', 'FesteWV']"
            color1="#ff3661" color2="#3468eb">
            Korpusbasierte Wörterbuchartikel im Hypertextformat
          </info-box>

          <info-box title="Pilotstudien" link="/resources/prototypes" :filter="['PREPCON_kon', 'WVBF']" color1="#ff3661"
            color2="#3468eb">
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
      highlight: null,
    };
  },
  mounted() {
    if (this.$route.query.highlight) {
      this.highlight = this.$route.query.highlight;
    }
  },
  methods: {
    highlightItem(item) {
      return this.highlight == item ?
        "max-width: 350px; margin:10px; border: 3px solid black" :
        "max-width: 350px; margin:10px";
    }
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
}

td {
  text-align: center;
}
</style>
<style scoped>
.v-list-subheader {}
</style>
<style scoped>
.containerItem {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-template-areas:
    "left middle";
  margin: 10px 5px 10px 5px;
  padding: 5px;
  border-top: 1px solid #ddd;
}

.containerItem:hover {
  background-color: #ddd;
}

.left {
  grid-area: left;
}

.middle {
  grid-area: middle;
  text-align: left;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: none;
  margin: 10px 20px 10px 20px;
  border-top: 1px solid #d6d6d6;
  padding-top: 10px;
}

li:hover {
  background-color: #d6d6d6;
}
</style>