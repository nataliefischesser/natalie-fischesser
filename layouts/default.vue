<template>
  <LayoutBase class="flex flex-col xl:flex-row">
    <div
      class="flex basis-50% flex-col gap-8 text-black transition-colors duration-300 p-content"
      :class="$route.meta.contentClass"
    >
      <header>
        <h1
          class="flex items-center gap-3 text-heading text-xl tracking-widest sm:text-2xl"
        >
          <i class="i-mdi-dots-grid scale-125" />

          <NuxtLink to="/" class="p-3 transition active:scale-98">
            Natalie Fischesser
          </NuxtLink>
        </h1>
      </header>

      <main class="flex grow items-center @container/main">
        <Transition
          enter-from-class="opacity-0 translate-y--4"
          enter-active-class="duration-100 ease-out"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-active-class="duration-100 ease-in"
          leave-to-class="opacity-0 translate-y--4"
          mode="out-in"
          appear
        >
          <h2
            v-if="$route.meta.contentTitle"
            :key="$route.path"
            class="text-18 text-heading hyphens-auto lg:text-35 sm:text-25 @4xl/main:hyphens-none"
          >
            {{ $route.meta.contentTitle }}
          </h2>
        </Transition>
      </main>
    </div>

    <slot />
  </LayoutBase>
</template>
