<template>
         <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/pos">
            Zurück zu "Wort- und Ausdrucksarten"
        </NuxtLink>
        </div> 
    </v-btn>
    <h1>Feste Sätze</h1>
   
    <div>
    <compare title="">

      <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
      <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
      <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
      <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->       
      <!-- NOTE: Der Tab kann belieibig benannt werden -->

      <template #headers>
        <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
        <v-tab value="1" class="nocaps" ><resources-list-compact :filter="['SpruchList']"></resources-list-compact> </v-tab>
        <v-tab value="2" class="nocaps"><resources-list-compact :filter="['PhrasKomp']"></resources-list-compact></v-tab>
        <v-tab value="3" class="nocaps"><resources-list-compact :filter="['SPRW']"></resources-list-compact></v-tab>
      </template>
      <template #tabs>

        <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
        <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

        <compare-item value="ALL" :simple="true">
          
          <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

          <div style="text-align: center; width:100%">
            <img src="/img/pos/sentences_all_white.png" style="text-align: center;" />
          </div>
        
        </compare-item>

        <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
        <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
        <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
        <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
        <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

        <compare-item value="1" rkey="SpruchList">

        <p>
            Feste Sätze sind die Stichwörter in der Ressource <resources-list-compact :filter="['SpruchList']"></resources-list-compact> 
          </p>

          <template #explain>   
            <ul>
            <li><span class="pos_highlight">Wer die Wahl hat, hat die Qual</span></li>
            <li><span class="pos_highlight">Ende gut, alles gut</span></li>
            <li><span class="pos_highlight">Geiz ist geil</span></li>
                </ul>
          </template>
        </compare-item>

        <compare-item value="2" rkey="PhrasKomp">
            <p>
            Unter den Zweitgliedern der Phrasenkomposita in <resources-list-compact :filter="['PhrasKomp']"></resources-list-compact> sind auch feste Sätze.
          </p>
         
          <template #explain>   
            <ul>
            <li><span class="pos_highlight">"Ich-bin-dann-mal-weg"</span>-Bedürfnis (Fester Satz: <span class="pos_highlight">Ich bin dann mal weg</span> + 
                Nomen: Bedürfnis)</li>
                </ul>
          </template>
        </compare-item>

        <!-- NOTE: Wenn man eine Seite im gleichen Ordner anlegt - und die Seite identisch (G/k-Schreibung) zum rkey ist
                   dann wird automatisch ein Button erzeugt, der auf die Seite verlinkt. -->

        <compare-item value="3" rkey="SPRW">
          <p>
            Feste Sätze sind die Stichwörter in der Ressource <resources-list-compact :filter="['SPRW']"></resources-list-compact> 
          </p>

          <template #explain>
            <ul>
            <li><span class="pos_highlight">Man soll den Tag nicht vor dem Abend loben</span></li>
            <li><span class="pos_highlight">Der Ton macht die Musik</span></li>
            <li><span class="pos_highlight">Hochmut kommt vor dem Fall</span></li>
           </ul>
            
          </template>
        </compare-item>
      </template>
    </compare>
  </div>

</template>