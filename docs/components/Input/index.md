# Input 输入框



   通过键盘输入内容
## 基础样式
:::demo 
```vue
<template>
  <w-input v-model="inputText1" placeholder="请输入..." />&emsp;输入的内容：{{ inputText1 }}
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
:::demo 
```vue
<template>
  <w-input v-model="inputText1" placeholder="请输入..." disabled/>
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

## 可清空
:::demo 
```vue
<template>
 <w-input v-model="inputText2" placeholder="请输入..." clearable/>
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
:::demo 
```vue
<template>
  <form>
    <w-input v-model="inputText3" placeholder="请输入密码" show-password/>
  </form>
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
:::demo 
```vue
<template>
   <w-input v-model="inputText4" placeholder="请输入..." :maxlength="10"/>
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
## 设置尺寸
:::demo 使用width和fontSize设置输入框宽度和字体大小，单位可以是任意CSS单位，默认值分别为 180px 和 12px
```vue
<template>
  <w-input v-model="inputText" placeholder="请输入..." width="14rem" font-size="16px"/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputText = ref('');

    return {
      inputText
    }
  },
}
</script>

```
:::

## 边框颜色激活
:::demo 
```vue
<template>
  <w-input v-model="inputText" placeholder="请输入..." activeColor="#490ca5"/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputText = ref('');

    return {
      inputText
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
|width|string| - | 180px | 输入框width属性 |
|font-size|string| - | 12px | 字体大小 |
|active-color|string(16进制颜色)| - | #000 | 聚焦时的边框颜色 |



