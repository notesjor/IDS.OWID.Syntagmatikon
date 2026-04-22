<script setup>
const route = useRoute()
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: `Syntagmatikon - ${route.meta.ctitle}`,
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
        <div style="max-width: var(--TXT-WIDTH);">
          <v-row>
            <v-col>
              <slot />
            </v-col>
          </v-row>
          <v-row v-if="useRoute()?.meta?.nocite != 'true'">
            <v-col>
              <Cite :ctitle="useRoute()?.meta?.ctitle == null ? title : useRoute()?.meta?.ctitle" :cauthor="useRoute()?.meta?.cauthor"
                :cdate="useRoute()?.meta?.cdate" />
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
          <v-row v-if="useRoute()?.meta?.nocite != 'true'">
            <v-col>
              <Cite :ctitle="useRoute()?.meta?.ctitle == null ? title : useRoute()?.meta?.ctitle" :cauthor="useRoute()?.meta?.cauthor"
                :cdate="useRoute()?.meta?.cdate" />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>

  </v-app>
</template>

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
      this.useMobileView = this.$vuetify.display.width < 1050;
    }
  },
}
</script>