<script setup lang="ts">
import type { MotionVariants, Transition } from "@vueuse/motion";

const randomDelay = Math.random() * 150;

const transition = {
  type: "spring",
  stiffness: 150,
  damping: 30,
  mass: 0.25,
  delay: randomDelay,
} satisfies Transition;

const variants = {
  initial: {
    opacity: 0,
    scale: 0.7,
    transition,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition,
  },
} satisfies MotionVariants<string>;
</script>

<template>
  <Motion :variants>
    <slot />
  </Motion>
</template>
