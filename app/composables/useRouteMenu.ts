import type { RouteNamedMap } from "vue-router/auto-routes";

export const useRouteMenu = <T extends Readonly<(keyof RouteNamedMap)[]>>(
  names: MaybeRefOrGetter<T>,
) => {
  const router = useRouter();
  const route = useRoute();

  return computed(() => {
    return toValue(names).map((name) => router.resolve({ name }, route));
  });
};
