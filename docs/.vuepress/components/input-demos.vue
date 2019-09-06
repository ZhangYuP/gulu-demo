<template>
  <div>
    <r-input value="文本" />
    <r-input value="文本" disabled />
    <r-input value="文本" readonly />
    <r-input value="文本" error="输入错误"/>
  </div>
</template>

<script>
  import Input from '../../../src/input';

  export default {
    components: {
      'r-input': Input
    }
  }
</script>

