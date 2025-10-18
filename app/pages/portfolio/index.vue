<script setup lang="ts">
definePageMeta({
  layout: "primary",
  title: "Port­folio",
  color: "green",
});

useSeoMeta({ title: "Portfolio" });

const password = ref("");
const unlocked = useSessionStorage("portfolio-unlocked", false);

const unlock = () => {
  if (password.value !== "test") return;

  unlocked.value = true;
};

const menu = useRouteMenu([
  "portfolio-spenio",
  "portfolio-wellness",
  "portfolio-idealab",
]);
</script>

<template>
  <AppMain class="flex items-center justify-center">
    <ClientOnly>
      <template #fallback>
        <i class="i-svg-spinners-3-dots-move text-24 text-green" />
      </template>

      <Transition v-bind="scaleFadeTransition">
        <nav
          v-if="unlocked"
          aria-label="Portfolio"
          class="flex flex-wrap gap-6 items-center justify-center"
        >
          <NuxtLink
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="text-heading text-black rounded-2xl flex w-40 aspect-square interactive items-center justify-center"
            :class="{ [`bg-${item.meta.color}`]: item.meta.color }"
          >
            {{ item.meta.title }}
          </NuxtLink>
        </nav>

        <form
          v-else
          novalidate
          class="flex flex-wrap gap-8 w-full items-center justify-center"
          @submit.prevent="unlock"
        >
          <label for="password">
            <span class="sr-only">Password</span>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter Password"
              class="text-2xl text-green p-inline-6 outlined rounded-full bg-transparent grow h-28 max-w-full placeholder:text-2xl placeholder:text-heading placeholder:text-green placeholder:font-700"
            />
          </label>

          <button
            type="submit"
            aria-label="Submit"
            class="dot text-green dot-outlined border-green interactive hover:text-black hover:bg-green"
          >
            <i class="i-mdi-arrow-right scale-200" />
          </button>
        </form>
      </Transition>
    </ClientOnly>
  </AppMain>
</template>
