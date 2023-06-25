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
      class="dot dot-outlined b-yellow text-yellow transition-colors hover:bg-yellow hover:text-black"
    >
      <i class="i-fa-brands-linkedin-in" />
      <span class="sr-only">LinkedIn</span>
    </NuxtLink>

    <NuxtLink
      href="mailto:nfischesser@gmail.com"
      class="dot dot-outlined b-yellow text-yellow transition-colors hover:bg-yellow hover:text-black"
    >
      <i class="i-mdi-email" />
      <span class="sr-only">Email</span>
    </NuxtLink>

    <NuxtLink
      href="sms:5555555555"
      class="dot dot-outlined b-yellow text-yellow transition-colors hover:bg-yellow hover:text-black"
    >
      <i class="i-mdi-message" />
      <span class="sr-only">Text</span>
    </NuxtLink>
  </PageBase>
</template>
