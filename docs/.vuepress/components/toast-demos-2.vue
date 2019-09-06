<template>
  <div>
    <r-button @click="showToast">默认顶部弹出</r-button>
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
        this.$toast('不会自动关闭', {
          position,
          closeButton: {
            text: '关闭',
            callback(){}
          },
          autoClose: false
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
