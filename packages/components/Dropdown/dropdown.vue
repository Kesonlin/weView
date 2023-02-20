<template>
  <w-popper>
    <w-popper-trigger
      :target-triggering="false"
      :open="open"
      class="trigger"
      @click="onClick"
      @contextmenu="onContextmenu"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
    >
      <slot />
    </w-popper-trigger>
    <teleport to="body">
      <transition
        name="fade-in-linear"
        @after-enter="onAfterEnter"
        @before-enter="onBeforeEnter"
      >
        <w-popper-content
          v-show="shouldShow"
          ref="contentRef"
          :role="role"
          :placement="placement"
          :fallback-placement="['bottom', 'top']"
          :gpu-acceleration="false"
          :trigger="trigger"
          :teleported="true"
          :visible="shouldShow"
          :reference-elem="referenceElemRef"
          @mouseenter="onContentEnter"
          @mouseleave="onContentLeave"
          @close="onClose"
        >
          <section>
            <slot name="dropdown" />
          </section>
        </w-popper-content>
      </transition>
    </teleport>
  </w-popper>
</template>
<script setup lang="ts">
import { dropdownProps, dropdownEmits } from './dropdown'
import { WPopper, WPopperContent, WPopperTrigger } from '../Popper'
import { computed, provide, ref, toRef, unref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps(dropdownProps)
const emits = defineEmits(dropdownEmits)

const contentRef = ref<InstanceType<typeof WPopperContent> | null>(null)
const referenceElemRef = ref()

// trigger
const open = ref(false)
const handleOpen = () => {
  // 已经是展示的状态
  if(open.value === true) return
  open.value = true
}
const handleClose = () => {
  if(open.value === false) return
  open.value = false
}

const onOpen = () => {
  const { showTimeout = 0 } = props
  setTimeout(handleOpen, showTimeout)
}
const onClose = () => {
  const { hideTimeout = 0 } = props
  setTimeout(handleClose, hideTimeout)
}

const onToggle = () => {
  console.log('onToggle', unref(open))
  if(unref(open)) onClose()
  else onOpen()
}

// props.trigger 与 trigger ref 的值保持同步
const trigger = toRef(props, 'trigger')

const onMouseenter = () => {
  if(unref(trigger) === 'hover') return onOpen()
}
const onMouseleave = () => {
  if(unref(trigger) === 'hover') return onClose()
}
const onClick = (evt: MouseEvent) => {
  if(unref(trigger) === 'click') {
    // left click
    if(evt.button === 0)  {
      console.log('onClick')
      return onToggle()
    }
  }
}
const onContextmenu = (evt: Event) => {
  if(unref(trigger) === 'contextmenu') {
    evt.preventDefault()
    return onToggle()
  }
}

console.log('open', unref(open))
// content
const shouldShow = computed(() => unref(open))
const onContentEnter = () => {
  if(unref(trigger) === 'hover') onOpen()
}
const onContentLeave = () => {
  if(unref(trigger) === 'hover') onClose()
}

const onBeforeEnter = () => {
  contentRef.value?.updatePopper?.()
}

let stopHandler: ReturnType<typeof onClickOutside>
const onAfterEnter = () => {
  stopHandler = onClickOutside(
    computed(() => contentRef.value?.popperContentRef),
    () => {
      console.log('onClickOutside', unref(open))
      const _trigger = unref(trigger)
      if(_trigger !== 'hover') onClose()
    }
  )
}


// popper 关闭后，停止监听点击外侧的监听器
watch(
  () => unref(open),
  (val) => {
    if(!val) {
      stopHandler?.()
    }
  }
)

provide('iceDropdown', {
  onClose,
  hideOnClick: toRef(props, 'hideOnClick')
})


</script>

<style lang="scss">
.trigger {
  display:inline-flex;
}

.fade-in-linear-enter-from,
.fade-in-linear-leave-to {
  opacity: 0;
}

.fade-in-linear-enter-active,
.fade-in-linear-leave-active {
  transition: opacity 0.2s linear;
}

</style>