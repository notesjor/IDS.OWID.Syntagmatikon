<template>
  <v-app>
    <LayoutHeader></LayoutHeader>

    <main-menu :useMobileView="useMobileView" />

    <v-main>
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
          <Cite :data="cite" />
        </div>
      </div>
      <div style="margin:10px 10px 0px 85px;" v-else>
        <div style="max-width: var(--TXT-WIDTH);">
          <v-row>
            <v-col>
              <slot />
            </v-col>
          </v-row>
          <Cite :data="cite" />
        </div>
      </div>
    </div>  
    </v-main>
    
    <LayoutFooter></LayoutFooter>
    
  </v-app>
</template>

<script>
import { de } from 'vuetify/locale';
import cache from '~/api/cache.js';
import { useLayoutStore } from '~/stores/layout';
import citeApi from '~/api/cite.js';

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

      layoutVars: null,
      cite: null
    }
  },

  setup() {
    const props = useLayoutStore();
    useHead({
      htmlAttrs: {
        lang: 'de'
      },
      title: `Syntagmatikon - ${props.parent} - ${props.title}`,
      meta: [
        {
          name: 'description',
          content: 'Das korpusbasierte Portal Syntagmatikon bietet Informationen zum Gebrauch von sprachlichen Ausdrücken, die durch ihre wiederkehrende lineare Abfolge zu mehr oder weniger festen Wortschatzeinheiten geworden sind.'
        }
      ]
    });
  },

  mounted() {
    var cite = new citeApi();
    var props = useLayoutStore();
    this.cite = cite.getCite(props.title);

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

    new cache().callCache(this.$route.path, "");
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