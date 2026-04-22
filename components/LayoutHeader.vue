<template>
  <div class="d-print-none"
    style="z-index:100; max-height: 75px; min-height:75px; background-color: black; padding:7px 10px 5px 10px;">
    <v-row v-if="useMobileView">
        <div style="width: 100%; height: 100%; text-align: center; padding-top: 10px;">
          <NuxtImg alt="Logo Syntagmatikon" src="/logo3.svg"
            style="max-height:45px; position:absolute; top:15px; left: 5px;" />
          <v-spacer></v-spacer>
          <div class="text-2xl" style="color:white; margin-top:13px">
            <div style="text-align: center;">{{ appName }}</div>
          </div>
          <v-spacer></v-spacer>
          <div style="margin: -35px 10px 0px 0px;">
            <NuxtImg alt="Logo IDS" src="/ids-logo.svg" style="margin-left: auto; max-height:40px;" />
          </div>
        </div>
    </v-row>
    <v-row v-else>
      <div style="color:white; margin-left:75px">
        <NuxtImg alt="Logo Syntagmatikon" src="/logo3.svg" style="max-height:65px; position:absolute; top:5px; left: 10px;" />
        <div class="text-2xl" style="margin:10px 0px 0px 10px">          
          {{ appName }}
        </div>
        <div class="" style="text-align: left; margin:0px 0px 0px 10px">{{ appDescription }}</div>
      </div>
      <v-spacer></v-spacer>
      <NuxtImg alt="Logo IDS" src="/ids-logo.svg" style="margin-left: auto; max-height:50px; margin-right:10px; margin-top:17px" />
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
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