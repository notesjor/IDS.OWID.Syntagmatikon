<script setup>
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: `Syntagmatikon - ${useRoute()?.meta?.ctitle}`,
  meta: [
    {
      name: 'description',
      content: 'Das korpusbasierte Portal Syntagmatikon bietet Informationen zum Gebrauch von sprachlichen Ausdrücken, die durch ihre wiederkehrende lineare Abfolge zu mehr oder weniger festen Wortschatzeinheiten geworden sind.'
    }
  ]
});
</script>

<template>
  <v-app>
    <LayoutHeader></LayoutHeader>

    <main-menu :useMobileView="useMobileView" />

    <div class="main" style="margin-left: auto; margin-right: auto; margin-bottom: 100px;">      
      <div style="margin:10px 10px 0px 275px" v-if="!useMobileView">
        <v-row>
          <v-col>
            <slot />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Cite :ctitle="useRoute()?.meta?.ctitle" :cauthor="useRoute()?.meta?.cauthor"
              :cdate="useRoute()?.meta?.cdate"  style="max-width: var(--TXT-WIDTH); margin-left: auto; margin-right: auto;"/>
          </v-col>
        </v-row>
      </div>
      <div style="margin:10px 10px 0px 85px;" v-else>
        <v-row>
          <v-col>
            <slot />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Cite :ctitle="useRoute()?.meta?.ctitle" :cauthor="useRoute()?.meta?.cauthor"
              :cdate="useRoute()?.meta?.cdate" style="max-width: var(--TXT-WIDTH); margin-left: auto; margin-right: auto;"/>
          </v-col>
        </v-row>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>

  </v-app>
</template>

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
      
      route: null,
    }
  },

  mounted() {
    this.route = useRoute();
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
      this.useMobileView = this.$vuetify.display.width < 1050;
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