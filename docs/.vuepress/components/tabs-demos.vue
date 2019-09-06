<template>
  <div>
    <r-tabs selected="1">
      <r-tabs-head>
        <r-tabs-item name="1">标签1</r-tabs-item>
        <r-tabs-item name="2">标签2</r-tabs-item>
        <r-tabs-item name="3" disabled>标签3</r-tabs-item>
      </r-tabs-head>
      <r-tabs-body>
        <r-tabs-pane name="1">内容1</r-tabs-pane>
        <r-tabs-pane name="2">内容2</r-tabs-pane>
        <r-tabs-pane name="3">内容3</r-tabs-pane>
      </r-tabs-body>
    </r-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/tabs';
  import TabsHead from '../../../src/tabs-head';
  import TabsBody from '../../../src/tabs-body';
  import TabsItem from '../../../src/tabs-item';
  import TabsPane from '../../../src/tabs-pane';

  export default {
    components: {
      'r-tabs': Tabs,
      'r-tabs-head': TabsHead,
      'r-tabs-body': TabsBody,
      'r-tabs-item': TabsItem,
      'r-tabs-pane': TabsPane,
    }
  }
</script>

