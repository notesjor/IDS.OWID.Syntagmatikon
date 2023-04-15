<template>
  <v-row>
    <v-col>
      <div>
        <h1 class="text-3xl font-bold">
          {{ appName }}
        </h1>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div>
        Herzlich willkommen im Syntagmatikon, einer lexikalischen Plattform, die sich ganz der syntagmatischen
        Beziehung der Sprache widmet! Hier finden Sie eine umfassende Sammlung von Wörtern und Ausdrücken aus
        verschiedenen lexikographischen Ressourcen, die sich durch ihre lineare Abfolge beim Schreiben, Lesen oder
        Sprechen definieren. Die einzelnen Ressourcen sind miteinander verknüpft und es entstehen im Zusammenspiel
        neue Bedeutungskontexte, die sich überblicksartig aber auch im Detail explorativ erkunden lassen.
      </div>
    </v-col>
  </v-row>
  <br />
  <div style="width: 100%;">
    <table id="kreuztabelle" style=" margin-left: auto; margin-right: auto;">
      <thead>
        <tr>
          <th rowspan="2"></th>
          <th colspan="2" class="text-xl" style="text-align:center; background-color: rgba(0,0,0,0.05);">Datenbank</th>
          <th colspan="3" class="text-xl" style="text-align:center; background-color: rgba(0,0,0,0.10);">Nachschlagen</th>
          <th colspan="2" class="text-xl" style="text-align:center; background-color: rgba(0,0,0,0.15);">Analysen</th>
        </tr>
        <tr>
          <th class="text-lg" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.05);">
            <span>Explorativ</span></th>
          <th class="text-lg" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.05);">
            <span>Deskriptiv</span></th>
          <th class="text-lg" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
            <span>Inventar</span></th>
          <th class="text-lg" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
            <span>Sammlung</span></th>
          <th class="text-lg" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.10);">
            <span>Wörterbuch</span></th>
          <th class="text-lg" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.15);">
            <span>Korpusanalyse</span></th>
          <th class="text-lg" style="padding:0px 10px 0px 10px; background-color: rgba(0,0,0,0.15);">
            <span>Pilot-/Einzelstudie</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: rgba(0,0,0,0.2);">
          <!--<td rowspan="2" class="text-lg">Zeile 1</td>-->
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
  </div>
  <br/>
  <v-row>
    <v-col cols="4">
      <h1 class="text-xl">Datenbanken</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis, eligendi officiis ducimus consequuntur laudantium quas odio quos qui nemo. At itaque eos dolorum, expedita dolores culpa suscipit ea. Aspernatur.
    </v-col>
    <v-col cols="4">
      <h1 class="text-xl">Nachschlagen</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis, eligendi officiis ducimus consequuntur laudantium quas odio quos qui nemo. At itaque eos dolorum, expedita dolores culpa suscipit ea. Aspernatur.
    </v-col>
    <v-col cols="4">
      <h1 class="text-xl">Analysen</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis, eligendi officiis ducimus consequuntur laudantium quas odio quos qui nemo. At itaque eos dolorum, expedita dolores culpa suscipit ea. Aspernatur.
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      appName: null
    }
  },

  mounted() {
    this.appName = this.$config.public.appName;
  },

  methods: {
    test() {
      alert("test");
    }
  }
}
</script>

<style>
th {
  font-weight: 400;
  padding: 5px
}

td {
  text-align: center;
}</style>