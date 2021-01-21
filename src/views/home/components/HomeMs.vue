<template>
  <div class="ms">
      <div class="title" >
        <img src="~assets/img/home/xsms.jpg" alt="">
        <!-- 阴影条 -->
        <div class="edge"></div> 
        <div class="time" ref="time">
          <div class="content" ref="content">
            <div class="time-item" v-for="(item,index) in timeList" :key="index" ref="item" @click="timeClick(index)">
              <div class="item-top" :class="index===timeClickIndex?'activeTimeTop':''">
                {{item.showTime}}
              </div>
              <div class="item-desc"  :class="index===timeClickIndex?'activeTimeDesc':''">
                {{buyStatus}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ms-pros></ms-pros>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import MsPros from './MsPros'
export default {
  data() {
    return {
      timeClickIndex: 0,
      isClick: false,
      timeList: [{
        showTime: '09:00'
      },{
        showTime: '10:00'
      },{
        showTime: '13:00'
      },{
        showTime: '16:00'
      }, {
        showTime: '20:00'
      }],
      buyStatus:'抢购中',
    }
  },
  mounted() {
    // 计算元素所占宽度
    let item = this.$refs.item
    let itemWidth = item[0].clientWidth
    let allWidth = item.length * itemWidth
    // console.log(allWidth)
    // 动态改变父元素的宽度
    this.$refs.content.style.width = allWidth + "px";
    this.$nextTick(() => {
           this.scroll = new BScroll(this.$refs.time,{
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
      });
    // 
    // console.log(this.$refs.item)
    // // this.$refs.item.forEach((value => {
    // //   console.log(value)
    // // })
    // for(let i = 0;i<this.$refs.item.length;i++){
    //   console.log(this.$refs.item[i].clientWidth)
    // }
  },
  methods: {
    timeClick(index) {
      this.timeClickIndex = index
    }
  },
  components: {
    MsPros
  }
}
</script>

<style lang="less" scoped>
.ms {
  .title {
    width: 100%;
    position: relative;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      border-top-left-radius: 2rem;
    }
    .edge {
      position: absolute;
      width: 0.15rem;
      background-color: #efcccb;
      top: 0;
      bottom: 0;
      left: 2.8rem;
      box-shadow: 2.5px 0px 5px #ecc0c0;
    }
    .time {
      position: absolute;
      right: 0;
      left: 3rem;
      top: 0;
      bottom: 0;
      margin: .3rem .3rem .3rem 0;
      white-space: nowrap;
      overflow: hidden;
       .content {
         margin-right: .2rem;
         .time-item {
          width: 22%;
          display: inline-block;
          text-align: center;
          touch-action: none;
          .item-top {
            font-size: 22px;
            color: #000;
          }
          .item-desc {
            font-size: 16px;
            // color: #d84f48;
          }
          .activeTimeTop {
            color: #d84f48;
            font-size: 24px;
          }
          .activeTimeDesc {
            color: #d84f48;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>