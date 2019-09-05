---
title: Popover
---

# 弹出层

## 点击按钮弹出

**展示**

<ClientOnly>
  <popover-demos></popover-demos>
</ClientOnly>

**代码**
```html
<g-popover>
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>上方弹出</g-button>
</g-popover>
<g-popover position="bottom">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>下方弹出</g-button>
</g-popover>
<g-popover position="left" trigger="click">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>左侧弹出</g-button>
</g-popover>
<g-popover position="right" trigger="click">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>右侧弹出</g-button>
</g-popover>
```

## 鼠标悬停弹出

**展示**

<ClientOnly>
  <popover-hover-demos></popover-hover-demos>
</ClientOnly>

**代码**
```html
<g-popover position="top" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>上方弹出</g-button>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>下方弹出</g-button>
</g-popover>
<g-popover position="left" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>左侧弹出</g-button>
</g-popover>
<g-popover position="right" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <g-button>右侧弹出</g-button>
</g-popover>
```
