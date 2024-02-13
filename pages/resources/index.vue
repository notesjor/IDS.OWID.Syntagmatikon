<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 80ch; margin:auto">
    <v-row>
      <v-col>
        <div>
          <h1>
            Ressourcen erklärt
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>Das Syntagmatikon vereint sehr unterschiedliche Ressourcentypen, die
            im Folgenden kurz charakterisiert werden. Als Kriterien dienten der Grad
            der Exhaustivität sowie das Verhältnis von automatischer
            Datenaufbereitung; händischer Bearbeitung und
            linguistisch-lexikografischer Beschreibung, Die aufgeführten Beispielressourcen
            sind jeweils die prototypischen
            Vertreter. Das heißt, dass diese hauptsächlich durch den zuvor
            beschriebenen Typ charakterisiert sind. Gleichzeitig gibt es zahlreiche
            Überschneidungen zwischen den Ressourcen: Eine Datenbank kann z.B.
            gleichzeitig als Inventar verstanden werden wie
            PREPCON<sup>explorativ</sup> oder KoMuX. Um diese Mehrfachzuordnung
            sichtbar zu machen, wurden Suchattribute hinzugefügt, die eine
            automatische Bündelung nach spezifischen Kriterien ermöglichen.</p>
          <br />&nbsp;<br />
        </div>
      </v-col>

    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="container">
          <tile title="Explorative Datenbanken" img="/img/resources/01.png" link="/resources/db_expl">
            Primär automatisch erstellte Informationen zu umfassenden Sprachausschnitten auf der Basis von Korpusdaten 
            <resources-list :filter="['KoMuX', 'PREPCON_ex']" :showDesc="false"></resources-list>
          </tile>

          <tile title="Deskriptive Datenbanken" img="/img/resources/02.png" link="/resources/db_desc">
            Eine Kombination aus automatisch erstellten
            Datenmengen und qualitativ erarbeiteten Informationen
            <resources-list :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter']" :showDesc="false"></resources-list>
          </tile>

          <tile title="Inventare und Sammlungen" img="/img/resources/03.png" link="/resources/inventory">
            Aus dem Korpus extrahierte oder im
            Korpus überprüfte Sammlungen sprachlicher Ausdrücke ähnlichen Typs
            <resources-list :filter="['SpruchList', 'PhrasKomp', 'PREPCON_temp', 'DTWW']" :showDesc="false"></resources-list>
          </tile>

          <tile title="Online-Wörterbücher" img="/img/resources/04.png" link="/resources/dictionaries">
            Korpusbasierte Wörterbuchartikel im Hypertextformat<br />
            <resources-list :filter="['SPRW', 'FesteWV','DRI']" :showDesc="false"></resources-list>
          </tile>

          <tile title="Datikon" img="/img/resources/05.png" link="/resources/visualisations">
            Dynamisch-flexible Präsentations- und Visualisierungsformen, bei denen automatisch ermittelte
            Korpusausschnitte wie KWICs, Kookkurrenzprofile und Slot-Filler-Tabellen ins Zentrum der Ressource
            rücken<br />
            <resources-list :filter="['WVBF', 'PREPCON']" :showDesc="false"></resources-list>
          </tile>

          <tile title="Pilot- und Einzelstudien" img="/img/resources/06.png">
            Linguistische Studien bzw. lexikografische Beschreibungen zu ausgewählten Phänomen<br />
            <resources-list :filter="['PREPCON_temp', 'PREPCON_kon', 'Varietäten']"></resources-list>
          </tile>

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