---
title: 快速上手
---

# 快速上手

## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*，*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。

## 安装

参考 [安装](http://localhost:8080/zyp-gulu-demo/install/) 章节

## 引入 gulu
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
