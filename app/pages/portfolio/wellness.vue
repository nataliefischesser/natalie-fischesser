<script setup lang="ts">
definePageMeta({
  title: "Wellness",
  color: "blue",
});
</script>

<template>
  <AppMain class="m-inline-auto max-w-content">
    <AppIconLink
      :to="{ name: 'portfolio' }"
      title="Back"
      icon="i-mdi-arrow-left scale-200"
      :color="$route.meta.color"
      class="mbe-8"
    />

    <div
      class="max-w-full prose"
      :class="{ [`prose-${$route.meta.color}`]: $route.meta.color }"
    >
      <h1>{{ $route.meta.title }}</h1>

      <h2>Overview</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisl eu ultricies fermentum, nunc nibh ultricies nunc, quis aliquam nisl
        nunc eu nisi. Donec euismod, nisl eu ultricies fermentum, nunc nibh
        ultricies nunc, quis aliquam nisl nunc eu nisi.
      </p>

      <h2>Process</h2>

      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Donec euismod, nisl eu ultricies fermentum, nunc nibh ultricies nunc,
          quis aliquam nisl nunc eu nisi.
        </li>
        <li>
          Nisl eu ultricies fermentum, nunc nibh ultricies nunc, quis aliquam
          nisl nunc eu nisi.
        </li>
      </ul>

      <h2>Goal</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisl eu ultricies fermentum, nunc nibh ultricies nunc, quis aliquam nisl
        nunc eu nisi.
      </p>

      <h2>Website</h2>

      <p>
        <NuxtLink to="https://wellness.moserit.com">
          wellness.moserit.com
        </NuxtLink>
      </p>
    </div>
  </AppMain>
</template>
