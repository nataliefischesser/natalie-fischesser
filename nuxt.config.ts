// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  typescript: {
    shim: false,
  },
  unocss: {
    // https://uno.antfu.me/
    wind: true,
    preflight: true,
    theme: {
      colors: {
        primary: 'rgba(255, 118, 225, 1)',
        pink: 'rgba(255, 118, 225, 1)',
        red: 'rgba(255, 93, 83, 1)',
        green: 'rgba(4, 210, 149, 1)',
        yellow: 'rgba(255, 200, 58, 1)',
        blue: 'rgba(52, 187, 217, 1)',
      },
    },
    // https://icones.js.org/
    icons: true,
    // https://fonts.google.com/
    webFonts: {
      fonts: {
        sans: 'Inter:400',
        heading: 'Inter:900',
        script: 'Neucha',
      },
    },
  },
});
