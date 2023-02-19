# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础用法

使用单一分栏创建基础的栅格布局。

:::demo 通过 `WRow` 和 `WCol` 组件，并通过 `WCol` 组件的 `span` 属性我们就可以自由地组合布局。

```vue
<template>
  <WRow>
    <WCol :span="24">
      <div class="grid-content bg-purple-dark"></div>
    </WCol>
  </WRow>
  <WRow>
    <WCol :span="12">
      <div class="grid-content bg-purple"></div>
    </WCol>
    <WCol :span="12">
      <div class="grid-content bg-purple-light"></div>
    </WCol>
  </WRow>
  <WRow>
    <WCol :span="8">
      <div class="grid-content bg-purple"></div>
    </WCol>
    <WCol :span="8">
      <div class="grid-content bg-purple-light"></div>
    </WCol>
    <WCol :span="8">
      <div class="grid-content bg-purple"></div>
    </WCol>
  </WRow>
  <WRow>
    <WCol :span="6">
      <div class="grid-content bg-purple"></div>
    </WCol>
    <WCol :span="6">
      <div class="grid-content bg-purple-light"></div>
    </WCol>
    <WCol :span="6">
      <div class="grid-content bg-purple"></div>
    </WCol>
    <WCol :span="6">
      <div class="grid-content bg-purple-light"></div>
    </WCol>
  </WRow>
  <WRow>
    <WCol :span="4">
      <div class="grid-content bg-purple"></div>
    </WCol>
    <WCol :span="4">
      <div class="grid-content bg-purple-light"></div>
    </WCol>
    <WCol :span="4">
      <div class="grid-content bg-purple"></div>
    </WCol>
    <WCol :span="4">
      <div class="grid-content bg-purple-light"></div>
    </WCol>
    <WCol :span="4">
      <div class="grid-content bg-purple"></div>
    </WCol>
    <WCol :span="4">
      <div class="grid-content bg-purple-light"></div>
    </WCol>
  </WRow>
</template>
<style lang="scss" scoped>
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

:::

## Attributes

| 参数 | 说明           | 类型   | 可选值 | 默认值 |
| ---- | -------------- | ------ | ------ | ------ |
| span | 栅格占据的列数 | number | —      | 24     |
