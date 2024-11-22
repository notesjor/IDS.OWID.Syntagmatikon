<template>
    <v-navigation-drawer :permanent="!useMobileView" :rail="useMobileView"
        style="z-index:1; transform: none; font-family: 'Fira Sans';">
        <!-- LOGO START -->
        <div class="text-xl" style="margin: 20px 0px 5px 30px; opacity: 1" v-show="!useMobileView">
            <div style="margin-left: 50px; margin-bottom: 40px;">
                Syntagmatikon
            </div>
        </div>
        <!-- LOGO END -->

        <!-- HOME START -->
        <v-list density="compact" nav :style="menuStyleMobileFix" style="font-family: var(--FF-DISPLAY);">
            <v-list-subheader v-if="!useMobileView">Übersicht</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-home" to="/">
                Startseite
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-information"
                to="/project-description">
                Was ist das Syntagmatikon?
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-book-open" to="/corpora">
                Korpora
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-web" to="/discovery">
                Ressourcenüberblick
            </main-menu-item>
        </v-list>
        <!-- HOME END -->


        <v-divider></v-divider>

        <!-- ADDITIONAL INFORMATION START -->
        <v-list density="compact" nav style="font-family: var(--FF-DISPLAY); margin-top:0.7rem">
            <v-list-subheader v-if="!useMobileView">Suche</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-magnify" to="/search">
                Suche
            </main-menu-item>
        </v-list>
        <!-- ADDITIONAL INFORMATION END -->

        <v-divider></v-divider>

        <!-- ADDITIONAL INFORMATION START -->
        <!-- altes icon: mdi-book-open-variant-->
        <v-list density="compact" nav>
            <v-list-subheader v-if="!useMobileView">Ressourcenkompass</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#F24162" icon="mdi-compass" to="/resources">
                Ressourcentypen
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#58F380" icon="mdi-compass" to="/datatypes">
                Informationstypen
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#A24CC2" icon="mdi-compass" to="/pos">
                Wort- und Ausdrucksarten
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#F25A40" icon="mdi-compass" to="/patterns">
                Musterzugänge
            </main-menu-item>

            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-lightbulb-on" to="/examples">
                Fallbeispiele
            </main-menu-item>
        </v-list>
        <!-- ADDITIONAL INFORMATION END -->

        <v-divider></v-divider>

        <!-- GENERAL INFORMATION START -->
        <v-list density="compact" nav style="font-family: var(--FF-DISPLAY); margin-top:0.7rem">
            <v-list-subheader v-if="!useMobileView">Hintergrund</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-account-group" to="/team">
                Beteiligte Projekte
            </main-menu-item>
        </v-list>
        <!-- GENERAL INFORMATION END -->

    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        useMobileView: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        menuStyleMobileFix() {
            if (this.useMobileView) {
                return "margin-top: 75px;"
            } else {
                return ""
            }
        }
    },
}
</script>
