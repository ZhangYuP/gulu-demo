---
title: Grid
---

# 栅格

Grid - 栅格，每一行最多可分为24小格，可以设置间隙和空白，支持响应式布局。

## 基础功能

**展示**

<ClientOnly>
  <grid-demos-1></grid-demos-1>
</ClientOnly>

**代码**
```html
<r-row>
  <r-col span="8"><div class="content">8</div></r-col>
  <r-col span="8"><div class="content">8</div></r-col>
  <r-col span="8"><div class="content">8</div></r-col>
</r-row>
<r-row>
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6"><div class="content">6</div></r-col>
</r-row>
<r-row>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
</r-row>
<r-row>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
</r-row>
```
```css
*{
  box-sizing: border-box;
}
.row{
  margin: 10px 0;
}
.content{
  height: 50px;
  border: 1px solid #cccccc;
  background: #79bbff;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 设置 gutter

**展示**

<ClientOnly>
  <grid-demos-2></grid-demos-2>
</ClientOnly>

**代码**
```html
<r-row gutter="10">
  <r-col span="8"><div class="content">8</div></r-col>
  <r-col span="8"><div class="content">8</div></r-col>
  <r-col span="8"><div class="content">8</div></r-col>
</r-row>
<r-row gutter="10">
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6"><div class="content">6</div></r-col>
</r-row>
<r-row gutter="10">
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
</r-row>
```
```css
*{
  box-sizing: border-box;
}
.row{
  margin: 10px 0;
}
.content{
  height: 50px;
  border: 1px solid #cccccc;
  background: #79bbff;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 设置空白

**展示**

<ClientOnly>
  <grid-demos-3></grid-demos-3>
</ClientOnly>

**代码**
```html
<r-row>
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6"><div class="content">6</div></r-col>
  <r-col span="6" offset="6"><div class="content">6</div></r-col>
</r-row>
<r-row>
  <r-col span="4"><div class="content">4</div></r-col>
  <r-col span="4" offset="4"><div class="content">4</div></r-col>
  <r-col span="4" offset="2"><div class="content">4</div></r-col>
  <r-col span="4"><div class="content">4</div></r-col>
</r-row>
<r-row>
  <r-col span="2" offset="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2" offset="4"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
  <r-col span="2" offset="3"><div class="content">2</div></r-col>
  <r-col span="2"><div class="content">2</div></r-col>
</r-row>
```
```css
*{
  box-sizing: border-box;
}
.row{
  margin: 10px 0;
}
.content{
  height: 50px;
  border: 1px solid #cccccc;
  background: #79bbff;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
