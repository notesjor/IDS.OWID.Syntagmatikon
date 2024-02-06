<template>
  <div style="max-width: 80ch;">
    <v-row>
      <v-col>
        <div>
          <h1>
            Was ist das Syntagmatikon?
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row style="margin-top:-50px">
      <v-col>
        <v-carousel>
          <v-carousel-item src="/img/project-description/pd_01.png"></v-carousel-item>
          <v-carousel-item src="/img/project-description/pd_02.png"></v-carousel-item>
          <v-carousel-item src="/img/project-description/pd_03.png"></v-carousel-item>
          <v-carousel-item src="/img/project-description/pd_04.png"></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <p>Die Abbildungen illustrieren Zusammenhänge zwischen Ausdrücken, die
            linear verfestigt und als syntagmatische lexikalische Einheiten zu
            verstehen sind – Wortgruppen und -folgen also, die als „eingefrorene“
            Bausteine im Sprachgebrauch eingesetzt werden. <a
              href="https://de.wikipedia.org/wiki/Lexikalische_Funktion">(Lexikalische
              Funktion</a>)</p>
          <p>Die Wortschatzeinheiten und -ausschnitte im <span class="smallcaps">Syntagmatikon</span> wurden und werden in
            unterschiedlichen IDS-Projekten (<a
              href="https://www.ids-mannheim.de/lexik/syntagmatik-im-lexikon/">Syntagmatik
              im Lexikon</a>; <a href="http://www.redewiedergabe.de/">Redewiedergabe</a>) auf der Basis
            sehr großer Korpora (<a href="https://www.ids-mannheim.de/digspra/kl/projekte/korpora/">DeReKo</a>)
            erforscht, in Online-Wörterbüchern, Datenbanken, Inventaren und
            Pilotstudien aufbereitet und miteinander verknüpft. Das Portal enthält
            vollautomatisch erstellte Daten; semiautomatische aufbereitete Daten und
            Angaben sowie qualitative Beschreibungen.</p>
          <p>Je nach Zielsetzung und Vorgehen unterscheiden sich Daten- und
            Angabetypen in den Ressourcen. Es handelt sich um ein modulares
            Onlineformat, bei dem verfestigte Wortgruppen und lexikalisch geprägte
            Mustern nicht nach einem einheitlichen Raster dargestellt werden,
            sondern dynamisch-flexibel in unterschiedlichen Beschreibungstiefen.</p>
          <p>Die Heterogenität der Formate spiegelt ebenso die
            wissenschaftshistorische Entwicklung des korpuslinguistischen Paradigmas
            (<a href="https://www.ids-mannheim.de/digspra/kl/projekte/methoden/">Korpusanalyse
              und- erschließung</a>) und seiner onlinelexikografischen Umsetzungen am
            IDS wider: von den Anfängen zur Jahrtausendwende (<a
              href="https://www.ids-mannheim.de/lexik/elexiko">elexiko</a>) über
            Pilotstudien (<a href="http://wvonline.ids-mannheim.de/home.htm">WV
              online</a>) und Aufbereitung in großen Online-Wörterbüchern in den
            Nuller- und Zehnerjahren <a href="https://www.owid.de/">OWID</a>(<a
              href="https://www.owid.de/wb/progdb/start.html">Verlaufsformen</a>; <a
              href="https://www.owid.de/wb/sprw/start.html">Sprichwörterbuch</a>) bis
            hin zu Datenbanken (<a href="https://www.owid.de/plus/komux/">KoMuX</a>;
            MAP; <a href="https://www.owid.de/plus/redeeinleiter/">Redeeinleiter</a>);
            neuartigen Präsentationsformaten (<a
              href="http://uwv.ids-mannheim.de/prepcon/prepcon_online.html">PREPCON<sup>online</sup></a>)
            und Inventaren (PhK; <a href="http://uwv.ids-mannheim.de/spruchlist/">SpruchList</a>) in der
            Gegenwart.</p>
          <p>Eine Besonderheit des <span class="smallcaps">Syntagmatikons</span>
            stellen erklärende Texte mit unterschiedlichen Informationstiefen dar,
            die als Leitfaden eine Navigationsfunktion für das gesamte Portal
            erfüllen ( Ressourcenkompass). Ergebnisse und Datenformate unserer
            Grundlagenforschung werden so transparent dargestellt, dass sich andere
            „andocken“ und die Angebote für ihre Zwecke nutzen und weiterverarbeiten
            können, z. B. im Bereich Deutsch als Fremdsprache. Es geht dabei
            erklärtermaßen nicht um Didaktisierung im strengen Sinne, sondern um
            allgemeinverständliche Erklärungen von:</p>
        </div>
      </v-col>
    </v-row>
  </div>
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

<style scoped>
ul {
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 25px;
}

ol {
  list-style-type: decimal;
  list-style-position: inside;
  margin-left: 25px;
}

ul ul,
ol ul {
  list-style-type: circle;
  list-style-position: inside;
  margin-left: 15px;
}

ol ol,
ul ol {
  list-style-type: lower-latin;
  list-style-position: inside;
  margin-left: 15px;
}
</style>