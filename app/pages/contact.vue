<script setup lang="ts">
definePageMeta({
  layout: "primary",
  title: "Get In Touch",
  color: "yellow",
});

useSeoMeta({ title: "Contact", ogTitle: "Contact" });
</script>

<template>
  <AppMain class="flex items-center justify-center">
    <div class="flex flex-wrap gap-6 items-center justify-center sm:gap-8">
      <AppIconLink
        to="https://www.linkedin.com/in/natalie-fischesser/"
        title="LinkedIn"
        icon="mdi:linkedin"
        color="yellow"
      />

      <AppIconLink
        to="/email"
        target="_blank"
        external
        title="Email"
        icon="mdi:email"
        color="yellow"
      />
    </div>
  </AppMain>
</template>
