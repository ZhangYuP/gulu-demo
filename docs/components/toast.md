---
title: Toast
---

# Toast

## 从不同位置弹出的 Toast

**展示**

<ClientOnly>
  <toast-demos-1></toast-demos-1>
</ClientOnly>

**代码**
```html
<g-button @click="showToast('top')">顶部弹出</g-button>
<g-button @click="showToast('middle')">中间弹出</g-button>
<g-button @click="showToast('bottom')">底部弹出</g-button>
```
```javascript
methods: {
  showToast(position){
    this.$toast('3秒后自动关闭', {
      position,
      closeButton: null,
      autoClose: 3
    })
  }
}
```

## 不会自动关闭的 Toast

**展示**

<ClientOnly>
  <toast-demos-2></toast-demos-2>
</ClientOnly>

**代码**
```html
<g-button @click="showToast">默认顶部弹出</g-button>
```
```javascript
methods: {
  showToast(position){
    this.$toast('不自动关闭', {
      position,
      closeButton: {
        text: '关闭',
        callback(){}
      },
      autoClose: false
    })
  }
}
```

## 支持 HTML 的 Toast

**展示**

<ClientOnly>
  <toast-demos-3></toast-demos-3>
</ClientOnly>

**代码**
```html
<g-button @click="showToast">默认顶部弹出</g-button>
```
```javascript
methods: {
  showToast(position){
    this.$toast('<span style="color: orange;">不会自动关闭</span>', {
      position,
      autoClose: false,
      enableHtml: true
    })
  }
}
```
