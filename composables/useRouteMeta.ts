export const useRouteMeta = <T extends string>(path: MaybeRefOrGetter<T>) => {
  const router = useRouter();

  return computed(() => router.resolve({ path: toValue(path) }).meta);
};
