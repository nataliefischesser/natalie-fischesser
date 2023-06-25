<script setup lang="ts">
useHead({ title: 'About' });

definePageMeta({
  contentTitle: 'About Me',
  contentClass: 'bg-red',
});
</script>

<template>
  <PageBase class="flex flex-col gap-10 p-10">
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
        <div class="dot text-blue" />

        <div class="dot bg-transparent text-primary">
          <i class="i-mdi-emoticon-excited-outline scale-275" />
        </div>
      </div>
    </div>

    <div class="flex items-center gap-8">
      <div class="dot dot-outlined text-red">
        <i class="i-mdi-arrow-down scale-200" />
      </div>

      <h3 class="text-11 text-heading tracking-widest text-red">Skills</h3>
    </div>

    <ul
      class="list-disc columns-2 pl-8 text-xl font-900 text-gray-200 children:p-1"
    >
      <li>User Research</li>
      <li>Design Systems</li>
      <li>Digital Product Design</li>
      <li>User-centered Design</li>
      <li>Mobile App Design</li>
      <li>UI Design</li>
      <li>Wireframes</li>
      <li>Prototyping</li>
      <li>Accessibility</li>
      <li>Empathy</li>
      <li>Relationship Building</li>
      <li>Communication</li>
    </ul>

    <div class="flex items-center gap-8">
      <div class="dot dot-outlined text-yellow">
        <i class="i-mdi-star scale-150" />
      </div>

      <h3 class="text-11 text-heading tracking-widest text-yellow">
        Top Tools
      </h3>
    </div>

    <div class="flex flex-wrap gap-8">
      <div
        class="aspect-square w-28 flex items-center justify-center rounded-xl bg-green text-5em text-black"
      >
        <i class="i-fa-brands-figma" />
        <span class="sr-only">Figma</span>
      </div>

      <div
        class="aspect-square w-28 flex items-center justify-center rounded-xl bg-yellow text-5em text-black"
      >
        <i class="i-fa-brands-sketch" />
        <span class="sr-only">Figma</span>
      </div>

      <div
        class="aspect-square w-28 flex items-center justify-center rounded-xl bg-pink text-5em text-black"
      >
        <i class="i-fa-brands-adobe" />
        <span class="sr-only">Adobe Suite</span>
      </div>
    </div>
  </PageBase>
</template>
