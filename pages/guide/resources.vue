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
  <v-row>
    <v-col cols="12">
      <div class="container">
        <v-card :style="highlightItem('Explorative Datenbanken')">
          <v-card-title>
            <div style="position: relative; display: flex; justify-content: center;">
              <img src="/dummy_300x160/dummy_01.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%;">
                <h1 class="text-xl font-bold">
                  Explorative Datenbanken
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
            <br/>            
            <div class="containerItem" v-for="item in getItems('Explorative Datenbanken')" :key="item.title">
              <div class="left"><v-icon>mdi-open-in-new</v-icon></div>
              <div class="middle"><b>{{ item.title }}</b><br />{{ item.subtitle }}</div>
            </div>
          </v-card-text>
        </v-card>

        <v-card :style="highlightItem('Deskriptive Datenbank')">
          <v-card-title>
            <div style="position: relative; justify-content: center;">
              <img src="/dummy_300x160/dummy_02.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                <h1 class="text-xl font-bold">
                  Deskriptive Datenbank
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
            <br/>   
            <div class="containerItem" v-for="item in getItems('Deskriptive Datenbanken')" :key="item.title">
              <div class="left"><v-icon>mdi-open-in-new</v-icon></div>
              <div class="middle"><b>{{ item.title }}</b><br />{{ item.subtitle }}</div>
            </div>
          </v-card-text>
        </v-card>

        <v-card :style="highlightItem('Inventare und Sammlungen')">
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
            <br/>   
            <div class="containerItem" v-for="item in getItems('Inventare und Sammlungen')" :key="item.title">
              <div class="left"><v-icon>mdi-open-in-new</v-icon></div>
              <div class="middle"><b>{{ item.title }}</b><br />{{ item.subtitle }}</div>
            </div>
          </v-card-text>
        </v-card>
        <v-card :style="highlightItem('Online-Wörterbücher')">
          <v-card-title>
            <div style="position: relative; justify-content: center;">
              <img src="/dummy_300x160/dummy_04.png" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;"/>
              <div
                style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                <h1 class="text-xl font-bold">
                  Online-Wörterbücher
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
            <br/>
            <div class="containerItem" v-for="item in getItems('Online-Wörterbücher')" :key="item.title">
              <div class="left"><v-icon>mdi-open-in-new</v-icon></div>
              <div class="middle"><b>{{ item.title }}</b><br />{{ item.subtitle }}</div>
            </div>
          </v-card-text>
        </v-card>
        <v-card :style="highlightItem('Präsentationsformate')">
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
            <div class="containerItem" v-for="item in getItems('Präsentationsformate')" :key="item.title">
              <div class="left"><v-icon>mdi-open-in-new</v-icon></div>
              <div class="middle"><b>{{ item.title }}</b><br />{{ item.subtitle }}</div>
            </div>
          </v-card-text>
        </v-card>
        <v-card :style="highlightItem('Pilot- und Einzelstudien')">
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
            <div class="containerItem" v-for="item in getItems('Pilot- und Einzelstudien')" :key="item.title">
              <div class="left"><v-icon>mdi-open-in-new</v-icon></div>
              <div class="middle"><b>{{ item.title }}</b><br />{{ item.subtitle }}</div>
            </div>
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
      highlight: null,

      ressources: [
        { "title": "KoMuX", code: "komux", value: 1100, subtitle: "Durchsuche mehr als 50.000 Komposita", group: "Explorative Datenbanken" },
        { "title": "PREPCON (explorativ)", code: "prexp", value: 1200, subtitle: "Präpositionale Wortverbindungen in unterschiedlichen Beschreibungstiefen", group: "Explorative Datenbanken" },

        { "title": "MAP", code: "map", value: 2100, subtitle: "Musterbank Argumentmarkierender Präpositionen", group: "Deskriptive Datenbanken" },
        { "title": "Wörterbuch Redeeinleiter", value: 2200, subtitle: "Musterbank Argumentmarkierender Präpositionen", group: "Deskriptive Datenbanken" },

        { "title": "PhK-Liste", value: 3100, subtitle: "Musterbank unterschiedlichen Präpositionen", group: "Inventare und Sammlungen" },
        { "title": "SpruchList", value: 3200, subtitle: "Wortverbindungen Durchsuche Präpositionen", group: "Inventare und Sammlungen" },
        { "title": "PREPCON (teporal)", code: "pretk", value: 3300, subtitle: "Musterbank Argumentmarkierender Präpositionen", group: "Inventare und Sammlungen" },
        { "title": "DTWW", value: 3400, subtitle: "Musterbank Beschreibungstiefen Präpositionen", group: "Inventare und Sammlungen" },

        { "title": "OWID Sprichwörterbuch", code: "sprwb", value: 4100, subtitle: "Musterbank unterschiedlichen Komposita", group: "Online-Wörterbücher" },
        { "title": "OWID Kleines Wörterbuch der Verlaufsformen im Deutschen", code: "verla", value: 4200, subtitle: "Wortverbindungen unterschiedlichen Präpositionen", group: "Online-Wörterbücher" },
        { "title": "OWID Feste Wortverbindungen", value: 4300, subtitle: "Musterbank Beschreibungstiefen Präpositionen", group: "Online-Wörterbücher" },

        { "title": "OWID Sprichwörterbuch", value: 5100, subtitle: "Musterbank unterschiedlichen Komposita", group: "Präsentationsformate" },
        { "title": "PREPCON (teporal)", code: "preti", value: 5200, subtitle: "Musterbank Argumentmarkierender Präpositionen", group: "Präsentationsformate" },
        { "title": "PREPCON (explorativ)", value: 5300, subtitle: "Musterbank Beschreibungstiefen Präpositionen", group: "Präsentationsformate" },

        { "title": "DRI online", value: 6100, subtitle: "Musterbank unterschiedlichen Komposita", group: "Pilot- und Einzelstudien" },
        { "title": "Verietäten Kontakt", value: 6200, subtitle: "Musterbank Argumentmarkierender Präpositionen", group: "Pilot- und Einzelstudien" },
        { "title": "Probandenbefragungen Redewendungen", value: 6300, subtitle: "Musterbank Beschreibungstiefen Präpositionen", group: "Pilot- und Einzelstudien" }
      ]
    }
  },

  mounted() {
    if (this.$route.query.highlight) {
      this.highlight = this.$route.query.highlight
    }
  },

  methods: {
    highlightItem(item) {
      return this.highlight == item ?
        "max-width: 350px; margin:10px; border: 3px solid black" :
        "max-width: 350px; margin:10px";
    },
    getItems(group) {
      return this.ressources.filter(item => item.group == group)
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
.left { grid-area: left; }
.middle { grid-area: middle; text-align: left; }

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