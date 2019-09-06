---
title: Input
---

# 输入框

## 基础用法

**展示**

<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

**代码**
```html
<r-input v-model="value" />
<div>{{value}}</div>
```

## 支持双向绑定

**展示**

<ClientOnly>
  <input-model-demos></input-model-demos>
</ClientOnly>

**代码**
```html
<r-input v-model="value" />
<span>{{value}}</span>
```
```javascript
data(){
  return {
    value: '输入框中的内容'
  }
}
```
