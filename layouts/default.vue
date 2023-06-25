<template>
  <LayoutBase class="grid grid-cols-fit-2xl">
    <div
      class="flex flex-col gap-8 p-10 text-black transition-colors duration-300"
      :class="$route.meta.contentClass"
    >
      <header>
        <h1 class="flex items-center gap-3 text-heading tracking-widest">
          <i class="i-mdi-dots-grid scale-125" />

          <NuxtLink to="/" class="p-3">Natalie Fischesser</NuxtLink>
        </h1>
      </header>

      <main class="flex grow items-center @container/main">
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
            class="text-35 text-heading hyphens-auto @4xl/main:hyphens-none"
          >
            {{ $route.meta.contentTitle }}
          </h2>
        </Transition>
      </main>
    </div>

    <slot />
  </LayoutBase>
</template>
