<template>
    <h1>Beteiligte Projekte</h1>
    <div>
        <h2>Entwicklungsteam für das Syntagmatikon</h2>
        <v-list>
            <v-list-item><NuxtLink to="https://www.ids-mannheim.de/lexik/personal/steyer">Dr. Kathrin Steyer</NuxtLink></v-list-item>
            <v-list-item><NuxtLink to="https://perso.ids-mannheim.de/seiten/brunner.html">Dr. Annelen Brunner</NuxtLink></v-list-item>
            <v-list-item><NuxtLink to="https://perso.ids-mannheim.de/seiten/ruediger.html">Dr. Jan Oliver Rüdiger</NuxtLink></v-list-item>
        </v-list>
    
        <h2>Verantwortliche Personen für die integrierten Ressourcen</h2>
            <v-row class="d-flex align-center">
                <v-col cols="4"><NuxtLink to="https://www.ids-mannheim.de/lexik/personal/steyer">Dr. Kathrin Steyer</NuxtLink></v-col>
                <v-col cols=""> <resources-list-compact :filter="['PREPCON', 'SpruchList', 'SPRW', 'WVBF', 'FesteWV', 'DTWW']"/></v-col>
            </v-row>
            <v-row class="d-flex align-center">
                <v-col cols="4"><NuxtLink to="https://perso.ids-mannheim.de/seiten/hein.html">Dr. Katrin Hein</NuxtLink></v-col>
                <v-col><resources-list-compact :filter="['KoMuX', 'PhrasKomp']"/></v-col>
            </v-row>

            <v-row class="d-flex align-center">
                <v-col cols="4"><NuxtLink to="https://perso.ids-mannheim.de/seiten/proost.html">Dr. Kristel Proost</NuxtLink><br/>
                    <NuxtLink to="https://perso.ids-mannheim.de/seiten/zeschel.html">Dr. Arne Zeschel</NuxtLink></v-col>
                <v-col><resources-list-compact :filter="['MAP']"/></v-col>
            </v-row>

            <v-row class="d-flex align-center">
                <v-col cols="4"><NuxtLink to="https://www.ids-mannheim.de/lexik/personal/engelberg">Prof. Dr. Stefan Engelberg</NuxtLink></v-col>
                <v-col><resources-list-compact :filter="['Verlaufsformen']"/></v-col>
            </v-row>
            <v-row class="d-flex align-center">
                <v-col cols="4"><NuxtLink to="https://perso.ids-mannheim.de/seiten/tu.html">Dr. Ngoc Duyen Tanja Tu</NuxtLink><br/>
                    <NuxtLink to="https://perso.ids-mannheim.de/seiten/brunner.html">Dr. Annelen Brunner</NuxtLink></v-col>
                <v-col><resources-list-compact :filter="['Redeeinleiter']"/></v-col>
            </v-row>
     
        <p>Informationen zu beteiligten Projekten und Arbeitsbereichen finden Sie auf folgenden Webseiten:</p>
        <v-list>
            <v-list-item><NuxtLink to="https://www.ids-mannheim.de/lexik/syntagmatik-im-lexikon/">Projekt „Syntagmatik im Lexikon“</NuxtLink>
            (<NuxtLink to="https://www.ids-mannheim.de/lexik/uwv/">Usuelle Wortverbindungen</NuxtLink>; 
            <NuxtLink to="https://www.ids-mannheim.de/lexik/verben-und-argumentstrukturen/">Wortbildungsmuster</NuxtLink>; 
            <NuxtLink to="https://www.ids-mannheim.de/lexik/syntagmatik-im-lexikon/wortbildungsmuster/">Argumentstrukturen</NuxtLink>)</v-list-item>
            <v-list-item><NuxtLink to="https://www.ids-mannheim.de/lexik/pb-lexik-empirisch-digital/lexikologische-informationssysteme/">Projekt „Lexikologische Informationssysteme“</NuxtLink></v-list-item>
            <v-list-item><NuxtLink to="https://www.ids-mannheim.de/lexik/redewiedergabe/">Projekt „Redewiederabe“</NuxtLink> (abgeschlossen)</v-list-item>
        </v-list>


        
    </div>

    
</template>