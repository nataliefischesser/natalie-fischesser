<template>
  <AppLayout class="flex flex-col xl:flex-row">
    <div
      class="flex basis-50% flex-col gap-8 text-black transition-colors duration-300 p-content"
      :class="{ [`bg-${$route.meta.color}`]: $route.meta.color }"
    >
      <header>
        <h1
          class="flex items-center gap-3 text-heading text-xl tracking-widest sm:text-2xl"
        >
          <i class="i-app-logo scale-125 text-9" />

          <NuxtLink to="/" class="p-3 transition active:scale-98">
            Natalie Fischesser
          </NuxtLink>
        </h1>
      </header>

      <main class="flex grow items-center @container/main">
        <Transition v-bind="slideYFadeTransition">
          <h2
            v-if="$route.meta.title"
            :key="$route.path"
            class="text-18 text-heading hyphens-auto lg:text-35 sm:text-25 @4xl/main:hyphens-none"
          >
            {{ $route.meta.title }}
          </h2>
        </Transition>
      </main>
    </div>

    <div class="contents children:basis-50%">
      <slot />
    </div>
  </AppLayout>
</template>
