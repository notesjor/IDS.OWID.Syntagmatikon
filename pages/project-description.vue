<template>
  <div>
    <v-row>
      <v-col>
        <h1>
          Was ist das <hi>Syntagmatikon</hi>?
        </h1>
      </v-col>
    </v-row>
    <v-row style="margin-top:-50px">
      <v-col>
        <v-carousel>
          <v-carousel-item src="/img/project-description/pd_01.png" height="500px"></v-carousel-item>
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
            verstehen sind – Wortgruppen und &#8209;folgen also, die als „eingefrorene“
            Bausteine im Sprachgebrauch eingesetzt werden.</p>
          <p>Die Wortschatzeinheiten und -ausschnitte im <hi>Syntagmatikon</hi> wurden und werden
            in unterschiedlichen IDS-Projekten (<a
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
            sondern dynamisch-flexibel in unterschiedlichen Beschreibungstiefen.
            <expand-me>Die Heterogenität der Formate spiegelt ebenso die
              wissenschaftshistorische Entwicklung des korpuslinguistischen Paradigmas
              (<a href="https://www.ids-mannheim.de/digspra/kl/projekte/methoden/">Korpusanalyse
                und- erschließung</a>) und seiner onlinelexikografischen Umsetzungen am
              IDS wider: von den Anfängen zur Jahrtausendwende (<a
                href="https://www.ids-mannheim.de/lexik/elexiko">elexiko</a>) über
              Pilotstudien (<a href="http://wvonline.ids-mannheim.de/home.htm">WV
                online</a>) und Aufbereitung in großen Online-Wörterbüchern in den
              Nuller- und Zehnerjahren in <a href="https://www.owid.de/">OWID</a> (<resources-list-compact
                :filter="['Verlaufsformen', 'SPRW']"></resources-list-compact>) bis
              hin zu Datenbanken (<resources-list-compact
                :filter="['KoMuX', 'MAP', 'Redeeinleiter']"></resources-list-compact>);
              neuartigen Präsentationsformaten (<resources-list-compact :filter="['PREPCON']"></resources-list-compact>)
              und Inventaren (<resources-list-compact :filter="['Spruchlist', 'PhrasKomp']"></resources-list-compact>)
              in
              der
              Gegenwart.
            </expand-me>
          </p>

          <p>Eine Besonderheit des <span class="smallcaps">Syntagmatikons</span>
            stellen erklärende Texte mit unterschiedlichen Informationstiefen dar,
            die als Leitfaden eine Navigationsfunktion für das gesamte Portal
            erfüllen (Ressourcenkompass). Ergebnisse und Datenformate unserer
            Grundlagenforschung werden so transparent dargestellt, dass sich andere
            „andocken“ und die Angebote für ihre Zwecke nutzen und weiterverarbeiten
            können, z. B. im Bereich Deutsch als Fremdsprache. Es geht dabei
            erklärtermaßen nicht um Didaktisierung im strengen Sinne, sondern um
            allgemeinverständliche Erklärungen.
          </p>


        </div>
      </v-col>
    </v-row>
  </div>
</template>