<script setup lang="ts">
useHead({ title: 'Portfolio' });

definePageMeta({
  contentTitle: 'Port­folio',
  contentClass: 'bg-green',
});

const password = ref('');
const unlocked = ref(false);

const unlock = () => {
  if (password.value !== 'password') return;

  unlocked.value = true;
};
</script>

<template>
  <PageBase class="flex items-center p-10">
    <template v-if="unlocked">I'm unlocked now!</template>

    <form
      v-else
      novalidate
      class="w-full flex items-center justify-center gap-8"
      @submit.prevent="unlock"
    >
      <input
        v-model="password"
        type="password"
        placeholder="Enter Password"
        class="h-28 grow outlined rounded-full bg-transparent px-6 placeholder:text-heading text-2xl text-green placeholder:font-700 placeholder:text-green"
      />

      <button
        type="submit"
        aria-label="Submit"
        class="dot dot-outlined b-green text-green interactive hover:bg-green hover:text-black"
      >
        <i class="i-mdi-arrow-right scale-200" />
      </button>
    </form>
  </PageBase>
</template>
