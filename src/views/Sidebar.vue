<template>
  <div>
    <div class="top van-hairline--bottom">
      <!--            <van-icon name="cross" slot="left" class="cuo" @click.stop="onUserClick"/>-->
      <van-icon name="arrow" slot="right" class="cuo1" @click="PersonalData"/>
      <van-uploader class="dian" :after-read="onRead">
        <img :src="img" />
      </van-uploader>
      <h4>用户名</h4>
      <h5>
        <p>0粉丝</p>
        <p>0关注</p>
      </h5>
    </div>
    <section>
      <div class="huiyuan">
        <van-icon name="gem" slot="left" class="tubiao-left"/>
        <p>会员享特权</p>
        <h6>即刻加入</h6>
      </div>
      <li @click="mamsg">
        <van-icon name="chat" slot="left" class="tubiao-left"/>
        <p>我的信息</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="MyOrder">
        <van-icon name="like" slot="left" class="tubiao-left"/>
        <p>我的订单</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="Coupon">
        <van-icon name="bill" slot="left" class="tubiao-left"/>
        <p>我的优惠券</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="RedeemCode">
        <van-icon name="label" slot="left" class="tubiao-left"/>
        <p>使用兑换码</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="Invitation">
        <van-icon name="friends" slot="left" class="tubiao-left"/>
        <p>邀请好友</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="BodyData">
        <van-icon name="comment" slot="left" class="tubiao-left"/>
        <p>身体数据</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="integral">
        <van-icon name="youzan-shield" slot="left" class="tubiao-left"/>
        <p>我的积分</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li>
        <van-icon name="fire" slot="left" class="tubiao-left"/>
        <p>我的动态</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="Collection">
        <van-icon name="star" slot="left" class="tubiao-left"/>
        <p>我的收藏</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="Download">
        <van-icon name="eye" slot="left" class="tubiao-left"/>
        <p>我的下载</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="Follow">
        <van-icon name="manager" slot="left" class="tubiao-left"/>
        <p>关注我们</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
      <li @click="SetUp">
        <van-icon name="setting" slot="left" class="tubiao-left"/>
        <p>设置</p>
        <van-icon name="arrow" slot="right" class="tubiao-right"/>
      </li>
    </section>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "Sidebar",
    computed:{
      ...mapState(['img'])
    },
    methods: {
      onUserClick() {
        this.$router.push("/my_training")
      },
      PersonalData() {
        this.$router.push("/personaldata")
      },
      mamsg() {
        this.$router.push("/mymsg")
      },
      MyOrder() {
        this.$router.push("/myorder")
      },
      Coupon() {
        this.$router.push("/coupon")
      },
      RedeemCode() {
        this.$router.push("/redeemcode")
      },
      Invitation() {
        this.$router.push("/invitation")
      },
      BodyData() {
        this.$router.push("/bodydata")
      },
      integral() {
        this.$router.push("/integral")
      },
      Collection() {
        this.$router.push("/collection")
      },
      Download() {
        this.$router.push("/Download")
      },
      Follow() {
        this.$router.push("/follow")
      },
      SetUp() {
        this.$router.push("/setup")
      },
      onRead(file) {
        this.$store.commit("upload",file.content)
      }
    }
  }
</script>

<style scoped>
  .top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 200px;
    background: #ffffff;
    z-index: 999;
  }
section{
  padding-top: 200px;
}
  .cuo {
    color: #333;
    position: absolute;
    bottom: 160px;
    left: 20px;
    font-size: 20px;
    font-weight: bolder;
  }

  .cuo1 {
    color: #333;
    position: absolute;
    bottom: 100px;
    right: 20px;
    font-size: 20px;
    font-weight: bolder;
  }

  .top .dian {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    left: 150px;
    top: 40px;

  }

  .top h3 {
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }

  .top h4 {
    font-weight: normal;
    position: absolute;
    color: #aaa;
    left: 168px;
    top: 110px;
  }

  .top h5 {
    width: 100%;
    height: 20px;
    font-weight: normal;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #aaa;
  }
  .top img{
    width: 80px;
    height: 80px;
    border-radius:50%;
    /*position: absolute;*/
    left: 150px;
    top: 40px;
    z-index: 999;
  }

  section .huiyuan {
    height: 50px;
    border-top: 8px solid #eee;
    border-bottom: 8px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tubiao-left {
    font-size: 21px;
    margin-left: 10px;
  }

  .tubiao-right {
    font-size: 21px;
    margin-right: 10px;

  }

  section .huiyuan p {
    margin-right: 60px;
  }

  section .huiyuan h6 {
    font-weight: normal;
    border: 1px solid #aaa;
    width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 15px;
    margin-right: 30px;
  }

  section li {
    list-style: none;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #eee;
  }

  section li p {
    position: absolute;
    left: 76px;
  }

</style>
