<script setup lang="ts">
defineProps<{
  iconClass?: string;
  iconOnly?: boolean;
  outlined?: boolean;
}>();
</script>

<template>
  <div
    class="inline-block aspect-square w-28 flex items-center justify-center b-current rounded-full bg-current"
    :class="{
      ['bg-transparent']: outlined || iconOnly,
      ['b-12']: outlined,
    }"
  >
    <i
      class="text-5em"
      :class="{
        [iconClass ?? '']: iconClass,
        ['scale-170']: iconOnly,
        ['text-black']: !outlined && !iconOnly,
      }"
    />
  </div>
</template>
