import { slideYFadeTransition, scaleFadeTransition } from './utils/transitions';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@vueuse/motion/nuxt'],
  features: {
    // Remove when fixed https://github.com/unocss/unocss/issues/3468
    inlineStyles: false,
  },
  experimental: {
    asyncContext: true,
    headNext: true,
    typedPages: true,
  },
  app: {
    layoutTransition: slideYFadeTransition,
    pageTransition: scaleFadeTransition,
  },
  typescript: {
    shim: false,
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      '@csstools/postcss-oklab-function': { preserve: true },
    },
  },
});
