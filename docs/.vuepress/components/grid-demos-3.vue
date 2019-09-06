<template>
  <div>
    <g-row>
      <g-col span="6"><div class="content">6</div></g-col>
      <g-col span="6"><div class="content">6</div></g-col>
      <g-col span="6" offset="6"><div class="content">6</div></g-col>
    </g-row>
    <g-row>
      <g-col span="4"><div class="content">4</div></g-col>
      <g-col span="4" offset="4"><div class="content">4</div></g-col>
      <g-col span="4" offset="2"><div class="content">4</div></g-col>
      <g-col span="4"><div class="content">4</div></g-col>
    </g-row>
    <g-row>
      <g-col span="2" offset="2"><div class="content">2</div></g-col>
      <g-col span="2"><div class="content">2</div></g-col>
      <g-col span="2" offset="4"><div class="content">2</div></g-col>
      <g-col span="2"><div class="content">2</div></g-col>
      <g-col span="2"><div class="content">2</div></g-col>
      <g-col span="2" offset="3"><div class="content">2</div></g-col>
      <g-col span="2"><div class="content">2</div></g-col>
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
  * {
    box-sizing: border-box;
  }
  .row {
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
