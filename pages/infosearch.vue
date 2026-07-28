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
        Hier finden Sie Informationen zur Funktionsweise der Suchfunktion auf unserer Website. Sie können nach
        verschiedenen Kriterien suchen, einschließlich Schlüsselwörtern, Kategorien und Tags. Nutzen Sie die
        Filteroptionen, um Ihre Suchergebnisse weiter einzugrenzen und relevante Inhalte schneller zu finden.
    </p>
    <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </p>
    <NuxtImage src="/img/search/demo.jpg" alt="Lorem ipsum dolor sit amet"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <h2>Sucharten</h2>
    <p>
        lorem ipsum - Es gibt verschiedene Arten von Suchanfragen, die Sie durchführen können:
    </p>
    <ul style="list-style-type: none; margin-left: 1em;">
        <li>
            <p><b>Lemmabasierte Suche:</b> Findet alle Flexionsformen eines Lemmas. Beispiele:</p>
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
                            <span><span style="font-variant: small-caps;">Präposition</span> <m>Schlagen</m></span>
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
                            <span><m>Aller</m> Anfang <m>ist</m> schwer</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><m>Alles</m> hat <m>seine</m> Zeit</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><m>Alle-sind</m>-gut-drauf-Gerede</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
        </li>
        <li>
            <p><b>Exakte Wortformsuche:</b> Findet nur die eingegebene Wortform. Flexionsformen werden nicht
                berücksichtigt.
                Beispiele:</p>
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
                            <span><m>Waren</m>-Verwaltung</span>
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
                            <span><m>Aller</m> Anfang <m>ist</m> schwer</span>
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
                            <span><m>Alles-ist</m>-möglich-Ruf</span>
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
                            <span><m>Allen</m> Leuten recht getan, <m>ist</m> eine Kunst die niemand kann</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
        </li>
        <li>
            <p><b>Unscharfe Wortsuche:</b> Findet Wörter mit ähnlicher Schreibung. Dadurch können auch Treffer
                erscheinen,
                die zu einem anderen Lemma gehören. Beispiele: </p>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;<b>"Grab"</b> findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><span style="font-variant: small-caps;">Präposition</span> <m>Gräben</m></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Alexander-<m>Grab</m></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><m>graben</m> nach Gold</span>
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
                            <span><m>rosten</m> <span style="font-variant: small-caps;">Präposition</span></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><span style="font-variant: small-caps;">Präposition</span> <m>Rost</m></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><span style="font-variant: small-caps;">Präposition</span> <m>Rösten</m></span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
        </li>
        <li>
            <p><b>Zeichenkettensuche:</b> Findet beliebige Zeichenfolgen. Unabhängig davon, ob sie ein vollständiges
                Wort
                oder nur einen Wortteil bilden. Beispiele:</p>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;<b>"ab"</b> findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><m>ab</m> Werk</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Der Bart ist <m>ab</m></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><m>Ab</m>sicht äußern</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><m>ab</m>bauen <span style="font-variant: small-caps;">Präposition</span></span>
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
        </li>
    </ul>
    <h2>Facetten</h2>
    <p>
        lorem ipsum - Hier lässt sich die Suche auf bestimmte Merkmale, die im Ressourcenkompass behandelt werden, zuschneiden. Mehrere Filter können miteinander kombiniert werden.
    </p>
    <NuxtImage src="/img/search/facetten.jpg" alt="Lorem ipsum dolor sit amet"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <h2>Ressourcen</h2>
    <p>
        lorem ipsum - Hier kann man die Suche auf eine oder mehrere ausgewählte Ressourcen beschränken.
              Ressourcen können durch anklicken aktiviert <v-icon>mdi-check-circle</v-icon> oder deaktiviert <v-icon>mdi-circle-outline</v-icon> werden. 
              Ist eine Ressource aufgrund eines Facetten-Filters deaktiviert, wird sie automatisch deaktiviert <v-icon>mdi-circle-off-outline</v-icon>.
              Nur aktive Ressourcen werden bei der Suche berücksichtigt.
    </p>
    <NuxtImage src="/img/search/ressourcen.jpg" alt="Lorem ipsum dolor sit amet"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
</template>