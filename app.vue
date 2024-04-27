<script setup lang="ts">
const meta = {
  title: 'Natalie Fischesser - Visual UX Designer',
  url: 'https://nataliefischesser.com/',
  icon: '/favicon.svg',
  description:
    'I am passionate about creating amazing user experiences through thoughtfully built web applications.',
} as const;

useHead({
  titleTemplate: (title) =>
    title ? `${title} - Natalie Fischesser` : meta.title,
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  ],
  meta: [
    { name: 'description', content: meta.description },
    { name: 'theme-color', content: '#ff76e1' },
  ],
  htmlAttrs: { lang: 'en' },
  bodyAttrs: {
    class:
      '[color-scheme:dark] min-h-viewport bg-black text-white font-sans accent-pink',
  },
});

useSeoMeta({
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogImage: meta.icon,
  ogUrl: meta.url,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.icon,
  twitterCard: 'summary',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
