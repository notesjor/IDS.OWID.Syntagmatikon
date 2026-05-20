<template>
  <div class="d-print-none" style="z-index:2; min-height: 80px; width: 100%; background-color: black; padding-left:25px; position: absolute; bottom:0">
    <v-row>
      <v-col cols="6" style="padding: 0px;">
        <div style="color:white; margin: 35px 0px 10px 0px; font-size: 12px;">
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
      </v-col>

      <v-col style="padding: 0px;"></v-col>

      <v-col style="min-width: 210px; max-width: 210px; padding: 0px;">
        <div style="text-align: right; margin:15px 10px 0px 0px;">
          <a href="https://www.ids-mannheim.de/" target="_blank">
            <NuxtImg alt="Logo IDS" src="/logo_right.svg"
              style="max-height:65px; min-height: 45px; min-width: 200px; margin-left: auto; " />
          </a>
        </div>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "LayoutFooter",
  theme: { dark: false },
  data() {
    return {
      useMobileView: false,

      footerContact: null,
      footerImpressum: null,
      footerDsgvo: null
    }
  },

  mounted() {
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