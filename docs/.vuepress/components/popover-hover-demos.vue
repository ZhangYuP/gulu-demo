<template>
  <div>
    <r-popover position="top" trigger="hover">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <r-button>上方弹出</r-button>
    </r-popover>
    <r-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <r-button>下方弹出</r-button>
    </r-popover>
    <r-popover position="left" trigger="hover">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <r-button>左侧弹出</r-button>
    </r-popover>
    <r-popover position="right" trigger="hover">
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

