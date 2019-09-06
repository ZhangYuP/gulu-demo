---
title: Tabs
---

# 标签

**展示**

<ClientOnly>
  <tabs-demos></tabs-demos>
</ClientOnly>

**代码**
```html
<g-tabs selected="1">
  <g-tabs-head>
    <g-tabs-item name="1">标签1</g-tabs-item>
    <g-tabs-item name="2">标签2</g-tabs-item>
    <g-tabs-item name="3" disabled>标签3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">内容1</g-tabs-pane>
    <g-tabs-pane name="2">内容2</g-tabs-pane>
    <g-tabs-pane name="3">内容3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
