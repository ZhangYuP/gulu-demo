<template>
  <div class="popover" @click="onClick">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    data () {
      return {
        visible: false
      }
    },
    mounted () {

    },
    methods: {
      positionContent(){
        document.body.appendChild(this.$refs.contentWrapper)
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.top = window.scrollY + top + 'px'
        this.$refs.contentWrapper.style.left = window.scrollX + left + 'px'
      },
      onClickDocument(e){
        if (this.$refs.contentWrapper.contains(e.target)) {
          return
        }
        this.close()
      },
      open(){
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        }, 0)
      },
      close(){
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if(this.visible === true){
            this.close()
          }else{
            this.open()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>