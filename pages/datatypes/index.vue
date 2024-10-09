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
          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Frequenzen" link="/datatypes/frequency">
            Häufigkeit des Vorkommens eines sprachlichen Ausdrucks im Korpus, ermittelt mithilfe von Zählungen
              und/oder Suchanfragen (queries)
            <br>
            <!-- <br>
            <b>Was kann man anhand Frequenzangaben im Syntagmatikon ablesen?</b> -->
            <resources-list-small :filter="['WVBF', 'SpruchList', 'Redeeinleiter', 'KoMuX', 'PhrasKomp', 
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon']"></resources-list-small>
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="KWICs <span style='font-size:0.8em'>(KeyWord In Context)</span>" link="/datatypes/kwic">
            Zeilen (Konkordanzen), in denen das Suchobjekt vorkommt (Textschnipsel)
            <br>
            <!-- <br>
            <b>Was sagen KWIC-Angaben im Syntagmatikon über den Gebrauch einer sprachlichen Einheit aus?</b> -->
            <resources-list-small :filter="['WVBF', 'SpruchList',
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon']"></resources-list-small>
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Kookkurrenzprofile" link="/datatypes/cooccurrence">
            Durch statistische Berechnungen (sog. Kookkurrenzanalysen) ermittelte Partnerwort-Profile
              (überproportional häufiges Miteinandervorkommen von Wörtern und Wortgruppen)
            <br>
            <!-- <br>
            <b>Welche Hinweise liefern Kookkurrenzangaben im Syntagmatikon auf Bedeutung, Gebrauch und Festigkeit?</b> -->
            <resources-list-small :filter="['WVBF', 
            'PREPCON_temp', 'PREPCON_kon']"></resources-list-small>
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Lückenfüllertabellen" link="/datatypes/patterntable">
            Durch automatische Auswertung ermittelte Füllerhäufigkeiten innerhalb eines Musterslots
            <br>
            <!-- <br>
            <b>Welche Schlüsse lassen sich anhand der Füllertabellen im Syntagmatikon in Bezug auf die Festigkeit und Varianz syntagmatischer Einheiten ziehen?</b> -->
            <resources-list-small :filter="['WVBF', 
            'PREPCON_temp', 'PREPCON_kon']"></resources-list-small>
          </tile-gradient>

          <tile-gradient color1="#cb992b" color2="#33dcfe" title="Annotierte Daten" link="/datatypes/annotation">
            Durch automatische Annotationsprogramme kategorisierte Korpusdaten (z.B. nach Wortarten, Satztypen, semantischen Kategorien).
            <br>
            <resources-list-small :filter="['Redeeinleiter', 'KoMuX', 'PhrasKomp', 
            'PREPCON_ex', 'MAP']"></resources-list-small>
            <!-- <br>
            <b>Wie führen solche getaggten Daten im Syntagmatikon zur linguistischen Klassifikation von sprachlichen
            Phänomenen?</b> -->
          </tile-gradient>
        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container" style="margin-left: -20px;">


          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Kategoriale Label" link="/datatypes/category">
            Linguistische Etikettierung von Merkmalen sprachlicher Einheiten
            <br>
            <resources-list-small :filter="['KoMuX', 'PhrasKomp', 
            'PREPCON_ex', 'MAP', 'WVBF', 'Verlaufsformen', 'FesteWV']"></resources-list-small>
            <!-- <br>
            <b>Welche Aussagekraft haben kategoriale Zuschreibungen im Syntagmatikon bezüglich verwandter sprachlicher Muster?</b> -->
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Belege" link="/datatypes/matches">
            Manuell ausgewählte KWICs und größere Volltextstellen
            <br>
            <resources-list-small :filter="['WVBF', 'SpruchList', 'Redeeinleiter', 'PhrasKomp', 
            'PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'Verlaufsformen', 'FesteWV', 'DRI', 'DTWW', 'SPRW']"></resources-list-small>
            <!-- <br>
            <b>Nach welchen Kriterien werden illustrative Belegangaben im Syntagmatikon ausgewählt und wozu tragen sie bei?</b> -->
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Narrative Beschreibungen" link="/datatypes/narration">
            Beschreibende Autorentexte, die ein Phänomen erklären
            <br>
            <resources-list-small :filter="['MAP', 'PREPCON_kon', 'SPRW', 'WVBF', 'FesteWV', 'DRI']"></resources-list-small>   
            <!-- <br>
            <b>Welche unterschiedlichen Typen narrativer Texte prägen das Syntagmatikon?</b> -->
          </tile-gradient>

          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Komponenten" link="/datatypes/elements">
            Auszeichnung der einzelnen Komponenten einer Wortverbindung und Verlinkung mit anderen Einträgen.
            <br>
            <resources-list-small :filter="['PREPCON_kon', 'PREPCON_temp', 'SPRW',  'FesteWV']"></resources-list-small>   
            <!-- <br>
            <b>Wie werden mithilfe der Basiselementangaben im Syntagmatikon Beziehungen zu Einwortlexemen hergestellt und
            unterschiedliche Gruppen gebildet?</b> -->
          </tile-gradient>


          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Felder" link="/datatypes/fields">
            Nach inhaltlichen Kriterien manuell zusammengestellte Gruppen von sprachlichen Einheiten mit verwandten
              Gebrauchsmerkmalen
            <br>
            <resources-list-small :filter="['PREPCON_kon', 'PREPCON_temp', 'SPRW',  'FesteWV', 'MAP']"></resources-list-small>   
            <!-- <br>
            <b>Wie vielfältig sind Feldangaben im Syntagmatikon?</b> -->
          </tile-gradient>


          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Fremdsprachige Äquivalenz" link="/datatypes/equivalence">
            Angabe von Entsprechungen in anderen Sprachen
            <br>
            <resources-list-small :filter="['PREPCON_kon', 'DTWW', 'DRI']"></resources-list-small>   
            <!-- <br>
            <b>Wie kann man mittels Äquivalenzangaben und -beschreibungen im Syntagmatikon den Gebrauch von Ausdrücken im
            Sprachvergleich verstehen?</b> -->
          </tile-gradient>

          
          <tile-gradient color1="#33dcfe" color2="#ff3661" title="Grafische Visualisierungen" link="/datatypes/graphics">
            
            <br>
            <resources-list-small :filter="['SpruchList', 'MAP', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX']"></resources-list-small>   
          
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