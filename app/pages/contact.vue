<script setup lang="ts">
definePageMeta({
  layout: "primary",
  title: "Get In Touch",
  color: "yellow",
});

useSeoMeta({ title: "Contact" });
</script>

<template>
  <AppMain class="flex items-center justify-center">
    <div class="flex flex-wrap gap-6 items-center justify-center sm:gap-8">
      <AppIconLink
        to="https://www.linkedin.com/in/natalie-fischesser/"
        title="LinkedIn"
        icon="i-mdi-linkedin"
        color="yellow"
      />

      <AppIconLink
        to="mailto:nfischesser@gmail.com"
        title="Email"
        icon="i-mdi-email"
        color="yellow"
      />

      <AppIconLink
        to="sms:5555555555"
        title="Text"
        icon="i-mdi-message"
        color="yellow"
      />
    </div>
  </AppMain>
</template>
