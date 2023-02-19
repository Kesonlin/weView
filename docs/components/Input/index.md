# Input 输入框


## 介绍 
   通过键盘输入内容
## 基础样式
:::demo 基础使用
```vue
<template>
  <Input v-model="inputText1" placeholder="请输入..." />&emsp;输入的内容：{{ inputText1 }}
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputText1 = ref('');

    return {
      inputText1
    }
  },
}
</script>
```
:::

## 禁用状态
:::demo 基础使用
```vue
<template>
  <Input placeholder="请输入..." disabled/>
</template>
```
:::

## 可清空
:::demo 基础使用
```vue
<template>
 <Input v-model="inputText2" placeholder="请输入..." clearable/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputText2 = ref('');

    return {
      inputText2
    }
  },
}
</script>
```
:::

## 密码框
:::demo 基础使用
```vue
<template>
  <Input v-model="inputText3" placeholder="请输入密码" show-password/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputText3 = ref('');

    return {
      inputText3
    }
  },
}
</script>

```
:::

## 输入长度限制
:::demo 基础使用
```vue
<template>
   <Input v-model="inputText4" placeholder="请输入..." :maxlength="10"/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputText4 = ref('');

    return {
      inputText4
    }
  },
}
</script>

```
:::

## 属性
| 属性 | 类型| 可选值 | 默认值 | 含义 | 
| :-: | :-: | :-: | :-: | :-: | 
|modelValue|string|- | '' | 绑定值 | 
|placeholder|string|-| '请输入...' | 输入框占位文本 |
|disabled|boolean|true\false|false |禁用|
|clearable|boolean|true\false|false | 是否可清空 |
|show-password|boolean|true\false|false|是否显示切换密码图标|
|maxlength|number| - | - | 最大输入长度 |

