<template>
  <div>
    <g-popover>
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <g-button>上方弹出</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <g-button>下方弹出</g-button>
    </g-popover>
    <g-popover position="left" trigger="click">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <g-button>左侧弹出</g-button>
    </g-popover>
    <g-popover position="right" trigger="click">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <g-button>右侧弹出</g-button>
    </g-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/popover';
  import Button from '../../../src/button';


  export default {
    components: {
      'g-popover': Popover,
      'g-button': Button
    }
  }
</script>

