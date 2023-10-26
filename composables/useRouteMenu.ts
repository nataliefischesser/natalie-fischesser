export const useRouteMenu = <T extends Readonly<string[]>>(
  paths: MaybeRefOrGetter<T>,
) => {
  const router = useRouter();

  return computed(() => toValue(paths).map((path) => router.resolve({ path })));
};
