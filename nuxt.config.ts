// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss"
  ],
  icon: {
    // provider: 'server',
    customCollections: [
      {
        prefix: 'self',
        dir: './assets/custom-icons'
      },
    ],
    
  },
  content: {
    locales:[
      'en', 'da'
    ],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          },
        }
      }
    }
  },
  i18n: {
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'da',
        iso: 'dk-DK'
      }
    ]
  }
})