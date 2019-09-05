<template>
  <div>
    <g-button @click="showToast('top')">顶部弹出</g-button>
    <g-button @click="showToast('middle')">中间弹出</g-button>
    <g-button @click="showToast('bottom')">底部弹出</g-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/toast';
  import Button from '../../../src/button';
  import plugin from '../../../src/plugin';

  Vue.use(plugin)

  export default {
    components: {
      'g-toast': Toast,
      'g-button': Button
    },
    methods: {
      showToast(position){
        this.$toast('3秒后自动关闭', {
          position,
          closeButton: null,
          autoClose: 3
        })
      }
    }
  }
</script>

<style>
  .wrapper{
    z-index: 30 !important;
  }
</style>
