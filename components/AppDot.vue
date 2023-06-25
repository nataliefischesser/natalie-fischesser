<script setup lang="ts">
defineProps<{
  iconClass?: string;
  iconOnly?: boolean;
  outlined?: boolean;
}>();
</script>

<template>
  <span
    class="dot"
    :class="{ ['bg-transparent']: iconOnly, ['dot-outlined']: outlined }"
  >
    <i
      :class="{
        [iconClass ?? '']: iconClass,
        ['scale-275']: iconOnly,
        ['text-black']: !outlined && !iconOnly,
      }"
    />
  </span>
</template>
