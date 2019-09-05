<template>
  <div>
    <g-input value="文本" />
    <g-input value="文本" disabled />
    <g-input value="文本" readonly />
    <g-input value="文本" error="输入错误"/>
  </div>
</template>

<script>
  import Input from '../../../src/input';

  export default {
    components: {
      'g-input': Input
    }
  }
</script>

