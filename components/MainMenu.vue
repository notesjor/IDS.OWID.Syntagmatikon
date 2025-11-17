<template>
    <v-navigation-drawer :permanent="!useMobileView" :rail="useMobileView"
        style="z-index:1; transform: none; font-family: 'Fira Sans';">
        <!-- LOGO START -->
        <div class="text-xl" style="margin: 20px 0px 5px 30px; opacity: 1" v-if="!useMobileView">
            <div style="margin-left: 50px; margin-bottom: 10px;">
                <NuxtImg alt="Logo Syntagmatikon" src="/logo3.svg" :style="logoStyle" />
                <span style="position: relative; top:-5px; left: 5px;">Syntagmatikon</span>
            </div>
        </div>
        <div v-else>
            <NuxtImg alt="Logo Syntagmatikon" src="/logo3.svg" :style="logoStyle" />
        </div>
        <!-- LOGO END -->

        <!-- HOME START -->
        <v-list density="compact" nav :style="menuStyleMobileFix" style="font-family: var(--FF-DISPLAY);">
            <v-list-subheader v-if="!useMobileView" style="margin-top: 0px;">Übersicht</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-home" to="/" alabel="Startseite">
                Startseite
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-information"
                to="/project-description" alabel="Projektbeschreibung">
                Was ist das Syntagmatikon?
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-book-open" to="/corpora"
                alabel="Korpora">
                Korpora
            </main-menu-item>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-web" to="/discovery"
                alabel="Ressourcenüberblick">
                Ressourcenüberblick
            </main-menu-item>
        </v-list>
        <!-- HOME END -->


        <v-divider></v-divider>

        <!-- ADDITIONAL INFORMATION START -->
        <v-list density="compact" nav style="font-family: var(--FF-DISPLAY); margin-top:0.7rem">
            <v-list-subheader v-if="!useMobileView">Suche</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-magnify" to="/search"
                alabel="Stichwortsuche">
                Suche
            </main-menu-item>
        </v-list>
        <!-- ADDITIONAL INFORMATION END -->

        <v-divider></v-divider>

        <!-- ADDITIONAL INFORMATION START -->
        <!-- altes icon: mdi-book-open-variant-->
        <v-list density="compact" nav>
            <v-list-subheader v-if="!useMobileView">Ressourcenkompass</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#DF0C2F" icon="mdi-compass" to="/resources"
                alabel="Ressourcentypen">
                Ressourcentypen
            </main-menu-item>
            <main-menu-child parent="Ressourcentypen" v-if="useMobileView ? !onlyTopLevel : true" />
            <main-menu-item :useMobileView="useMobileView" color2="#9716CA" icon="mdi-compass" to="/datatypes"
                alabel="Informationstypen">
                Informationstypen
            </main-menu-item>
            <main-menu-child parent="Informationstypen" v-if="useMobileView ? !onlyTopLevel : true" />
            <main-menu-item :useMobileView="useMobileView" color2="#0DC513" icon="mdi-compass" to="/pos"
                alabel="Wort und Ausdrucksarten">
                Wort- und Ausdrucksarten
            </main-menu-item>
            <main-menu-child parent="Wort- und Ausdrucksarten" v-if="useMobileView ? !onlyTopLevel : true" />
            <main-menu-item :useMobileView="useMobileView" color2="#DB6900" icon="mdi-compass" to="/patterns"
                alabel="Musterzugänge">
                Musterzugänge
            </main-menu-item>
            <main-menu-child parent="Musterzugänge" v-if="useMobileView ? !onlyTopLevel : true" />
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-lightbulb-on" to="/examples"
                alabel="Fallbeispiele">
                Fallbeispiele
            </main-menu-item>
        </v-list>
        <!-- ADDITIONAL INFORMATION END -->

        <v-divider></v-divider>

        <!-- GENERAL INFORMATION START -->
        <v-list density="compact" nav style="font-family: var(--FF-DISPLAY); margin-top:0.7rem">
            <v-list-subheader v-if="!useMobileView">Hintergrund</v-list-subheader>
            <main-menu-item :useMobileView="useMobileView" color2="#2962FF" icon="mdi-account-group" to="/team"
                alabel="Beteiligte Projekte und Personen">
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
            default: true,
        },
        onlyTopLevel: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scrollY: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScrollY);
        this.updateScrollY();
    },
    methods: {
        updateScrollY() {
            this.scrollY = window.scrollY || window.pageYOffset;
        }
    },
    computed: {
        menuStyleMobileFix() {
            try {
                if (this.useMobileView) {
                    return "margin-top: 75px;"
                } else {
                    return ""
                }
            } catch (e) {
                return ""
            }
        },
        logoStyle() {
            try {
                const alpha = Math.min(Math.max(this.scrollY / 75, 0), 1);
                console.log("Alpha:", alpha);

                if (this.useMobileView) {
                    return `max-height:45px; position:relative; top:5px; left: 5px; opacity:${alpha};`
                } else {                    
                    return `max-height:65px; position:relative; margin:-15px 0px 0px -73px; opacity:${alpha}; display:inline-block;`;
                }
            } catch (e) {
                return "max-height:65px; position:relative; top:5px; left: 10px; opacity:1;";
            }
        }
    },
}
</script>
