---
title: Layout
---

# 布局

## 内侧边栏

**展示**

<ClientOnly>
  <layout-demos-1></layout-demos-1>
</ClientOnly>

**代码**
```html
<r-layout style="overflow: hidden;">
  <r-header style="height: 50px; background: #8cc5ff;">header</r-header>
  <r-layout>
    <r-sider style="height: 150px; width: 200px; background: #c6e2ff;">sider</r-sider>
    <r-content style="height: 150px; background: #409EFF;">content</r-content>
  </r-layout>
  <r-footer style="height: 50px; background: #8cc5ff;">footer</r-footer>
</r-layout>
```

## 外侧边栏

**展示**

<ClientOnly>
  <layout-demos-2></layout-demos-2>
</ClientOnly>

**代码**
```html
<r-layout style="overflow: hidden;">
  <r-sider style="height: 250px; width: 200px; background: #c6e2ff;">sider</r-sider>
  <r-layout>
    <r-header style="height: 50px; background: #8cc5ff;">header</r-header>
    <r-content style="height: 150px; background: #409EFF;">content</r-content>
    <r-footer style="height: 50px; background: #8cc5ff;">footer</r-footer>
  </r-layout>
</r-layout>
```

