<template>
  <section>
    <van-swipe :autoplay="3000" :height="200" class="van-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image"/>
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-around" class="sub-nav-box">
      <router-link class="sub-nav" v-for="(item,index) in shoppingNavs" :key="index"
                   :to="{path:item.url,query:{title:item.title}}">
        <figure @click='move(index)'>
          <img :src="item.imgUrl">
          <figcaption>{{item.title}}</figcaption>
        </figure>
      </router-link>
    </van-row>
    <van-cell title="精选好货" :border="false">
      <van-icon slot="right-icon" name="ellipsis" class="good-icon"/>
    </van-cell>
    <swiper class="swiper-choiceness" :options="swiperOptionChoiceness" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-slide">
        <!--<lazy-component>
          <img  v-lazy="images[0]" >
        </lazy-component>-->
        <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
      </swiper-slide>
    </swiper>
    <div v-for="(item,index) in data" :key="index">
      <van-cell :title="item.title" :border="false">
        <span v-show="index!=0">更多</span>
      </van-cell>
      <van-row type="flex" justify="space-between"
               style="flex-wrap: wrap;padding: 0 15px;margin-top:-15px;border-bottom:20px solid #EEEEEE">
        <van-col v-for="(itemChild,indexChild) in item.datas" :key="indexChild">
          <div class="commodity-card"  @click="tiaozhuan">
            <img :src="itemChild.picture" alt="">
            <p class="van-ellipsis">{{itemChild.name}}</p>
            <p>￥{{itemChild.pricemin}}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Shopping",
    methods: {
      tiaozhuan() {
        this.$router.push("/goods_detail")
      }
    },
    data() {
      return {
        data: [],
        active: 0,
        images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
        ],
        shoppingNavs: [
          {title: "运动服饰", imgUrl: "../../static/img/home_train_recommend_prgrams.png", url: "/shopping"},
          {title: "健身器材", imgUrl: "../../static/img/home_train_recommend_plan.png", url: "/shopping"},
          {title: "健康食品", imgUrl: "../../static/img/home_train_recommend_feed_st.png", url: "/shopping"},
        ],
        swiperOptionChoiceness: {
          freeMode: true,
          slidesPerView: 'auto',
          centeredSlides : true,
          observer:true,
          paginationClickable: true,
          spaceBetween: 20
        },
      }
    },
    created() {
      this.$axios({
        method: 'GET',
        url: 'http://www.k4me.top:8081/funsport-1.0/goodsshow.do'
      }).then((data) => {
        this.data = data.data.data
        console.log(data)
      }).catch((err) => {
      })
    }
  }
</script>

<style scoped>
  section {
    padding-top: 44px;
  }

  .van-swipe img {
    width: 100%;
    height: 200px;
  }

  .sub-nav-box {
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

  .sub-nav img {
    width: 22px;
    height: 35px;
    margin: 0 auto;
  }

  .good-icon {
    transform: rotate(90deg);
  }

  swiper-choiceness {
    height: 107px;
  }

  .swiper-slide {
    height: 107px;
    width: 220px;
  }

  .swiper-choiceness img {
    width: 220px;
    height: 107px;
  }

  .swiper-choiceness {
    margin-left: -120px;
  }

  .commodity-card {
    width: 165px;
    height: 225px;
    margin-top: 15px;
  }

  .commodity-card img {
    width: 165px;
    height: 165px;
  }

  .commodity-card p:first-of-type {
    font-size: 12px;
    line-height: 17px;
    margin-top: 10px;
  }

  .commodity-card p:last-of-type {
    font-size: 16px;
    line-height: 22px;
    margin-top: 4px;
    color: #7766cc;
  }
</style>
