<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'RocTabsBody',
    inject: ['eventBus'],
  }
</script>
<style>
  .tabs-body {

  }
</style>
