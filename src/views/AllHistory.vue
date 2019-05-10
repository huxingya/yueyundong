<template>
  <section>
    <van-nav-bar left-arrow fixed @click-right="onClickRight" @click-left="onClickLeft">
      <van-icon name="arrow-left" slot="left" size="20px" color="#101010"/>
      <span slot="title">全部训练历史
<!--        &nbsp;&nbsp;<van-icon name="arrow-down" slot="left" size="20px" color="#101010"/>-->
      </span>
      <van-icon name="share" slot="right" size="20px" color="#101010"/>
    </van-nav-bar>
    <DateTabs @tabIndex="tabIndex"></DateTabs>
    <van-cell :title="titleLeft" :border="false">
      <span>{{titleRight}}</span>
    </van-cell>
    <div class="out-statistics">
      <van-row type="flex" justify="center">
        <van-col :border="false" class="total-time"><span>0</span><span>分钟</span></van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="7" class="statistics"><p>参与/天</p>
          <p>0</p></van-col>
        <van-col span="10" class="statistics"><p>次数</p>
          <p>0</p></van-col>
        <van-col span="7" class="statistics"><p>消耗/大卡</p>
          <p>0</p></van-col>
      </van-row>
    </div>
    <div class="out-total-his" v-show="isTotalShow">
      <van-cell title="好友排名" value="LV0" class="total-item">
        <span class="custom-text"><van-icon name="user-circle-o" size="20px" tag="span"/><span>-</span></span>
        <span class="custom-text" slot="right-icon"><van-icon name="arrow" class="custom-icon" tag="span"/></span>
      </van-cell>
      <van-cell title="训练等级" value="LV0" class="total-item">
        <span class="custom-text" slot="right-icon"><van-icon name="arrow" class="custom-icon" tag="span"/></span>
      </van-cell>
      <van-cell title="我的勋章" value="0" class="total-item">
        <span class="custom-text" slot="right-icon"><van-icon name="arrow" class="custom-icon" tag="span"/></span>
      </van-cell>
      <van-cell title="训练记录" class="total-item">
        <span class="custom-text" slot="right-icon"><van-icon name="arrow" class="custom-icon" tag="span"/></span>
      </van-cell>
    </div>
    <van-popup v-model="isShareShow" position="bottom" >
      <div class="share-box">
        <share :config="config"></share>
      </div>
    </van-popup>
  </section>
</template>

<script>
  import DateTabs from "@/components/DateTabs"

  export default {
    name: "AllHistory",
    data() {
      return {
        titleLeft: "累计训练",
        titleRight: "",
        isTotalShow:true,
        isShareShow:false,
        config:{
          url: 'http://www.52955.club', // 网址，默认使用 window.location.href
          source:'', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
          title: '我的训练历史', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
          description: 'hi', // 描述, 默认读取head标签<meta name="description" content="PHP弱类型的实现原理分析" />
          image : '', // 图片, 默认取网页中第一个img标签
          sites: ['qzone', 'qq', 'weibo','wechat', 'douban'], // 启用的站点
          disabled: [], // 禁用的站点
          wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
          wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
        }

      }
    },
    components: {
      DateTabs
    },
    methods: {
      onClickLeft(){
        this.$router.go(-1)
      },
      onClickRight(){
        this.isShareShow=true
      },
      tabIndex(index) {
        switch (index) {
          case 0:
            this.titleLeft = "累计训练";
            this.titleRight = "";
            this.isTotalShow=true;
            break;
          case 1:
            this.titleLeft = "本月,训练时长";
            this.titleRight = "返回本月";
            this.isTotalShow=false;
            break;
          case 2:
            this.titleLeft = "本周,训练时长";
            this.titleRight = "返回本周";
            this.isTotalShow=false;
            break;
          case 3:
            this.titleLeft = "本日,训练时长";
            this.titleRight = "返回本日";
            this.isTotalShow=false;
            break;
        }
      }
    }
  }
</script>

<style scoped>
  section {
    padding-top: 80px;
  }

  .total-time {
    margin-right: -30px;
  }

  .total-time span:first-of-type {
    font-size: 48px;
    font-weight: bold;
  }

  .total-time span:last-of-type {
    display: inline-block;
    font-size: 12px;
    width: 30px;
    text-align: center;
  }

  .out-statistics {
    padding: 20px 10px;
    border-bottom: 1px solid #BBBBBB;
  }

  .statistics {
    text-align: center;
  }

  .statistics p:first-of-type {
    font-size: 12px;
    line-height: 30px;
  }

  .statistics p:last-of-type {
    font-size: 28px;
    font-weight: bold;
  }

  .out-total-his {
    background: #EEEEEE;
  }

  .total-item {
    margin-bottom: 10px;
  }

  .custom-text span {
    vertical-align: middle;
    font-size: 24px;
    margin-left: 5px;
  }
  .share-box{
    height: 100px;
    padding: 15px;
  }
</style>
