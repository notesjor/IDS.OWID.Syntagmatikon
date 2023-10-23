<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col>
      <div>
        <h1 class="text-3xl font-bold">
          Ressourcen erklärt
        </h1>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit voluptate
        molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
        necessitatibus temporibus facere?

        <br />&nbsp;<br />

      </div>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
  <!--
    <v-row>
      <v-col>
        <table id="kreuztabelle" style=" margin-left: auto; margin-right: auto;">
          <thead>
            <tr>
              <th rowspan="2"></th>
              <th colspan="2" class="text-xl font-extralight"
                style="text-align:center; background-color: rgba(0,0,0,0.05);">Datenbank</th>
              <th colspan="3" class="text-xl font-extralight"
                style="text-align:center; background-color: rgba(0,0,0,0.10);">Nachschlagen</th>
              <th colspan="2" class="text-xl font-extralight"
                style="text-align:center; background-color: rgba(0,0,0,0.15);">Analysen</th>
            </tr>
            <tr>
              <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.05);">
                <span>Explorativ</span>
              </th>
              <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.05);">
                <span>Deskriptiv</span>
              </th>
              <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
                <span>Inventar</span>
              </th>
              <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
                <span>Sammlung</span>
              </th>
              <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
                <span>Wörterbuch</span>
              </th>
              <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.15);">
                <span>Korpusanalyse</span>
              </th>
              <th class="text-lg font-light" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.15);">
                <span>Pilot-/Einzelstudie</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style="background-color: rgba(0,0,0,0.2);">
              <td style="text-align: right;">KoMuX</td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr>
              <td style="text-align: right;">Prepcon <sup>(explorativ)</sup></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr style="background-color: rgba(0,0,0,0.2);">
              <td style="text-align: right;">MAP</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr>
              <td style="text-align: right;">Wörterbuch Redeeinleiter</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr style="background-color: rgba(0,0,0,0.2);">
              <td style="text-align: right;">PhK-Liste</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr>
              <td style="text-align: right;">Prepcon <sup>(explorativ)</sup></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr style="background-color: rgba(0,0,0,0.2);">
              <td style="text-align: right;">MAP</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr>
              <td style="text-align: right;">Wörterbuch Redeeinleiter</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr style="background-color: rgba(0,0,0,0.2);">
              <td style="text-align: right;">PhK-Liste</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr>
              <td style="text-align: right;">Prepcon <sup>(explorativ)</sup></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr style="background-color: rgba(0,0,0,0.2);">
              <td style="text-align: right;">MAP</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
            </tr>
            <tr>
              <td style="text-align: right;">Wörterbuch Redeeinleiter</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
            </tr>
            <tr style="background-color: rgba(0,0,0,0.2);">
              <td style="text-align: right;">PhK-Liste</td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(13, 101, 194);">mdi-circle-double</v-icon></td>
              <td><v-icon style="color:rgb(197, 4, 155);">mdi-close-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
              <td><v-icon style="color:rgb(0, 135, 2);">mdi-check-circle-outline</v-icon></td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
  -->
  <v-row>
    <v-col cols="12">
      <div class="container">
        <v-card style="max-width: 300px; margin:10px">
          <v-card-title>
            <div style="position: relative; display: flex; justify-content: center;">
              <img src="/dummy_300x160/dummy_01.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%;">
                <h1 class="text-xl font-bold">
                  Explorative Datenbank
                </h1>
                <h3>Datenbanken zum Entdecken</h3>
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit
              voluptate
              molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
              necessitatibus temporibus facere?
            </div>
            <ul>
              <li>
                <a href="https://www.owid.de/plus/komux/"><b>KoMuX</b><br />Durchsuche mehr als 50.000 Komposita</a>
              </li>
              <li>
                <a href="http://uwv.ids-mannheim.de/prepcon/modul1/index.html"><b>Prepcon</b><sup>(explorativ)</sup><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora</a>
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card style="max-width: 350px; margin:10px">
          <v-card-title>
            <div style="position: relative; justify-content: center;">
              <img src="/dummy_300x160/dummy_02.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                <h1 class="text-xl font-bold">
                  Deskriptiv Datenbank
                </h1>
                <h3>Datenbanken mit Beschreibungen</h3>
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit
              voluptate
              molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
              necessitatibus temporibus facere?
            </div>
            <ul>
              <li>
                <b>MAP</b><br />Musterbank Argumentmarkierender Präpositionen
              </li>
              <li>
                <b>Wörterbuch Redeeinleiter</b><br />Redeeinleiter finden und vergleichen
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card style="max-width: 350px; margin:10px">
          <v-card-title>
            <div style="position: relative; justify-content: center;">
              <img src="/dummy_300x160/dummy_03.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                <h1 class="text-xl font-bold">
                  Inventare und Sammlungen
                </h1>
                <h3>Verzeichnisse für die Forschung</h3>
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit
              voluptate
              molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
              necessitatibus temporibus facere?
            </div>
            <ul>
              <li>
                <b>PhK-Liste</b><br />Durchsuche mehr als 50.000 Komposita
              </li>
              <li>
                <b>SpruchList</b><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora
              </li>
              <li>
                <b>Prepcon</b><sup>(temporal)</sup><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora
              </li>
              <li>
                <b>DTWW</b><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card style="max-width: 350px; margin:10px">
          <v-card-title>
            <div style="position: relative; justify-content: center;">
              <img src="/dummy_300x160/dummy_04.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                <h1 class="text-xl font-bold">
                  Onlie-Wörterbücher
                </h1>
                <h3>Verzeichnisse für die Forschung</h3>
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit
              voluptate
              molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
              necessitatibus temporibus facere?
            </div>
            <ul>
              <li>
                <b>OWID Sprichwörterbuch</b><br />Durchsuche mehr als 50.000 Komposita
              </li>
              <li>
                <b>OWID Kleines Wörterbuch der Verlaufsformen im Deutschen</b><br />Präpositionale Wortverbindungen in
                unterschiedlichen Korpora
              </li>
              <li>
                <b>OWID Feste Wortverbindungen</b><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card style="max-width: 350px; margin:10px">
          <v-card-title>
            <div style="position: relative; justify-content: center;">
              <img src="/dummy_300x160/dummy_05.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                <h1 class="text-xl font-bold">
                  Präsentationsformate
                </h1>
                <h3>Korpuszentrierte und praxisnah</h3>
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit
              voluptate
              molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
              necessitatibus temporibus facere?
            </div>
            <ul>
              <li>
                <b>OWID Sprichwörterbuch</b><br />Durchsuche mehr als 50.000 Komposita
              </li>
              <li>
                <b>PREPCON (teporal)</b><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora
              </li>
              <li>
                <b>PREPCON (explorativ)</b><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card style="max-width: 350px; margin:10px">
          <v-card-title>
            <div style="position: relative; justify-content: center;">
              <img src="/dummy_300x160/dummy_06.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                <h1 class="text-xl font-bold">
                  Pilot- und Einzelstudien
                </h1>
                <h3>Verzeichnisse für die Forschung</h3>
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit
              voluptate
              molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
              necessitatibus temporibus facere?
            </div>
            <ul>
              <li>
                <b>DRI online</b><br />Durchsuche mehr als 50.000 Komposita
              </li>
              <li>
                <b>Verietäten Kontakt</b><br />Präpositionale Wortverbindungen in unterschiedlichen Korpora
              </li>
              <li>
                <b style="white-space: nowrap;">Probandenbefragungen Redewendungen</b><br />Präpositionale
                Wortverbindungen in unterschiedlichen Korpora
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  theme: { dark: false },
  data() {
    return {

    }
  },

  mounted() {
    this.load(0);
  },

  methods: {
    load(id) {
      id--;
      if (id >= this.items.length)
        id = 0;
      this.currentItem = this.items[id];
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: square;
  margin: 10px 20px 10px 20px;
}</style>