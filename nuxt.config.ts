import { slideYFadeTransition, scaleFadeTransition } from './utils/transitions';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/content', '@vueuse/nuxt'],
  experimental: {
    typedPages: true,
  },
  content: {
    documentDriven: true,
  },
  devtools: {
    enabled: true,
  },
  app: {
    layoutTransition: slideYFadeTransition,
    pageTransition: scaleFadeTransition,
  },
  typescript: {
    shim: false,
  },
  css: ['@unocss/reset/tailwind.css'],
  postcss: {
    plugins: {
      '@csstools/postcss-oklab-function': { preserve: true },
    },
  },
});
