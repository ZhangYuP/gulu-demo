<template>
  <div>
    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <g-button>上方弹出</g-button>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <g-button>下方弹出</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="content">
        <div>弹出文本</div>
      </template>
      <g-button>左侧弹出</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
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

