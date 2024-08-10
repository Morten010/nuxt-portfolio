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
    vueI18n: './i18n.config.ts',
  }
})