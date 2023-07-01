<script setup lang="ts">
import { type NuxtLinkProps } from 'nuxt/app';

defineProps<{ title: string; icon: string } & NuxtLinkProps>();
</script>

<template>
  <NuxtLink
    :href="href"
    class="dot dot-outlined b-yellow text-yellow interactive hover:bg-yellow hover:text-black"
  >
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
