<script>
import { useLayoutStore } from '~/stores/layout';
export default {
    mounted() {
        const props = useLayoutStore();
        props.title = 'Dokumentation zur Suche';
        props.parent = 'Fallbeispiele'; // Das muss so bleiben - damit die Farbe korrekt ist.
    },
}
</script>
<template>
    <h1>Dokumentation zur Suche</h1>
    <p>
        Hier finden Sie weiterführende Informationen zur <a href="/search">Suchfunktion</a> des <hi>Syntagmatikons</hi>. Erklärt werden die verschiedenen <b>Sucharten</b>, die zur Verfügung stehen, sowie die Möglichkeiten, die Suche durch den <b>Ressourcenfilter</b> und den <b>Facettenfilter</b> zu verfeinern.
    </p>
    <h2>Sucharten</h2>
    <p>Die Sucharten unterscheiden sich in der Art, wie die eingegebenen Suchbegriffe verarbeitet werden.</p>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare :filter="['Lemmabasierte Suche', 'Exakte Wortformsuche', 'Unscharfe Wortsuche', 'Zeichenkettensuche']">
        <compare-item value="0">
            
               <div style="text-align: center; width:100%">
          <NuxtImage src="/img/search/searchtypes.png" style="text-align: center;" alt="Beispielgrafik 1" />
        </div>
        </compare-item>

        <compare-item value="1"> <!-- Lemmabasierte Suche -->
            <p>Findet alle Flexionsformen eines Lemmas.</p>
            <template #explain>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"schlagen"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>ein Rad <m>schlagen</m> vor Freude</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Pack <m>schlägt</m> sich, Pack verträgt sich</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span><span style="font-variant: small-caps;">Präposition</span>
                                    <m>Schlagen</m>
                                </span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"sein"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Aller Anfang <m>ist</m> schwer</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>gewahr <m>sein</m></span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>im Vollbesitz <m>seiner</m> geistigen Kräfte</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>auf der Hut <m>sein</m> vor Dieben</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Früher-<m>war</m>-alles-besser-Gerede</span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"alle sein"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Aller</m> Anfang <m>ist</m> schwer
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Alles</m> hat <m>seine</m> Zeit
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Alle-sind</m>-gut-drauf-Gerede
                                </span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
            </template>
        </compare-item>

        <compare-item value="2"> <!-- Exakte Wortformsuche -->
            <p>Findet nur die eingegebene Wortform. Flexionsformen werden nicht
                berücksichtigt.</p>
            <template #explain>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"waren"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Das <m>waren</m> noch Zeiten</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>greifen nach <m>Waren</m></span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Waren</m>-Verwaltung
                                </span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"alle ist"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Grau <m>ist alle</m> Theorie</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span><m>Alle-sind</m>-gut-drauf-Gerede</span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"aller ist"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Aller</m> Anfang <m>ist</m> schwer
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Müßiggang <m>ist aller</m> Laster Anfang</span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"alles ist"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Alles-ist</m>-möglich-Ruf
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Dabeisein <m>ist alles</m></span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"allen ist"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Allen</m> Leuten recht getan, <m>ist</m> eine Kunst die niemand kann
                                </span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
            </template>
        </compare-item>

        <compare-item value="3"> <!-- Unscharfe Wortsuche -->
            <p>Findet Wörter mit ähnlicher Schreibung. Dadurch können auch Treffer
                erscheinen,
                die zu einem anderen Lemma gehören.</p>
            <template #explain>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"Grab"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span><span style="font-variant: small-caps;">Präposition</span>
                                    <m>Gräben</m>
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Alexander-<m>Grab</m></span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>graben</m> nach Gold
                                </span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"rosten"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>rosten</m> <span style="font-variant: small-caps;">Präposition</span>
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span><span style="font-variant: small-caps;">Präposition</span>
                                    <m>Rost</m>
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span><span style="font-variant: small-caps;">Präposition</span>
                                    <m>Rösten</m>
                                </span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
            </template>
        </compare-item>

        <compare-item value="4"> <!-- Zeichenkettensuche -->
            <p>Findet beliebige Zeichenfolgen. Unabhängig davon, ob sie ein vollständiges
                Wort
                oder nur einen Wortteil bilden.</p>
            <template #explain>
                <v-list>
                    <v-list-item style="margin:-10px 0px 0px 0px">
                        <span style="font-weight: 400; font-size: 0.90rem;">
                            <v-icon icon="mdi-magnify" />&nbsp;<b>"ab"</b> findet:
                        </span>
                        <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>ab</m> Werk
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Der Bart ist <m>ab</m></span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>Ab</m>sicht äußern
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>
                                    <m>ab</m>bauen <span style="font-variant: small-caps;">Präposition</span>
                                </span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Die-N<m>ab</m>el-der-Welt-Woche</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon icon="mdi-pan-right" />&nbsp;
                                <span>Alexander-Gr<m>ab</m></span>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
            </template>
        </compare-item>
    </compare>

    <h2>Ressourcenfilter</h2>

    <p>
        Mit Hilfe des Ressourcenfilters kann man die Suche auf eine oder mehrere ausgewählte Ressourcen beschränken.</p>
    <p>Beispiel: „Finde alle Treffer für das Lemma <em>und</em>, die in <r rkey="SPRW" /> und <r rkey="FesteWV" /> vorkommen“  &rarr; 26 Einträge</p>
<p>
        Ressourcen können durch anklicken aktiviert <v-icon>mdi-check-circle</v-icon> oder deaktiviert
        <v-icon>mdi-circle-outline</v-icon> werden.
        Ist eine Ressource aufgrund einer Einstellung im Facettenfilter ausgeschlossen, wird sie automatisch deaktiviert und mit folgendem Symbol markiert: <v-icon>mdi-circle-off-outline</v-icon>.
    </p>
     <div style="text-align: center; width:100%">
          <NuxtImage src="/img/search/ressourcenfilter.png" style="text-align: center;" alt="Beispielgrafik 1" />
        </div>

    <h2>Facettenfilter</h2>
    <p>
        Mit Hilfe des Facettenfilters lässt sich die Suche auf bestimmte Merkmale zuschneiden, die im Ressourcenkompass (siehe Menü links) behandelt werden. Mehrere Filter können miteinander kombiniert werden.
    </p>
    <p>
        Beispiel: „Finde alle Treffer für das Lemma <em>nach</em> in Ressourcen, die <b>narrative Beschreibungen</b> enthalten.“ &rarr; 984 Einträge und zwar in <r rkey="SPRW" />, <r rkey="FesteWV" /> und <r rkey="PREPCON_kon" />.
    </p>
    <p>Wenn eine Ressource aufgrund eines Facettenfilters deaktiviert ist, wird sie im Ressourcenfilter mit diesem Symbol markiert: <v-icon>mdi-circle-off-outline</v-icon>.</p>
     <div style="text-align: center; width:100%">
          <NuxtImage src="/img/search/facettenfilter.png" style="text-align: center;" alt="Beispielgrafik 1" />
        </div>
</template>