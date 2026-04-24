<script setup lang="ts">
definePageMeta({
  layout: "primary",
  title: "About Me",
  color: "red",
});

useSeoMeta({ title: "About", ogTitle: "About" });
</script>

<template>
  <AppMain class="flex flex-col gap-10">
    <div class="gap-10 grid sm:grid-cols-[1fr_8rem]">
      <div
        class="text-2xl text-black font-800 p-8 p-block-12 rounded-2xl bg-pink flex items-center"
      >
        <span>
          I'm a Visual Designer with 15+ years of experience that is all about
          creating engaging experiences for the users of digital products.
        </span>
      </div>

      <div class="flex flex-row gap-6 justify-center sm:flex-col">
        <div class="dot text-blue" />

        <div class="dot text-pink bg-transparent">
          <Icon name="mdi:emoticon-excited-outline" class="scale-275" />
        </div>
      </div>
    </div>

    <div class="flex gap-8 items-center">
      <div class="dot text-red dot-outlined">
        <Icon name="mdi:arrow-down" class="scale-200" />
      </div>

      <h3 class="text-11 text-heading text-red tracking-widest">Skills</h3>
    </div>

    <ul
      class="text-xl text-gray-200 font-black pis-8 list-disc columns-1 children:p-1 sm:columns-2"
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

    <div class="flex gap-8 items-center">
      <div class="dot text-yellow dot-outlined">
        <Icon name="mdi:star" class="scale-150" />
      </div>

      <h3 class="text-11 text-heading text-yellow tracking-widest">
        Top Tools
      </h3>
    </div>

    <div class="flex flex-wrap gap-8">
      <AboutTopTool
        title="Figma"
        icon="simple-icons:figma scale-75"
        class="bg-green"
      />

      <AboutTopTool
        title="Sketch"
        icon="simple-icons:sketch scale-65"
        class="bg-yellow"
      />

      <AboutTopTool
        title="Adobe Suite"
        icon="simple-icons:adobecreativecloud scale-75"
        class="bg-pink"
      />

      <AboutTopTool
        title="Miro"
        icon="simple-icons:miro scale-65"
        class="bg-yellow"
      />

      <AboutTopTool
        title="Jira"
        icon="simple-icons:jirasoftware scale-75"
        class="bg-blue"
      />
    </div>
  </AppMain>
</template>
