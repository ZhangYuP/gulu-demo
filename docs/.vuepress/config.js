module.exports = {
  base: '/roc-ui/',
  title: '鹏 UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          { text: '安装', link: '/install/' },
          { text: '快速上手', link: '/get-started/' }
        ]
      },
      {
        text: 'Components',
        items: [
          {text: 'Button', link: '/components/button'},
          {text: 'Input', link: '/components/input'},
          {text: 'Grid', link: '/components/grid'},
          {text: 'Layout', link: '/components/layout'},
          {text: 'Toast', link: '/components/toast'},
          {text: 'Popover', link: '/components/popover'},
          {text: 'Tabs', link: '/components/tabs'},
          {text: 'Collapse', link: '/components/collapse'}
        ]
      },
      { text: 'GitHub', link: 'https://github.com/ZhangYuP/roc-ui' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/tabs',
          '/components/collapse'
        ]
      }
    ]
  }
}
