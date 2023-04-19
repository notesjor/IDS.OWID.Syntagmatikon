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
            <v-list-subheader>Übersicht</v-list-subheader>
            <router-link to="/"><v-list-item prepend-icon="mdi-home"
                title="Projekt-Startseite"></v-list-item></router-link>
          </v-list>
          <v-divider></v-divider>
          <v-list density="compact" nav>
            <v-list-subheader>Vertiefende Informationen</v-list-subheader>
            <router-link to="/project-description"><v-list-item prepend-icon="mdi-information"
                title="Was ist ein Syntagmatikon?"></v-list-item></router-link>
            <router-link to="/methods-description"><v-list-item prepend-icon="mdi-file-cabinet"
                title="Korpusmethoden erklärt"></v-list-item></router-link>
          </v-list>
          <v-divider></v-divider>
          <v-list density="compact" nav>
            <v-list-subheader>Ressourcen</v-list-subheader>
            <router-link to="/search"><v-list-item prepend-icon="mdi-magnify" title="Suche"></v-list-item></router-link>
            <router-link to="/list"><v-list-item prepend-icon="mdi-format-list-bulleted-type"
                title="Liste"></v-list-item></router-link>
            <router-link to="/splitview"><v-list-item prepend-icon="mdi-compare"
                title="Vergleich"></v-list-item></router-link>
            <router-link to="/network"><v-list-item prepend-icon="mdi-graph"
                title="Vernetzungen"></v-list-item></router-link>
          </v-list>
        </v-navigation-drawer>
        <v-row v-if="alert">
          <v-col>
            <v-alert type="info" title="Hinweis - Prototyp v0.1"
              text="Alle Inhalte dieser Version sind experimentell. Texte, Farben, Grafiken werden im späteren Projektverlauf angepasst."
              variant="tonal"></v-alert>
          </v-col>
        </v-row>
        <div style="align-content: center;">
          <div style="max-width: 1150px;">
            <slot />
          </div>
        </div>
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

<style>
div.v-list-subheader {
  margin: -10px 58px -10px 0
}

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
      alert: true,

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
    //
    setTimeout(() => {
      this.alert = false
    }, 5000);
    //
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