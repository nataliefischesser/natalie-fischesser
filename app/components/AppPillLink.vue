<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import type { ColorKey } from "~~/uno.config";

const props = withDefaults(
  defineProps<{
    to: NuxtLinkProps["to"];
    color?: ColorKey;
  }>(),
  { color: "pink" },
);

const nuxtLinkProps = computed(() => {
  const { color, ...rest } = props;
  return rest;
});
</script>

<template>
  <NuxtLink
    v-bind="nuxtLinkProps"
    class="text-heading p-6 outlined rounded-full flex gap-6 items-center justify-center hover:text-black interactive"
    :class="{ [`b-${color} text-${color} hover:bg-${color}`]: color }"
  >
    <slot />
  </NuxtLink>
</template>
