<script setup lang="ts">
definePageMeta({
  layout: 'primary',
  title: 'Get In Touch',
  color: 'yellow',
});

useHead({ title: 'Contact' });
</script>

<template>
  <PageBase class="flex items-center justify-center">
    <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      <AppIconLink
        to="https://www.linkedin.com/in/natalie-fischesser/"
        title="LinkedIn"
        icon="i-fa-brands-linkedin-in"
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
  </PageBase>
</template>
