<script lang="ts">
import { type NuxtLinkProps } from 'nuxt/app';
import { type ColorKey } from '~/uno.config';

export interface AppIconLinkBaseProps {
  title: string;
  icon: string;
  color?: ColorKey;
}

export type AppIconLinkProps = AppIconLinkBaseProps & NuxtLinkProps;
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<AppIconLinkProps>(), { color: 'pink' });

const nuxtLinkProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, icon, color, ...rest } = props;
  return rest;
});
</script>

<template>
  <NuxtLink
    v-bind="nuxtLinkProps"
    class="dot dot-outlined interactive hover:text-black"
    :class="{ [`b-${color} text-${color} hover:bg-${color}`]: color }"
  >
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
