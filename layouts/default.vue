<template>
  <img alt="Logo" src="/logo3.svg" style="max-height:65px; position:fixed; top:5px; left: 10px; z-index: 1000;" />
  <v-app>
    <div class="d-print-none"
      style="z-index:100; max-height: 75px; min-height:75px; background-color: black; padding:7px 10px 5px 10px; display: grid; grid-template-columns: 1fr auto 250px; grid-template-rows: 100%; gap: 0px 0px; grid-template-areas: 'left middle right'; ">
      <div class="inline" style="color:white; grid-area: left; margin-left:75px">
        <div style="min-height: 10px;" v-if="useMobileView"></div>
        <div class="text-2xl">
          {{ appName }}
        </div>
        <div class="" style="text-align: left;">{{ useMobileView ? " " : appDescription }}</div>
      </div>

      <div style="grid-area: middle;"></div>

      <div class="inline" style="grid-area: right;">
        <a :href="leftIconHref" target="_blank">
          <img alt="Logo" src="/ids-logo.svg"
            style="margin-left: auto; max-height:50px; margin-right:10px; margin-top:5px" />
        </a>
      </div>
    </div>

    <main-menu :useMobileView="useMobileView" />

    <div class="main" style="margin-left: auto; margin-right: auto; margin-bottom: 100px;">
      <div style="margin:10px 10px 0px 275px" v-if="!useMobileView">
        <div style="max-width: var(--TXT-WIDTH);">
          <v-row>
            <v-col>
              <slot />
            </v-col>
          </v-row>
        </div>
      </div>
      <div style="margin:10px 10px 0px 85px;" v-else>
        <div style="max-width: var(--TXT-WIDTH);">
          <v-row>
            <v-col>
              <slot />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <v-footer
      style="z-index: 100; max-height: 80px; position: absolute; bottom: 0; width: 100%; background-color: black; padding-left:25px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 100%; gap: 0px 0px; grid-template-areas: 'left middle right';">
      <div style="color:white; grid-area: left; margin-top: 20px; font-size: 12px;" v-if="!useMobileView">
        <img alt="Logo" src="/logo_left.svg" style="max-height:35px; margin-top: -15px;" float="left" />
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

      <div style="text-align: right; grid-area: right; max-height: 64px;">
        <a :href="rightIconHref" target="_blank" style="display: inline-block; margin-top: 0px">
          <img alt="Logo" src="/logo_right.svg"
            style="max-height:64px; min-height: 45px; min-width: 200px; margin-left: auto; " />
        </a>
      </div>
    </v-footer>

  </v-app>
</template>

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
      footerDsgvo: null
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

    this.windowResize();
    window.addEventListener('resize', this.windowResize);
  },

  methods: {
    windowResize() {
      this.useMobileView = this.$vuetify.display.width < 960;
    }
  },

  
}
</script>