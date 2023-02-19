<script lang="ts">
export default {
  name: 'WvEmpty',
}
</script>

<script setup lang="ts">
import './index.scss'
import { useSlots, withDefaults, computed } from 'vue'

export interface EmptyProps {
  description?: string
  image?: string
}

const props = withDefaults(defineProps<EmptyProps>(), {})

const slots = useSlots()

const description = computed(() =>
  props.description ? props.description : '无数据'
)
</script>

<template>
  <div class="wv-empty">
    <div class="wv-empty-image">
      <slot v-if="slots.image" name="image" />
      <img v-else class="wv-empty-image-default" src="./index.svg" />
    </div>
    <div class="wv-empty-description">{{ description }}</div>
    <div class="wv-empty-extra">
      <slot name="extra" />
    </div>
  </div>
</template>
