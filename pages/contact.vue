<script setup lang="ts">
useHead({ title: 'Contact' });

definePageMeta({
  contentTitle: 'Get In Touch',
  contentClass: 'bg-yellow',
});
</script>

<template>
  <PageBase class="flex items-center justify-center gap-8 p-10">
    <NuxtLink
      href="https://www.linkedin.com/in/natalie-fischesser/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AppDot
        icon-class="i-fa-brands-linkedin-in"
        outlined
        class="text-yellow"
      />
    </NuxtLink>

    <NuxtLink href="mailto:nfischesser@gmail.com">
      <AppDot icon-class="i-mdi-email" outlined class="text-yellow" />
    </NuxtLink>

    <AppDot icon-class="i-mdi-message" outlined class="text-yellow" />
  </PageBase>
</template>
