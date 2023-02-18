/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins:[vue()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  // 添加库模式配置
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./packages/components/index.ts",
      name: "weView",
      fileName: "weView",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },
})
