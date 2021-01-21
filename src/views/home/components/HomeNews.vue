<template>
  <div class="news">
      <div class="banners">
          <img :src=newsList.banners alt="">
            <div class="pros">
            <div class="pros-item" v-for="(item,index) in newsList.pros" :key="index">
                <img :src=item.path alt="">
                <div class="item-price">
                    券后价9.9
                </div>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: {
                banners:'http://img.miyabaobei.com//d1/p6/2021/01/08/84/f9/84f9d352b20fc39430210e2bbf31700d723742052.gif',
                pros:[{
                    path:'http://img.miyabaobei.com//d1/p6/item/57/5788/5788367_normal_4_65039f91.jpg'
                },{
                    path:'http://img.miyabaobei.com//d1/p6/2020/11/20/27/8e/278e326579dc77237430636e34f9cdc9553577699.jpg'
                },{
                    path:'http://img.miyabaobei.com//d1/p6/2020/11/16/0c/7a/0c7aab2264e11ce4dd21f1e7f1acaea6207663847.jpg'
                }]
            
            }
        }
    }
}
</script>

<style lang="less" scoped>
.news {
    padding: .5rem .5rem 0 .5rem ;
  .banners {
      width: 100%;
      position: relative;
    img {
        width: 100%;
    }
    .pros {
      position: absolute;
      left: 0;
      right: 0;
      bottom: .25rem;
      top: 45%;
      display: flex;
      padding: 0 .25rem;
        .pros-item {
            flex: 1;
            margin: 0 .15rem;
            position: relative;
            img {
                width: 100%;
                 border-radius: .25rem;
            }
            .item-price {
                position: absolute;
                background-color: #d84f48;
                font-size: 14px;
                text-align: center;
                color: #fff;
                padding: .1rem;
                height: .8rem;
                width: 3.5rem;
                bottom: .5rem;
                left: .4rem;
                border-radius: .5rem 0 .5rem 0;
            }
        }
    }
  }
  
}
</style>