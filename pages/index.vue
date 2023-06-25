<script setup lang="ts">
definePageMeta({
  contentTitle: 'Hey! What’s Good?',
  contentClass: 'bg-primary',
});
</script>

<template>
  <PageBase class="p-10">
    <aside
      class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grow items-start gap-8 text-center"
    >
      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-yellow"
      />
      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-blue"
      />
      <div
        class="col-span-3 h-full w-full flex items-center justify-center rounded-full bg-red"
      />
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
      <div
        class="col-span-3 h-full w-full flex items-center justify-center rounded-full bg-green"
      />
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
      <div
        class="col-span-4 h-full w-full flex items-center justify-center rounded-full bg-yellow"
      />
      <div
        class="h-full w-full flex items-center justify-center rounded-full bg-red"
      />
    </aside>
  </PageBase>
</template>
