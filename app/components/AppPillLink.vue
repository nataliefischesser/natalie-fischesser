<script setup lang="ts">
import type { ColorKey } from "~~/uno.config";

const { color = "pink" } = defineProps<{ color?: ColorKey }>();
</script>

<template>
  <NuxtLink
    class="text-heading p-6 outlined rounded-full flex gap-6 interactive items-center justify-center hover:text-black"
    :class="{ [`border-${color} text-${color} hover:bg-${color}`]: color }"
  >
    <slot />
  </NuxtLink>
</template>
