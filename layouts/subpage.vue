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
          <div class="nolink" style="margin:0px 0px 10px -15px">
            <v-btn variant="text" class="nocaps" @click="goToParentPage"><v-icon
                icon="mdi-step-backward"></v-icon>Zurück zu: "{{ parent }}"</v-btn>
          </div>
          <div style="margin-bottom: 0.6rem;">
            <div style="display: grid; grid-template-columns: auto 1fr; align-items: center;">
              <v-icon :color="color1" style="font-size: 2.5rem; margin-right: 10px;">{{ icon }}</v-icon>
              <h1><span v-html="title" /></h1>
            </div>
          </div>
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
        <img alt="Logo" src="/owid-logo-dunkel.svg" style="max-height:15px; margin:-10px 0px 3px 0px" float="left" />
        <div>
          <a style="color: #fff" :href="footerContact">Kontakt</a>
          &middot;
          <a style="color: #fff" :href="footerDsgvo">Datenschutzhinweis</a>
          &middot;
          <a style="color: #fff" :href="footerImpressum">Impressum</a>
        </div>
        <div>
          &copy; Leibniz-Institut für Deutsche Sprache
        </div>
      </div>

      <div style="grid-area: middle;"></div>

      <div style="text-align: right; grid-area: right">
        <a :href="rightIconHref" target="_blank">
          <img alt="Logo" src="/logo_right.svg"
            style="max-height:65px; min-height: 45px; min-width: 200px; margin-left: auto; " />
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
import { useLayoutStore } from '~/stores/layout';
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

      layoutVars: null
    }
  },

  mounted() {
    this.layoutVars = useLayoutStore();

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

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    windowResize() {
      this.useMobileView = this.$vuetify.display.width < 960;
    },
    goToParentPage() {
      let path = this.$route.path.split("/");
      path.pop();
      this.$router.push(path.join("/"));
    }
  },

  computed: {
    menuStyleMobileFix() {
      if (this.useMobileView) {
        return "margin-top: 75px;"
      } else {
        return ""
      }
    },
    title() {
      return this.layoutVars?.title;
    },
    parent() {
      return this.layoutVars?.parent;
    },
    color1() {
      return this.layoutVars?.getParentColor;
    },
    icon() {
      return this.layoutVars?.getParentIcon;
    }
  },
}
</script>