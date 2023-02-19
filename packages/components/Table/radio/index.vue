<script lang="ts">
import { computed, inject } from 'vue'
import { RadioSize } from './interface'
export default {
  name: 'WvRadio',
}
</script>

<script setup lang="ts">
import '../assets/font.scss'
import './index.scss'

export interface RadioProps {
  name?: string
  size?: RadioSize
  disabled?: boolean
  modelValue?: string | boolean | number
  value?: string | boolean | number
  label?: string
}

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'md',
})

const emit = defineEmits(['update:modelValue', 'change'])

const radioGroup: any = inject('radioGroup', {})

const isGroup = computed(() => {
  return radioGroup != undefined && radioGroup?.name === 'WvRadioGroup'
})

const naiveName = computed(() => {
  if (radioGroup.naiveName) {
    return radioGroup.naiveName
  } else {
    return props.name
  }
})

const isChecked = computed({
  get() {
    if (isGroup.value) {
      return radioGroup.modelValue.value === props.value
    } else {
      return props.modelValue === props.value
    }
  },
  set(val) {
    if (isGroup.value) {
      radioGroup.modelValue.value = props.value
    } else {
      if (val) {
        emit('change', props.value)
        emit('update:modelValue', props.value)
      }
    }
  },
})

const handleClick = function () {
  if (!ifDisabled.value) {
    isChecked.value = !isChecked.value
  }
}
const ifDisabled = computed(() => {
  if (props.disabled) {
    return true
  }
  // eslint-disable-next-line no-prototype-builtins
  if (radioGroup.hasOwnProperty('disabled') && radioGroup.disabled.value) {
    return true
  }
  return false
})
</script>

<template>
  <span class="wv-radio" :size="size">
    <input type="radio" :value="value" :name="naiveName" />
    <div
      class="wv-unselect wv-form-radio"
      :class="{
        'wv-form-radioed': isChecked,
        'wv-radio-disabled wv-disabled': ifDisabled,
      }"
      @click.stop="handleClick"
    >
      <i v-if="isChecked" class="wv-anim wv-icon wv-anim-scaleSpring"
        >&#xe643;</i
      >
      <i v-else class="wv-icon wv-form-radioed">&#xe63f;</i>
      <span>
        <slot>{{ label }}</slot>
      </span>
    </div>
  </span>
</template>
