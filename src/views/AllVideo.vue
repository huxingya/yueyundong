<template>
  <section>
    <Head :title="title"></Head>
    <van-tabs @click="onTabClick" class="nav-bar" v-show="tabs.length>1">
      <van-tab v-for="(item,index) in tabs" :key="index" :title="item.type" >
      </van-tab>
    </van-tabs>
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <div class="video-item" v-for="(item,index) in list" :key="index">
        <img :src="item.img" :alt="item.name">
        <p>{{item.name}}</p>
        <p>{{item.people}}人训练过</p>
      </div>
    </van-list>
  </section>
</template>

<script>
  import Head from "@/components/Head"

  export default {
    name: "AllVideo",
    components: {
      Head
    }
    , data() {
      return {
        title: "视频训练",
        reqList: [
          this.$axios.get('http://www.k4me.top:8081/funsport-1.0/alltheme.do'),
          this.$axios.get('http://www.k4me.top:8081/funsport-1.0/theme.do')
        ]
        , tabs: [
          {
            flag: null,
            id: 0,
            type: "全部"
          }
        ],
        list: [],
        loading: false,
        finished: false,
        error: false,
      }
    },
    methods: {
      onTabClick(index, title) {
        var _this = this;
        _this.list = [];
        _this.finished = false;
        _this.loading = true;
        var option = {};
        if (index !== 0) {
          option.typeid = _this.tabs[index].id;
        }
        this.$axios({
          method: 'GET',
          url: 'http://www.k4me.top:8081/funsport-1.0/theme.do',
          params: option
        }).then((data) => {
          _this.loading = false;
          console.log(data.data.data)
          if (data.data.code == 1) {
            console.log(data.data.data)
            _this.list = data.data.data
            _this.finished = true;
          } else {
            _this.error = true;
          }
        }).catch((err) => {
          _this.error = true;
        })
      },
      onLoad() {

      }
    }
    ,
    created() {
      var _this = this;
      _this.$axios.all(this.reqList)
        .then(_this.$axios.spread(function (allResp, themeResp) {
          if (allResp.data.code === 1) {
            _this.tabs.push(...allResp.data.data);
          }
          _this.loading = false;
          console.log(themeResp)
          if (themeResp.data.code === 1) {
            _this.list = themeResp.data.data
            console.log(themeResp.data.data)
            _this.finished = true;
          } else {
            _this.error = true;
          }
        }))
    }
  }
</script>

<style scoped>
  section {
    padding-top: 88px;
  }
.nav-bar{
  position: fixed;
  width: 100%;
  top: 44px;
  left: 0;
  z-index: 999;
}
  .video-item {
    position: relative;
    width: 356px;
    height: 125px;
    margin: 7px auto;
  }

  .video-item img {
    width: 356px;
    height: 125px;
  }

  .video-item p:first-of-type {
    position: absolute;
    left: 10px;
    bottom: 30px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
  }

  .video-item p:last-of-type {
    position: absolute;
    color: #FFFFFF;
    font-size: 12px;
    left: 10px;
    bottom: 10px;
  }
</style>
