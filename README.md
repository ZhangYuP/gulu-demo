## 轱辘 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.org/ZhangYuP/zyp-gulu-demo.svg?branch=master)](https://www.travis-ci.org/ZhangYuP/zyp-gulu-demo)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*，*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。

2. 安装 zyp-gulu
```$xslt
npm i --save zyp-gulu
```
3. 引入 gulu
```$xslt
import {Button, ButtonGroup, Icon} from 'zyp-gulu'
import 'zyp-gulu/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
    'g-icon': Icon
  }
}
```

## 文档

[官方文档](https://github.com/ZhangYuP/zyp-gulu-demo)

## 提问

[issues](https://github.com/ZhangYuP/zyp-gulu-demo/issues)

## 联系方式

邮箱：zyp5318@qq.com

## 贡献代码

[Pull requests](https://github.com/ZhangYuP/zyp-gulu-demo/pulls)
