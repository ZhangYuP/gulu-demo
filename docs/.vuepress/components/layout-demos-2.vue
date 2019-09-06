<template>
  <div>
    <r-layout style="overflow: hidden;">
      <r-sider style="height: 250px; width: 200px; background: #c6e2ff;">sider</r-sider>
      <r-layout>
        <r-header style="height: 50px; background: #8cc5ff;">header</r-header>
        <r-content style="height: 150px; background: #409EFF;">content</r-content>
        <r-footer style="height: 50px; background: #8cc5ff;">footer</r-footer>
      </r-layout>
    </r-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/layout';
  import Header from '../../../src/header';
  import Content from '../../../src/content';
  import Footer from '../../../src/footer';
  import Sider from '../../../src/sider';

  export default {
    components: {
      'r-layout': Layout,
      'r-header': Header,
      'r-content': Content,
      'r-footer': Footer,
      'r-sider': Sider,
    }
  }
</script>

