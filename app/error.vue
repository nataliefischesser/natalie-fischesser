<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => `Error ${props.error.statusCode}`);

const errorMessage = toRef(() => props.error?.message ?? null);
const fallbackMessage = 'An unknown error occurred';
const message = toRef(() => errorMessage.value || fallbackMessage);

useHead({ title });
</script>

<template>
  <AppLayout class="grid place-items-center">
    <div class="max-w-lg w-full flex flex-col gap-8">
      <h1 class="text-7xl text-heading text-pink">{{ title }}</h1>

      <p class="text-balance text-xl leading-relaxed">
        {{ message }}
      </p>

      <NuxtLink href="/" class="text-pink underline">Go Back</NuxtLink>
    </div>
  </AppLayout>
</template>
