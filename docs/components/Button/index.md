# WButton 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 WButton 的样式。

```vue
<template>
  <div class="row">
    <WButton>默认按钮</WButton>
    <WButton type="primary">主要按钮</WButton>
    <WButton type="success">成功按钮</WButton>
    <WButton type="info">信息按钮</WButton>
    <WButton type="warning">警告按钮</WButton>
    <WButton type="danger">危险按钮</WButton>
  </div>
  <div class="row">
    <WButton plain>朴素按钮</WButton>
    <WButton plain type="primary">主要按钮</WButton>
    <WButton plain type="success">成功按钮</WButton>
    <WButton plain type="info">信息按钮</WButton>
    <WButton plain type="warning">警告按钮</WButton>
    <WButton plain type="danger">危险按钮</WButton>
  </div>
  <div class="row">
    <WButton round>圆角按钮</WButton>
    <WButton round type="primary">主要按钮</WButton>
    <WButton round type="success">成功按钮</WButton>
    <WButton round type="info">信息按钮</WButton>
    <WButton round type="warning">警告按钮</WButton>
    <WButton round type="danger">危险按钮</WButton>
  </div>
  <div class="row">
    <WButton circle icon="search"></WButton>
    <WButton circle type="primary" icon="edit"></WButton>
    <WButton circle type="success" icon="check"></WButton>
    <WButton circle type="info" icon="message"></WButton>
    <WButton circle type="warning" icon="jinggao"></WButton>
    <WButton circle type="danger" icon="delete"></WButton>
  </div>
</template>
<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
}
</style>
```

:::

## 禁用状态

按钮不可用状态。

:::demo 使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```vue
<template>
  <div class="row">
    <WButton disabled>默认按钮</WButton>
    <WButton disabled type="primary">主要按钮</WButton>
    <WButton disabled type="success">成功按钮</WButton>
    <WButton disabled type="info">信息按钮</WButton>
    <WButton disabled type="warning">警告按钮</WButton>
    <WButton disabled type="danger">危险按钮</WButton>
  </div>
  <div class="row">
    <WButton disabled plain>默认按钮</WButton>
    <WButton disabled plain type="primary">主要按钮</WButton>
    <WButton disabled plain type="success">成功按钮</WButton>
    <WButton disabled plain type="info">信息按钮</WButton>
    <WButton disabled plain type="warning">警告按钮</WButton>
    <WButton disabled plain type="danger">危险按钮</WButton>
  </div>
</template>
```

:::

## 文字按钮

没有边框和背景色的按钮。

::: demo

```vue
<WButton type="text">文字按钮</WButton>
<WButton type="text" disabled>文字按钮</WButton>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <div class="row">
    <WButton circle icon="search"></WButton>
    <WButton circle type="primary" icon="edit"></WButton>
    <WButton circle type="success" icon="check"></WButton>
    <WButton circle type="info" icon="message"></WButton>
    <WButton circle type="warning" icon="jinggao"></WButton>
    <WButton circle type="danger" icon="delete"></WButton>
  </div>
</template>
```

:::

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

::: demo 要设置为 `loading` 状态，只要设置`loading`属性为`true`即可。

```vue
<template>
  <div class="row">
    <WButton disabled loading type="primary">加载中</WButton>
  </div>
</template>
```

:::

## 不同尺寸

WButton 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```vue
<template>
  <div class="row">
    <WButton>默认按钮</WButton>
    <WButton Size="medium">中等按钮</WButton>
    <WButton Size="small">小型按钮</WButton>
    <WButton Size="mini">超小按钮</WButton>
  </div>
  <div class="row">
    <WButton round>默认按钮</WButton>
    <WButton round Size="medium">中等按钮</WButton>
    <WButton round Size="small">小型按钮</WButton>
    <WButton round Size="mini">超小按钮</WButton>
  </div>
</template>
```

:::

## Attributes

| 参数     | 说明           | 类型    | 可选值                                             | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type     | 类型           | string  | primary / success / warning / danger / info / text | —      |
| size     | 尺寸           | string  | medium / small / mini                              | —      |
| icon     | 图标类名       | string  | —                                                  | —      |
| plain    | 是否朴素按钮   | boolean | —                                                  | false  |
| disabled | 是否禁用状态   | boolean | —                                                  | false  |
| round    | 是否圆角按钮   | boolean | —                                                  | false  |
| circle   | 是否圆形按钮   | boolean | —                                                  | false  |
| loading  | 是否加载中状态 | boolean | —                                                  | false  |
