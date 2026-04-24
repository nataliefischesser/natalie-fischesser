<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import type { ColorKey } from "~~/uno.config";

const props = withDefaults(
  defineProps<{
    to: NuxtLinkProps["to"];
    target?: NuxtLinkProps["target"];
    external?: NuxtLinkProps["external"];
    title: string;
    icon: string;
    iconClass?: string;
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
    class="dot dot-outlined interactive hover:text-black"
    :class="{ [`border-${color} text-${color} hover:bg-${color}`]: color }"
  >
    <Icon :name="icon" :class="iconClass" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
