<script setup lang="ts">
definePageMeta({
  layout: "primary",
  title: "About Me",
  color: "red",
});

useSeoMeta({ title: "About" });
</script>

<template>
  <AppMain class="flex flex-col gap-10">
    <div class="grid gap-10 sm:grid-cols-[1fr_8rem]">
      <div
        class="flex items-center rounded-2xl bg-pink p-8 p-block-12 text-2xl text-black font-800"
      >
        <span>
          I'm a Visual Designer with 15+ years of experience that is all about
          creating engaging experiences for the users of digital products.
        </span>
      </div>

      <div class="flex flex-row justify-center gap-6 sm:flex-col">
        <div class="dot text-blue" />

        <div class="dot bg-transparent text-pink">
          <i class="i-mdi-emoticon-excited-outline scale-275" />
        </div>
      </div>
    </div>

    <div class="flex items-center gap-8">
      <div class="dot dot-outlined text-red">
        <i class="i-mdi-arrow-down scale-200" />
      </div>

      <h3 class="text-11 text-heading text-red tracking-widest">Skills</h3>
    </div>

    <ul
      class="list-disc columns-1 pis-8 text-xl text-gray-200 font-900 sm:columns-2 children:p-1"
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

      <h3 class="text-11 text-heading text-yellow tracking-widest">
        Top Tools
      </h3>
    </div>

    <div class="flex flex-wrap gap-8">
      <AboutTopTool
        title="Figma"
        icon="i-simple-icons-figma scale-75"
        class="bg-green"
      />

      <AboutTopTool
        title="Sketch"
        icon="i-simple-icons-sketch scale-65"
        class="bg-yellow"
      />

      <AboutTopTool
        title="Adobe Suite"
        icon="i-simple-icons-adobecreativecloud scale-75"
        class="bg-pink"
      />

      <AboutTopTool
        title="Miro"
        icon="i-simple-icons-miro scale-65"
        class="bg-yellow"
      />

      <AboutTopTool
        title="Jira"
        icon="i-simple-icons-jirasoftware scale-75"
        class="bg-blue"
      />
    </div>
  </AppMain>
</template>
