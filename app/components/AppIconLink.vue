<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import type { ColorKey } from "~~/uno.config";

const props = withDefaults(
  defineProps<{
    to: NuxtLinkProps["to"];
    title: string;
    icon: string;
    color?: ColorKey;
  }>(),
  { color: "pink" },
);

const nuxtLinkProps = computed(() => {
  const { title, icon, color, ...rest } = props;
  return rest;
});
</script>

<template>
  <NuxtLink
    v-bind="nuxtLinkProps"
    class="dot dot-outlined hover:text-black interactive"
    :class="{ [`b-${color} text-${color} hover:bg-${color}`]: color }"
  >
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
