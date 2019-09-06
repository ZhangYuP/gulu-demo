<template>
  <svg class="r-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg.js'
  export default {
    name: 'Icon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .r-icon {
    width: 1em;
    height: 1em;
  }
</style>
