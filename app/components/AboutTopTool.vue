<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="aspect-square w-1em flex items-center justify-center rounded-xl text-20 text-black sm:text-24"
  >
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </div>
</template>
