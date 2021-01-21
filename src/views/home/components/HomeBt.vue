<template>
  <div class="homebt">
    <div class="bt-item" v-for="(item,index) in btData.img" :key="index">
        <img :src=item.path alt="">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            btData: {
                img:[{
                    path: require('assets/img/home/bt.png')
                },{
                    path: require('assets/img/home/tm.png')
                }]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.homebt {
    display: flex;
  .bt-item {
    flex:1;
    img {
        width: 100%;
    }
  }
}
</style>