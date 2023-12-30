<script setup lang="ts">
import {
  useMotion,
  type MotionVariants,
  type Transition,
} from '@vueuse/motion';

const target = ref<HTMLElement>();

const randomDelay = Math.random() * 150;

const transition = {
  type: 'spring',
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
} satisfies MotionVariants;

useMotion(target, variants);
</script>

<template>
  <div ref="target">
    <slot />
  </div>
</template>
