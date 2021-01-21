<template>
  <div id="tab-bar-item">
    <div class="tabbar-item" @click="itemClick" >
        <div :class="{tabbarActive:isActive}"><slot name="item-icon"></slot></div>
        <div class="text" :class="{tabbarActive:isActive}"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        path:String,
    },
    data() {
        return {
            isClick:false
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
            this.isClick = false
            console.log('11')
        }
    },
    computed:{
        isActive() {
             if(this.isClick === false){
                 return this.$route.path.indexOf(this.path) !== -1
             }else{
                 return ''
             }
         }
    }
}
</script>

<style lang="less" scoped>
#tab-bar-item{
    display: flex;
    width: 100%;
    .tabbar-item {
            flex: 1;
            text-align: center;
            margin-top: 0.2rem;
            .iconfont {
                font-size: 28px;
            }
            .text {
                font-size: 16px;
                color: #717171;
            }
        }
}
.tabbarActive {
    color:#d84f48 !important;
}
</style>