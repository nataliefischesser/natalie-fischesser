<script setup lang="ts">
definePageMeta({
  contentTitle: 'Hey! What’s Good?',
  contentClass: 'bg-primary',
});

useHead({ title: 'Home' });
</script>

<template>
  <PageBase class="flex flex-col items-center justify-center">
    <aside
      class="grid grid-cols-5 grid-rows-7 gap-8 text-center text-0.6vw xl:text-0.3vw"
    >
      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-blue"
      />

      <NuxtLink
        to="/about"
        class="col-span-3 h-20em flex items-center justify-center b-2em outlined b-red rounded-full text-1em text-red transition hover:scale-105 interactive hover:bg-red hover:text-black"
      >
        <span class="text-8em text-heading">About Me</span>
      </NuxtLink>

      <div
        class="col-span-4 h-20em flex items-center justify-center rounded-full bg-pink"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="col-span-2 h-20em flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-blue"
      />

      <div
        class="col-span-2 h-20em flex items-center justify-center rounded-full bg-red"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-blue"
      />

      <NuxtLink
        to="/portfolio"
        class="col-span-3 h-20em flex items-center justify-center b-2em outlined b-green rounded-full text-1em text-green transition hover:scale-105 interactive hover:bg-green hover:text-black"
      >
        <span class="text-8em text-heading">Portfolio</span>
      </NuxtLink>

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="col-span-full h-20em flex items-center justify-center rounded-full bg-pink"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-red"
      />

      <div
        class="col-span-2 h-20em flex items-center justify-center rounded-full bg-blue"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-pink"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-green"
      />

      <NuxtLink
        to="/contact"
        class="col-span-4 h-20em flex items-center justify-center b-2em outlined b-yellow rounded-full text-1em text-yellow transition hover:scale-105 interactive hover:bg-yellow hover:text-black"
      >
        <span class="text-8em text-heading">Get In Touch</span>
      </NuxtLink>

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-red"
      />
    </aside>
  </PageBase>
</template>
