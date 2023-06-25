// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  experimental: {
    typedPages: true,
  },
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s | Natalie Fischesser',
    },
    pageTransition: {
      enterActiveClass: 'duration-100 ease-out',
      enterFromClass: 'opacity-0 scale-98',
      enterToClass: 'opacity-100 scale-100',
      leaveActiveClass: 'duration-100 ease-in',
      leaveFromClass: 'opacity-100 scale-100',
      leaveToClass: 'opacity-0 scale-98',
      mode: 'out-in',
      appear: true,
    },
  },
  typescript: {
    shim: false,
  },
  css: ['@unocss/reset/tailwind.css'],
});
