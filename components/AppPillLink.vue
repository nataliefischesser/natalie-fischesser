<script setup lang="ts">
import type { NuxtLinkProps } from 'nuxt/app';
import type { ColorKey } from '~/uno.config';

const props = withDefaults(
  defineProps<{
    to: NuxtLinkProps['to'];
    color?: ColorKey;
  }>(),
  { color: 'pink' },
);

const nuxtLinkProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...rest } = props;
  return rest;
});
</script>

<template>
  <NuxtLink
    v-bind="nuxtLinkProps"
    class="flex items-center justify-center gap-6 outlined rounded-full p-6 text-heading interactive hover:text-black"
    :class="{ [`b-${color} text-${color} hover:bg-${color}`]: color }"
  >
    <slot />
  </NuxtLink>
</template>
