<script setup>
definePageMeta({
  layout: "subpage",
})
</script>
<script>
import { useLayoutStore } from '~/stores/layout';
export default {
  mounted() {
    const props = useLayoutStore();
    props.title = 'Kookkurrenzprofile';
    props.parent = 'Informationstypen';
  },
}
</script>
<template>
  <h2>Typische Partnerwörter</h2>

  <p>Mithilfe statistischer Berechnungen (sog. Kookkurrenzanalysen) lassen sich besondere Anziehungskräfte (Cluster)
    zwischen Wörtern und Wortgruppen im Korpus ermitteln. Das bedeutet, dass bestimmte sprachliche Einheiten
    überproportional häufig in der Umgebung des Suchobjekts vorkommen. Dieser „Wort-Magnetismus“ spiegelt sich in
    Partnerwort-Profilen, deren Auswertung mittlerweile zu den wichtigsten Werkzeugen in der Wörterbucharbeit
    gehören.</p>
  <p>Die Partnerwort-Cluster lenken den Blick u.a. auf typische Bedeutungen oder Bewertungen, die Sprecher mit einem
    Wort oder einer Wortgruppe in bestimmten wiederkehrenden Situationen, Diskursen, Domänen usw. verbinden. Solche
    Profile enthalten auch stark verfestigte Verbindungen, wie Kollokationen oder Redewendungen, die zentrale
    sprachliche Bausteine (z.B. beim Fremdsprachenerwerb) darstellen.
  </p>
  <p>Im <hi>Syntagmatikon</hi> dienen automatisch ermittelte Kookkurrenzpofile nicht nur als empirische Basis, sondern
    werden in einigen Ressourcen selbst als lexikografische Informationseinheiten angeboten.</p>

  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['PREPCON_temp_art', 'PREPCON_kon', 'WVBF']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <NuxtImage src="/img/datatypes/cooccurrence/cooccurrence_all.png" style="text-align: center;"
            alt="Beispielgrafik 1" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_temp_art" buttonUrl="">
        <p>
          In
          <r rkey="PREPCON_temp_art" /> sind Kookkurrenzprofile einschließlich der KWIC-Cluster der jeweiligen
          Präposition-Nomen-Verbindung unter der Überschrift „Typische Partnerwörter“ hinterlegt. Beim
          Anklicken der Wolkenvisualisierung erhält man die Kookkurrenzliste einschließlich bis zu 50 KWIC
          zu jedem Cluster (statistische Zufallsauswahl).
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/cooccurrence/prepcon_temp_wordcloud.png" alt="Beispielgrafik 1">
            Wolkendarstellung von Kookkurrenzen im Eintrag „am Ende“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/cooccurrence/prepcon_temp_kook.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/htmlfiles/clusterfiles/Clusters_amEnde_1_1_KA_oFW_3.html">
            Ausschnitt aus Kookkurrenzliste im Eintrag „am Ende“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/cooccurrence/prepcon_temp_kwics.png" alt="Beispielgrafik 3"
            to="http://uwv.ids-mannheim.de/prepcon/modul2/artikel/am_Ende/htmlfiles/clusterfiles/Clusters_amEnde_1_1_KA_oFW_3_XML/Kwics_Tunnels_Licht_erkennbar_5210.html">
            KWIC-Cluster im Eintrag „am Ende“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="2" rkey="PREPCON_kon">
        <p>
          In
          <r rkey="PREPCON_kon" /> werden
          Kookkurrenzprofile für das
          Sprachenpaar deutsch-spanisch und deutsch-slowakisch dargestellt. Da die Profile auf
          unterschiedlichen Korpora
          basieren (DeReKo-W-Archiv; Webkorpora in Sketch Engine), sind die quantitativen Angaben nicht
          vergleichbar.
          Trotzdem weisen bestimmte Partnerwortgruppen in allen Sprachen Gemeinsamkeiten auf, was für eine
          über ein
          spezielles Korpus hinausgehende Verallgemeinerbarkeit spricht (universale Beziehungen).
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/cooccurrence/prepcon_kon_wolken.png" alt="Beispielgrafik 1">
            Wolkendarstellung von Kookkurrenzen in den Einträgen „nach Belieben“ und „a su gusto“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/cooccurrence/prepcon_kon_kook_deutsch.png" alt="Beispielgrafik 2"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/nach_Belieben/de/Clusters_nachBeliebenKA_1.html">
            Ausschnitt aus Kookkurrenzliste im Eintrag „nach Belieben“
          </NuxtImage>
          <NuxtImage src="/img/datatypes/cooccurrence/prepcon_kon_kook_spanisch.png" alt="Beispielgrafik 3"
            to="http://uwv.ids-mannheim.de/prepcon/modul3/zusatzdateien/nach_Belieben/es/Clusters_AllTags_A_a_su_gusto_coll_5.html">
            Ausschnitt aus Kookkurrenzliste im Eintrag „a su gusto“
          </NuxtImage>
        </template>
      </compare-item>

      <compare-item value="3" rkey="WVBF">
        <p>
          Im
          <r rkey="WVBF" /> werden in ausgewählten
          Knoten
          Kookkurrenzprofile von Einwort-Kontrasteinheiten angezeigt, z.B. bei <em>aus gutem Grund</em>;
          <em>mit
            Grund</em> das <em>berechtigerweise</em>-Profil oder bei <em>im tiefsten Grunde</em> das
          <em>eigentlich</em>-Profil. Durch diesen Vergleich wird deutlich, in welchen Kontexten die
          Wortverbindung
          synonym zu seinem Einwortäquivalent ist, in welche sich beide Ausdrücke aber auch unterscheiden.
        </p>
        <template #explain>
          <NuxtImage src="/img/datatypes/cooccurrence/wvfeld_eigentlich.png" alt="Beispielgrafik 1"
            to="http://wvonline.ids-mannheim.de/wvfelder-v3/extrafiles/im_GRUND/im_tiefsten_Grunde/Kook_eigentlich.txt.xml.html">
            Ausschitt aus dem Kookkurrenzprofil von <em>eigentlich</em> im WV-Feld-Knoten „im tiefsten Grunde“
          </NuxtImage>
        </template>
      </compare-item>
    </compare>
  </div>

</template>
