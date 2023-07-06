import { type ColorKey } from 'uno.config';

declare module '#app' {
  interface PageMeta {
    title?: string;
    color?: ColorKey;
  }
}

export {};
