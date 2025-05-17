import {
  scaleFadeTransition,
  slideYFadeTransition,
} from "./app/utils/transitions";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  app: {
    layoutTransition: slideYFadeTransition,
    pageTransition: scaleFadeTransition,
  },
  css: ["~/assets/css/main.css"],
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
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
  fonts: {
    defaults: {
      weights: [400, 600, 700, 900],
      subsets: ["latin"],
    },
  },
  },
});
