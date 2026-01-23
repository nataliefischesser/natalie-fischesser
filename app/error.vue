<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => `Error ${props.error.status}`);

const errorMessage = toRef(() => props.error.message);
const fallbackMessage = "An unknown error occurred";
const message = toRef(() => errorMessage.value || fallbackMessage);

useSeoMeta({ title });
</script>

<template>
  <AppLayout class="grid place-items-center">
    <div class="text-xl flex flex-col gap-8 max-w-lg w-full">
      <h1 class="text-7xl text-heading text-pink">{{ title }}</h1>

      <p class="leading-relaxed text-balance">
        {{ message }}
      </p>

      <NuxtLink
        :to="{ name: 'index' }"
        class="text-pink flex gap-3 items-center"
      >
        <i class="i-mdi-arrow-left scale-150" />
        <span>Go Back</span>
      </NuxtLink>
    </div>
  </AppLayout>
</template>
