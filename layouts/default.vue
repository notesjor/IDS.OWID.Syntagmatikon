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
          <v-row v-show="title != null">
            <v-col>
              <Cite :ctitle="route.meta.ctitle == null ? title : route.meta.ctitle" :cauthor="route.meta.cauthor"
                :cdate="route.meta.cdate" />
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
          <v-row v-show="title != null">
            <v-col>
              <Cite :ctitle="route.meta.ctitle == null ? title : route.meta.ctitle" :cauthor="route.meta.cauthor"
                :cdate="route.meta.cdate" />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>

  </v-app>
</template>

<script setup>
const route = useRoute()
useHead({
  htmlAttrs: {
    lang: 'de',
  }
})

</script>

<script>
import { useTitle } from '@vueuse/core'

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

      title: null,
    }
  },

  mounted() {
    this.title = useTitle().value.replace('Syntagmatikon - ', '');

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