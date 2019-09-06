<template>
  <div>
    <g-layout style="overflow: hidden;">
      <g-header style="height: 50px; background: #8cc5ff;">header</g-header>
      <g-layout>
        <g-sider style="height: 150px; width: 200px; background: #c6e2ff;">sider</g-sider>
        <g-content style="height: 150px; background: #409EFF;">content</g-content>
      </g-layout>
      <g-footer style="height: 50px; background: #8cc5ff;">footer</g-footer>
    </g-layout>
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
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-sider': Sider,
    }
  }
</script>

