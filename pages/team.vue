<template>
    <h1>Beteiligte Projekte</h1>
    <div>
        <headline :h="4">Entwicklungsteam für das Syntagmatikon</headline>
        <v-list>
            <v-list-item>
                <NuxtLink to="https://www.ids-mannheim.de/lexik/personal/steyer">Dr. Kathrin Steyer</NuxtLink>
            </v-list-item>
            <v-list-item>
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/brunner.html">Dr. Annelen Brunner</NuxtLink>
            </v-list-item>
            <v-list-item>
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/ruediger.html">Dr. Jan Oliver Rüdiger</NuxtLink>
            </v-list-item>
        </v-list>

        <headline :h="4">Verantwortliche Personen für<br />die integrierten Ressourcen</headline>
        <v-row class="d-flex align-center">
            <v-col style="text-align: right;" cols="7"> <resources-list-compact
                    :filter="['PREPCON', 'SpruchList', 'SPRW', 'WVBF', 'FesteWV', 'DTWW']" /></v-col>
            <v-col cols="5">
                <NuxtLink to="https://www.ids-mannheim.de/lexik/personal/steyer">Dr. Kathrin Steyer</NuxtLink>
            </v-col>
        </v-row>
        <v-row class="d-flex align-center">
            <v-col style="text-align: right;" cols="7"><resources-list-compact
                    :filter="['KoMuX', 'PhrasKomp']" /></v-col>
            <v-col cols="5">
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/hein.html">Dr. Katrin Hein</NuxtLink>
            </v-col>
        </v-row>

        <v-row class="d-flex align-center">
            <v-col style="text-align: right;" cols="7">
                <r rkey="MAP" />
            </v-col>
            <v-col cols="5">
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/proost.html">Dr. Kristel Proost</NuxtLink><br />
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/zeschel.html">Dr. Arne Zeschel</NuxtLink>
            </v-col>
        </v-row>

        <v-row class="d-flex align-center">
            <v-col style="text-align: right;" cols="7">
                <r rkey="Verlaufsformen" />
            </v-col>
            <v-col cols="5">
                <NuxtLink to="https://www.ids-mannheim.de/lexik/personal/engelberg">Prof. Dr. Stefan Engelberg
                </NuxtLink>
            </v-col>
        </v-row>
        <v-row class="d-flex align-center">
            <v-col style="text-align: right;" cols="7">
                <r rkey="Redeeinleiter" />
            </v-col>
            <v-col cols="5">
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/tu.html">Dr. Ngoc Duyen Tanja Tu</NuxtLink><br />
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/brunner.html">Dr. Annelen Brunner</NuxtLink>
            </v-col>
        </v-row>

        <headline :h="4">Weiterführende Informationen</headline>
        <div style="margin-left: 10px;">
            <p>Informationen zu beteiligten Projekten und Arbeitsbereichen finden Sie auf folgenden Webseiten:</p>
            <v-list>
                <v-list-item>
                    <NuxtLink to="https://www.ids-mannheim.de/lexik/syntagmatik-im-lexikon/">Projekt „Syntagmatik im
                        Lexikon“</NuxtLink>
                </v-list-item>
                <v-list style="margin: -15px 0px 0px 15px;">
                    <v-list-item>
                        <NuxtLink to="https://www.ids-mannheim.de/lexik/uwv/">Usuelle Wortverbindungen</NuxtLink>
                    </v-list-item>
                    <v-list-item>
                        <NuxtLink to="https://www.ids-mannheim.de/lexik/verben-und-argumentstrukturen/">
                            Wortbildungsmuster
                        </NuxtLink>
                    </v-list-item>
                    <v-list-item>
                        <NuxtLink to="https://www.ids-mannheim.de/lexik/syntagmatik-im-lexikon/wortbildungsmuster/">
                            Argumentstrukturen</NuxtLink>
                    </v-list-item>
                </v-list>
                <v-list-item>
                    <NuxtLink
                        to="https://www.ids-mannheim.de/lexik/pb-lexik-empirisch-digital/lexikologische-informationssysteme/">
                        Projekt „Lexikologische Informationssysteme“</NuxtLink>
                </v-list-item>
                <v-list-item>
                    <NuxtLink to="https://www.ids-mannheim.de/lexik/redewiedergabe/">Projekt „Redewiederabe“</NuxtLink>
                    (abgeschlossen)
                </v-list-item>
            </v-list>
        </div>



    </div>


</template>