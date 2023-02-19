# Pagination 分页基础使用

## 介绍

:::tip

---

### 功能

提供极致的分页逻辑，既可轻松胜任异步分页，也可作为页面刷新式分页。

### 属性

| 属性        | 描述                 | 默认值             |
| ----------- | -------------------- | ------------------ |
| v-model     | 当前页               | --                 |
| limit       | 每页数量             | --                 |
| total       | 总条数               | --                 |
| showCount   | 显示总数             | `false`            |
| showPage    | 显示每页             | `false`            |
| showLimit   | 显示每页数量         | `false`            |
| showRefresh | 显示刷新按钮         | `false`            |
| showSkip    | 显示跳转             | `false`            |
| pages       | 显示切页按钮数量     | `10`               |
| limits      | 切换每页数量的选择项 | `[10,20,30,40,50]` |
| theme       | 主题色               | `blue`             |

### 事件

| 事件   | 描述         | 参数                                     |
| ------ | ------------ | ---------------------------------------- |
| jump   | 切换回调     | `{ current: 当前页面 } `                 |
| limit  | 每页数量变化 | 变化后的值                               |
| change | 分页事件     | `{ current: 当前页码, limit: 每页数量 }` |

### 插槽

| 插槽 | 描述   | 默认值 |
| ---- | ------ | ------ |
| prev | 上一页 | 上一页 |
| next | 下一页 | 下一页 |

:::

## 使用

### 基础使用

:::demo 基础使用

```vue
<template>
  <Pagination
    v-model="currentPage"
    :limit="limit"
    :total="total"
    :show-page="true"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit = ref(20)
    const total = ref(100)
    const currentPage = ref(2)

    return {
      limit,
      total,
      currentPage,
    }
  },
}
</script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
```

:::

### 简洁模式

:::demo 简洁模式

```vue
<template>
  <Pagination :limit="limit1" v-model="current1" :total="total1"></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit1 = ref(10)
    const total1 = ref(100)
    const current1 = ref(1)

    return {
      limit1,
      total1,
      current1,
    }
  },
}
</script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
```

:::

### 设置主题

::: demo 设置主题

```vue
<template>
  <Pagination
    :limit="limit2"
    :total="total2"
    :show-page="true"
    theme="orange"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit2 = ref(20)
    const total2 = ref(100)

    return {
      limit2,
      total2,
    }
  },
}
</script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
```

:::

### 分页容量

::: demo 分页容量

```vue
<template>
  <Pagination
    :limit="limit3"
    :total="total3"
    showCount
    showPage
    :limits="limits3"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit3 = ref(5)
    const total3 = ref(125)
    const limits3 = ref([5, 10, 50, 100, 200])

    return {
      limit3,
      total3,
      limits3,
    }
  },
}
</script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
```

:::

### 回调事件

::: demo

```vue
<template>
  <Pagination
    :limit="limit4"
    :total="total4"
    @change="change4"
    :show-page="true"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit4 = ref(20)
    const total4 = ref(100)
    const change4 = ({ current, limit }) => {
      alert('current:' + current + ' limit:' + limit)
    }

    return {
      limit4,
      total4,
      change4,
    }
  },
}
</script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
```

:::

### 完整分页

::: demo

```vue
<template>
  <button class="btn" @click="changeCurrent5">
    update model {{ current5 }}
  </button>
  <button class="btn" @click="changeLimit5">update limit {{ limit5 }}</button>
  <Pagination
    v-model="current5"
    v-model:limit="limit5"
    :pages="pages5"
    :total="total5"
    :show-count="true"
    :show-page="true"
    :show-limit="true"
    :show-refresh="true"
    :showSkip="true"
    @change="change5"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit5 = ref(10)
    const total5 = ref(99)
    const pages5 = ref(7)
    const current5 = ref(1)
    const changeCurrent5 = () => {
      current5.value = 2
    }
    const changeLimit5 = () => {
      limit5.value = 20
    }
    const change5 = ({ current, limit }) => {
      console.log('current:' + current + ' limit:' + limit)
    }
    return {
      limit5,
      total5,
      pages5,
      current5,
      changeCurrent5,
      changeLimit5,
      change5,
    }
  },
}
</script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
.btn {
  margin-left: 1em;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.2em;
  background: orangered;
  color: white;
}
</style>
```

:::
