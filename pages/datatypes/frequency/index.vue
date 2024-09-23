<template>
  <h1>Frequenzangaben</h1>
  <p>Frequenzen (die Häufigkeit des Vorkommens eines Suchobjekts) werden auf der Basis von Suchanfragen (queries) zum
    Zwecke der Bestimmung von Gebräuchlichkeit im Korpus berechnet. Man kann davon ausgehen, dass besonders häufige
    Phänomene eher einen typischen Aspekt des Sprachgebrauchs in den jeweiligen Korpora abbilden als seltene. Allerdings
    sind Frequenzen nur Anhaltspunkte, denn es spielen viele Faktoren bei der automatischen Häufigkeitsermittlung eine
    Rolle. Deshalb sollten auch die Ko- und Kontexte in die Analyse einbezogen werden. Generell gibt es keine Häufigkeit
    in der Sprache an sich (z.B. die häufigsten Sprichwörter oder Komposita des Deutschen), sondern immer nur eine
    relative in Bezug auf die vorher formulierte Suchanfrage fußend auf der zu einem bestimmten Zeitpunkt ausgewählten
    Korpusbasis. Es geht also eher um Frequenzbereiche und Häufigkeitstrends bzw. -proportionen.</p>
  <br />
  <br />

  <div>
    <compare title="Frequenzangaben in">
      <template #headers>
        <v-tab value="ALL" class="nocaps">allen Ressourcen</v-tab>
        <v-tab value="1" class="nocaps">KoMuX</v-tab>
        <v-tab value="2" class="nocaps">PhrasKomp</v-tab>
        <v-tab value="3" class="nocaps">PREPCON<sup>kontrastiv</sup></v-tab>
        <v-tab value="4" class="nocaps">PREPCON<sup>temporal</sup></v-tab>
        <v-tab value="5" class="nocaps">PREPCON<sup>explorativ</sup></v-tab>
        <v-tab value="6" class="nocaps">SpruchList</v-tab>
        <v-tab value="7" class="nocaps">WVF (Grund)</v-tab>
      </template>
      <template #tabs>
        <compare-item value="ALL" :simple="true">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
            consectetur eligendi ipsa consequatur!
          </p>

          <div style="text-align: center; width:100%">
            <img src="/img/datatypes/frequency/frequency.png" style="text-align: center;" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque sed unde soluta veniam
            amet cum excepturi quis. Illo dolorem velit reprehenderit aspernatur nulla reiciendis est
            consectetur eligendi ipsa consequatur!
          </p>
        </compare-item>

        <compare-item value="1" rkey="KoMuX" description="Frequenzangaben in KoMuX"
          webpage="/img/datatypes/frequency/komux_fullscreen_01_annotated.png">

          <p>
            In KoMuX werden Frequenzlisten von unterschiedlichen Merkmalskombinationen der verzeichneten Komposita
            angezeigt: Lemma; Wortart; Wortbildungstyp; Thematische Kategorie.
          </p>

          <template #explain>
            <p>
              Ausschnitt aus der Frequenzliste für die Verbindungen "Lemma land und NOMEN":
            </p>
            <img src="/img/datatypes/frequency/komux_part_01.png" alt="" />

            <p style="margin-top: 10px;">
              Ausschnitt aus der Frequenzliste für die Verbindungen "ADJEKTIV und ORT":
            </p>
            <img src="/img/datatypes/frequency/komux_part_02.png" alt="" />
          </template>
        </compare-item>

        <compare-item value="2" rkey="PhrasKomp" description="Frequenzangaben in PhrasKomp"
          webpage="/img/datatypes/frequency/phraskomp_fullscreen_01_annotated.png">
          <p>
            In PhrasKomp werden Frequenzlisten von unterschiedlichen Merkmalskombinationen der verzeichneten
            Phrasenkomposita angezeigt: Zweitglieder; Ableitungstypen; semantische Gruppen des Zweitglieds.
          </p>

          <template #explain>
            <p>
              Ausschnitt aus der Frequenzliste: Häufigste Phrasenkomposita (ohne Attribuierung):
            </p>
            <img src="/img/datatypes/frequency/phraskomp_part_01.png" alt="" />

            <p style="margin-top: 10px;">
              Ausschnitt aus der Frequenzliste für die Verbindungen "unspezifiziertes Erstglied und Zweitglied Gerede"
            </p>
            <img src="/img/datatypes/frequency/phraskomp_part_02.png" alt="" />
          </template>
        </compare-item>

        <compare-item value="3" rkey="PREPCON_ex" webpage="/img/datatypes/frequency/prepe_fullscreen_01_annotated.png">
          <p>
            In PREPCON<sup>explorativ</sup> werden die absoluten und relativen Frequenzen der
            Präposition-Nomen-Verbindungen in zwei Formaten aufgeführt: Präpositionstabellen und Nomentabellen.
          </p>

          <template #explain>
            <p>
              Eintrag: „über“
              <br />&nbsp;
            </p>
            <img src="/img/datatypes/frequency/prepe_part_01.png" alt="" style="margin: 40px 0px 0px -130px;" />
            <p style="margin-top: 10px;">
              Ausschnitt aus der Frequenzliste für die Verbindungen "Präposition über und nachgestelltes NOMEN"
              <br />&nbsp;
            </p>
            <p>
              Eintrag: „Nacht“
              <br />&nbsp;
            </p>
            <img src="/img/datatypes/frequency/prepe_part_02.png" alt="" style="margin: 40px 0px 0px -130px;" />
            <p style="margin-top: 10px;">
              Ausschnitt aus der Frequenzliste für die Verbindungen "NOMEN Nacht und vorangestellte Präpositionen"
              <br />&nbsp;
            </p>
          </template>
        </compare-item>

        <compare-item value="4" rkey="PREPCON_kon"
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
              Eintrag: „am Anfang – al principio“
              <br />&nbsp;
            </p>
            <img src="/img/datatypes/frequency/prepk_part_01.png" alt="" />
            <img src="/img/datatypes/frequency/prepk_part_02.png" alt="" />
            <p style="margin-top: 10px;">
              Darstellung von Frequenzen und Suchanfragen für die PN‘s am Anfang – al principio (Deutsch-Spanisch). Beim
              Anklicken der Frequenzen erscheint die Suchanfrage.
            </p>
          </template>
        </compare-item>

        <compare-item value="5" rkey="PREPCON_temp"
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
              Artikel „über Nacht“:
            </p>
            <img src="/img/datatypes/frequency/prept_part_01.png" alt=""/>
            <img src="/img/datatypes/frequency/prept_part_02.png" alt="" />
            <p style="margin-top: 10px;">
              Darstellung von Frequenzen und Suchanfragen für die PN <i>über Nacht</i>.
              Beim Anklicken der Frequenzen erscheint die Suchanfrage.
            </p>
            <img src="/img/datatypes/frequency/prept_part_03.png" alt="" />
            <p style="margin-top: 10px;">
              Ausschnitt aus den Frequenzangaben der Kategorie FEIERTAGE. Beim Anklicken auf eine PN wird man auf den
              Eintrag in PREPCON<sup>explorativ</sup> verlinkt.
            </p>
            <img src="/img/datatypes/frequency/prept_part_04.png" alt="" />
            <p style="margin-top: 10px;">
              Verlinkter Eintrag „Heiligabend“ in PREPCONexplorativ
            </p>
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
            <img src="/img/datatypes/frequency/spruchlist_part_01.png" alt="" />

            <p style="margin-top: 10px;">
              Ausschnitt aus der SpruchList-Frequenzliste mit Suchanfragen
            </p>
          </template>
        </compare-item>

        <compare-item value="7" rkey="WVBF" description="Frequenzangaben in KoMuX"
          webpage="/img/datatypes/frequency/wvg_fullscreen_01_annotated.png">

          <p>
            In WV-Feld GRUND werden zwei Suchanfragen angegeben: Präposition in Klein- sowie Großschreibung plus eine
            Wortform des Lemma GRUND in unmittelbarer Folge. In bestimmten Fällen kann die Suchanfrage weitere Elemente
            enthalten, z.B. um nicht zutreffende Belege auszuschließen, die andere Wortverbindungen oder Muster
            erfassen.
          </p>

          <template #explain>
            <p>
              Knoten „mit Grund“:
            </p>
            <img src="/img/datatypes/frequency/wvg_part_01.png" alt="" />
            <p>Frequenzangaben zum PN-Knoten mit Grund</p>

            <p style="margin-top: 10px;">
              Knoten „im Grunde“:
            </p>
            <img src="/img/datatypes/frequency/wvg_part_02.png" alt="" />
            <p>Frequenzangaben zum PN-Knoten <i>im Grunde</i> und zugrunde liegende Suchanfragen</p>
          </template>
        </compare-item>
      </template>
    </compare>
  </div>
</template>