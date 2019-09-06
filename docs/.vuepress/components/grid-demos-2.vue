<template>
  <div>
    <g-row gutter="10">
      <g-col span="8"><div class="content">8</div></g-col>
      <g-col span="8"><div class="content">8</div></g-col>
      <g-col span="8"><div class="content">8</div></g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="6"><div class="content">6</div></g-col>
      <g-col span="6"><div class="content">6</div></g-col>
      <g-col span="6"><div class="content">6</div></g-col>
      <g-col span="6"><div class="content">6</div></g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="4"><div class="content">4</div></g-col>
      <g-col span="4"><div class="content">4</div></g-col>
      <g-col span="4"><div class="content">4</div></g-col>
      <g-col span="4"><div class="content">4</div></g-col>
      <g-col span="4"><div class="content">4</div></g-col>
      <g-col span="4"><div class="content">4</div></g-col>
    </g-row>
  </div>
</template>

<script>
  import Col from '../../../src/col';
  import Row from '../../../src/row';

  export default {
    components: {
      'g-col': Col,
      'g-row': Row
    }
  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .row{
    margin: 10px 0;
  }
  .content{
    height: 50px;
    border: 1px solid #cccccc;
    background: #79bbff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
