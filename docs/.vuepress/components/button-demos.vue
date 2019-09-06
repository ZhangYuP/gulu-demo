<template>
  <div>
    <r-button>默认按钮</r-button>
    <r-button icon="settings">设置</r-button>
    <r-button icon="thumbs-up">点赞</r-button>
    <r-button icon="download" icon-position="right">下载</r-button>
    <r-button :loading="true">加载中</r-button>
    <r-button disabled>默认按钮</r-button>
  </div>
</template>

<script>
  import Button from '../../../src/button';

  export default {
    components: {
      'r-button': Button
    }
  }
</script>
