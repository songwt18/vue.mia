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
                path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWYqPG85_KcCgw8-7OJnVaxlMXsXX51E1OQ&usqp=CAU"
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
      console.log('11111111')
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