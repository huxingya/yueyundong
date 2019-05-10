<template>
    <section>
        <van-swipe :autoplay="3000" :height="200" class="van-swipe">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image"/>
          </van-swipe-item>
        </van-swipe>
      <van-row type="flex" justify="space-around" class="sub-nav-box">
        <router-link class="sub-nav" v-for="(item,index) in shoppingNavs" :key="index" :to="{path:item.url,query:{title:item.title}}">
          <figure @click='move(index)'>
            <img :src="item.imgUrl">
            <figcaption>{{item.title}}</figcaption>
          </figure>
        </router-link>
      </van-row>
      <van-cell title="精选好货" :border="false">
        <van-icon slot="right-icon" name="ellipsis" class="good-icon" />
      </van-cell>
      <swiper class="swiper-choiceness" :options="swiperOptionChoiceness" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiper-slide">
          <lazy-component>
            <img  v-lazy="images[0]" >
          </lazy-component>
<!--          <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">-->
        </swiper-slide>
        <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
        </swiper-slide>
      </swiper>
      <div>
        <van-cell title="精选好货" :border="false" >
          <span>更多</span>
        </van-cell>
          <van-row type="flex" justify="space-between" style="flex-wrap: wrap;padding: 0 15px;margin-top:-15px;border-bottom:20px solid #EEEEEE" >
            <van-col><div class="commodity-card">
              <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
              <p>产品名称</p>
              <p>￥998</p>
            </div></van-col>
            <van-col><div class="commodity-card">
              <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
              <p>产品名称</p>
              <p>￥998</p>
            </div></van-col>
            <van-col><div class="commodity-card">
              <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
              <p>产品名称</p>
              <p>￥998</p>
            </div></van-col>
          </van-row>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Shopping",
      data(){
          return{
            active: 0,
            images: [
              'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
              'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
              'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
            ],
            shoppingNavs:[
              {title:"视频训练",imgUrl:"../../static/img/home_train_recommend_prgrams.png",url:"/video_drill"},
              {title:"训练计划",imgUrl:"../../static/img/home_train_recommend_plan.png",url:"/training_plan"},
              {title:"自由训练",imgUrl:"../../static/img/home_train_recommend_feed_st.png",url:"/drill_recommend"},
            ],
            swiperOptionChoiceness: {
              freeMode: true,
              slidesPerView: 3,
              centeredSlides: true,
            },
          }
      },
      created() {
        this.$axios({
          method: 'GET',
          url: 'http://10.8.159.34:8080/goodsshow.do'
        }).then((data) => {
          console.log(data)
        }).catch((err) => {
        })
      }
    }
</script>

<style scoped>
  section{
    padding-top: 44px;
  }
  .van-swipe img{
    width: 100%;
    height: 200px;
  }
  .sub-nav-box{
    border-bottom: 20px solid #EEEEEE;
  }
  .sub-nav {
    width: 70px;
    height: 78px;
  }

  .sub-nav figure {
    color: #101010;
    font-size: 14px;
    width: 100%;
    margin: 0;
    text-align: center;
    padding-top: 10px;
  }
  .sub-nav img{
    width: 22px;
    height: 35px;
    margin: 0 auto;
  }
  .good-icon{
    transform: rotate(90deg);
  }
  swiper-choiceness{
    height: 107px;
  }
  .swiper-slide{
    height: 107px;
    background: #2ac845;
    margin-right: 80px;
  }
  .swiper-choiceness img {
    width: 220px;
    height: 107px;
  }

  .swiper-choiceness {
    margin-left: -145px;
  }
  .commodity-card{
    width: 165px;
    height: 225px;
    margin-top: 15px;
    background: aqua;
  }
  .commodity-card img{
    width: 165px;
    height: 165px;
  }
  .commodity-card p:first-of-type{
    font-size: 12px;
    line-height: 17px;
    margin-top: 10px;
  }
  .commodity-card p:last-of-type{
    font-size: 16px;
    line-height: 22px;
    margin-top: 4px;
  }
</style>
