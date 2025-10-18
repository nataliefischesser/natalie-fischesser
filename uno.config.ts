import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
import { resolve } from "pathe";
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind4,
} from "unocss";
import type { Theme } from "unocss/preset-wind4";

const colors = {
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
    presetWind4(),
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
      colorScheme: {
        body: ["inherit", "inherit"],
        headings: ["inherit", "inherit"],
        lead: ["inherit", "inherit"],
        links: ["inherit", "inherit"],
        bold: ["inherit", "inherit"],
        counters: ["inherit", "inherit"],
        bullets: ["inherit", "inherit"],
        hr: ["inherit", "inherit"],
        quotes: ["inherit", "inherit"],
        "quote-borders": ["inherit", "inherit"],
        captions: ["inherit", "inherit"],
        kbd: ["inherit", "inherit"],
        "kbd-shadows": ["inherit", "inherit"],
        code: ["inherit", "inherit"],
        "pre-code": ["inherit", "inherit"],
        "pre-bg": ["inherit", "inherit"],
        "th-borders": ["inherit", "inherit"],
        "td-borders": ["inherit", "inherit"],
      },
    }),
  ],
  theme: {
    colors,
    font: {
      sans: "Inter, sans-serif",
    },
  } satisfies Theme,
  shortcuts: [
    {
      "app-prose":
        "prose prose-headings:font-black prose-headings:uppercase prose-h1:text-7xl! [&_h1>a,&_h2>a,&_h3>a,&_h4>a,&_h5>a,&_h6>a]:text-unset text-pretty",
      "min-h-viewport": "min-h-full min-h-screen min-h-100dvh",
      "p-content": "p-8 sm:p-10",
      "max-w-content": "max-w-4xl",
      "text-heading": "text-2xl font-black lh-1em uppercase",
      outlined: "border-12 border-current",
      interactive: "transition active:scale-100 hover:scale-110",
      dot: "aspect-square w-28 flex items-center justify-center rounded-full bg-current text-3em",
      "dot-outlined": "outlined bg-transparent",
    },
  ],
  safelist: Object.keys(colors).flatMap((color) => [
    `prose-h1:text-${color}`,
    `bg-${color}`,
    `border-${color}`,
    `text-${color}`,
    `hover:bg-${color}`,
    `hover:border-${color}`,
    `hover:text-${color}`,
  ]),
});
