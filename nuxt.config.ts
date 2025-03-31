// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: { directus: { url: "https://directus.mortenra.com" } },
  },
  directus: {
    devtools: true,
  },
  vite: {
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
  // or webpack
  webpack: {
    devMiddleware: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@vueuse/motion/nuxt",
    "nuxt-directus",
    "nuxt-security",
  ],
  icon: {
    customCollections: [
      {
        prefix: "self",
        dir: "./assets/custom-icons",
      },
    ],
  },
  security: {
    corsHandler: {
      origin: "*", // Allows all origins
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization"],
      exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
      credentials: true,
      maxAge: "86400", // 24 hours
      preflight: {
        statusCode: 204,
      },
    },
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https://directus.mortenra.com"],
      },
    },
  },
  site: {
    url: "https://www.mortenra.com/",
    name: "Morten Rasmussen",
    description:
      "I am a webdeveloper from Kolding, Denmark. With great interest in full stack web apps and websites. I love to make things and see how things just quietly fall into place.",
  },
  content: {
    locales: ["en", "da"],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          },
        },
      },
    },
  },
  i18n: {
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts",
    baseUrl: "https://www.mortenra.com/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "english",
      },
      {
        code: "da",
        iso: "da-DK",
        name: "danish",
      },
    ],
  },
});
