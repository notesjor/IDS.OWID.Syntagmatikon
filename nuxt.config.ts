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

  modules: ['@pinia/nuxt'],

  runtimeConfig: {
    public: {
      appName: "Syntagmatikon",
      appDescription: "Eine korpusbasierte Plattform verfestigter Wortkombinationen und lexikalischer Muster im Deutschen.",

      leftIconHref: "https://www.owid.de/plus/index.html",
      rightIconHref: "https://www.ids-mannheim.de/",

      footerContact: "mailto:brunner@ids-mannheim.de",
      footerImpressum: "https://www.owid.de/wb/owid/impressum.html",
      footerDsgvo: "https://www.owid.de/wb/owid/privacy.html"
    }
  },

  app: {
    baseURL: "/syntagmatikon_2024-10/", //baseURL: "/syntagmatikon_2024-03/"
    head: {
      htmlAttrs: {
        lang: 'de',
        dir: 'ltr'
      }
    }
  },

  compatibilityDate: "2024-08-12",
})