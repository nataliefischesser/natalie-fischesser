<script setup lang="ts">
definePageMeta({
  contentTitle: 'Get In Touch',
  contentClass: 'bg-yellow',
});

useHead({ title: 'Contact' });
</script>

<template>
  <PageBase class="flex items-center justify-center">
    <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      <NuxtLink
        href="https://www.linkedin.com/in/natalie-fischesser/"
        target="_blank"
        rel="noopener noreferrer"
        class="dot dot-outlined b-yellow text-yellow interactive hover:bg-yellow hover:text-black"
      >
        <i class="i-fa-brands-linkedin-in" />
        <span class="sr-only">LinkedIn</span>
      </NuxtLink>

      <NuxtLink
        href="mailto:nfischesser@gmail.com"
        class="dot dot-outlined b-yellow text-yellow interactive hover:bg-yellow hover:text-black"
      >
        <i class="i-mdi-email" />
        <span class="sr-only">Email</span>
      </NuxtLink>

      <NuxtLink
        href="sms:5555555555"
        class="dot dot-outlined b-yellow text-yellow interactive hover:bg-yellow hover:text-black"
      >
        <i class="i-mdi-message" />
        <span class="sr-only">Text</span>
      </NuxtLink>
    </div>
  </PageBase>
</template>
