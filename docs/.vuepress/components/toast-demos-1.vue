<template>
  <div>
    <r-button @click="showToast('top')">顶部弹出</r-button>
    <r-button @click="showToast('middle')">中间弹出</r-button>
    <r-button @click="showToast('bottom')">底部弹出</r-button>
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
      'r-toast': Toast,
      'r-button': Button
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
