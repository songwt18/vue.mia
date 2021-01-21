<template>
  <div class="homeDiscount">
      <img :src=countData.title alt="">
      <div class="pros">
          <div class="pros-item" v-for="(item,index) in countData.pros" :key="index">
              <img :src=item.path alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            countData: {
                title:require('assets/img/title.png'),
                pros:[{
                    path:'http://img.miyabaobei.com/d1/p6/2021/01/11/3e/32/3e32b11dcc576f2574c54bbbfa708b18469158552.png'
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2021/01/13/73/6f/736f4ee2d0f9c11e284cbfc48710e887040935164.jpg'
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2021/01/08/c8/8b/c88bb216d90cc2d6e4c54fb2639efb06932162174.png'
                }]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.homeDiscount {
    background-color: #fff;
    margin: .3rem 0px;
    padding: 0 .5rem;
  img {
      width: 100%;
  }

  .pros {
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
    .pros-item {
      float:left;
      width: 50%;
      img {
          
      }
    }
  }
}
</style>