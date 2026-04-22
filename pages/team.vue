<script setup>
definePageMeta({
    layout: "default",
    ctitle: "Beteiligte Personen und Projekte",
    nocite: "true"
})
</script>
<template>
    <h1>Beteiligte Personen und Projekte</h1>
    <div>
        <h3>Entwicklungsteam für das <hi>Syntagmatikon</hi>
        </h3>
        <v-list>
            <v-list-item>
                <NuxtLink to="https://www.ids-mannheim.de/lexik/personal/steyer">Dr. Kathrin Steyer</NuxtLink><br />
                <span class="light">Projektleitung, Koordination, Redaktion</span>
            </v-list-item>
            <v-list-item>
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/brunner.html">Dr. Annelen Brunner</NuxtLink><br />
                <span class="light">Projektleitung, Redaktion, technische Umsetzung</span>
            </v-list-item>
            <v-list-item>
                <NuxtLink to="https://perso.ids-mannheim.de/seiten/ruediger.html">Dr. Jan Oliver Rüdiger</NuxtLink>
                <br />
                <span class="light">Softwarearchitektur, technische Umsetzung</span>
            </v-list-item>
        </v-list>

        <br />
        <h3>Informationen zu den integrierten Ressourcen</h3>
        <p>Verantwortliche Personen / Projektzuordnung</p>

        <v-row>
            <v-col>
                <div>
                    <NuxtLink to="https://www.ids-mannheim.de/lexik/personal/steyer">Dr. Kathrin Steyer</NuxtLink><br />
                    <resources-list-compact :filter="['PREPCON', 'SpruchList', 'SPRW', 'WVBF', 'FesteWV', 'DTWW']" />
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div>
                    <NuxtLink to="https://perso.ids-mannheim.de/seiten/hein.html">Dr. Katrin Hein-Antonioli</NuxtLink>
                    <br />
                    <resources-list-compact :filter="['KoMuX', 'PhrasKomp']" />
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div>
                    <NuxtLink to="https://perso.ids-mannheim.de/seiten/proost.html">Dr. Kristel Proost</NuxtLink>,
                    <NuxtLink to="https://perso.ids-mannheim.de/seiten/zeschel.html">Dr. Arne Zeschel</NuxtLink><br />
                    <resources-list-compact :filter="['MAP']" />
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div>
                    <NuxtLink to="https://www.ids-mannheim.de/lexik/personal/engelberg">Prof. Dr. Stefan Engelberg
                    </NuxtLink><br />
                    <resources-list-compact :filter="['Verlaufsformen']" />
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div>
                    <NuxtLink to="https://perso.ids-mannheim.de/seiten/tu.html">Dr. Ngoc Duyen Tanja Tu</NuxtLink>,
                    <NuxtLink to="https://perso.ids-mannheim.de/seiten/brunner.html">Dr. Annelen Brunner</NuxtLink>
                    <br />
                    <resources-list-compact :filter="['Redeeinleiter']" />
                </div>
            </v-col>
        </v-row>

        <br />
        <h4>Projekte und Arbeitsbereiche</h4>

        <p>Informationen zu den Projekten und Arbeitsbereichen, in am <hi>Syntagmatikon</hi> beteiligt sind, finden Sie
            auf folgenden Webseiten:</p>

        <p style="padding-top: 10px">
            <NuxtLink to="https://www.ids-mannheim.de/lexik/syntagmatik-im-lexikon/">Projekt „Syntagmatik im
                Lexikon“</NuxtLink>
        </p>
        <p style="margin-left:40px">
            <NuxtLink to="https://www.ids-mannheim.de/lexik/uwv/">Usuelle Wortverbindungen</NuxtLink>
        </p>
        <p style="margin-left:40px">
            <NuxtLink to="https://www.ids-mannheim.de/lexik/verben-und-argumentstrukturen/">Argumentstrukturen
            </NuxtLink>
        </p>
        <p style="margin-left:40px">
            <NuxtLink to="https://www.ids-mannheim.de/lexik/syntagmatik-im-lexikon/wortbildungsmuster/">
                Wortbildungsmuster </NuxtLink>
        </p>
        <p style="padding-top: 10px">
            <NuxtLink
                to="https://www.ids-mannheim.de/lexik/pb-lexik-empirisch-digital/lexikologische-informationssysteme/">
                Projekt „Lexikologische Informationssysteme“</NuxtLink>
        </p>
        <p style="padding-top: 10px">
            <NuxtLink to="https://www.ids-mannheim.de/lexik/redewiedergabe/">Projekt „Redewiedergabe“</NuxtLink>
            (abgeschlossen)
        </p>

        <br />
        <h4>Danksagung</h4>
        <div>Logo-Design von Tom Steyer <NuxtLink to="https://erit-lux.events">https://erit-lux.events
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
span.light {
    color: #666;
    font-weight: 200;
}
</style>