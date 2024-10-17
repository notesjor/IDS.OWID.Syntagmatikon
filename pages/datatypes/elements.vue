<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
       <div class="nolink">
       <NuxtLink to="/datatypes">
           Zurück zu "Informationstypen"
       </NuxtLink>
       </div> 
   </v-btn>
   <h1>Komponenten</h1>
   

   <p>Bei diesem Informationstyp handelt es sich um die Auszeichnung und Verlinkung der Komponenten eines Syntagmas, und zwar auf zweifache Weise:</p>
   <ul>
    <li>die Oberflächenform, so wie sie in einem Stichwort vorkommt </li>
    <li>die Grundform, die alle Wortformen zu einem Lemma zusammenfasst</li>
   </ul>  
<p>Diese Markierung kann mehreren Zwecken dienen:</p>
   <ul>
       <li>Verlinkungen zwischen den Komponenten auf verschiedenen Seiten</li>
       <li>Sortierung der Wortgruppen nach einem Basiselement</li>
       <li>Verlinkung zu Einträgen der Komponenten in anderen Ressourcen</li>
   </ul>
<p>Im Syntagmatikon sind die Komponenten in der Regel mit den Einträgen im Online-Wörterbuch <NuxtLink to="https://www.owid.de/docs/elex/start.jsp">elexiko</NuxtLink> bzw. mit externen Quellen verlinkt. </p>
</template>