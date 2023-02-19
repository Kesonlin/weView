import DefaultTheme from 'vitepress/theme'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import weView from '../../../packages/components/index.ts'
import Button from '../../../packages/components/Button'
import Row from '../../../packages/components/Layout/indexRow'
import Col from '../../../packages/components/Layout/indexCol'
import '../../../packages/fonts/iconfont.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(weView)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    app.component('Button',Button)
    app.component('Row',Row)
    app.component('Col',Col)
  },
}