# WDropdown 下拉菜单

## 基础用法

:::demo 

```vue
<template>
  <w-dropdown>
    <w-button>Dropdown</w-button>
    <template #dropdown>
      <w-dropdown-menu>
        <w-dropdown-item disabled>Option 1</w-dropdown-item>
        <w-dropdown-item divided>Option 2</w-dropdown-item>
        <w-dropdown-item>Option 3</w-dropdown-item>
      </w-dropdown-menu>
    </template>
  </w-dropdown>
</template>
```

:::

## 弹出位置

使用`placement`属性来定义下拉菜单相对触发器的定位，可以使用可以使用 `top` | `top-start` | `top-end` | `left` | `right` | `bottom` | `bottom-start` | `bottom-end` | `bottom`。
:::demo 

```vue
<template>
  <w-dropdown>
    <w-button>bottom</w-button>
    <template #dropdown>
      <w-dropdown-menu>
        <w-dropdown-item>Option 1</w-dropdown-item>
        <w-dropdown-item>Option 2</w-dropdown-item>
        <w-dropdown-item>Option 3</w-dropdown-item>
      </w-dropdown-menu>
    </template>
  </w-dropdown>
  <w-dropdown placement="top">
    <w-button>top</w-button>
    <template #dropdown>
      <w-dropdown-menu>
        <w-dropdown-item>Option 1</w-dropdown-item>
        <w-dropdown-item>Option 2</w-dropdown-item>
        <w-dropdown-item>Option 3</w-dropdown-item>
      </w-dropdown-menu>
    </template>
  </w-dropdown>
</template>
```

:::

## 触发方式

使用`trigger`属性来定义如何触发下拉菜单，可以使用 `hover` | `click` | `contextmenu`。
:::demo 

```vue
<template>
  <w-dropdown>
    <w-button>hover</w-button>
    <template #dropdown>
      <w-dropdown-menu>
        <w-dropdown-item>Option 1</w-dropdown-item>
        <w-dropdown-item>Option 2</w-dropdown-item>
        <w-dropdown-item>Option 3</w-dropdown-item>
      </w-dropdown-menu>
    </template>
  </w-dropdown>
  <w-dropdown trigger='click'>
    <w-button>click</w-button>
    <template #dropdown>
      <w-dropdown-menu>
        <w-dropdown-item>Option 1</w-dropdown-item>
        <w-dropdown-item>Option 2</w-dropdown-item>
        <w-dropdown-item>Option 3</w-dropdown-item>
      </w-dropdown-menu>
    </template>
  </w-dropdown>
  <w-dropdown trigger='contextmenu'>
    <w-button>contextmenu</w-button>
    <template #dropdown>
      <w-dropdown-menu>
        <w-dropdown-item>Option 1</w-dropdown-item>
        <w-dropdown-item>Option 2</w-dropdown-item>
        <w-dropdown-item>Option 3</w-dropdown-item>
      </w-dropdown-menu>
    </template>
  </w-dropdown>
</template>
```

:::


## 菜单隐藏方式

可以通过 `hide-on-click` 属性来配置。

下拉菜单默认在点击菜单项后会被隐藏，将 `hide-on-click` 属性设置为 `false` 可以关闭此功能。

:::demo 

```vue
<template>
  <w-dropdown :hide-on-click="false">
    <w-button>点击 Option 不会关闭</w-button>
    <template #dropdown>
      <w-dropdown-menu>
        <w-dropdown-item>Option 1</w-dropdown-item>
        <w-dropdown-item>Option 2</w-dropdown-item>
        <w-dropdown-item>Option 3</w-dropdown-item>
      </w-dropdown-menu>
    </template>
  </w-dropdown>
</template>
```

:::
## Dropdown Attributes

| 参数        | 说明                | 类型    | 可选值                                             | 默认值 |
| ----------- | ------------------ | ------- | -------------------------------------------------- | ------ |
| placement   | 弹出位置            | string  | top\|top-start\|top-end\|left\|right\|bottom\|bottom-start\|bottom-end | bottom      |
| trigger     | 触发方式            | string  | hover|click|contextmenu                              | —      |
| hideOnClick | 点击菜单项时关闭菜单 | boolean  | —                                                  | —      |
| showTimeout | 下拉菜单打开时延     | number | —                                                  | 0 |
| hideTimeout | 下拉菜单关闭时延     | number | —                                                  | 0 |

## Dropdown Item Attributes

| 参数        | 说明                | 类型    | 可选值                                             | 默认值 |
| ----------- | ------------------ | ------- | -------------------------------------------------- | ------ |
| disabled  | 禁用选项          | boolean   |  —    | false |
| divided   | 选项前加入分割线   | boolean   | —     | false |

