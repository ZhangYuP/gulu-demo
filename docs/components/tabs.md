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
<r-tabs selected="1">
  <r-tabs-head>
    <r-tabs-item name="1">标签1</r-tabs-item>
    <r-tabs-item name="2">标签2</r-tabs-item>
    <r-tabs-item name="3" disabled>标签3</r-tabs-item>
  </r-tabs-head>
  <r-tabs-body>
    <r-tabs-pane name="1">内容1</r-tabs-pane>
    <r-tabs-pane name="2">内容2</r-tabs-pane>
    <r-tabs-pane name="3">内容3</r-tabs-pane>
  </r-tabs-body>
</r-tabs>
```
