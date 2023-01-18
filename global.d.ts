/// <reference types="vite/client" />

// 声明.vue文件类型
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
