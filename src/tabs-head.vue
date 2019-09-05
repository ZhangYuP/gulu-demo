<template>
  <div class="tabs-head" id="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  import tabs from "./tabs";

  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted () {
      this.eventBus.$on('update:selected', (item, vm) => {
        let tabsHead = document.getElementById('tabs-head')
        let tabsHeadLeft = tabsHead.getBoundingClientRect().left
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - tabsHeadLeft}px`
      })
    }
  }
</script>
<style scoped lang="scss">
  $tabs-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-head {
    height: $tabs-height;
    display: flex;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: -1px;
      border-bottom: 2px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
    }
  }
</style>
