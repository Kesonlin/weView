<template>
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
            <w-sub-menu to="Vue">
                <template #title>单元测试</template>
                <w-menu-item to="/vue-test-utils">Vue Test Utils</w-menu-item>
                <w-menu-item to="/vue-testing-library">Vue Testing Library</w-menu-item>
            </w-sub-menu>
        </w-sub-menu>
        <w-menu-item disabled>消息</w-menu-item>
        <w-menu-item to="/typescript">TypeScript</w-menu-item>
        <w-menu-item to="/git">Git</w-menu-item>
    </w-menu>



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
</template>

<script lang="ts" setup>
function handlerSelect(to: string) {
    console.log(to)
}
</script>

<style lang="scss" scoped></style>