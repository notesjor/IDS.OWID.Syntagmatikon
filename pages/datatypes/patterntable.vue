<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
       <div class="nolink">
       <NuxtLink to="/datatypes">
           Zurück zu "Informationstypen"
       </NuxtLink>
       </div> 
   </v-btn>
   <h1>Lückenfüllertabellen</h1>

<p>Syntagmen zeichnen sich nicht nur dadurch aus, dass sie verfestigte Wortgruppen sind, sondern dass gleichzeitig bestimmte Komponenten austauschbar sind. Diese Ersetzung ist aber nicht eine Sache von Sprachspiel oder stilistischer Variation. Vielmehr folgt dieser Mechanismus Mustern: Viele Sprachteilhaber füllen diese Slots auf vergleichbare Art und Weise. In der Fachsprache spricht man davon, dass beim Weglassen einer oder mehrerer Komponenten ein Slot eröffnet wird, der mit lexikalischen Füllern besetzt wird. 
Mithilfe automatischer Methoden, z.B. dem Tool lexpan, lässt sich nun ermitteln, welche Füller überproportional häufig vorkommen und welche Musterbildungen vorliegen (
 Rubrik „Musterzugänge). Dazu werden so genannte Lückenfüllertabellen erstellt.</p>

<p>Im Syntagmatikon werden Lückfüllertabellen in folgenden Ressourcen als lexikografische Information angeboten:
</p>
<ul>
    <li><resources-list-compact :filter="['PREPCON_temp']"/> (Rubrik „Kurzartikel“) </li>
    <li><resources-list-compact :filter="['PREPCON_kon']"/></li>
    <li><resources-list-compact :filter="['WVBF']"/></li>
</ul>
<p>Zur Interpretation von Lückenfüllertabellen im Syntagmatikon</p> 
<ul>
    <li>siehe Fallbeispiel <em>aus ADJ Gründen</em></li>
    <li>siehe Fallbeispiel <em>mit X Genugtuung / con satisfacción</em></li>
</ul>

</template>