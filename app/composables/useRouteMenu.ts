import type { RouteNamedMap } from "vue-router/auto-routes";

export const useRouteMenu = <T extends Readonly<(keyof RouteNamedMap)[]>>(
  names: MaybeRefOrGetter<T>,
) => {
  const router = useRouter();

  return computed(() => toValue(names).map((name) => router.resolve({ name })));
};
