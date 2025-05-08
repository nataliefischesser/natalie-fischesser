<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <BoardPiece>
    <div
      v-bind="$attrs"
      class="rounded-full flex h-20em w-20em items-center justify-center"
    />
  </BoardPiece>
</template>
