<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 86ch; margin:auto">
    <v-row>
      <v-col>
        <headline :h="1" color1="#ff3661" color2="#fec037">Informationstypen</headline>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>
            Die Rubrik dient dazu, Ressourcen im <hi>Syntagmatikon</hi> entsprechend der Charakteristik ihrer Informationstypen zu bündeln. Bei den primär automatisch-quantitativ erstellten Angaben werden die Korpusdaten selbst zur lexikografischen Einträgen. Die manuell-qualitativ erarbeiteten Informationstypen basieren ebenso auf Korpusanalysen. Hier finden sich unterschiedliche Kombinationen von systematisierten und interpretierten Korpusdaten mit verschiedenen Formen der narrativen Beschreibung.</p>
<p>Jedes Kästchen linkt zu einer Hintergrundseite mit Screenshots und kurzen Erklärungen zur Aussagekraft der Informationstypen in den jeweiligen Ressourcen.</p>

         
        </div>
      </v-col>

    </v-row>
  </div>
  <div style="max-width: 100ch;">
    <v-row style="max-width: 1140px;">
      <v-col cols="12">
        <headline :h="4">Automatische Informationstypen</headline>

        <div class="container" style="margin-left: -20px;">

          <info-box title="Frequenzen" link="/datatypes/frequency" :filter="['WVBF', 'SpruchList', 'Redeeinleiter', 'KoMuX', 'PhrasKomp',
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon']" color1="#ff3661" color2="#fec037">
            Häufigkeit des Vorkommens eines sprachlichen Ausdrucks im Korpus, ermittelt mithilfe von Zählungen
            und/oder Suchanfragen (queries)
          </info-box>

          <info-box title="KWICs <span style='font-size:0.8em'>(KeyWord In Context)</span>" link="/datatypes/kwic"
            :filter="['WVBF', 'SpruchList',
              'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon']" color1="#ff3661" color2="#fec037">
            Zeilen (Konkordanzen), in denen das Suchobjekt vorkommt (Textschnipsel)
          </info-box>

          <info-box title="Kookkurrenzprofile" link="/datatypes/cooccurrence" :filter="['WVBF',
            'PREPCON_temp', 'PREPCON_kon']" color1="#ff3661" color2="#fec037">
            Durch statistische Berechnungen (sog. Kookkurrenzanalysen) ermittelte Partnerwort-Profile
            (überproportional häufiges Miteinandervorkommen von Wörtern und Wortgruppen)
          </info-box>

          <info-box title="Lückenfüllertabellen" link="/datatypes/patterntable" :filter="['WVBF',
            'PREPCON_temp', 'PREPCON_kon']" color1="#ff3661" color2="#fec037">
            Durch automatische Auswertung ermittelte Füllerhäufigkeiten innerhalb eines Musterslots
          </info-box>

        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container" style="margin-left: -20px;">

          <info-box color1="#801b31" color2="#fec037" title="Kategoriale Label" link="/datatypes/category" :filter="['KoMuX', 'PhrasKomp',
            'PREPCON_kon', 'MAP', 'WVBF', 'Verlaufsformen', 'FesteWV', 'Redeeinleiter']">
            Linguistische Etikettierung von Merkmalen sprachlicher Einheiten
          </info-box>

          <info-box color1="#801b31" color2="#fec037" title="Belege" link="/datatypes/matches" :filter="['WVBF', 'Redeeinleiter', 'PhrasKomp',
            'PREPCON_temp', 'PREPCON_kon', 'Verlaufsformen', 'FesteWV', 'DTWW', 'SPRW']">
            Manuell ausgewählte KWICs und größere Volltextstellen
          </info-box>

          <info-box color1="#801b31" color2="#fec037" title="Narrative Beschreibungen" link="/datatypes/narration"
            :filter="['MAP', 'PREPCON_kon', 'SPRW', 'WVBF', 'FesteWV']">
            Beschreibende Autorentexte, die ein Phänomen erklären
          </info-box>

          <info-box color1="#801b31" color2="#fec037" title="Komponenten" link="/datatypes/elements"
            :filter="['PREPCON_kon', 'PREPCON_temp', 'SPRW', 'FesteWV']">
            Auszeichnung der einzelnen Komponenten einer Wortverbindung und Verlinkung mit anderen Einträgen.
          </info-box>


          <info-box color1="#801b31" color2="#fec037" title="Felder" link="/datatypes/fields"
            :filter="['PREPCON_kon', 'PREPCON_temp', 'SPRW', 'FesteWV', 'MAP']">
            Nach inhaltlichen Kriterien manuell zusammengestellte Gruppen von sprachlichen Einheiten mit verwandten
            Gebrauchsmerkmalen
          </info-box>

          <info-box color1="#801b31" color2="#fec037" title="Fremdsprachige Äquivalenzen" link="/datatypes/equivalence"
            :filter="['PREPCON_kon', 'DTWW']">
            Angabe von Entsprechungen in anderen Sprachen
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
  }
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