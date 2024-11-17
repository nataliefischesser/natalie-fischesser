<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => `Error ${props.error.statusCode}`);

const errorMessage = toRef(() => props.error?.message ?? null);
const fallbackMessage = "An unknown error occurred";
const message = toRef(() => errorMessage.value || fallbackMessage);

useHead({ title });
</script>

<template>
  <AppLayout class="grid place-items-center">
    <div class="max-w-lg w-full flex flex-col gap-8 text-xl">
      <h1 class="text-7xl text-heading text-pink">{{ title }}</h1>

      <p class="text-balance leading-relaxed">
        {{ message }}
      </p>

      <NuxtLink
        :to="{ name: 'index' }"
        class="flex items-center gap-3 text-pink"
      >
        <i class="i-mdi-arrow-left scale-150" />
        <span>Go Back</span>
      </NuxtLink>
    </div>
  </AppLayout>
</template>
