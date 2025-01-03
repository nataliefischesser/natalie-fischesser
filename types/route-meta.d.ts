import type { ColorKey } from "~~/uno.config";

interface AppRouteMeta {
  title: string;
  color: ColorKey;
}

declare module "#app" {
  interface PageMeta extends AppRouteMeta {}
}

declare module "vue-router" {
  interface RouteMeta extends AppRouteMeta {}
}

export {};
