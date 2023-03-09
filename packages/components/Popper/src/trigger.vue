<template>
  <!-- v-bind + inheritAttrs 是为了使事件处理函数绑定到元素上 -->
  <div v-if="!targetTriggering" ref="triggerElem">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { inject, onMounted, ref, unref, useAttrs, watch } from 'vue'
import { unrefElement } from '@vueuse/core';
import { popperTriggerProps } from './trigger'
import { POPPER_INJECTION_KEY } from './tokens'
const triggerElem = ref()
const props = defineProps(popperTriggerProps)
const { triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!
onMounted(() => {
  triggerRef.value = unref(triggerElem)

  // 将父组件的 triggerRef 属性的值与 targetRef 的值绑定
  watch(
    () => props.targetRef,
    (newTarget) => {
      if (newTarget) {
        triggerRef.value = unrefElement(newTarget as HTMLElement)
      }
    },
    {
      immediate: true,
    }
  )
})

defineExpose({
  /** @description 触发器元素 */
  triggerRef: props.triggerRef,
})
</script>