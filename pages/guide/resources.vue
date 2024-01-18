<template>
  <div style="max-width: 80ch; margin:auto">
    <v-row>
      <v-col>
        <div>
          <h1 class="text-3xl font-bold">
            Ressourcen erklärt
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>Das Syntagmatikon vereint sehr unterschiedliche Ressourcentypen, die
            im Folgenden kurz charakterisiert werden. Als Kriterien dienten der Grad
            der Exhaustivität sowie das Verhältnis von automatischer
            Datenaufbereitung; händischer Bearbeitung und
            linguistisch-lexikografischer Beschreibung,</p>
          <p>Die aufgeführten Beispielressourcen sind jeweils die prototypischen
            Vertreter. Das heißt, dass diese hauptsächlich durch den zuvor
            beschriebenen Typ charakterisiert sind. Gleichzeitig gibt es zahlreiche
            Überschneidungen zwischen den Ressourcen: Eine Datenbank kann z.B.
            gleichzeitig als Inventar verstanden werden wie
            PREPCON<sup>explorativ</sup> oder KoMuX. Um diese Mehrfachzuordnung
            sichtbar zu machen, wurden Suchattribute hinzugefügt, die eine
            automatische Bündelung nach spezifischen Kriterien ermöglichen.</p>

          <br />&nbsp;<br />

        </div>
      </v-col>

    </v-row>
  </div>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="container">
          <v-card :style="highlightItem('Explorative Datenbanken')">
            <v-card-title>
              <div style="position: relative; display: flex; justify-content: center;">
                <img src="/resources/01.png" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
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
                Die explorativen Datenbanken im Syntagmatikon bieten Informationen zu umfassenden Sprachausschnitten auf
                der Basis von Korpusdaten (aktuell: Komposita und Präposition-Nomen-Verbindungen). Solche Datenbanken
                zeichnen sich dadurch aus, dass sie primär automatisch erstellt wurden und keine qualitativen Angaben
                enthalten (z.B. Bedeutungsbeschreibungen). Sie bieten einen strukturierten Zugang zu sprachlichen
                Massendaten: Mithilfe von Suchen kann man sich Zusammenhänge innerhalb eines Wortschatzausschnitts
                erschließen, die sonst aufgrund der schieren Masse nicht sichtbar wären. Wie die Ergebnisse zu
                interpretieren sind, hängt dann vom Erkenntnisinteresse ab. Man muss aber immer damit rechnen, dass es
                Befunde gibt, die nicht in das eigene Erwartungsraster passen, denn der Computer „rechnet“ nur.
              </div>
              <br />
              <ResourcesList :filter="['PREPCONex', 'KoMuX']" :showDesc="true" />
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('Deskriptive Datenbank')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/resources/02.png" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
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
                <p>Die deskriptiven Datenbanken im Syntagmatikon stellen eine Kombination aus automatisch erstellten
                  Datenmengen und qualitativ erarbeiteten Informationen dar. Die Basis bilden Korpuserhebungen, bei denen
                  <a href="../../2.2_DatenInformationstypen/2.2.1_Frequenz/2.2.1_Frequenz.docx">Frequenzen</a> ermittelt
                  und <a
                    href="../../2.2_DatenInformationstypen/2.2.6_Belege/2.2.6_ManuellBelegAuswahl.docx">Korpusbelege</a>
                  extrahiert wurden. Diese empirische Basis wurde im weiteren Arbeitsverlauf nach spezifischen
                  linguistischen Modellen manuell ausgewertet und <u>annotiert</u>.
                </p>
                <p>Solche Datenbanken bieten automatische Suchfunktionen an, mit denen die sprachlichen Ausdrucksgruppen
                  und -muster (<u>Muster</u>) nach unterschiedlichen linguistischen Kriterien zusammengestellt werden
                  können.</p>
              </div>
              <br />
              <ResourcesList :filter="['MAP', 'WÖRE']" :showDesc="true" />
            </v-card-text>
          </v-card>

          <v-card :style="highlightItem('Inventare und Sammlungen')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/dummy_300x160/dummy_03.png" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
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
                <p>Inventare im Syntagmatikon sind aus dem Korpus extrahierte oder im
                  Korpus überprüfte Sammlungen sprachlicher Ausdrücke ähnlichen Typs. Der
                  Wert dieser Ressourcen liegt darin, dass solche Listen die
                  Gebräuchlichkeit dieser Einheiten mittels Korpusanalysen dokumentieren.
                  In der Zeit vor den Korpora basierten Sammlungen zumeist auf früheren
                  Sammlungen und Listen. Es gab ein historisch gewachsenes
                  Beispielgedächtnis. Dies führte u.a. zu oft beklagten veralteten
                  Beispiele in Wörterbüchern und Lehrwerken.</p>
                <p>Korpusbasierte Inventare können als gesicherte empirische Basis für
                  die Forschung als auch Referenzquellen für Wörterbücher und
                  Lehrmaterialien von Nutzen sein.</p>
                <p>Ein Inventar kann jedoch nie alle Ausdrücke eines
                  Wortschatzausschnittes erfassen, da auch die zugrunde liegende
                  Korpusbasis immer nur eine Stichprobe der Sprache darstellt. Aber
                  diejenigen Kandidaten, die z.B. eine große Häufigkeit aufweisen, sind
                  von gesicherter Usualität.</p>
                <p>Bezüglich der Kandidatenauswahl sind zwei Wege zu unterscheiden:</p>
                <br/>&nbsp<br/>
                <strong>Listeneinträge wurde aus dem Korpus extrahiert:</strong>
                <ResourcesList :filter="['PHKO']" :showDesc="false"></ResourcesList>
                <br/>&nbsp<br/>
                <strong>Listeneinträge wurde aus dem Korpus extrahiert:</strong>
                <ResourcesList :filter="['SpruchList', 'PREPCONtemp', 'DTWW']" :showDesc="false"></ResourcesList>
              </div>
              <br />

            </v-card-text>
          </v-card>
          <v-card :style="highlightItem('Online-Wörterbücher')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/dummy_300x160/dummy_04.png" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
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
                <p>Online-Wörterbücher im Syntagmatikon beinhalten korpusbasierte Wörterbuchartikel im Hypertextformat.
                  Unter diese Kategorie fallen sowohl Ressourcen mit einer sehr komprimierten Artikelstruktur (Belege;
                  Kategorien <a href="https://www.owid.de/wb/progdb/start.html">Verlaufsformen</a>; <a
                    href="https://www.owid.de/plus/redeeinleiter/">Redeeinleiter</a>)als auch solche mit lexikografisch
                  verfassten Texte zu Aspekten wie Bedeutungen, typischen Gebrauchsmerkmalen, Kontexten, Varianten und
                  Abwandlungen angereichert mit Korpusdaten (<a
                    href="https://www.owid.de/wb/sprw/start.html">Sprichwörterbuch</a>; Feste <a
                    href="https://www.owid.de/artikel/309077">Wortverbindungen</a>; <a
                    href="http://wvonline.ids-mannheim.de/idiome_russ/hintergrund.htm">Deutsche Russische Idiome
                    online</a>)</p>
              </div>
              <br />
              <ResourcesList :filter="['SPRW', 'KWViD', 'WVBF']" :showDesc="false"></ResourcesList>
            </v-card-text>
          </v-card>
          <v-card :style="highlightItem('Präsentationsformate')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/dummy_300x160/dummy_05.png" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
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
                <p>dynamisch-flexible Präsentations- und Visualisierungsformen, bei denen automatisch ermittelte
                  Korpusausschnitte wie KWICs, Kookkurrenzprofile und Slot-Filler-Tabellen ins Zentrum der Ressource
                  rücken. Informationen zu usuellem Gebrauch sind primär anhand von linguistisch systematisierten, aber
                  authentischen Sprachausschnitten ableitbar sind. (<a
                    href="http://uwv.ids-mannheim.de/prepcon/infotexte/info.html#sprachaneignung">Sprachaneignung durch
                    wiederkehrende Muster</a>) Die ordnende Hand bleibt jedoch unverzichtbar. Der Unterschied zu
                  herkömmlichen Beschreibungen ist nur,
                  dass die analytische Arbeit – wenn man so will – eher im Hintergrund abläuft, damit in großen Teilen
                  implizit bleibt, und nicht (oder nur knapp) in Form von metasprachlichen Texten sichtbar wird.</p>
              </div>
              <ResourcesList :filter="['WVBF', 'PREPCON']" :showDesc="false"></ResourcesList>
            </v-card-text>
          </v-card>
          <v-card :style="highlightItem('Pilot- und Einzelstudien')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/dummy_300x160/dummy_06.png" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
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
                Korpuszentrierte Präsentationsformate betonen die Analyse manuell systematisierter Korpusdaten. Hierbei
                werden Gebrauchsmerkmale direkt aus authentischen Sprachdaten erschlossen, um die Sprache realitätsnah zu
                erforschen. Optionale narrative Kommentare bieten zusätzlichen Kontext, ohne den Fokus von den primären
                Korpusdaten abzulenken.
              </div>
              <ResourcesList :filter="['ZUWV', 'PREPCONtemp', 'WVBF']"></ResourcesList>
            </v-card-text>
          </v-card>
          <v-card :style="highlightItem('Datikon')">
            <v-card-title>
              <div style="position: relative; justify-content: center;">
                <img src="/dummy_300x160/dummy_03.png" alt=""
                  style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                <div
                  style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                  <h1 class="text-xl font-bold">
                    Datikon
                  </h1>
                  <h3>Dynamische Visualisierungsformen</h3>
                </div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <p>Das Datikon enthält dynamisch-flexible Präsentations- und
                  Visualisierungsformen, bei denen automatisch ermittelte
                  Korpusausschnitte wie KWICs, Kookkurrenzprofile und Slot-Filler-Tabellen
                  ins Zentrum der Ressource rücken. Informationen zu usuellem Gebrauch
                  sind primär anhand von linguistisch systematisierten, aber authentischen
                  Sprachausschnitten ableitbar sind. (<a
                    href="http://uwv.ids-mannheim.de/prepcon/infotexte/info.html#sprachaneignung">Sprachaneignung
                    durch wiederkehrende Muster</a>)
                  Die ordnende Hand bleibt jedoch unverzichtbar. Der Unterschied zu
                  herkömmlichen Beschreibungen ist nur, dass die analytische Arbeit – wenn
                  man so will – eher im Hintergrund abläuft, damit in großen Teilen
                  implizit bleibt, und nicht (oder nur knapp) in Form von metasprachlichen
                  Texten sichtbar wird.</p>

              </div>
              <ResourcesList :filter="['WVBF', 'PREPCON']"></ResourcesList>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ResourcesList from "@/components/ResourcesList.vue";

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
    },
    components: { ResourcesList }
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