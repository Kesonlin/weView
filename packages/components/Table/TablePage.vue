<script lang="ts">
export default {
  name: 'TablePage',
}
</script>

<script lang="ts" setup>
import './assets/font.scss'
import WvPage from '../Pagination/index'
import { computed, WritableComputedRef } from 'vue'

export interface TablePageProps {
  showPage?: boolean
  showSkip?: boolean
  showLimit?: boolean
  showCount?: boolean
  showRefresh?: boolean
  current: number
  limits?: number[]
  pages?: number
  total: number
  limit: number
  theme?: string
}

const props = withDefaults(defineProps<TablePageProps>(), {
  showPage: true,
  showLimit: true,
  showSkip: true,
})

const emit = defineEmits(['update:current', 'update:limit', 'change'])

const current: WritableComputedRef<number> = computed({
  get() {
    return props.current
  },
  set(val) {
    emit('update:current', val)
  },
})

const limit: WritableComputedRef<number> = computed({
  get() {
    return props.limit
  },
  set(val) {
    emit('update:limit', val)
  },
})

const change = (pageData: any) => {
  emit('change', pageData)
}
</script>

<template>
  <wv-page
    :total="total"
    :show-page="showPage"
    :show-skip="showSkip"
    :show-limit="showLimit"
    :show-count="showCount"
    :show-refresh="showRefresh"
    :limits="limits"
    :theme="theme"
    :pages="pages"
    v-model="current"
    v-model:limit="limit"
    @change="change"
  >
    <template #prev>
      <i class="wv-icon wv-icon-left" />
    </template>
    <template #next>
      <i class="wv-icon wv-icon-right" />
    </template>
  </wv-page>
</template>
