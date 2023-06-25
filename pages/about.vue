<script setup lang="ts">
definePageMeta({
  contentTitle: 'About Me',
  contentClass: 'bg-red',
});
</script>

<template>
  <PageBase class="gap-10 p-10">
    <div class="grid grid-cols-[1fr_8rem] gap-10">
      <div
        class="flex items-center rounded-2xl bg-primary p-8 py-12 text-2xl font-800 text-black"
      >
        <span>
          I'm a Visual Designer with 19 years of experience that is all about
          creating engaging experiences for the users of digital products.
        </span>
      </div>

      <div class="flex flex-col gap-6">
        <div class="aspect-square w-full rounded-full bg-blue" />
        <div class="aspect-square w-full rounded-full bg-primary" />
      </div>
    </div>

    <div class="flex items-center gap-8">
      <div class="aspect-square w-28 rounded-full bg-red" />

      <h3 class="text-heading text-11 tracking-widest text-red">Skills</h3>
    </div>

    <div class="flex items-center gap-8">
      <div class="aspect-square w-28 rounded-full bg-yellow" />

      <h3 class="text-heading text-11 tracking-widest text-yellow">
        Top Tools
      </h3>
    </div>
  </PageBase>
</template>
