import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/main.css'
  ],

  linkChecker: {
    showLiveInspections: true,
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [svgLoader()],

    server: {
      fs: {
        strict: false
      }
    }
  },

  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-schema-org', 'nuxt-og-image', '@pinia/nuxt', 'nuxt-link-checker', 'nuxt-vitalizer', '@nuxt/image'],

  image: {
    format: ['webp', 'jpg', 'png', 'jpeg'],
    provider: 'ipx',
    screens: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80,
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      appName: "Syntagmatikon",
      appDescription: "Eine korpusbasierte Plattform verfestigter Wortkombinationen und lexikalischer Muster im Deutschen",

      leftIconHref: "https://www.owid.de/plus/index.html",
      rightIconHref: "https://www.ids-mannheim.de/",

      footerContact: "mailto:brunner@ids-mannheim.de",
      footerImpressum: "https://www.owid.de/wb/owid/impressum.html",
      footerDsgvo: "https://www.owid.de/wb/owid/privacy.html"
    }
  },

  vitalizer: {
    // Remove the render-blocking entry CSS
    disableStylesheets: 'entry'
  },

  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: 'de',
        dir: 'ltr'
      }
    }
  },

  site: {
    url: "https://syntagmatikon.ids-mannheim.de",
    name: "Syntagmatikon"
  },

  compatibilityDate: "2024-08-12",
})