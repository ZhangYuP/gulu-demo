---
title: Button
---

# 按钮

## 单个按钮

**展示**

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

**代码**

```html
<r-button>默认按钮</r-button>
<r-button icon="settings">设置</r-button>
<r-button icon="thumbs-up">点赞</r-button>
<r-button icon="download" icon-position="right">下载</r-button>
<r-button :loading="true">加载中</r-button>
<r-button disabled>默认按钮</r-button>
```

## 组合按钮

**展示**

<ClientOnly>
  <button-group-demos></button-group-demos>
</ClientOnly>

**代码**

```html
<r-button-group>
  <r-button icon="left">上一页</r-button>
  <r-button icon="right" icon-position="right">下一页</r-button>
</r-button-group>
```
