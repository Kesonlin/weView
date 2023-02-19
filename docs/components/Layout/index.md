# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础用法

使用单一分栏创建基础的栅格布局。

:::demo 通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。
```vue
<template>
<Row>
    <Col :span="24">
    <div class="grid-content bg-purple-dark"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="12">
    <div class="grid-content bg-purple"></div>
    </Col>
    <Col :span="12">
    <div class="grid-content bg-purple-light"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="8">
    <div class="grid-content bg-purple"></div>
    </Col>
    <Col :span="8">
    <div class="grid-content bg-purple-light"></div>
    </Col>
    <Col :span="8">
    <div class="grid-content bg-purple"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="6">
    <div class="grid-content bg-purple"></div>
    </Col>
    <Col :span="6">
    <div class="grid-content bg-purple-light"></div>
    </Col>
    <Col :span="6">
    <div class="grid-content bg-purple"></div>
    </Col>
    <Col :span="6">
    <div class="grid-content bg-purple-light"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="4">
    <div class="grid-content bg-purple"></div>
    </Col>
    <Col :span="4">
    <div class="grid-content bg-purple-light"></div>
    </Col>
    <Col :span="4">
    <div class="grid-content bg-purple"></div>
    </Col>
    <Col :span="4">
    <div class="grid-content bg-purple-light"></div>
    </Col>
    <Col :span="4">
    <div class="grid-content bg-purple"></div>
    </Col>
    <Col :span="4">
    <div class="grid-content bg-purple-light"></div>
    </Col>
  </Row>
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
| 参数      | 说明          | 类型         | 可选值   | 默认值 |
| ----------| -----------   | -----------  |  ----------- | -----------|
| span      | 栅格占据的列数          | number       | — | 24 |