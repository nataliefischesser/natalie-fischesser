<script setup lang="ts">
const meta = {
  title: "Natalie Fischesser - Visual UX Designer",
  description:
    "I am passionate about creating amazing user experiences through thoughtfully built web applications.",
  url: "https://nataliefischesser.com",
  icon: "/favicon.svg",
} as const;

useHead({
  link: [
    { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
    { rel: "icon", href: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
  ],
  htmlAttrs: { lang: "en" },
  bodyAttrs: {
    class:
      "[color-scheme:dark] min-h-viewport bg-black text-white font-sans antialiased accent-pink",
  },
});

useSeoMeta({
  titleTemplate: (title) =>
    title ? `${title} - Natalie Fischesser` : meta.title,
  themeColor: "#ff76e1",
  description: meta.description,
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogImage: meta.icon,
  ogUrl: meta.url,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.icon,
  twitterCard: "summary",
});
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
