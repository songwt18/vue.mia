<template>
  <div class="topswipper">
    <swiper ref="mySwiper" :options="swiperOptions" >
        <swiper-slide 
            class="swiper-item"
            v-for="(item,index) in imgList"
            :key=index
            >
           <img :src=item.path alt="">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
            autoplay: {
                disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
                delay: 5000, // 自动切换的时间间隔（单位ms）
            },
            initialSlide: 0,
            loop: true,
            pagination: { 
                el: '.swiper-pagination',
                clickable: true, 
            }, // 分页按钮
            paginationClickable: true,
            // Some Swiper option/callback...
        },
        imgList: [
            {
                path:"https://img.miyabaobei.com/d1/p6/2021/01/11/7d/8e/7d8e17aa63dbf2752cf538e4101c3849468269142.jpg"
            },
            {
                path:"https://img.miyabaobei.com/d1/p6/2021/01/11/27/4c/274c73ee4350027457a15af4c4fa5df5484918685.jpg"
            },
            {
                path:"https://img.miyabaobei.com/d1/p6/2021/01/12/ec/e1/ece1394069c6a6b9ed89ca4720c6cb41589372130.jpg"
            }
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
.topswipper {
    border-radius: 10px;
    .swiper-item {
         img{
            width: 100%;
            height: 100%;
        }
    } 
}
</style>