module.exports = {
  base: '/zyp-gulu-demo/',
  title: '轱辘 UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/tabs'
        ]
      }
    ]
  }
}