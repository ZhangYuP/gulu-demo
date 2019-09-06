<template>
  <div>
    <r-button-group>
      <r-button icon="left">上一页</r-button>
      <r-button icon="right" icon-position="right">下一页</r-button>
    </r-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/button';
  import ButtonGroup from '../../../src/button-group';

  export default {
    components: {
      'r-button': Button,
      'r-button-group': ButtonGroup
    }
  }
</script>
