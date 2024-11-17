<template>
  <AppLayout class="flex flex-col xl:flex-row">
    <div
      class="flex basis-50% flex-col gap-8 text-black transition-colors duration-300 p-content"
      :class="{ [`bg-${$route.meta.color}`]: $route.meta.color }"
    >
      <header>
        <h1 class="flex text-heading text-xl tracking-widest sm:text-2xl">
          <NuxtLink
            :to="{ name: 'index' }"
            class="flex items-center gap-2 transition active:scale-98"
          >
            <i class="i-app-logo text-11" />
            <span class="p-3">Natalie Fischesser</span>
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
