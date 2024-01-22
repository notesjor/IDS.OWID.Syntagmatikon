<template>
  <div style="max-width: 80ch; margin:auto">
    <v-row>
      <v-col>
        <div>
          <h1>
            Daten- und Informationstypen
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit voluptate
            molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
            necessitatibus temporibus facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt
            illum ipsa reprehenderit voluptate molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim
            voluptas cumque quos illum necessitatibus temporibus facere.</p>

          <br />&nbsp;<br />

        </div>
      </v-col>

    </v-row>
  </div>
  <div>
    <v-row style="max-width: 1140px;">
      <v-col cols="12">
        <h2 style="margin:-20px 0px 10px 10px; border-bottom: 3px lightgray solid;">Automatische Informationstypen</h2>

        <div class="container">
          <v-card :style="highlightItem('Frequenzen')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/frequenz.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Frequenzen
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Was sagen Frequenzen aus? Welche Aussagen lassen sich damit treffen? Was bedeutet ein Trend?</p>
              </div>
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('KWIC')">
            <v-card-title>
              <div style="position: relative; display: flex; justify-content: center;">
                <img src="/guide/methods/kwic.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%;">
                  <h1 class="text-xl font-bold">
                    KWIC (KeyWord In Context)
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                Was sagt ein KWIC-Beleg aus? Welche Aussagen lassen sich damit treffen? Wie lassen sich größere Bedeutungseinheiten damit erschließen?
              </div>
            </v-card-text>
          </v-card>          

          <v-card :style="highlightItem('Volltextstellen')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/belege.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Volltextstellen 
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Welche Fragen lassen sich mit größeren Volltextstellen betrachten/beantworten? Welche Vorteile ergeben sich gegenüber KWIC?</p>
              </div>
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('KA-Profile')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/kookkurrenz.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Kookkurrenzprofile
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Was sind Kookkurrenzprofile? Wie lassen sich diese Wortpartner statistisch berechnen?</p>
              </div>
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('KWIC')">
            <v-card-title>
              <div style="position: relative; display: flex; justify-content: center;">
                <img src="/guide/methods/muster.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%;">
                  <h1 class="text-xl font-bold">
                    Muster-/Lückenfüllertabellen
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                Wie können Muster-/Lückenfüllertabellen zur Analyse von Wortverbindungen genutzt werden? Welche Aussagen lassen sich damit treffen?
              </div>
            </v-card-text>
          </v-card>          

          <v-card :style="highlightItem('Volltextstellen')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/annotate.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Annotierte Daten 
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Wie werden Daten annotiert und warum? Welche Aussagen lassen sich damit treffen? Was sind übliche Annotationen?</p>
              </div>
            </v-card-text>
          </v-card>
        </div>

        <h2 style="margin:40px 0px 10px 10px; border-bottom: 3px lightgray solid;">Bearbeitete Informationstypen</h2>

        <div class="container">
          <v-card :style="highlightItem('Kategorial')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/category.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Kategoriale-Label
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Welche Aussage treffen Kategorien? Worin unterscheiden sich bestimtme Kategorien?</p>
              </div>
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('Belege')">
            <v-card-title>
              <div style="position: relative; display: flex; justify-content: center;">
                <img src="/guide/methods/belege2.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%;">
                  <h1 class="text-xl font-bold">
                    Belege
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                Warum werden Belege manuell ausgewählt? Wie unterscheiden sich Belege von KWIC? Welche Aussagen lassen sich damit treffen?
              </div>
            </v-card-text>
          </v-card>          

          <v-card :style="highlightItem('NarrativeBeschreibung')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/narrativ.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Narrative Beschreibung 
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Warum werden narrative Beschreibungen erstellt? Welche Konzepte sind damit verbunden?</p>
              </div>
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('Basiselemente')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/elemente.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Basiselemente
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Was sind Basiselemente? Wie lassen sich diese grundlegenden Elemente kombinieren?</p>
              </div>
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('Kontextzeilen')">
            <v-card-title>
              <div style="position: relative; display: flex; justify-content: center;">
                <img src="/guide/methods/bezuege.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%;">
                  <h1 class="text-xl font-bold">
                    Kontextzeilen
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                Wie lassen sich Kontextzeilen nutzen? Welche Aussagen lassen sich damit treffen?
              </div>
            </v-card-text>
          </v-card>          

          <v-card :style="highlightItem('Satellitenfelder')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/kreis.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Satellitenfelder
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>
                  Wie lassen sich Satellitenfelder nutzen? Welche Aussagen lassen sich damit treffen? Welche Satellitenfelder sind üblich?
                </p>
              </div>
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('Musterangaben')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/guide/methods/pattern.jpg" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Musterangaben
                  </h1>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>
                  Wie lassen sich Musterangaben nutzen? Welche Aussagen lassen sich damit treffen? Welche Musterangaben sind üblich?
                </p>
              </div>
            </v-card-text>
          </v-card>
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