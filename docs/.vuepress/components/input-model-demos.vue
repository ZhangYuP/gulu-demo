<template>
  <div>
    <g-input v-model="value" />
    <span>{{value}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/input';

  export default {
    components: {
      'g-input': Input
    },
    data(){
      return {
        value: '输入框中的内容'
      }
    }
  }
</script>

