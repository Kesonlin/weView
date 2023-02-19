<script setup lang="ts">
import './index.scss'
import { Ref, ref, watch, useSlots, computed } from 'vue'

export interface PageProps {
  total: number
  limit: number
  theme?: string
  showPage?: boolean
  showSkip?: boolean
  showCount?: boolean
  showLimit?: boolean
  showInput?: boolean
  showRefresh?: boolean
  pages?: number
  limits?: number[]
  modelValue?: number
}

const props = withDefaults(defineProps<PageProps>(), {
  limit: 10,
  pages: 10,
  modelValue: 1,
  theme: 'blue',
  showPage: false,
  showSkip: false,
  showCount: false,
  showLimit: true,
  showInput: false,
  showRefresh: false,
  limits: () => [10, 20, 30, 40, 50],
})

const slots = useSlots()

const maxPage = ref(0)
const limits = ref(props.limits)
const pages = computed(() => Math.floor(props.pages / 2))
const currentPage: Ref<number> = ref(props.modelValue)
const currentPageShow: Ref<number> = ref(currentPage.value)
const inlimit = ref(props.limit)

watch(
  () => props.limit,
  () => {
    inlimit.value = props.limit
  }
)

const totalPage = computed(() => {
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  maxPage.value = Math.ceil(props.total / inlimit.value)
  let r: number[] = []
  // 计算 star 页
  let start =
    maxPage.value <= props.pages
      ? 1
      : currentPage.value > pages.value
      ? maxPage.value - currentPage.value + 1 < pages.value
        ? currentPage.value -
          (pages.value +
            (pages.value - (maxPage.value - currentPage.value + 1)))
        : currentPage.value - pages.value
      : 1

  for (let i = start; ; i++) {
    if (r.length >= props.pages || i > maxPage.value) {
      break
    }
    r.push(i)
  }
  return r
})

const emit = defineEmits(['update:modelValue', 'update:limit', 'change'])

const prev = () => {
  if (currentPage.value === 1) {
    return
  }
  currentPage.value--
  emit('change', { current: currentPage.value, limit: inlimit.value })
}

const next = () => {
  if (currentPage.value === maxPage.value || maxPage.value === 0) {
    return
  }
  currentPage.value++
  emit('change', { current: currentPage.value, limit: inlimit.value })
}

const jump = (page: number) => {
  currentPage.value = page
  emit('change', { current: currentPage.value, limit: inlimit.value })
}

const jumpPage = () => {
  currentPage.value = currentPageShow.value
  emit('change', { current: currentPage.value, limit: inlimit.value })
}

const changelimit = () => {
  const maxPage = Math.ceil(props.total / inlimit.value)
  if (currentPage.value > maxPage) {
    currentPage.value = maxPage
  }
  emit('change', { current: currentPage.value, limit: inlimit.value })
}

const refresh = () => {
  emit('change', { current: currentPage.value, limit: inlimit.value })
}

watch(inlimit, () => {
  emit('update:limit', inlimit.value)
})

watch(currentPage, () => {
  const min = totalPage.value[0]
  const max = totalPage.value[totalPage.value.length - 1]
  if (currentPage.value > max) currentPage.value = max
  if (currentPage.value < min) currentPage.value = min
  currentPageShow.value = currentPage.value
  emit('update:modelValue', currentPage.value)
})

watch(
  () => props.modelValue,
  () => {
    currentPage.value = props.modelValue
    currentPageShow.value = currentPage.value
  }
)
</script>

<template>
  <div class="pager pager-default">
    <!-- 辅助标签, 为 total computed 逻辑正常执行而创建的临时标签 -->
    <div style="display: none">{{ totalPage }}</div>
    <span v-if="showCount" class="pager-count"
      >共 {{ total }} 条 {{ maxPage }} 页</span
    >
    <a
      href="javascript:;"
      class="pager-prev"
      :class="[
        currentPage === 1 ? 'disabled' : '',
        theme && currentPage !== 1 ? 'pager-a-' + theme : '',
      ]"
      @click="prev()"
    >
      <slot v-if="slots.prev" name="prev" />
      <template v-else>上一页</template>
    </a>
    <template v-if="showPage">
      <template v-for="index of totalPage" :key="index">
        <span v-if="index === currentPage" class="pager-curr">
          <em class="pager-em" :class="[theme ? 'bg-' + theme : '']" />
          <em>{{ index }}</em>
        </span>
        <a
          v-else
          href="javascript:;"
          @click="jump(index)"
          :class="[theme ? 'pager-a-' + theme : '']"
          >{{ index }}</a
        >
      </template>
    </template>
    <a
      href="javascript:;"
      class="pager-next"
      :class="[
        currentPage === maxPage || maxPage === 0 ? 'disabled' : '',
        theme && currentPage !== maxPage && maxPage !== 0
          ? 'pager-a-' + theme
          : '',
      ]"
      @click="next()"
    >
      <slot v-if="slots.next" name="next" />
      <template v-else>下一页</template>
    </a>
    <span v-if="showLimit" class="pager-limits">
      <select v-model="inlimit" @change="changelimit">
        <option v-for="val of limits" :key="val" :value="val">
          {{ val }} 条/页
        </option>
      </select>
    </span>
    <a
      v-if="showRefresh"
      href="javascript:;"
      @click="refresh"
      class="pager-refresh"
    >
      <i class="icon icon-refresh" />
    </a>
    <span v-if="props.showSkip" class="pager-skip">
      到第
      <input
        v-model="currentPageShow"
        @keypress.enter="jumpPage()"
        type="number"
        class="input input-number"
      />页
      <button
        type="button"
        class="pager-btn"
        @click="jumpPage()"
        :disabled="currentPageShow > maxPage || currentPageShow == currentPage"
      >
        确认
      </button>
    </span>
  </div>
</template>
