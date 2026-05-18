<script setup lang="ts">
import type { ColorKey } from "~~/uno.config";

const { color = "pink" } = defineProps<{
  title: string;
  icon: string;
  iconClass?: string;
  color?: ColorKey;
}>();
</script>

<template>
  <NuxtLink
    class="dot dot-outlined interactive hover:text-black"
    :class="{ [`border-${color} text-${color} hover:bg-${color}`]: color }"
  >
    <Icon :name="icon" :class="iconClass" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
