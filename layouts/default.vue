<template>
    <v-app>
      <v-app-bar app theme="dark" class="d-print-none" style="z-index:999">
        <div style="margin-left:20px">
          <div class="text-xl"><v-icon>mdi-arrow-decision-outline</v-icon> {{ appName }}</div>
          <div class="text-xs">{{ appDescription }}</div>
        </div>
  
        <v-spacer></v-spacer>
  
        <div>
          <a :href="leftIconHref" target="_blank">
            <img alt="Logo" src="../assets/logo_left.svg" style="min-height:40px; margin-right:20px" />
          </a>
        </div>
      </v-app-bar>
      <v-main>
        <v-container>        
          <v-navigation-drawer expand-on-hover rail>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-home" title="Projekt-Startseite" to="/"></v-list-item>
              <v-list-item prepend-icon="mdi-information" title="Was ist ein Syntagmatikon?" to="/project-description"></v-list-item>
              <v-list-item prepend-icon="mdi-file-cabinet" title="Korpusmethoden erklärt" to="/methods-description"></v-list-item>
              <v-list-item prepend-icon="mdi-graph" title="Vernetzungen" to="/network"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <slot />
        </v-container>
      </v-main>
  
      <v-footer theme="dark" style="max-height:64px; z-index:10000">
        <v-card class="flex" flat tile>
          <v-card-text class="py-2" style="text-align:right; margin-left:-10px">
            <div style="display:inline-block">
              {{ new Date().getFullYear() }} — <strong>{{ appName }}</strong>
            </div>
            <div style="display:inline-block">
              <a :href="footerContact" style="margin-left:15px" v-if="footerContact != null && footerContact.length > 1">{{
                $t("footer_Contact") }}</a>
              <a :href="footerImpressum" style="margin-left:15px"
                v-if="footerImpressum != null && footerImpressum.length > 1">{{ $t("footer_Impressum") }}</a>
              <a :href="footerDsgvo" style="margin-left:15px" v-if="footerDsgvo != null && footerDsgvo.length > 1">{{
                $t("footer_Dsgvo") }}</a>
            </div>
          </v-card-text>
        </v-card>
  
        <v-spacer></v-spacer>
  
        <div style="margin-right:-10px">
          <a :href="rightIconHref" target="_blank">
            <img alt="Logo" src="../assets/logo_right.svg" style="min-height:70px;" />
          </a>
        </div>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "Index",
    theme: { dark: false },
    data() {
      return {
        appName: null,
        appDescription: null,
  
        leftIconHref: null,
        rightIconHref: null,
  
        footerContact: null,
        footerImpressum: null,
        footerDsgvo: null,
      }
    },
  
    mounted() {
      this.appName = this.$config.public.appName;
      this.appDescription = this.$config.public.appDescription;
  
      this.leftIconHref = this.$config.public.leftIconHref;
      this.rightIconHref = this.$config.public.rightIconHref;
  
      this.footerContact = this.$config.public.footerContact;
      this.footerImpressum = this.$config.public.footerImpressum;
      this.footerDsgvo = this.$config.public.footerDsgvo;
    },
  
    methods: {
      test() {
        alert("test");
      }
    }
  }
  </script>
  
  <style></style>