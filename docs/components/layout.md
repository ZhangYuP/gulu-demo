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
<g-layout style="overflow: hidden;">
  <g-header style="height: 50px; background: #8cc5ff;">header</g-header>
  <g-layout>
    <g-sider style="height: 150px; width: 200px; background: #c6e2ff;">sider</g-sider>
    <g-content style="height: 150px; background: #409EFF;">content</g-content>
  </g-layout>
  <g-footer style="height: 50px; background: #8cc5ff;">footer</g-footer>
</g-layout>
```

## 外侧边栏

**展示**

<ClientOnly>
  <layout-demos-2></layout-demos-2>
</ClientOnly>

**代码**
```html
<g-layout style="overflow: hidden;">
  <g-sider style="height: 250px; width: 200px; background: #c6e2ff;">sider</g-sider>
  <g-layout>
    <g-header style="height: 50px; background: #8cc5ff;">header</g-header>
    <g-content style="height: 150px; background: #409EFF;">content</g-content>
    <g-footer style="height: 50px; background: #8cc5ff;">footer</g-footer>
  </g-layout>
</g-layout>
```

