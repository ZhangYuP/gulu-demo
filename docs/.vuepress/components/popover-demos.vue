<template>
  <div>
    <r-popover>
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <r-button>上方弹出</r-button>
    </r-popover>
    <r-popover position="bottom">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <r-button>下方弹出</r-button>
    </r-popover>
    <r-popover position="left" trigger="click">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <r-button>左侧弹出</r-button>
    </r-popover>
    <r-popover position="right" trigger="click">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <r-button>右侧弹出</r-button>
    </r-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/popover';
  import Button from '../../../src/button';


  export default {
    components: {
      'r-popover': Popover,
      'r-button': Button
    }
  }
</script>

