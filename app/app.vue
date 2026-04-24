<script setup lang="ts">
const route = useRoute();

const title = toRef(() => route.meta.title);

useSeoMeta({
  title,
  description:
    "I am passionate about creating amazing user experiences through thoughtfully built web applications.",
  ogTitle: title,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <AppLoadingIndicator />
  <NuxtRouteAnnouncer />
</template>
