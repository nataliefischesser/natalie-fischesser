<script setup lang="ts">
useHead({
  bodyAttrs: {
    class:
      "[color-scheme:dark] min-h-viewport bg-black text-white font-sans antialiased accent-pink",
  },
});

useSeoMeta({ themeColor: "#ff76e1" });
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
