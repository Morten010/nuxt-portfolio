// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  icon: {
    customCollections: [
      {
        prefix: 'self',
        dir: './custom-icons'
      },
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
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts"
  ]
})
