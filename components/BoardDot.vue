<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <BoardPiece>
    <div
      v-bind="$attrs"
      class="h-20em w-20em flex items-center justify-center rounded-full"
    />
  </BoardPiece>
</template>
