<script setup lang="ts">
definePageMeta({
  layout: 'primary',
  title: 'Hey! What’s Good?',
  color: 'pink',
});

useHead({ title: 'Home' });
</script>

<template>
  <PageBase class="flex flex-col items-center justify-center">
    <aside
      class="grid grid-cols-5 grid-rows-7 gap-8 text-center text-0.6vi xl:text-0.3vi"
    >
      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-yellow"
      />

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-blue"
      />

      <AppPillLink
        to="/about"
        color="red"
        class="col-span-3 h-20em b-2em text-1em active:scale-100 hover:scale-105"
      >
        <span class="text-8em text-heading">About Me</span>
      </AppPillLink>

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

      <AppPillLink
        to="/portfolio"
        color="green"
        class="col-span-3 h-20em b-2em text-1em active:scale-100 hover:scale-105"
      >
        <span class="text-8em text-heading">Portfolio</span>
      </AppPillLink>

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

      <AppPillLink
        to="/contact"
        color="yellow"
        class="col-span-4 h-20em b-2em text-1em active:scale-100 hover:scale-105"
      >
        <span class="text-8em text-heading">Get In Touch</span>
      </AppPillLink>

      <div
        class="h-20em w-20em flex items-center justify-center rounded-full bg-red"
      />
    </aside>
  </PageBase>
</template>
