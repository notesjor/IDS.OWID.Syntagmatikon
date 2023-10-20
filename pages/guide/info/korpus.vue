<template>
  <div>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col>
        <div style="position: relative;">
          <img src="/guide/methods/korpus.jpg" alt="" />
          <div
            style="position: absolute; bottom: 0; left: 10px; background-color: rgba(255, 255, 255, 0.5); width: 100%;">
            <h1 class="text-3xl font-bold">
              Was ist ein Korpus?
            </h1>
            <h2>Definition und Verwendung (Suchabfragen)</h2>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <h3>
          Kurzzusammenfassung
        </h3>
        <div>
          In den Sprach- als auch Literaturwissenschaften versteht man unter Korpora (Plur. Korpora, die / Sing. Korpus,
          das) ganz allgemein Textsammlungen. Nach Lemnitzer und Zinsmeister (2010, S. 40) ist ein Korpus: „[…] eine
          Sammlung [authentischer] schriftlicher oder gesprochener Äußerungen in einer oder mehreren Sprachen“. Die
          Zusammenstellung erfolgt nach verschiedenen wissenschaftlichen Kriterien, die sich am zu untersuchenden
          Gegenstand orientieren (Bsp. 1: Soll strategische Kommunikation in politischen Reden analysiert werden, so wird
          ein Korpus aus ‚Politischen Reden‘ zusammengestellt, die strategisch/kommunikative Praktiken enthalten – Bsp. 2:
          Für die Analyse von Modalpartikeln im Fremdsprachenerwerb wird ein Korpus aus transkribierten Redebeiträgen
          verschiedener Erwerbsstufen benötigt). Prinzipiell kann ein Korpus auch analog (gedruckt) vorliegen und manuell
          ausgewertet werden – In der empirischen Linguistik ist ein Korpus aber i. d. R. immer ein digitales
          (maschinenlesbares) Korpus, das automatisiert (mittels Software) ausgewertet wird.
        </div>
        <h3 style="margin-top: 20px;">
          Erweiterte Begriffsklärung
        </h3>
        <div>
          Korpora bestehen nicht nur aus den Texten (den so genannten Primärdaten), sie umfassen auch eine ganze Reihe
          weiterer Sekundärdaten. Im Wesentlichen handelt es sich dabei um Metadaten und Annotationen (vgl. hierzu Perkuhn
          et al. (2012)). Metadaten sind Zusatzinformationen zu einzelnen Texten (z. B. der Titel, Autor*in, Datum,
          Textsorte etc.). Diese Metadaten können in der Korpusanalyse genutzt werden, um etwa Akteursgruppen, Zeitfenster
          oder Textsorten miteinander zu vergleichen bzw. sie zueinander in Beziehung zu setzen (z.B. Vergleich von
          Sprachgebrauchsmuster bestimmter Autor*innen / Unterschiedlicher Sprachgebrauch in zwei oder mehr definierten
          Zeitfenstern).
          Annotationen sind Sekundärdaten, die direkt mit dem Text verknüpft sind. Annotationen können sowohl manuell
          erstellt oder automatisch erzeugt werden. Elektronische Korpora werden i. d. R. mehrstufig automatisch
          annotiert. Zusätzliche manuelle Annotationen oder Nachkorrekturen der automatischen Annotation sind je nach
          Forschungsinteresse notwendig. Folgende automatische Prozessschritte sind weit verbreitet: Zerteilung der Texte
          in einzelne Sätze, Zerteilung der Sätze in einzelne Token (Unter den Begriff ‚Token‘ fallen sowohl Wortformen
          (Berg, Berge, Berges etc.) als auch Satzzeichen), automatische Lemmatisierung der Token (Token: Häuser > Lemma:
          Haus), automatische Zuordnung der Wortart (Token: Berge > Wortart: Nomen), Annotation von Phrasen (Token: Das
          wundersame Fest > Phrase: Nominalphrase). Ein so aufbereitetes Korpus erlaubt sehr komplexe Analyse- und
          Abfragemöglichkeiten (z. B.: Suche alle Sätze mit Nominalphrasen, die das Lemma ‚Krise‘ enthalten).
        </div>
        <div>
          Wie Mukherjee (2009) anmerkt, arbeitet die Sprachwissenschaft bereits in der ‚Vor-Computer-Zeit‘ mit
          Textsammlungen, also Korpora. So wird u. a. das Beispiel der Konkordanz-Analyse der King James Bibel von
          Alexander Curden aus dem Jahre 1736 als eine händische Korpusanalyse angeführt. Bei dieser Analyse werden
          Konkordanzen/Belegsätze geordnet und ggf. gefiltert. Durch diese Art der Darstellung lässt sich der Kontext
          einfacher erkennen und auswerten. Während man in der ‚Vor-Computer-Zeit‘ auf händische Arbeit angewiesen war
          (Belege abschreiben/abtippen, ausschneiden, auf Karteikarten aufkleben etc.), kann eine solche
          Konkordanz-Analyse heutzutage mittels entsprechender Software in Sekundenschnelle auf riesige Korpora angewendet
          werden. Folgendes Beispiel zeigt eine Konkordanz-Analyse zum Stichwort ‚Europa‘ in Plenarprotokollen des
          Europäischen Parlaments:
        </div>
        <img src="https://diskursmonitor.de/wp-content/uploads/2021/03/G1-vor-BSP.png" alt="" style="margin: 20px;">
        <div>Die ersten computergestützten <em>Korpora</em> entstanden Mitte des 20. Jahrhunderts. Das <a
            href="http://korpus.uib.no/icame/brown/bcm.html">Brown University Corpus of Present-Day American English</a>
          (vgl. Francis und Kučera (1964) war das erste rein computergestützte <em>Korpus </em>und umfasste bereits eine
          Million Wörter. Es setzte sich, wie der Name schon andeutet, aus unterschiedlichsten schriftsprachlichen Genres
          der amerikanischen Gegenwartssprache zusammen. Ebenfalls 1964 entstand mit dem <a
            href="https://www1.ids-mannheim.de/kl/projekte/korpora/archiv/mk.html">Mannheimer Korpus I</a> (MK_I) am
          <em>Leibniz-Institut für Deutsche Sprache</em> unter der Leitung von Paul Grebe und Ulrich Engel ein
          vergleichbares <em>Korpus</em> des Deutschen mit sogar bereits 2,2 Mio. Token. Durch die Verbreitung und schnell
          steigenden Computerkapazitäten wuchsen auch die Möglichkeiten der Korpuslinguistik. Bereits in den 1990ern
          erreichte das <a href="http://www.natcorp.ox.ac.uk/">British National Corpus (BNC)</a> einen Umfang von über 100
          Millionen Token. Im Jahr 2000 überschritt das <a
            href="https://www1.ids-mannheim.de/kl/projekte/korpora.html">Deutsche Referenz Korpus (DeReKo)</a> – basierend
          auf dem Projekt <em>Mannheimer Korpus</em> (siehe oben) – die Schwelle von einer Milliarde Token. Mit Stand
          02.02.2021 umfasst <em>DeReKo</em> 50 Milliarden Token (vgl. zur Entwicklung auch Kupietz et al. (2018)). Viele,
          auch kleinere, spezifischere Korpusprojekte entstanden in den letzten Jahrzehnten. Eine gute Ausgangsbasis für
          eigene Recherchen bietet die Plattform <a href="https://www.clarin.eu/resource-families">CLARIN</a> – hier sind
          viele freie Korpus-Ressourcen gelistet.<br>Für das Teilprojekt <a
            href="https://diskursmonitor.de/barometer/">Barometer</a> im <em>DiskursMonitor</em> wurden verschiedene freie
          Korpora als Referenzkorpora aggregiert (eine <a href="https://diskursmonitor.de/barometer/korpora/">Beschreibung
            finden Sie hier</a>). Außerdem wurde eine Infrastruktur entwickelt, die eine <a
            href="https://diskursmonitor.de/barometer/korpora/live-korpus/">LIVE-Analyse</a> ermöglicht. Die
          <em>Korpora</em> stehen intern für Lehrstuhlprojekte aber auch externen Forschenden zur Verfügung.
          Besucher*innen der Webseite können auf aggregierte Korpusdaten einfache Analysen durchführen (<a
            href="https://diskursmonitor.de/barometer/analysen/">zu den Analysen</a>).
        </div>
        <div>
          <img src="https://diskursmonitor.de/wp-content/uploads/2023/06/Bild5-300x250.png"
            style="margin:20px; margin-left: 25%;" alt="">
        </div>
        <h3 style="margin-top: 20px;">
          Literatur
        </h3>
        <ul>
          <li>
            <p>Bubenhofer, Noah (2009): Sprachgebrauchsmuster. Korpuslinguistik als Methode der Diskurs- und
              Kulturanalyse. Zugl.: Zürich, Univ., Diss., 2008. Berlin: de Gruyter.<br>Calzolari, Nicoletta et al. (Hrsg.)
              (2018): Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC
              2018). Miyazaki, Japan: European Language Resources Association (ELRA).</p>
          </li>
          <li>
            <p>Francis, W. Nelson; Kučera, Henry (1964): Manual of Information to Accompany‚ A Standard Sample of
              Present-Day Edited American English, for Use with Digital Computers*. Brown University, Providence.
              Department of Linguistics.</p>
          </li>
          <li>
            <p>Kupietz, Marc et al. (2018): The German Reference Corpus DeReKo: New Developments – New Opportunities. In:
              Calzolari, Nicoletta et al. (Hrsg.): Proceedings of the Eleventh International Conference on Language
              Resources and Evaluation (LREC 2018). Miyazaki, Japan: European Language Resources Association (ELRA).</p>
          </li>
          <li>
            <p>Lemnitzer, Lothar; Zinsmeister, Heike (2010): Korpuslinguistik. Eine Einführung. Tübingen: Narr Verlag.</p>
          </li>
          <li>
            <p>Mukherjee, Joybrato (2009): Anglistische Korpuslinguistik. Eine Einführung. Berlin: Schmidt.</p>
          </li>
          <li>
            <p>Perkuhn, Rainer; Keibel, Holger; Kupietz, Marc (2012): Korpuslinguistik. Paderborn: Fink.</p>
          </li>
          <li>
            <p>Scherer, Carmen (2014): Korpuslinguistik. Heidelberg: Winter.</p>
          </li>
          <li>
            <p>Stede, Manfred (2007): Korpusgestützte Textanalyse. Grundzüge der Ebenen-orientierten Textlinguistik.
              Tübingen: Narr.</p>
          </li>
        </ul>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

h2 {
  font-size: x-large;
  font-weight: lighter;
}

h3 {
  font-size: large;
}

a {
  color: #1976d2;
}

li {
  list-style-type: disc;
  margin-left: 30px;
}
</style>