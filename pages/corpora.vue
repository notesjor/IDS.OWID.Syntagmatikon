<script setup>
definePageMeta({
  layout: "default",
  ctitle: "Korpora im Syntagmatikon",
})
</script>
<template>
  <v-row>
    <v-col>
      <h1>Korpora im <hi>Syntagmatikon</hi>
      </h1>
      <p>Das am IDS beheimatete <a href="https://www.ids-mannheim.de/digspra/kl/projekte/korpora/">Deutsche
          Referenzkorpus (DeReKo)</a> ist die empirische Grundlage für nahezu alle
        Ressourcen des <hi>Syntagmatikons</hi>. Bei DeReKo handelt es sich um die
        „[...] weltweit größte Sammlung deutschsprachiger Korpora als empirische Basis
        für die linguistische Forschung“ (57,6 Mrd. Wörter; Stand 09.01.2024).
        Den einzelnen Ressourcen liegen unterschiedliche nicht-annotierte und
        annotierte Teilkorpora zugrunde:</p>
    
      <v-row>
        <v-col>
          <div>
            <r rkey="KoMuX" />
          </div>
          <div style="margin: 5px 0px 0px 20px; font-size: 0.9em; font-weight: 300;">
            <a href="https://grammis.ids-mannheim.de/korpusgrammatik/6615">KoGra
            Untersuchungskorpus</a> (Ausschnitt aus <a
            href="https://www.ids-mannheim.de/digspra/kl/projekte/korpora/">DeReKo)</a>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>
            <r rkey="Redeeinleiter" />
          </div>
          <div style="margin: 5px 0px 0px 20px; font-size: 0.9em; font-weight: 300;">
            <a href="https://github.com/redewiedergabe/corpus">Redewiedergabe-Korpus</a>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>
            <r rkey="PREPCON_ex" />
          </div>
          <div style="margin: 5px 0px 0px 20px; font-size: 0.9em; font-weight: 300;">
            <a href="https://www2.ids-mannheim.de/cosmas2/projekt/referenz/archive.html">Tagged-T</a>
          (DeReKo-Teilkorpus)
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>
            <r rkey="PREPCON_kon" />
          </div>
          <div style="margin: 5px 0px 0px 20px; font-size: 0.9em; font-weight: 300;">
            Webkorpora <a href="https://www.sketchengine.eu/estenten-spanish-corpus/">esTenTen18</a> und
          <a href="https://www.sketchengine.eu/sktenten-slovak-corpus/">skTenTen11</a>;<br/> Slowakisches Nationalkorpus <a
            href="https://korpus.sk/index_en.html">SNK</a>
          </div>
        </v-col>
      </v-row>

      <p>Alle anderen Ressourcen basieren unterschiedlichen Ausgaben der
        <a href="https://www.ids-mannheim.de/digspra/kl/projekte/korpora/releases">DeReKo-W-Archive</a>.
      </p>
      <p>Für die Auswertung kamen quantitative Methoden wie Frequenzzählungen,
        iterative Suchen nach Textbelegen, statistische Kookkurrenzanalysen
        sowie Slot-Füller-Analysen zum Einsatz.
        <expand-me>
          <p>
            <strong>Sprachaneignung durch wiederkehrende Muster in
              Korpora</strong>
          </p>
          <p>Was tun wir in der Regel, wenn wir nach einem angemessenen Ausdruck
            suchen? Klassischerweise schlagen wir im Wörterbuch nach. Heute nutzen
            wir aber auch die Ressourcen im Internet, seien es elektronische
            Wörterbücher wie Duden online oder dict.cc, automatische
            Übersetzungshilfen wie Google Übersetzer und DeepL oder Datenbanken mit
            übersetzten Texten wie Linguee. Eine immer zentralere Rolle spielt natürlich die KI.</p>
          <p>Alle diese Quellen sind - vor allem, wenn man sie kombiniert -
            durchaus sehr nützlich. Was sie aber nicht befriedigend leisten, sind
            gesicherte Aussagen über Typikalität auf der einen Seite und über die
            kleinen, aber feinen Unterschiede im Gebrauch eines Ausdrucks auf der
            anderen.</p>
          <p>Sicherlich muss jemand, der beispielsweise beginnt, eine Fremdsprache
            zu lernen, noch nicht mit all diesen Feinheiten vertraut sein. Je höher
            sich die Sprachkompetenz aber entwickelt, desto mehr wächst das
            Bedürfnis, nicht nur Fehler zu vermeiden oder sich irgendwie
            verständlich auszudrücken, sondern nah am muttersprachlichen Gebrauch zu
            kommunizieren.</p>
          <p>Das Maß des Verstehens dieses „gewissen Etwas“ macht einen kulturell
            angemessenen Sprachgebrauch aus. Hat man das Privileg, eine Fremdsprache
            in dem entsprechenden Land zu lernen oder zu vertiefen, erwirbt man
            solche Kontextsensibilität „by doing“. Man hört bestimmte Ausdrücke und
            Chunks immer wieder und kann sie irgendwann aufgrund der wiederkehrenden
            Situationen memorieren. Von außen gestaltet sich dieser Lernprozess
            jedoch ungleich schwieriger; und nicht immer können Lehrbücher und
            Wörterbücher diese Lücken füllen.</p>
          <p><strong>Korpora</strong> als elektronische Sammlungen von
            sprachlichen Massendaten simulieren wiederkehrende Kontextmuster in
            authentischer Sprache bis zu einem gewissen Grad. Mithilfe quantitativer
            Auswertungen und statistischer Clusteringverfahren lassen sich neue
            Einsichten zu typischem Sprachgebrauch gewinnen. Typischer
            Sprachgebrauch manifestiert sich darin, dass viele Sprecher einer
            Sprachgemeinschaft verteilt über viele Texte und Zeitverläufe bestimmte
            sprachliche Einheiten auf dieselbe oder ähnliche Weise einsetzen.</p>
        </expand-me>
      </p>
    </v-col>
  </v-row>
</template>