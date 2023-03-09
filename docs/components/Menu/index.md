# Menu导航菜单

   为网站提供导航功能的菜单栏，可内嵌子菜单
## 顶部模式 
在菜单中通过submenu组件可以生成子菜单。
:::demo 
```vue
<template>
    <div class="wrap">
      <w-menu defaultTo="/html" mode="horizontal" @select="handlerSelect">
        <w-menu-item to="/html">HTML</w-menu-item>
        <w-menu-item to="/css">CSS</w-menu-item>
        <w-menu-item to="/javascript">JavaScript</w-menu-item>
        <w-sub-menu to="Vue系列">
            <template #title>Vue系列</template>
             <w-sub-menu to="Vue">
                <template #title>Vue框架</template>
                <w-menu-item to="/vue2">Vue2</w-menu-item>
                <w-menu-item to="/vue3">Vue3</w-menu-item>
            </w-sub-menu>
             <w-menu-item to="/vuex">Vuex</w-menu-item>
                <w-menu-item to="/vue-router">Vue Router</w-menu-item>
             <w-sub-menu to="unit-test">
                <template #title>单元测试</template>
                <w-menu-item to="/vue-test-utils">Vue Test Utils</w-menu-item>
                <w-menu-item to="/vue-testing-library">Vue Testing Library</w-menu-item>
            </w-sub-menu>
        </w-sub-menu>
        <w-menu-item disabled>消息</w-menu-item>
        <w-menu-item to="/typescript">TypeScript</w-menu-item>
        <w-menu-item to="/git">Git</w-menu-item>
    </w-menu>
    </div>
</template>
<script>
export default {
    setup() {
        function handlerSelect(to: string) {
            console.log(to)
        }
        return {
            handlerSelect
        }
    }
  
}
</script>
<style>
.wrap {
    width: 650px;
    height: 320px;
    overflow: visible;
}
</style>
```
:::
## 侧边导航栏
    导航菜单默认为水平模式，通过mode属性可以使导航菜单变更为垂直模式，通过MenuItemGroup组件可以实现菜单分组，分组名可以通过title属性直接设定，也可以通过具名slot来设定。
:::demo 
```vue
<template>
    <div class="wrap">
      <w-menu defaultTo="/git" mode="vertical" @select="handlerSelect">
        <w-sub-menu to="basic">
            <template #title>入门</template>
            <w-menu-item-group>
                <template #title>基础语言</template>
                <w-menu-item to="/html">HTML</w-menu-item>
                <w-menu-item to="/css">CSS</w-menu-item>
                <w-menu-item to="/javascript">JavaScript</w-menu-item>
            </w-menu-item-group>
            <w-menu-item-group title="框架">
                <w-sub-menu to="Vue">
                    <template #title>Vue框架</template>
                    <w-menu-item to="/vue2">Vue2</w-menu-item>
                    <w-menu-item to="/vue3">Vue3</w-menu-item>
                </w-sub-menu>
                <w-menu-item to="/react">React</w-menu-item>
            </w-menu-item-group>
        </w-sub-menu>
         
        <w-sub-menu to="advance">
            <template #title>进阶</template>
            <w-menu-item-group>
                <template #title>Vue工具库</template>
                <w-menu-item to="/vuex">Vuex</w-menu-item>
                <w-menu-item to="/vue-router">Vue Router</w-menu-item>
                <w-sub-menu to="unit-test">
                    <template #title>单元测试</template>
                    <w-menu-item to="/vue-test-utils">Vue Test Utils</w-menu-item>
                    <w-menu-item to="/vue-testing-library">Vue Testing Library</w-menu-item>
                </w-sub-menu>
            </w-menu-item-group>
            <w-menu-item-group>
                <template #title>语言</template>
                <w-menu-item to="/typescript">TypeScript</w-menu-item>
                <w-menu-item to="/sass">Sass</w-menu-item>
            </w-menu-item-group>
        </w-sub-menu>  
        <w-menu-item to="/webpack">Webpack</w-menu-item>    
        <w-menu-item to="/vite">Vite</w-menu-item> 
        <w-menu-item to="/git">Git</w-menu-item>  
    </w-menu>
    </div>
</template>

<script>
export default {
    setup() {
        function handlerSelect(to: string) {
            console.log(to)
        }
        return {
            handlerSelect
        }
    }
  
}
</script>
<style>
.wrap {
    width: 650px;
    height: 320px;
    overflow: visible;
}
</style>
```
:::


### Menu属性
| 属性 | 类型| 可选值 | 默认值 | 含义 | 
| :-: | :-: | :-: | :-: | :-: | 
|mode|string|horizontal / vertical | horizontal | 菜单水平/垂直展示 | 
|default-to|string|-|- | 页面加载时默认激活的菜单项 |
|router|boolean|true\false|false|是否启用 vue-router 模式。启用该模式会在激活导航时以MenuItem的to属性值作为path进行路由跳转, 使用default-to来设置加载时的激活项。|
|text-color|string|-| #2a2a2a |文字颜色（十六进制格式）|
|active-color|string|-| #7a45bd  |激活菜单项的文字颜色（十六进制格式）|

### Menu事件
| 事件名 |  含义 | 参数 |
| :-: | :-: | :-: | 
|select| 激活菜单项(MenuItem)时触发的回调 | to:激活的MenuItem的to属性值 |

### Menu插槽
| 插槽名 |  含义 | 子标签 |
| :-: | :-: | :-: | 
|-|默认插槽| SubMenu / MenuItem / MenuItemGroup |

### MenuItem属性
| 属性 | 类型| 可选值 | 默认值 | 含义 | 
| :-: | :-: | :-: | :-: | :-: | 
|to|string/null|- | - | MenuItem的唯一标志, 当开启路由模式后，则为点击后跳转的目标路由，即等同于vue-router的to属性 | 
|disabled|boolean|true\false| false |禁用菜单项|

### MenuItem插槽
| 插槽名 |  含义 |
| :-: | :-: |
|-|默认插槽| - |
|title| 标题内容 |

### SubMenu属性
| 属性 | 类型| 可选值 | 默认值 | 含义 | 
| :-: | :-: | :-: | :-: | :-: | 
|to|string/null|- | - | SubMenu的唯一标志| 
|disabled|boolean|true\false| false |禁用子菜单|

### SubMenu插槽
| 插槽名 |  含义 | 子标签 |
| :-: | :-: | :-: | 
|-|默认插槽| SubMenu / MenuItem / MenuItemGroup |
|title| 标题内容 | - |

### SubMenu事件
| 事件名 |  含义 | 参数 |
| :-: | :-: | :-: | 
|click| 点击子菜单标题时触发的回调 | to:点击的SubMenu的to属性值 |

### MenuItemGroup属性
| 属性 | 类型| 可选值 | 默认值 | 含义 | 
| :-: | :-: | :-: | :-: | :-: | 
|title|string|-| '' |分组的标题|

### MenuItemGroup插槽
| 插槽名 |  含义 | 子标签 |
| :-: | :-: | :-: | 
|-|默认插槽| SubMenu / MenuItem / MenuItemGroup |
|title| 标题内容 | - |
