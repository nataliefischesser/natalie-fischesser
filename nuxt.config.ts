// @unocss-include
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  experimental: {
    viewTransition: true,
  },
  css: ['@unocss/reset/tailwind.css'],
  app: {
    pageTransition: {
      enterActiveClass: 'duration-100 ease-out',
      enterFromClass: 'opacity-0 scale-98',
      enterToClass: 'opacity-100 scale-100',
      leaveActiveClass: 'duration-100 ease-in',
      leaveFromClass: 'opacity-100 scale-100',
      leaveToClass: 'opacity-0 scale-98',
      mode: 'out-in',
    },
  },
  typescript: {
    shim: false,
  },
});
