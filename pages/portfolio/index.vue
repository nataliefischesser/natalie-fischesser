<script setup lang="ts">
definePageMeta({
  layout: 'primary',
  title: 'Port­folio',
  color: 'green',
});

useHead({ title: 'Portfolio' });

const password = ref('');
const unlocked = useSessionStorage('portfolio-unlocked', false);

const unlock = () => {
  if (password.value !== 'test') return;

  unlocked.value = true;
};
</script>

<template>
  <PageBase class="flex items-center justify-center">
    <Transition v-bind="scaleFadeTransition" appear>
      <ContentList v-if="unlocked" v-slot="{ list }" path="/portfolio">
        <nav
          aria-label="Portfolio"
          class="flex flex-wrap items-center justify-center gap-6"
        >
          <NuxtLink
            v-for="item in list"
            :key="item._path"
            :to="item._path"
            class="aspect-square w-40 flex items-center justify-center rounded-2xl text-heading text-black interactive"
            :class="{ [`bg-${item.color}`]: item.color }"
          >
            {{ item.title }}
          </NuxtLink>
        </nav>
      </ContentList>

      <form
        v-else
        novalidate
        class="w-full flex flex-wrap items-center justify-center gap-8"
        @submit.prevent="unlock"
      >
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          class="h-28 max-w-full grow outlined rounded-full bg-transparent px-6 placeholder:text-heading text-2xl text-green placeholder:text-2xl placeholder:font-700 placeholder:text-green"
        />

        <button
          type="submit"
          aria-label="Submit"
          class="dot dot-outlined b-green text-green interactive hover:bg-green hover:text-black"
        >
          <i class="i-mdi-arrow-right scale-200" />
        </button>
      </form>
    </Transition>
  </PageBase>
</template>
