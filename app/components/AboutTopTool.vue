<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="text-20 text-black rounded-xl flex w-1em aspect-square items-center justify-center sm:text-24"
  >
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </div>
</template>
