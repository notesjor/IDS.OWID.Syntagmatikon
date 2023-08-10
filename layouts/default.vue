<template>
  <v-app>
    <div class="d-print-none"
      style="z-index:100; max-height: 65px; min-height:65px; background-color: black; padding:7px 10px 5px 10px; display: grid; grid-template-columns: 1fr auto 250px; grid-template-rows: 100%; gap: 0px 0px; grid-template-areas: 'left middle right'; ">
      <div class="inline" style="color:white; grid-area: left; margin-left:5px">
        <div style="min-height: 10px;" v-if="useMobileView"></div>
        <div class="text-xl"><v-icon>mdi-arrow-decision-outline</v-icon> {{ appName }}</div>
        <div class="text-xs" style="text-align: left;">{{ useMobileView ? " " : appDescription }}</div>
      </div>

      <div style="grid-area: middle;"></div>

      <div class="inline" style="grid-area: right;">
        <a :href="leftIconHref" target="_blank">
          <img alt="Logo" src="../assets/logo_left.svg"
            style="margin-left: auto; max-height:40px; margin-right:20px; margin-top:5px" />
        </a>
      </div>
    </div>

    <v-navigation-drawer expand-on-hover :permanent="!useMobileView" :rail="useMobileView" style="z-index:1; transform: none;">
      <!-- LOGO START -->
      <div class="text-xl" style="margin: 7px 0px 15px 15px; opacity: 1" v-show="!useMobileView">
        <v-icon>mdi-arrow-decision-outline</v-icon> 
        {{ appName }}
      </div>
      <!-- LOGO END -->

      <!-- HOME START -->
      <v-list density="compact" nav :style="menuStyleMobileFix">
        <v-list-subheader v-show="!useMobileView">Übersicht</v-list-subheader>
        <router-link to="/"><v-list-item prepend-icon="mdi-home" title="Projekt-Startseite"></v-list-item></router-link>
      </v-list>
      <!-- HOME END -->

      <v-divider></v-divider>

      <!-- ADDITIONAL INFORMATION START -->
      <v-list density="compact" nav>
        <v-list-subheader v-show="!useMobileView">Vertiefende Informationen</v-list-subheader>
        <router-link to="/project-description"><v-list-item prepend-icon="mdi-information"
            title="Was ist ein Syntagmatikon?"></v-list-item></router-link>
        <router-link to="/methods-description"><v-list-item prepend-icon="mdi-file-cabinet"
            title="Korpusmethoden erklärt"></v-list-item></router-link>
      </v-list>
      <!-- ADDITIONAL INFORMATION END -->

      <v-divider></v-divider>

      <!-- RESOURCES START -->
      <v-list density="compact" nav>
        <v-list-subheader v-show="!useMobileView">Ressourcen</v-list-subheader>        
        <router-link to="/search"><v-list-item prepend-icon="mdi-shape-outline" title="Suche (Ressourcen)"></v-list-item></router-link>
        <router-link to="/list"><v-list-item prepend-icon="mdi-format-list-bulleted-type"
            title="Liste"></v-list-item></router-link>
        <router-link to="/splitview"><v-list-item prepend-icon="mdi-compare"
            title="Vergleich"></v-list-item></router-link>
        <router-link to="/network"><v-list-item prepend-icon="mdi-graph" title="Vernetzungen"></v-list-item></router-link>        
        <router-link to="/timeline"><v-list-item prepend-icon="mdi-timeline-text-outline" title="Forschungsgeschichte"></v-list-item></router-link>
        <router-link to="/search2"><v-list-item prepend-icon="mdi-magnify" title="Suche (Einträge)"></v-list-item></router-link>
      </v-list>
      <!-- RESOURCES END -->
    </v-navigation-drawer>

    <div style="margin-left: auto; margin-right: auto; margin-bottom: 100px;">
      <div style="margin:10px 10px 0px 275px" v-if="!useMobileView">
        <slot />
      </div>
      <div style="margin:10px 10px 0px 85px;" v-else>
        <slot />
      </div>
    </div>

    <div
      style="z-index: 100; position: absolute; bottom: 0; width: 100%; max-height:64px; background-color: black; padding-left:25px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 100%; gap: 0px 0px; grid-template-areas: 'left middle right';">
      <div style="color:white; grid-area: left; margin-top: 20px; font-size: 12px;" v-if="!useMobileView">
        <div style="display:inline-block">
          {{ new Date().getFullYear() }} — <strong>{{ appName }}</strong>
        </div>
        <div style="display:inline-block">
          <a :href="footerContact" style="margin-left:15px" v-if="footerContact != null && footerContact.length > 1">{{
            $t("footer_Contact") }}</a>
          <a :href="footerImpressum" style="margin-left:15px;"
            v-if="footerImpressum != null && footerImpressum.length > 1">{{ $t("footer_Impressum") }}</a>
          <a :href="footerDsgvo" style="margin-left:15px" v-if="footerDsgvo != null && footerDsgvo.length > 1">{{
            $t("footer_Dsgvo") }}</a>
        </div>
      </div>
      <div style="color:white; grid-area: left; margin: 15px 0px 5px 0px; font-size: 12px; min-width: 250px;" v-else>
        <div>
          {{ new Date().getFullYear() }} — <strong>{{ appName }}</strong>
        </div>
        <div>
          <a :href="footerContact" v-if="footerContact != null && footerContact.length > 1">{{
            $t("footer_Contact") }}</a>
          <a :href="footerImpressum" style="margin-left:15px;"
            v-if="footerImpressum != null && footerImpressum.length > 1">{{ $t("footer_Impressum") }}</a>
          <a :href="footerDsgvo" style="margin-left:15px;" v-if="footerDsgvo != null && footerDsgvo.length > 1">{{
            $t("footer_Dsgvo") }}</a>
        </div>
      </div>

      <div style="grid-area: middle;"></div>

      <div style="text-align: right; grid-area: right">
        <a :href="rightIconHref" target="_blank">
          <img alt="Logo" src="../assets/logo_right.svg" style="max-height:65px; min-height: 45px; min-width: 200px; margin-left: auto; " />
        </a>
      </div>
    </div>

  </v-app>
</template>

<style>
body {
  hyphens: auto;
  hyphenate-character: auto 5;
  hyphenate-limit-chars: auto 5;
  hyphenate-limit-lines: 2;
  -webkit-hyphens: auto;
  -webkit-hyphenate-limit-chars: auto 3;
  -webkit-hyphenate-limit-lines: 4;
  -ms-hyphens: auto;
  -ms-hyphenate-limit-chars: auto 3;
  -ms-hyphenate-limit-lines: 4;
  text-align: justify;
}
</style>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'de',
  }
})
</script>

<script>
export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      useMobileView: false,

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
    this.useMobileView  = this.$vuetify.display.width < 960;

    this.appName = this.$config.public.appName;
    this.appDescription = this.$config.public.appDescription;

    this.leftIconHref = this.$config.public.leftIconHref;
    this.rightIconHref = this.$config.public.rightIconHref;

    this.footerContact = this.$config.public.footerContact;
    this.footerImpressum = this.$config.public.footerImpressum;
    this.footerDsgvo = this.$config.public.footerDsgvo;

    window.addEventListener('resize', this.windowResize);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods:{
    windowResize(){
      this.useMobileView  = this.$vuetify.display.width < 960;
    }
  },

  computed: {
    menuStyleMobileFix(){
      if(this.useMobileView){
        return "margin-top: 75px;"
      }else{
        return ""
      }
    }
  }
}
</script>