<template>
  <div>
    <r-collapse :selected.sync="selectedTab" single>
      <r-collapse-item name="1" title="标题1">内容1</r-collapse-item>
      <r-collapse-item name="2" title="标题2">内容2</r-collapse-item>
      <r-collapse-item name="3" title="标题3">内容3</r-collapse-item>
    </r-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse';
  import CollapseItem from '../../../src/collapse-item';

  export default {
    components: {
      'r-collapse': Collapse,
      'r-collapse-item': CollapseItem
    },
    data(){
      return {
        selectedTab: ['1']
      }
    }
  }
</script>
