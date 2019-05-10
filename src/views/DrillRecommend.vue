<template>
  <section>
    <div ref="section">
      <van-swipe :autoplay="3000" :height="79">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image"/>
        </van-swipe-item>
      </van-swipe>

      <van-row type="flex" justify="space-around" class="out-sub-nav">
        <router-link class="recommend-nav" v-for="(item,index) in homeNavs" :key="index"
                     :to="{path:item.url,query:{title:item.title}}">
          <figure @click='move(index)'>
            <img :src="item.imgUrl">
            <figcaption>{{item.title}}</figcaption>
          </figure>
        </router-link>

      </van-row>
      <div class="out-plan">
        <van-cell-group>
          <van-cell title="跟着计划练">
            <van-row slot="label" type="flex" justify="space-between">
              <span class="custom-text">训练计划</span>
              <span class="custom-text">{{planIndex+1}}/{{plans.length}}</span>
            </van-row>
          </van-cell>
        </van-cell-group>
        <SwiperCard :picList="plans" @swiperIndex="getSwiperIndex"></SwiperCard>
      </div>

      <div class="out-video">
        <van-cell title="跟着视频练" :border="false"/>

        <div v-for="(item,index) in videoList" :key="index">
          <van-cell :border="false" :title="item.name" class="custom-text"/>
          <swiper class="swiper-video" :options="swiperOptionVideo" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="swiper-slide" v-for="(itemChild,indexChild) in item.list" :key="indexChild">
              <div class="swiper-slide-content">
                <img :src="itemChild.img" :alt="itemChild.name">
                <p>{{itemChild.name}}</p>
                <p>{{itemChild.people}}人训练过</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!--教练专区-->
        <div>
          <van-cell :border="false" title="教练专区" class="custom-text"/>
          <swiper class="swiper-coach" :options="swiperOptionCoach" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="swiper-slide-coach" v-for="(item,index) in coaches" :key="index">
              <div>
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <van-row type="flex" justify="space-around" align="center" class="all-video-btn">
          <van-col span="9">
            <van-button size="small" round :block="true" to="/all_video">
              <van-row type="flex" justify="center" align="center">全部视频训练
                <van-icon name="arrow" size="14px"/>
              </van-row>
            </van-button>
          </van-col>
        </van-row>
      </div>

      <div class="out-drill-bottom" >
        <div>
          <van-cell title="自有训练" :border="false">
            <template slot="label">
              <span class="custom-text">工具</span>
            </template>
          </van-cell>
          <van-row type="flex" justify="space-between" class="out-bottom-tool">
            <van-col span="7" v-for="(item,index) in toolItems" :key="index">
              <div class="bottom-tool-item">
                <van-icon :name="item.iconName" size="24px" @click="onToolClick(item.url)"/>
                <div>{{item.title}}</div>
              </div>
            </van-col>
          </van-row>
        </div>

        <div>
          <van-cell :border="false">
            <template slot="title">
              <span class="custom-text">部位</span>
            </template>
          </van-cell>
          <div class="out-tag-list">
            <router-link tag="span"  v-for="(item,index) in actionData" :key="index" :to="{path:'/movement_part',query:{actionType:JSON.stringify(item)}}">{{item.place}}</router-link>
          </div>
        </div>
        <div>
          <van-cell :border="false">
            <template slot="title">
              <span class="custom-text">时长</span>
            </template>
          </van-cell>
          <div class="out-tag-list">
            <router-link v-for="(item,index) in timeData" tag="span" to="/drill_recommend" :key="index">{{item}}</router-link>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import SwiperCard from "@/components/SwiperCard"
  export default {
    name: "DrillRecommend",
    components:{
      SwiperCard
    },
    data() {
      return {
        active: 0
        ,images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
        ]
        ,homeNavs: [
          {title: "视频训练", imgUrl: "../../static/img/home_train_recommend_prgrams.png", url: "/all_video"},
          {title: "训练计划", imgUrl: "../../static/img/home_train_recommend_plan.png", url: "/training_plan"},
          {title: "自由训练", imgUrl: "../../static/img/home_train_recommend_feed_st.png", url: "/drill_recommend"},
          {title: "训练营", imgUrl: "../../static/img/home_train_recommend_fat_lose.png", url: "/video_drill"}
        ]
        ,toolItems: [
          {title: "动作库", iconName: "pending-payment", url: "/movement_data"},
          {title: "自定义训练", iconName: "edit", url: "/video_drill"},
          {title: "计时器", iconName: "clock-o", url: "/video_drill"}
        ]
        ,reqList: [
          this.$axios.get('http://10.8.159.34:8080/alltraining.do'),
          this.$axios.get('http://10.8.159.34:8080/actionType.do')
        ]
        ,plans:[]
        ,videoList:[]
        ,coaches:[]

        ,actionData:[]
        ,timeData:["<10分钟","10~20分钟","20~30分钟",">30分钟",]
        ,planIndex:0
        ,
        swiperOptionPlan: {
          loop: true,
          initialSlide: 0,
          effect: 'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 0,
            stretch: -30,
            depth: 70,
            modifier: 2,
            slideShadows: false
          },
        },
        swiperOptionVideo: {
          slidesPerView : 3,
          centeredSlides : true,
        },
        swiperOptionCoach: {
          slidesPerView : 7,
          centeredSlides : true,
        }
      }
    },
    methods: {
      move(index) {
        if (index == 2) {
          this.$nextTick(() => {
            document.documentElement.scrollTop = this.$refs.section.scrollHeight
          })
        }
      },
      onToolClick(url) {
        this.$router.push(url);
      },
      getSwiperIndex(index){
        this.planIndex = index
      },
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

    created() {
      var _this = this;
      _this.$axios.all(this.reqList)
        .then(_this.$axios.spread(function (allResp, actionResp) {
          var homeData = allResp.data.data;
          console.log(homeData)
          if (allResp.data.code === 1){
            _this.coaches = homeData.coach;
            _this.plans = homeData.plan;
            _this.videoList.push({name:"为你推荐",list:homeData.recommend});
            _this.videoList.push({name:homeData.theme1.data[0].type,list:homeData.theme1.data});
            _this.videoList.push({name:homeData.theme2.data[0].type,list:homeData.theme2.data});
            _this.videoList.push({name:homeData.theme3.data[0].type,list:homeData.theme3.data});
          }
          if (actionResp.data.code === 1){
            _this.$store.commit({
              type: 'setActionTypeData',
              amount: {
                actionTypeData: actionResp.data.data
              }

            });
          }
      }))
      this.actionData = this.$store.state.actionTypeData;
    }
    ,
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }

  }
</script>

<style scoped>
  img {
    width: 100%;
  }

  section {
    margin-top: 44px;
    margin-bottom: 50px;
  }

  .recommend-nav {
    width: 70px;
    height: 72px;
  }

  .recommend-nav figure {
    color: #101010;
    font-size: 14px;
    width: 100%;
    margin: 0;
    text-align: center;
    padding-top: 10px;
  }

  .recommend-nav img {
    width: 22px;
    height: 35px;
    margin: 0 auto;
  }

  .recommend-nav:nth-of-type(4) img {
    width: 48px;
  }

  .out-plan, .out-video {
    border-top: 6px solid #eee;
  }

  .custom-text {
    color: #101010;
    font-size: 12px;
  }
  .swiper-slide-content{
    position: relative;
    width: 202px;
    height: 100px;
  }
  .swiper-slide-content img{
    /*position: absolute;*/
    background: #EEEEEE;
  }
  .swiper-slide-content p:first-of-type{
    position: absolute;
    left: 10px;
    bottom: 30px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
  }
  .swiper-slide-content p:last-of-type{
    position: absolute;
    color: #FFFFFF;
    font-size: 12px;
    left: 10px;
    bottom: 10px;
  }
  .swiper-slide{
    margin-right: 60px;
  }
  .swiper-video img {
    width: 202px;
    height: 100px;
  }

  .swiper-video {
    margin-left: -160px;
  }

  .swiper-coach img {
    width: 72px;
    height: 70px;
  }

  .swiper-coach {
    margin-left: -250px;
  }
  .swiper-coach .swiper-slide-coach{
    margin-right: 20px;
  }
  .swiper-slide-coach>div{
    position: relative;
    width: 72px;
    height: 70px;
  }
  .swiper-slide-coach>div p{
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: white;
    bottom: 10px;
  }
  .all-video-btn {
    height: 75px;
  }

  .out-bottom-tool {
    padding: 0 15px;
  }

  .bottom-tool-item {
    width: 100%;
    text-align: center;
    height: 46px;
    padding-top: 4px;
    border-radius: 10px;
    background: rgba(245, 245, 246, 1);
    font-size: 14px;
  }

  .out-tag-list {
    display: flex;
    flex-wrap: wrap;

  }

  .out-tag-list span {
    width: 105px;
    height: 26px;
    border-radius: 13px;
    background: #f5f5f5;
    font-size: 14px;
    margin: 0 0 15px 15px;
    line-height: 26px;
    text-align: center;
  }
</style>
