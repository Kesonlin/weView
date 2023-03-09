const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/Button/' },
        { text: 'Layout 布局', link: '/components/Layout/' },
        { text: 'Icon 图标', link: '/components/Icon/' },
      ]
    },
    {
      text: 'Form表单组件',
      children: [
        { text: 'DateTimePicker 日期选择器', link: '/components/DateTimePicker/' },
        { text: 'Input 输入框', link: '/components/Input/' },
      ]
    },
    {
      text: 'Data 数据展示',
      children: [
        { text: 'Table 表格', link: '/components/Table/' },
        { text: 'Pagination 分页', link: '/components/Pagination/' }
      ]
    },
    {
      text: 'Feedback 反馈组件',
      children: [
        { text: 'Notification 通知', link: '/components/Notification/' }
      ]
    },
    {
      text: 'Navigation 导航',
      children: [
        { text: 'Menu 导航菜单', link: '/components/Menu/' },
        { text: 'Dropdown 下拉菜单', link: '/components/Dropdown/' }
      ]
    },
    {
      text: 'Others 其他',
      children: [
        { text: 'carousel 轮播图', link: '/components/carousel/' }
      ]
    },
  ]
}

export default {
  title: "🔨 weView",
  themeConfig: {
    sidebar,
  },

  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}