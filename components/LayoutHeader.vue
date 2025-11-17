<template>
  <div class="d-print-none"
    style="z-index:100; max-height: 75px; min-height:75px; background-color: black; padding:7px 10px 5px 10px;">
    <v-row>
      <v-col v-if="useMobileView">
      </v-col>
      <v-col v-else cols="8">
        <div style="color:white; margin-left:75px">
          <div class="text-2xl">
            <NuxtImg alt="Logo Syntagmatikon" src="/logo3.svg" style="max-height:65px; position:absolute; top:5px; left: 10px;" />
            {{ appName }}
          </div>
          <div class="" style="text-align: left;">{{ appDescription }}</div>
        </div>
      </v-col>
      <v-col v-if="useMobileView" cols="6">
        <div style="width: 100%; height: 100%; text-align: center; padding-top: 10px;">
          <NuxtImg alt="Logo Syntagmatikon" src="/logo3.svg" style="max-height:45px; position:absolute; top:15px; left: 5px;" />
          <div class="text-2xl" style="color:white;">
            <div style="text-align: center;">{{ appName }}</div>
          </div>
        </div>
      </v-col>
      <v-col v-else>
      </v-col>
      <v-col>
        <div>
          <a :href="leftIconHref" target="_blank">
            <NuxtImg alt="Logo IDS" src="/ids-logo.svg" v-if="useMobileView"
              style="margin-left: auto; max-height:40px; margin-right:5px; margin-top:10px" />
            <NuxtImg alt="Logo IDS" src="/ids-logo.svg" v-else
              style="margin-left: auto; max-height:50px; margin-right:10px; margin-top:5px" />
          </a>
        </div>
      </v-col>
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
      this.useMobileView = this.$vuetify.display.width < 960;
    }
  },
}
</script>