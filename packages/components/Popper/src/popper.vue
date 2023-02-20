<template>
  <slot />
</template>

<script lang="ts" setup>
import { IcePopperInjectionContext, POPPER_INJECTION_KEY } from './tokens';
import { ref, provide } from 'vue';
import { Instance as PopperInstance } from '@popperjs/core';

const triggerRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const popperInstanceRef = ref<PopperInstance>()


const popperProvides = {
  triggerRef,
  referenceRef,
  contentRef,
  popperInstanceRef
} as IcePopperInjectionContext

defineExpose(popperProvides)
provide(POPPER_INJECTION_KEY, popperProvides)
</script>