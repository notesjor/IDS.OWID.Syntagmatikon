<script>
import { useLayoutStore } from '~/stores/layout';
export default {
    mounted() {
        const props = useLayoutStore();
        props.title = 'Dokumentation zur Suche';
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
                        <v-icon icon="mdi-magnify" />&nbsp;"schlagen" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>ein Rad <b>schlagen</b> vor Freude</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Pack <b>schlägt</b> sich, Pack verträgt sich</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><span style="font-variant: small-caps;">Präposition</span> <b>Schlagen</b></span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"sein" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Aller Anfang <b>ist</b> schwer</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>gewahr <b>sein</b></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>im Vollbesitz <b>seiner</b> geistigen Kräfte</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>auf der Hut <b>sein</b> vor Dieben</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Früher-<b>war</b>-alles-besser-Gerede</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"alle sein" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Aller</b> Anfang <b>ist</b> schwer</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Alles</b> hat <b>seine</b> Zeit</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Alle-sind</b>-gut-drauf-Gerede</span>
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
                        <v-icon icon="mdi-magnify" />&nbsp;"waren" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Das <b>waren</b> noch Zeiten</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>greifen nach <b>Waren</b></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Waren</b>-Verwaltung</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"alle ist" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Grau <b>ist alle</b> Theorie</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"aller ist" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Aller</b> Anfang <b>ist</b> schwer</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Müßiggang <b>ist aller</b> Laster Anfang</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"alles ist" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Alles-ist</b>-möglich-Ruf</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Dabeisein <b>ist alles</b></span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"allen ist" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Allen</b> Leuten recht getan, <b>ist</b> eine Kunst die niemand kann</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
        </li>
        <li>
            <p> <b>Unscharfe Wortsuche:</b> Findet Wörter mit ähnlicher Schreibung. Dadurch können auch Treffer
                erscheinen,
                die zu einem anderen Lemma gehören. Beispiele: </p>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"Grab" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><span style="font-variant: small-caps;">Präposition</span> <b>Gräben</b></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Alexander-<b>Grab</b></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>graben</b> nach Gold</span>
                        </v-list-item>
                    </v-list>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="margin:-10px 0px 0px 0px">
                    <span style="font-weight: 400; font-size: 0.90rem;">
                        <v-icon icon="mdi-magnify" />&nbsp;"rosten" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>rosten</b> <span style="font-variant: small-caps;">Präposition</span></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><span style="font-variant: small-caps;">Präposition</span> <b>Rost</b></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><span style="font-variant: small-caps;">Präposition</span> <b>Rösten</b></span>
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
                        <v-icon icon="mdi-magnify" />&nbsp;"ab" findet:
                    </span>
                    <v-list style="font-size: 0.90rem; font-weight: 300; margin: 0px 0px 0px 10px; padding: 0px;">
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>ab</b> Werk</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Der Bart ist <b>ab</b></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>Ab</b>sicht äußern</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span><b>ab</b>bauen <span style="font-variant: small-caps;">Präposition</span></span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Die-N<b>ab</b>el-der-Welt-Woche</span>
                        </v-list-item>
                        <v-list-item>
                            <v-icon icon="mdi-pan-right" />&nbsp;
                            <span>Alexander-Gr<b>ab</b></span>
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