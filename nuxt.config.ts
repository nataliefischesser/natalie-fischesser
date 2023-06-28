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
    pageTransition: {
      enterFromClass: 'opacity-0 scale-98',
      enterActiveClass: 'duration-100 ease-out',
      enterToClass: 'opacity-100 scale-100',
      leaveFromClass: 'opacity-100 scale-100',
      leaveActiveClass: 'duration-100 ease-in',
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
