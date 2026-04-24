<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const title = toRef(() => `Error ${props.error.status}`);
const description = toRef(() => props.error.message);

useSeoMeta({ title, description, ogTitle: title });
</script>

<template>
  <NuxtLayout name="default" class="grid place-items-center">
    <div class="text-xl flex flex-col gap-8 max-w-lg w-full">
      <h1 class="text-7xl text-heading text-pink">{{ title }}</h1>
      <p class="leading-relaxed text-balance">{{ description }}</p>

      <NuxtLink
        :to="{ name: 'index' }"
        class="text-pink flex gap-3 items-center"
      >
        <Icon name="mdi:arrow-left" class="scale-150" />
        <span>Go Back</span>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
