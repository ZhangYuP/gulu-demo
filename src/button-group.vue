<template>
  <div class="r-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'RocButtonGroup',
    mounted(){
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase();
        if (name !== 'button') {
          console.warn(`r-button-group 的子元素应该全是 r-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-radius: 4px;
  .r-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .r-button {
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
