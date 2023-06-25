import { defineConfig, presetWind, presetIcons, presetWebFonts } from 'unocss';

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetWind({
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400',
        heading: 'Inter:800,900',
      },
    }),
  ],
  content: {
    filesystem: ['nuxt.config.*'],
  },
  theme: {
    colors: {
      pink: 'rgba(255, 118, 225, 1)',
      red: 'rgba(255, 93, 83, 1)',
      green: 'rgba(4, 210, 149, 1)',
      yellow: 'rgba(255, 200, 58, 1)',
      blue: 'rgba(52, 187, 217, 1)',
    },
  },
  extendTheme(theme) {
    theme.colors = {
      ...theme.colors,
      primary: theme.colors.pink,
    };
  },
  shortcuts: [
    {
      dot: 'inline-block aspect-square w-28 rounded-full',
      'text-heading': 'text-2xl font-900 lh-1em font-heading uppercase',
    },
  ],
});
