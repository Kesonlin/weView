# DateTimePicker 日期选择器

:::demo DateTimePicker 日期选择器

```vue
<template>
  <DateTimePicker v-model="DateTimeValue" @update:model-value="updateDate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
let DateTimeValue = ref('')
const updateDate = (val) => {
  DateTimeValue.value = val
}
</script>
<style lang="scss" scoped></style>
```

## 介绍

:::tip

---

#### 功能

日期时间选择器来自日期选择器和时间选择器的组合,用于在同一个选择器里选择日期和时间

---

#### 属性

设置 v-model 即可获取到选择器中所选择的值

---

#### 使用介绍

##### 日期选择器

日期选择器默认显示当前日期。选择完日期后，input 内数值回变化，如果点击确定即可成功选择，点击取消则返回选择前的日期。

##### 时间选择器

右上角框为时间选择器。时间选择器默认显示当前时间。选择完时间后点击确定即可成功选择；若点击取消，则时间变回选择前的时间。
:::
