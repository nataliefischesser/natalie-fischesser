import { resolve } from "pathe";
import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";

export const colors = {
  pink: "oklch(76% 0.27 336)", // rgba(255, 118, 225, 1)
  red: "oklch(70% 0.25 27)", // rgba(255, 93, 83, 1)
  green: "oklch(76% 0.22 163)", // rgba(4, 210, 149, 1)
  yellow: "oklch(86% 0.2 86)", // rgba(255, 200, 58, 1)
  blue: "oklch(73% 0.17 216)", // rgba(52, 187, 217, 1)
} as const;

export type Colors = typeof colors;
export type ColorKey = keyof Colors;
export type ColorValue = Colors[ColorKey];

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        app: FileSystemIconLoader(resolve(__dirname, "./app/assets/icons")),
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography({
      cssExtend: {
        "* > *:only-child": {
          "margin-block-start": 0,
          "margin-block-end": 0,
        },
        "* > *:first-child": {
          "margin-block-start": 0,
        },
        "* > *:last-child": {
          "margin-block-end": 0,
        },
        "h1, h2, h3, h4, h5, h6": {
          "font-weight": 900,
          "text-transform": "uppercase",
        },
        "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
          "font-weight": "inherit",
          "text-decoration": "none",
        },
        h1: {
          "font-size": "7rem",
          color: "#ffffff",
        },
        h2: {
          "font-size": "1.5rem",
        },
        "p, ul, ol, li, div": {
          color: "#ffffff",
        },
      },
    }),
  ],
  theme: {
    colors,
    fontFamily: {
      sans: "Inter, sans-serif",
    },
  },
  shortcuts: [
    {
      "min-h-viewport": "min-h-full min-h-screen min-h-100dvh",
      "p-content": "p-8 sm:p-10",
      "max-w-content": "max-w-4xl",
      "text-heading": "text-2xl font-900 lh-1em uppercase",
      outlined: "b-12 b-current",
      interactive: "transition active:scale-100 hover:scale-110",
      dot: "inline-block aspect-square w-28 flex items-center justify-center rounded-full bg-current text-3em",
      "dot-outlined": "outlined bg-transparent",
    },
  ],
  safelist: Object.keys(colors).flatMap((color) => [
    `prose-${color}`,
    `b-${color}`,
    `bg-${color}`,
    `text-${color}`,
    `hover:b-${color}`,
    `hover:bg-${color}`,
    `hover:text-${color}`,
  ]),
});
