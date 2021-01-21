<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null,
        }
    },
    props:{
        pullUpLoad: {
            type: Boolean,
            default: false,
        },
        probeType: {
            type: Number,
            default: 0,
        },
        startX: {
            type: Number,
            default: 0
        },
        scrollX: {
            type: Boolean,
            default: false
        },
        scrollY: {
            type: Boolean,
            default: true
        },
        eventPassthrough: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            pullUpLoad: this.pullUpLoad,
            probeType: this.probeType,
            click: true,
            // bounce: false,
            
        })
        this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        })
        if(this.pullUpLoad){
            this.scroll.on('pullUpLoad',() => {
                this.$emit('pullUpLoad')
            })
        }
    }
}
</script>

<style lang="less" scoped>
// .content {
//     padding-bottom: 80px;
// }
</style>