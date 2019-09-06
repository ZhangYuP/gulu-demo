<template>
  <div>
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item name="1" title="标题1">内容1</g-collapse-item>
      <g-collapse-item name="2" title="标题2">内容2</g-collapse-item>
      <g-collapse-item name="3" title="标题3">内容3</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse';
  import CollapseItem from '../../../src/collapse-item';

  export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
    data(){
      return {
        selectedTab: ['1', '2']
      }
    }
  }
</script>
