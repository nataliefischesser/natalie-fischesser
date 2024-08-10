import type { ColorKey } from '~~/uno.config';

interface AppRouteMeta {
  name: DirectoryValue;
  title: string;
  color: ColorKey;
}

declare module '#app' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PageMeta extends AppRouteMeta {}
}

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouteMeta extends AppRouteMeta {}
}

export {};
