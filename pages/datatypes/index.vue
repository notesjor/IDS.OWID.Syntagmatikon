<script setup>
definePageMeta({
  layout: "full",
})
</script>

<template>
  <div style="max-width: 86ch; margin:auto">
    <v-row>
      <v-col>
        <div>
          <h1>
            Informationstypen
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>
            Die Rubrik bündelt die Ressourcen unter dem Gesichtspunkt der Charakteristik ihrer Angaben (Informationstypen). Es wird zwischen rein automatischen und manuell bearbeiteten Daten unterschieden.</p>
            <p> Die Hintergrundtexte zeigen anhand anschaulicher Beispiele aus den Ressourcen, welche Fragen sich mit den jeweiligen Informationstypen bezüglich sprachlicher Struktur, Bedeutung, Gebrauch, Festigkeit, Varianz sowie Musterhaftigkeit beantworten lassen. Es handelt sich explizit nicht um ein Tutorial etwa zur Korpuslinguistik, sondern um einen Leitfaden zur Interpretation der im Syntagmatikon dargestellten Ergebnisse. 
</p>

          <br />&nbsp;<br />

        </div>
      </v-col>

    </v-row>
  </div>
  <div style="max-width: 100ch;">
    <v-row style="max-width: 1140px;">
      <v-col cols="12">
        <h2 style="margin:-20px 0px 10px 10px; border-bottom: 3px lightgray solid;">Automatische Informationstypen</h2>

        <div class="container" style="margin-left: -20px;">
          <tile-gradient   color1="#fec037" color2="#ff3661" title="Frequenzen" link="/datatypes/frequency">
            Häufigkeit des Vorkommens eines sprachlichen Ausdrucks im Korpus, ermittelt mithilfe von Zählungen
              und/oder Suchanfragen (queries)
              <div class="mt-2">
            <resources-list-compact :filter="['WVBF', 'SpruchList', 'Redeeinleiter', 'KoMuX', 'PhrasKomp', 
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon']"></resources-list-compact>
            </div>
          </tile-gradient>

          <tile-gradient  color1="#fec037" color2="#ff3661" title="KWICs <span style='font-size:0.8em'>(KeyWord In Context)</span>" link="/datatypes/kwic">
            Zeilen (Konkordanzen), in denen das Suchobjekt vorkommt (Textschnipsel)
            <div class="mt-2">
            <resources-list-compact :filter="['WVBF', 'SpruchList',
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon']"></resources-list-compact>
            </div>
          </tile-gradient>

          <tile-gradient color1="#fec037" color2="#ff3661"  title="Kookkurrenzprofile" link="/datatypes/cooccurrence">
            Durch statistische Berechnungen (sog. Kookkurrenzanalysen) ermittelte Partnerwort-Profile
              (überproportional häufiges Miteinandervorkommen von Wörtern und Wortgruppen)
              <div class="mt-2">
            <resources-list-compact :filter="['WVBF', 
            'PREPCON_temp', 'PREPCON_kon']"></resources-list-compact>
            </div>
          </tile-gradient>

          <tile-gradient  color1="#fec037" color2="#ff3661" title="Lückenfüllertabellen" link="/datatypes/patterntable">
            Durch automatische Auswertung ermittelte Füllerhäufigkeiten innerhalb eines Musterslots
            <div class="mt-2">
            <resources-list-compact :filter="['WVBF', 
            'PREPCON_temp', 'PREPCON_kon']"></resources-list-compact>
            </div>
          </tile-gradient>

        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container" style="margin-left: -20px;">


          <tile-gradient color1="#fec037" color2="#801b31"  title="Kategoriale Label" link="/datatypes/category">
            Linguistische Etikettierung von Merkmalen sprachlicher Einheiten
            <div class="mt-2">
            <resources-list-compact :filter="['KoMuX', 'PhrasKomp', 
            'PREPCON_kon', 'MAP', 'WVBF', 'Verlaufsformen', 'FesteWV', 'Redeeinleiter']"></resources-list-compact>
            </div>
          </tile-gradient>

          <tile-gradient color1="#fec037" color2="#801b31"  title="Belege" link="/datatypes/matches">
            Manuell ausgewählte KWICs und größere Volltextstellen
            <div class="mt-2">
            <resources-list-compact :filter="['WVBF', 'SpruchList', 'Redeeinleiter', 'PhrasKomp', 
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'Verlaufsformen', 'FesteWV', 'DTWW', 'SPRW']"></resources-list-compact>
            </div>
                </tile-gradient>

          <tile-gradient color1="#fec037" color2="#801b31"  title="Narrative Beschreibungen" link="/datatypes/narration">
            Beschreibende Autorentexte, die ein Phänomen erklären
            <div class="mt-2">
            <resources-list-compact :filter="['MAP', 'PREPCON_kon', 'SPRW', 'WVBF', 'FesteWV']"></resources-list-compact>   
            </div>
              </tile-gradient>

          <tile-gradient color1="#fec037" color2="#801b31"  title="Komponenten" link="/datatypes/elements">
            Auszeichnung der einzelnen Komponenten einer Wortverbindung und Verlinkung mit anderen Einträgen.
            <div class="mt-2">
            <resources-list-compact :filter="['PREPCON_kon', 'PREPCON_temp', 'SPRW',  'FesteWV']"></resources-list-compact>   
            </div>
            </tile-gradient>


          <tile-gradient color1="#fec037" color2="#801b31"  title="Felder" link="/datatypes/fields">
            Nach inhaltlichen Kriterien manuell zusammengestellte Gruppen von sprachlichen Einheiten mit verwandten
              Gebrauchsmerkmalen
              <div class="mt-2">
            <resources-list-compact :filter="['PREPCON_kon', 'PREPCON_temp', 'SPRW',  'FesteWV', 'MAP']"></resources-list-compact>   
            </div>
         </tile-gradient>


          <tile-gradient color1="#fec037" color2="#801b31"  title="Fremdsprachige Äquivalenz" link="/datatypes/equivalence">
            Angabe von Entsprechungen in anderen Sprachen
            <div class="mt-2">
            <resources-list-compact :filter="['PREPCON_kon', 'DTWW']"></resources-list-compact>   
            </div>
            </tile-gradient>



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