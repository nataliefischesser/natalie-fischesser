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
      <ContactLink
        href="https://www.linkedin.com/in/natalie-fischesser/"
        title="LinkedIn"
        icon="i-fa-brands-linkedin-in"
      />

      <ContactLink
        href="mailto:nfischesser@gmail.com"
        title="Email"
        icon="i-mdi-email"
      />

      <ContactLink href="sms:5555555555" title="Text" icon="i-mdi-message" />
    </div>
  </PageBase>
</template>
