import {
  scaleFadeTransition,
  slideYFadeTransition,
} from "./app/utils/transitions";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/seo",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
    },
    layoutTransition: slideYFadeTransition,
    pageTransition: scaleFadeTransition,
  },
  css: ["~/assets/css/main.css"],
  site: {
    name: "Natalie Fischesser",
    url: "https://nataliefischesser.com",
    separator: "-",
    defaultLocale: "en-US",
    jobTitle: "Visual UX Designer",
  },
  future: {
    compatibilityVersion: 5,
  },
  experimental: {
    asyncContext: true,
    extractAsyncDataHandlers: true,
    typedPages: true,
    typescriptPlugin: true,
    viteEnvironmentApi: true,
  },
  compatibilityDate: "latest",
  vite: {
    vue: {
      features: {
        optionsAPI: false,
      },
    },
  },
  postcss: {
    plugins: {
      "@csstools/postcss-oklab-function": { preserve: true },
    },
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
      typescript: {
        tsconfigPath: "./tsconfig.json",
      },
    },
  },
  fonts: {
    defaults: {
      weights: ["400 900"],
      subsets: ["latin"],
    },
  },
  icon: {
    class: "icon",
    customCollections: [{ prefix: "app", dir: "./app/assets/icons" }],
  },
  ogImage: {
    zeroRuntime: true,
  },
  robots: {
    groups: [
      {
        userAgent: "*",
        allow: "/",
        contentUsage: {
          bots: "y",
          "train-ai": "n",
        },
        contentSignal: {
          "ai-train": "no",
          search: "yes",
        },
      },
    ],
  },
  sitemap: {
    zeroRuntime: true,
  },
  unocss: {
    disableNuxtInlineStyle: false,
  },
});
