# Icon 图标


## 介绍 
   基于Iconfont class的图标集，可以通过 Icon 组件使用
## 基础样式

通过 name 属性指定需要的图标，weView内置了一套图标库，可直接传入对应的名称来使用。

:::demo 
```vue
<template>
 <w-icon name="view"></w-icon>
</template>
```
:::

## 图标大小
通过size属性来设置图标的大小，可指定任意css单位，若没有指定单位则默认为px。 

:::demo 
```vue
<template>
 <w-icon name="search" size="20"></w-icon>
 &emsp;&emsp;
 <w-icon name="search" size="2rem"></w-icon>
</template>
```
:::


## 图标集合
:::demo 
```vue
<template>
    <ul class="dib-box">
        <li v-for="item in list">
           <div class="dib">
             <w-icon :name="item" size="3rem" hover-color="#8648D3"></w-icon>
             <p class="icon-name">{{ item }}</p>
           </div>
        </li>
    </ul>
</template>
<script>
export default {
    setup() {
        const list =['view', 'view-off', 'message', 'message-unread',
        'record', 'time', 'search', 'edit', 'link', 'share', 'setting', 'upload',
        'download', 'play', 'region', 'discount', 'notification', 'notification-off',
        'image', 'email', 'list', 'refresh', 'check', 'close', 'forbidden', 'info',
        'help', 'caution', 'like', 'star', 'arrow-up', 'arrow-left', 'arrow-down',
        'arrow-right', 'page-first', 'down-to-bottom', 'up-to-top', 'page-last'
        ];
        return {
            list,
        }
    }
}
</script>
<style>
@import './style.css';
</style>
```
:::

## 属性
| 属性 | 类型 | 默认值 | 含义 | 
| :-: | :-:  | :-: | :-: | 
|name|string | - | 图标名称 | 
|size|string|1rem|图标大小 |

## 事件
| 事件名 | 说明 |回调参数 | 
| :-: | :-:  | :-: | 
| click | 点击图标时触发 | event: MouseEvent |


