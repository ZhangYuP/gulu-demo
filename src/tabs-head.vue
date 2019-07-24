<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions" class="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created () {
      console.log(this.eventBus);
    }
  }
</script>
<style scoped lang="scss">
  $tabs-height: 40px;
  .tabs-head {
    height: $tabs-height;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>