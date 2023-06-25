<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <LayoutBase class="grid-cols-fit-2xl grid">
    <div
      class="flex flex-col gap-8 p-10 text-black transition-colors duration-300"
      :class="route.meta.contentClass"
    >
      <header>
        <h1 class="flex items-center gap-5 text-heading tracking-widest">
          <i class="i-mdi-dots-grid scale-125" />
          <NuxtLink to="/">Natalie Fischesser</NuxtLink>
        </h1>
      </header>

      <main class="flex grow items-center @container">
        <Transition
          enter-active-class="duration-100 ease-out"
          enter-from-class="opacity-0 translate-y--4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y--4"
          mode="out-in"
          appear
        >
          <h2
            v-if="$route.meta.contentTitle"
            :key="$route.path"
            class="text-35 text-heading hyphens-auto @4xl:hyphens-none"
          >
            {{ $route.meta.contentTitle }}
          </h2>
        </Transition>
      </main>
    </div>

    <slot />
  </LayoutBase>
</template>
