<template>
  <div
    ref="popperContentRef"
    :style="contentStyle"
    :class="contentClass"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Measurable, POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './tokens';
import { useZIndex } from './use-z-index';
import { WatchStopHandle, computed, inject, onMounted, provide, ref, unref, watch } from 'vue';
import { createPopper } from '@popperjs/core'
import { popperContentProps, popperContentEmits, buildPopperOptions } from './content';
import { MaybeRef, unrefElement } from '@vueuse/core';

const props = defineProps(popperContentProps)
const emit = defineEmits(popperContentEmits)

const {
  popperInstanceRef,
  contentRef,
  triggerRef
} = inject(
  POPPER_INJECTION_KEY,
  undefined
)!

const { nextZIndex } = useZIndex()

const popperContentRef = ref<HTMLElement>()
// const focusStartRef = ref<'container' | 'first' | HTMLElement>('first')

const arrowRef = ref<HTMLElement>()
const arrowOffset = ref<number>()
provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowRef,
  arrowOffset
})

// TODO: form 上下文，向下提供 formItem 的属性

const contentZIndex = ref<number>(props.zIndex || nextZIndex())
// const trapped = ref<boolean>(false)

// 触发器元素
// 优先使用传入 props.referenceElem 的值。
// 其次使用父组件注入的值。
const computedReference = computed(
  () => unrefElement(props.referenceElem as MaybeRef<HTMLElement>) || unref(triggerRef)
)

// styles
const contentStyle = computed(
  () => [{ zIndex: unref(contentZIndex), display: 'inline-flex' }, props.popperStyle] as any
)

// class
const contentClass = computed(() => [
  props.popperClass
])


interface CreatePopperInstanceParams {
  referenceElem: Measurable
  popperContentElem: HTMLElement
  arrowElem: HTMLElement | undefined
}
/**
 * 创建 popper 实例
 * @param referenceElem 触发器
 * @param popperContentElem popper 内容
 * @parem arrowElem 箭头元素
 */
const createPopperInstance = ({
  referenceElem,
  popperContentElem,
  arrowElem,
}: CreatePopperInstanceParams) => {
  const options = buildPopperOptions(props, {
    arrowElem,
    arrowOffset: unref(arrowOffset)
  })

  return createPopper(referenceElem, popperContentElem, options)
}



const updatePopper = () => {
  unref(popperInstanceRef)?.update()
}

/**
 * 通过修改 eventListeners 修饰符的 enabled 使能，修改 popper 的可见性
 */
const togglePopperAlive = () => {
  const monitorable = { name: 'eventListeners', enabled: props.visible }

  unref(popperInstanceRef)?.setOptions((options) => ({
    ...options,
    modifiers: [...(options.modifiers || []), monitorable],
  }))

  updatePopper()

  // TODO: toggle trapped.value
}

onMounted(() => {
  let updateHandle: WatchStopHandle
  watch(
    computedReference,
    (referenceElem) => {
      updateHandle?.()
      // 销毁旧的 popper 实例
      const popperInstance = unref(popperInstanceRef)
      popperInstance?.destroy()
      // 如果存在新的监听器元素，则创建新的 popper 实例
      if(referenceElem) {
        // ?
        const popperContentElem = unref(popperContentRef)!
        contentRef.value = popperContentElem

        popperInstanceRef.value = createPopperInstance({
          referenceElem,
          popperContentElem,
          arrowElem: unref(arrowRef),
        })

        // watch 函数的返回值为一个停止侦听器的函数
        // 调用即可停止侦听
        // 侦听新的触发器元素的坐标属性，发生改变时通过 updatePopper 更新 popper
        updateHandle = watch(
          () => referenceElem.getBoundingClientRect(),
          () => updatePopper(),
          {
            immediate: true,
          }
        )
      }
      // 否则，将 popperInstance 置空
      else {
        popperInstanceRef.value = undefined
      }
    }, {
      // 立即执行一次副作用函数，
      // 为第一次计算得到的 computedReference 添加监听
      immediate: true
    }
  )

  // 监视 trigger 的 HTML Attribute
  // watch(
  //   () => props.triggerTargetElem,
  //   (triggerTargetElem, prevTriggerTargetElem) => {
  //     const elem = unref(triggerTargetElem || popperContentRef.value)
  //     const prevElem = unref(prevTriggerTargetElem || popperContentRef.value)
  //   },
  //   { immediate: true }
  // )

  // 根据 props.visible 控制 popper 的显示
  watch(() => props.visible, togglePopperAlive, { immediate: true })

  // 监视 buildPopperOptions 的构建结果，在结果 option 对象发生变更时
  // 更新 popper 实例的 option
  watch(
    () =>
      buildPopperOptions(props, {
        arrowElem: unref(arrowRef),
        arrowOffset: unref(arrowOffset),
      }),
    (option) => popperInstanceRef.value?.setOptions(option)
  )
})


defineExpose({
  popperContentRef,
  popperInstanceRef,
  updatePopper,
  contentStyle,
})
</script>
