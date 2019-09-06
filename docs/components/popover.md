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
<r-popover>
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>上方弹出</r-button>
</r-popover>
<r-popover position="bottom">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>下方弹出</r-button>
</r-popover>
<r-popover position="left" trigger="click">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>左侧弹出</r-button>
</r-popover>
<r-popover position="right" trigger="click">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>右侧弹出</r-button>
</r-popover>
```

## 鼠标悬停弹出

**展示**

<ClientOnly>
  <popover-hover-demos></popover-hover-demos>
</ClientOnly>

**代码**
```html
<r-popover position="top" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>上方弹出</r-button>
</r-popover>
<r-popover position="bottom" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>下方弹出</r-button>
</r-popover>
<r-popover position="left" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>左侧弹出</r-button>
</r-popover>
<r-popover position="right" trigger="hover">
  <template slot="content">
    <div>弹出文本</div>
  </template>
  <r-button>右侧弹出</r-button>
</r-popover>
```
