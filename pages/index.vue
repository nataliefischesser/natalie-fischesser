<script setup lang="ts">
useHead({ title: 'Home' });

definePageMeta({
  contentTitle: 'Hey! What’s Good?',
  contentClass: 'bg-primary',
});
</script>

<template>
  <PageBase class="flex flex-col p-10">
    <aside
      class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grow items-start gap-8 text-center"
    >
      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-blue"
      />

      <NuxtLink
        to="/about"
        class="col-span-3 h-full w-full flex items-center justify-center outlined b-red rounded-full text-4xl text-heading text-red transition interactive hover:bg-red hover:text-black"
      >
        About Me
      </NuxtLink>

      <div
        class="col-span-4 h-full w-full flex items-center justify-center rounded-full bg-pink"
      />

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="col-span-2 h-full w-full flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-blue"
      />

      <div
        class="col-span-2 h-full w-full flex items-center justify-center rounded-full bg-red"
      />

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-blue"
      />

      <NuxtLink
        to="/portfolio"
        class="col-span-3 h-full w-full flex items-center justify-center outlined b-green rounded-full text-4xl text-heading text-green transition interactive hover:bg-green hover:text-black"
      >
        Portfolio
      </NuxtLink>

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="col-span-full h-full w-full flex items-center justify-center rounded-full bg-pink"
      />

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-red"
      />

      <div
        class="col-span-2 h-full w-full flex items-center justify-center rounded-full bg-blue"
      />

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-pink"
      />

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-green"
      />

      <NuxtLink
        to="/contact"
        class="col-span-4 h-full w-full flex items-center justify-center outlined b-yellow rounded-full text-4xl text-heading text-yellow transition interactive hover:bg-yellow hover:text-black"
      >
        Get In Touch
      </NuxtLink>

      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-red"
      />
    </aside>
  </PageBase>
</template>
