<template>
    <v-row>
       <v-col>
         <v-alert type="info" title="Hinweis - Prototyp v0.1"
           text="Alle Inhalte dieser Version sind experimentell. Texte, Farben, Grafiken werden im späteren Projektverlauf angepasst."
           variant="tonal"></v-alert>
       </v-col>
     </v-row>
     <v-row>
       <v-col>
         <div>
           <h1 class="text-3xl font-bold">
             Projektbeschreibung
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

           <br/>&nbsp;<br/>

            <h2 class="text-2xl font-bold">
              Projektziele
            </h2>

            
            <h3 class="text-xl font-bold">
              1. Erstellung einer umfassenden Sammlung von Wörtern und Ausdrücken
            </h3>

            <p>
              Die Sammlung wird aus verschiedenen lexikographischen Ressourcen zusammengestellt, die sich durch ihre
              lineare Abfolge beim Schreiben, Lesen oder Sprechen definieren. Die einzelnen Ressourcen sind miteinander
              verknüpft und es entstehen im Zusammenspiel neue Bedeutungskontexte, die sich überblicksartig aber auch im
              Detail explorativ erkunden lassen.
            </p>

            <h3 class="text-xl font-bold">
              2. Erstellung einer umfassenden Sammlung von Wörtern und Ausdrücken
            </h3>

            <p>
              Die Sammlung wird aus verschiedenen lexikographischen Ressourcen zusammengestellt, die sich durch ihre
              lineare Abfolge beim Schreiben, Lesen oder Sprechen definieren. Die einzelnen Ressourcen sind miteinander
              verknüpft und es entstehen im Zusammenspiel neue Bedeutungskontexte, die sich überblicksartig aber auch im
              Detail explorativ erkunden lassen.
            </p>
         </div>
       </v-col>
     </v-row>
</template>

<script>
export default {
name: "Index",
theme: { dark: false },
data() {
 return {
 }
},

mounted() {
},

methods: {
 test() {
   alert("test");
 }
}
}
</script>

<style></style>