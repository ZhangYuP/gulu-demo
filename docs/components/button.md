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
<g-button>默认按钮</g-button>
<g-button icon="settings">设置</g-button>
<g-button icon="thumbs-up">点赞</g-button>
<g-button icon="download" icon-position="right">下载</g-button>
<g-button :loading="true">加载中</g-button>
<g-button disabled>默认按钮</g-button>
```

## 组合按钮

**展示**

<ClientOnly>
  <button-group-demos></button-group-demos>
</ClientOnly>

**代码**

```html
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```
