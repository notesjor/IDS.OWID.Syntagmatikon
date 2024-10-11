<template>
  <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
        <NuxtLink to="/datatypes">
            Zurück zu "Informationstypen"
        </NuxtLink>
        </div> 
    </v-btn>
  <h1>Frequenzangaben</h1>
  <p>Frequenzen (die Häufigkeit des Vorkommens eines Suchobjekts) werden auf der Basis von Suchanfragen (queries) zum Zwecke der Bestimmung von Gebräuchlichkeit im Korpus berechnet. Man kann davon ausgehen, dass besonders häufige Phänomene eher einen typischen Aspekt des Sprachgebrauchs in den jeweiligen Korpora abbilden als seltene.  Allerdings sind Frequenzen nur Anhaltspunkte, denn es spielen viele Faktoren bei der automatischen Häufigkeitsermittlung eine Rolle. Deshalb sollten auch die Ko- und Kontexte in die Analyse einbezogen werden. <v-btn density="compact" size="small" variant=tonal icon="mdi-plus" @click="toggleDiv"></v-btn></p>
  <div class="more" v-show="isVisible">
    Generell gibt es keine Häufigkeit in der Sprache an sich (z.B. die häufigsten Sprichwörter oder Komposita des Deutschen), sondern immer nur eine relative in Bezug auf die vorher formulierte Suchanfrage fußend auf der zu einem bestimmten Zeitpunkt ausgewählten Korpusbasis. Es geht also eher um Frequenzbereiche und Häufigkeitstrends bzw. -proportionen.
  </div>
  <p>Im Syntagmatikon dienen Frequenzen nicht nur als empirische Basis, sondern werden selbst als lexikografische Informationseinheiten angeboten:</p>
  <ul>
    <li>in Form von Frequenzlisten: <resources-list-compact :filter="['KoMuX', 'PhrasKomp', 
            'PREPCON_ex', 'PREPCON_kon', 'SpruchList']"></resources-list-compact> 
            <v-chip density="compact" variant="tonal" style="margin: 3px;">PREPCON<sup>temporal</sup>&nbsp;[Inventar]</v-chip></li>
    <li>als Häufigkeitsangaben zu einzelnen Einträgen/Stichwörtern: 
      <resources-list-compact :filter="['WVBF', 'Redeeinleiter', 
            'PREPCON_kon']"></resources-list-compact>   
            <v-chip density="compact" variant="tonal" style="margin: 3px;">PREPCON<sup>temporal</sup>&nbsp;[Kurzartikel]</v-chip></li>
  </ul>

  <br />
  <br />

  <div>
    <compare title="">
      <template #headers>
        <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
        <v-tab value="1" class="nocaps"><resources-list-compact :filter="['KoMuX']"></resources-list-compact></v-tab>
        <v-tab value="2" class="nocaps"><resources-list-compact :filter="['PhrasKomp']"></resources-list-compact></v-tab>
        <v-tab value="3" class="nocaps"><resources-list-compact :filter="['PREPCON_ex']"></resources-list-compact></v-tab>
        <v-tab value="4" class="nocaps"><resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact></v-tab>
        <v-tab value="5" class="nocaps"><resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
        <v-tab value="6" class="nocaps"><resources-list-compact :filter="['SpruchList']"></resources-list-compact></v-tab>
        <v-tab value="7" class="nocaps"><resources-list-compact :filter="['WVBF']"></resources-list-compact></v-tab>
        <v-tab value="8" class="nocaps"><resources-list-compact :filter="['Redeeinleiter']"></resources-list-compact></v-tab>
      </template>
      <template #tabs>
        <compare-item value="ALL" :simple="true">
        

          <div style="text-align: center; width:100%">
            <img src="/img/datatypes/frequency/frequencies_all_white.png" style="text-align: center;" />
          </div>
          
        </compare-item>

        <compare-item value="1" rkey="KoMuX" description="Frequenzangaben in KoMuX"
          webpage="/img/datatypes/frequency/komux_fullscreen_01_annotated.png">

          <p>
            In KoMuX werden Frequenzlisten von unterschiedlichen Merkmalskombinationen der verzeichneten Komposita
            angezeigt: Lemma; Wortart; Wortbildungstyp; Thematische Kategorie.
          </p>

          <template #explain>
           
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/komux_part_01.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus der Ergebnistabelle für Komposita mit Erstglied <em>land</em> und Zweitglied NOMEN
            </div>

            <p>
              KoMuX bietet zusätzlich eine grafische Darstellung der Frequenzentwicklung in der Treffermenge.
            </p>            
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/komux_part_03.png" alt="" />
            </div>
            <div class="caption">
              Frequenzverlauf für Komposita mit Erstglied <em>land</em> und Zweitglied NOMEN
            </div>
          </template>
        </compare-item>

        <compare-item value="2" rkey="PhrasKomp" description="Frequenzangaben in PhrasKomp"
          webpage="/img/datatypes/frequency/phraskomp_fullscreen_01_annotated.png">
          <p>
            In PhrasKomp werden Frequenzlisten von unterschiedlichen Merkmalskombinationen der verzeichneten
            Phrasenkomposita angezeigt: Zweitglieder; Ableitungstypen; semantische Gruppen des Zweitglieds.
          </p>

          <template #explain>
           
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/phraskomp_part_01.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus der Frequenzliste: Häufigste Phrasenkomposita (ohne Attribuierung):
            </div>

            <div class="exampleImg">
            <img src="/img/datatypes/frequency/phraskomp_part_02.png" alt="" />
            </div>
            
            <div class="caption">
              Ausschnitt aus der Frequenzliste für Treffer mit Zweitglied <em>Gerede</em>
            </div>
          </template>
        </compare-item>

        <compare-item value="3" rkey="PREPCON_ex" webpage="/img/datatypes/frequency/prepe_fullscreen_01_annotated.png">
          <p>
            In PREPCON<sup>explorativ</sup> werden die absoluten und relativen Frequenzen der
            Präposition-Nomen-Verbindungen in zwei Formaten aufgeführt: Präpositionstabellen und Nomentabellen.
          </p>

          <template #explain>
           
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/prepe_part_01.png" alt=""/>
            </div>
            <div class="caption">
              Ausschnitt aus der Frequenzliste für Verbindungen mit Präposition <em>über</em> und nachgestellten Nomen
            </div>
          
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/prepe_part_02.png" alt=""/>
            </div>
            <div class="caption">
              Ausschnitt aus der Frequenzliste für Verbindungen mit Nomen <em>Nacht</em> und vorangestellten Präpositionen
            </div>
           
          </template>
        </compare-item>

        
        <compare-item value="4" rkey="PREPCON_temp"
          webpage="/img/datatypes/frequency/prept_fullscreen_01_annotated.png">
          <p>
            PREPCON<sup>temporal</sup> bietet zwei Typen von Frequenzangaben an:
          <ul>
            <li>Häufigkeitsangaben für eine PN in „Kurzartikel zu temporalen Zweiworteinheiten“ mit drei Frequenzen und
              ihren zugrunde liegenden Suchanfragen Präposition in (Groß- und Kleinschreibung zusammen/einzeln plus
              Nomen in unmittelbarer Folge)</li>
            <li>Frequenzliste in „Inventar temporaler Präposition-Nomen-Verbindungen“ mit Häufigkeitsangaben, die aus
              PREPCON<sup>explorativ</sup> übernommen wurden und mit den Einträgen dort verlinkt sind.</li>
          </ul>
          </p>

          <template #explain>
            <p>
              Darstellung von Frequenzen und Suchanfragen für die PN <i>über Nacht</i>.
              Beim Anklicken der Frequenzen erscheint die Suchanfrage.
            </p>
            <div class="exampleImg">
              <img src="/img/datatypes/frequency/prept_part_01.png" alt=""/>
            </div>
            <div class="caption">
              Frequenzangaben zu Suchanfragen im Artikel „über Nacht“:
             </div> 
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/prept_part_02.png" alt="" />
             </div>
             <div class="caption">
              Einblendung der dazugehörigen Suchanfrage und Korpusinformation
             </div> 
          
             <div class="caption">
              Artikel „über Nacht“:
             </div> 
          

            
            <p style="margin-top: 10px;">
              Ausschnitt aus den Frequenzangaben der Kategorie FEIERTAGE. Beim Anklicken auf eine PN wird man auf den
              Eintrag in PREPCON<sup>explorativ</sup> verlinkt.
            </p>
            <div class="exampleImg">
              <img src="/img/datatypes/frequency/prept_part_03.png" alt="" />
              </div>
            <div class="caption">
              Ausschnitt aus dem Inventar "Feiertage" in PREPCON<sup>temporal</sup>
            </div>
              <div class="exampleImg">
            <img src="/img/datatypes/frequency/prept_part_04.png" alt="" />
            </div>
            <div class="caption">
              Verlinkter Eintrag „Heiligabend“ in PREPCON<sup>explorativ</sup>
            </div>
          </template>
        </compare-item>

        <compare-item value="5" rkey="PREPCON_kon"
          description="Kontrastive Darstellung von Präposition-Nomen-Verbindungen im Kontext - Rubrik: „Quantitative Angaben“"
          webpage="/img/datatypes/frequency/prepk_fullscreen_01_annotated.png">
          <p>
            In „PREPCON<sup>online</sup> kontrastiv“ lassen sich die Frequenzangaben sowohl für die deutsche PN als auch
            für die Sprachenpaare deutsch – spanisch und deutsch-slowakisch abrufen. Da die Frequenzerhebungen in den
            Kontrastsprachen in anderen Korpora (z.B. Webkorpora in Sketch Engine) durchgeführt wurden, sind die
            Frequenzen nicht aufeinander abbildbar, sondern nur in der jeweiligen Sprache zu interpretieren.
          </p>

          <template #explain>
            <p>
              Darstellung von Frequenzen und Suchanfragen für die PN‘s am Anfang – al principio (Deutsch-Spanisch). Beim
              Anklicken der Frequenzen erscheint die Suchanfrage.
            </p>
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/prepk_part_01.png" alt="" />
            </div>
            <div class="caption">
              Frequenzangaben zu Suchanfragen im Artikel „am Anfang“ (deutsch - spanisch):
             </div> 
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/prepk_part_02.png" alt="" />
            </div>
            <div class="caption">
              Einblendung der dazugehörigen Suchanfrage und Korpusinformation
             </div> 
            
          </template>
        </compare-item>


        <compare-item value="6" rkey="SpruchList" description="Frequenzangaben in SpruchList"
          webpage="/img/datatypes/frequency/spruchlist_fullscreen_01_annotated.png">

          <p>
            Die Frequenzangaben in SpruchList basieren auf engen und weiten Suchanfragen, die ebenfalls abrufbar sind.
            Enge Suchanfragen umfassen die Wortformen des Spruchnamens in unmittelbarer Abfolge im Satz (ohne Lücken).
            Weite Suchanfragen umfassen die Komponenten im Satz (mit unterschiedlichen Wortformen), einer gewissen
            syntaktischen Varianz und unter Zulassung von Lücken.
          </p>

          <template #explain>
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/spruchlist_part_01.png" alt="" />
            </div>
            <div class="caption">
              Ausschnitt aus der Frequenzliste von SpruchList mit eingeblendeten Suchanfragen für den Eintrag <em>Ende gut, alles gut</em>
            </div>
          </template>
        </compare-item>

        <compare-item value="7" rkey="WVBF" description="Frequenzangaben im Wortverbindungsfeld GRUND"
          webpage="/img/datatypes/frequency/wvg_fullscreen_01_annotated.png">

          <p>
            In WV-Feld GRUND werden zwei Suchanfragen angegeben: Präposition in Klein- sowie Großschreibung plus eine
            Wortform des Lemma GRUND in unmittelbarer Folge. In bestimmten Fällen kann die Suchanfrage weitere Elemente
            enthalten, z.B. um nicht zutreffende Belege auszuschließen, die andere Wortverbindungen oder Muster
            erfassen.
          </p>

          <template #explain>
           
            <div class="exampleImg">
              <img src="/img/datatypes/frequency/wvg_part_01.png" alt=""/>
            </div>
            <div class="caption">
              Frequenzangaben zum PN-Knoten "mit Grund" und zugrunde liegende Suchanfragen
            </div>
           

            <p style="margin-top: 10px;">
              
             
            </p>
            <div class="exampleImg">
            <img src="/img/datatypes/frequency/wvg_part_02.png" alt="" />
            </div>
            <div class=caption>Frequenzangaben zum PN-Knoten "im Grunde" und zugrunde liegende Suchanfragen</div>
            
          </template>
        </compare-item>

        <compare-item value="8" rkey="Redeeinleiter" description="Frequenzangaben im 'Kleinen Wörterbuch der Redeeinleiter'"
          webpage="/img/datatypes/frequency/rede_fullscreen_annotated.png">

          <p>
            Im "Kleinen Wörterbuch der Redeeinleiter" gibt es hinter jedem Eintrag eine Frequenzangabe, die aussagt, wie häufig dieser Redeeinleiter insgesamt im zugrunde liegenden Korpus auftritt. Zusätzlich wird in der rechten Spalte angegeben, wie häufig bestimmte Merkmalen in dieser Gruppe auftreten (z.B. Verwendung zur Einleitung direkter vs. indirekter Rede).
          </p>

          <template #explain>
           <p>Eintrag zum Redeeinleiter <em>sagen</em> - Gesamtfrequenz (siehe
            <enum v="1" />) und Frequenzen verschiedener Merkmale innerhalb dieser Gruppe (siehe
            <enum v="2" />)</p>
            <div class="exampleImg">
              <img src="/img/datatypes/frequency/rede_part_01_num.png" alt=""/>
            </div>
            <div class="caption">
              Eintrag zum Redeeinleiter <em>sagen</em>
            </div>
        
            
          </template>
        </compare-item>

      </template>
    </compare>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false, // initial state of the div (visible)
    };
  },
  methods: {
    toggleDiv() {
      this.isVisible = !this.isVisible; // toggle visibility
    },
  },
};
</script>