// @unocss-include

import type { TransitionProps } from 'vue';

export const fadeTransition = {
  enterFromClass: 'opacity-0',
  enterActiveClass: 'duration-100 ease-out',
  enterToClass: 'opacity-100',
  leaveFromClass: 'opacity-100',
  leaveActiveClass: 'duration-100 ease-in',
  leaveToClass: 'opacity-0',
  mode: 'out-in',
} as const satisfies TransitionProps;

export const scaleFadeTransition = {
  enterFromClass: 'opacity-0 scale-98',
  enterActiveClass: 'duration-100 ease-out',
  enterToClass: 'opacity-100 scale-100',
  leaveFromClass: 'opacity-100 scale-100',
  leaveActiveClass: 'duration-100 ease-in',
  leaveToClass: 'opacity-0 scale-98',
  mode: 'out-in',
} as const satisfies TransitionProps;

export const slideYFadeTransition = {
  enterFromClass: 'opacity-0 translate-y--4',
  enterActiveClass: 'duration-100 ease-out',
  enterToClass: 'opacity-100 translate-y-0',
  leaveFromClass: 'opacity-100 translate-y-0',
  leaveActiveClass: 'duration-100 ease-in',
  leaveToClass: 'opacity-0 translate-y--4',
  mode: 'out-in',
} as const satisfies TransitionProps;
