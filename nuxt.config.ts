import {
  slideYFadeTransition,
  scaleFadeTransition,
} from './app/utils/transitions';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-23',
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    asyncContext: true,
    buildCache: true,
    typedPages: true,
  },
  app: {
    layoutTransition: slideYFadeTransition,
    pageTransition: scaleFadeTransition,
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@csstools/postcss-oklab-function': { preserve: true },
    },
  },
});
