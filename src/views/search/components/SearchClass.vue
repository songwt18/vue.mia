<template>
  <div>
      <search-title>
          <div slot="icon">
              <div class="iconfont icon-sort"> 常用分类</div>
          </div>
      </search-title>
      <div class="class">
          <div class="classItem" v-for="(item,index) in classList" :key="index" @click="clickItem(item.name)">
              <div class="itemImg">
                  <img :src=item.path alt="">
              </div>
              <div class="itemDesc">{{item.name}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import SearchTitle from './SearchTitle'
export default {
    data() {
        return {
            classList:[{
                name:'九阳',
                path:'https://img.miyabaobei.com/d1/p5/2018/09/28/f1/02/f10236c176a98b51da45a00c5dfc3b8b710744372.jpg'
            },{
               name:'雀巢',
               path:'https://img.miyabaobei.com/d1/p3/brand/3468_band_img.jpg' 
            },{
                name:'a2',
                path:'https://img.miyabaobei.com/d1/p5/2018/09/22/65/4a/654a15a64e1815a0f2fe1a7b60993e32476192348.jpg' 
            },{
                name:'JMsolution',
                path:'https://img.miyabaobei.com/d1/p5/2018/03/13/50/6e/506e7f2f2b72893207bdf10b4ec2698a044536803.jpg'
            },{
                name:'诺优能 Nutrilon',
                path:'https://img.miyabaobei.com/d1/p3/brand/173_brand_logo_img1459857703.jpg'
            },{
                name:'贝贝怡 bornbay',
                path:'https://img.miyabaobei.com/d1/p3/brand/335_brand_logo_img1461149743.png'
            },{
                name:'西域美农',
                path:'https://img.miyabaobei.com/d1/p5/brand/2576_brand_logo_img1494834548.png'
            },{
                name:'茵曼',
                path:'https://img.miyabaobei.com/d1/p6/brand/247_brand_logo_img1562926342.jpg'
            },{
                name:'小黄鸭 B.Duck',
                path:'https://img.miyabaobei.com/d1/p5/brand/7261_brand_logo_img1499651209.jpg'
            },{
                name:'母婴儿童',
                path:'https://img.miyabaobei.com/d1/p5/2018/11/27/8e/77/8e77a8b9be595c9e1ab588af39ee320e028777519.jpg'
            }]
        }
    },
    components: {
        SearchTitle
    },
    methods: {
        clickItem(item) {
            this.$emit('clickItem',item)
        }
    },
}
</script>

<style lang="less" scoped>
.class {
    display: flex; 
    flex-wrap: wrap;
  .classItem {
      flex: 15%;
    .itemImg {
        width: 100%;
        height: 4rem;
        position: relative;
        img {
            width:100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%)
        }
    }

    .itemDesc {
        width: 100%;
        text-align: center;
        font-size: 16px;
    }
  }
}
</style>