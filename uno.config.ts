import { defineConfig, presetWind, presetIcons, presetWebFonts } from 'unocss';
import { h } from '@unocss/preset-mini/utils';

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
      'text-heading': 'text-2xl font-900 lh-1em font-heading uppercase',
      outlined: 'b-12 b-current',
      interactive: 'transition active:scale-100 hover:scale-110',
      dot: 'inline-block aspect-square w-28 flex items-center justify-center rounded-full bg-current text-3em',
      'dot-outlined': 'outlined bg-transparent',
    },
  ],
  rules: [
    [
      /^grid-(cols|rows)-(fit|fill)-(.+)$/,
      ([, d, m, s]: string[], { theme }) => {
        const directions: Record<string, string> = {
          cols: 'columns',
          rows: 'rows',
        };

        const modes: Record<string, string> = {
          fit: 'auto-fit',
          fill: 'auto-fill',
        };

        const v =
          theme.width?.[s] ??
          theme.spacing?.[s] ??
          h.bracket.cssvar.global.rem(s);

        if (v === null || v === undefined) return;

        return {
          [`grid-template-${directions[d]}`]: `repeat(${modes[m]}, minmax(min(100%, ${v}), 1fr))`,
        };
      },
      {
        autocomplete: [
          'grid-(cols|rows)-(fit|fill)-$width',
          'grid-(cols|rows)-(fit|fill)-<num>',
        ],
      },
    ],
  ],
});