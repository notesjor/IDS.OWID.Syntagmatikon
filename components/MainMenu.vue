<template>
    <v-navigation-drawer :permanent="!useMobileView" :rail="useMobileView"
        style="z-index:1; transform: none; font-family: var(--FF-DISPLAY);" expand-on-hover>
        <!-- LOGO START -->
        <div class="text-xl" style="margin: 20px 0px 5px 30px; opacity: 1" v-show="!useMobileView">
            <div style="margin-left: 50px; margin-bottom: 40px;">
                Syntagmatikon
            </div>
        </div>
        <!-- LOGO END -->

        <!-- HOME START -->
        <v-list density="compact" nav :style="menuStyleMobileFix" style="font-family: var(--FF-DISPLAY);">
            <v-list-subheader>Übersicht</v-list-subheader>
            <router-link to="/" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#12cb4b" icon="mdi-home" />
                <span class="compass">Startseite</span>
            </router-link>
            <router-link to="/project-description" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#3468eb" icon="mdi-information" />
                <span class="compass">Was ist das Syntagmatikon?</span>
            </router-link>
            <router-link to="/corpora" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#fec037" icon="mdi-book-open" />
                <span class="compass">Korpora</span>
            </router-link>
            <router-link to="/discovery" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#fec037" icon="mdi-web" />
                <span class="compass">Ressourcenüberblick</span>
            </router-link>
        </v-list>
        <!-- HOME END -->


        <v-divider></v-divider>

        <!-- ADDITIONAL INFORMATION START -->
        <v-list density="compact" nav style="font-family: var(--FF-DISPLAY); margin-top:0.7rem">
            <v-list-subheader>Suche</v-list-subheader>
            <router-link to="/search" class="sim_listItem">
                <v-list-item prepend-icon="mdi-magnify" title="nach Einträgen"></v-list-item>
            </router-link>
        </v-list>
        <!-- ADDITIONAL INFORMATION END -->

        <v-divider></v-divider>

        <!-- ADDITIONAL INFORMATION START -->
        <!-- altes icon: mdi-book-open-variant-->
        <v-list density="compact" nav>
            <v-list-subheader>Ressourcenkompass</v-list-subheader>
            <router-link to="/resources" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#3468eb" />
                <span class="compass">Ressourcentypen</span>
            </router-link>
            <router-link to="/datatypes" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#ff3661" />
                <span class="compass">Informationstypen</span>
            </router-link>
            <router-link to="/pos" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#fec037" />
                <span class="compass">Wort- und Ausdrucksarten</span>
            </router-link>
            <router-link to="/patterns" class="sim_listItem">
                <gradient style="margin:0px 10px 0px 5px; display: inline-block;" color1="#666" color2="#12cb4b" />
                <span class="compass">Musterzugänge</span>
            </router-link>
            <router-link to="/examples">
                <v-list-item prepend-icon="mdi-lightbulb-on" title="Fallbeispiele"></v-list-item>
            </router-link>
        </v-list>
        <!-- ADDITIONAL INFORMATION END -->



        <v-divider></v-divider>

        <!-- GENERAL INFORMATION START -->
        <v-list density="compact" nav style="font-family: var(--FF-DISPLAY); margin-top:0.7rem">
            <v-list-subheader>Hintergrund</v-list-subheader>
            <router-link to="/team" class="sim_listItem">
                <v-list-item prepend-icon="mdi-account-group" title="Beteiligte Projekte"></v-list-item>
            </router-link>
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

<style scoped>
.compass {
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.8125rem;
  display: inline-block;
}
.sim_listItem {
  display: block;
  margin-left: 3px;
}
</style>