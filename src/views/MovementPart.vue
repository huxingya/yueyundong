<template>
  <div class="out-part">
    <TopTab :data="tabs"></TopTab>
    <div>
      <van-list
        v-model="loading"
        :error.sync="error"
        :finished="finished"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <van-row class="out-card" v-for="(item,index) in data" :key="index">
          <van-col><img
            src="https://w2.dwstatic.com/yy/ojiastoreimage/20160429_621bb9e534150cb33800359dbdef0e57.jpg?imageview/2/0/w/361/blur/1/format/webp"
            alt=""></van-col>
          <van-col>
            <van-row class="card-text">
              <p>{{item.name}}</p>
              <p>{{item.instrument}}</p>
            </van-row>
          </van-col>
        </van-row>
      </van-list>
    </div>
  </div>
</template>

<script>
  import TopTab from "@/components/TopTab"

  export default {
    name: "MovementPart",
    data(){
      return{
        actionType:"",
        tabs:["部位","教练"],
        data:[],
        error: false,
        loading: false,
        finished: false
      }
    },
    components: {
      TopTab
    },
    created() {
      this.actionType= JSON.parse(this.$route.query.actionType);

      if (this.actionType){
        this.tabs.splice(0,1,JSON.parse(this.$route.query.actionType).place)
      }
      this.reqData();
      console.log(this.actionType,this.tabs)
    },
    methods:{
      reqData(){
        var _this=this;
        this.$axios({
          method:'GET',
          url:'http://10.8.159.34:8080/actionvideolist.do',
          params:{placeid:this.actionType.placeid,sex:1}
        }).then((data)=>{
          console.log(data.data)
          if(data.data.code==1){
            _this.data = data.data.data;
            _this.loading=false;
            _this.finished=true;
          }else {
            _this.error= true;
          }
        }).catch((err)=>{
          _this.error= true;
        })
      },
      onLoad() {

      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .out-part {
    padding-top: 84px;
  }

  .out-card {
    height: 51px;
    border-bottom: 1px solid #BBBBBB;
  }

  .out-card img {
    width: 90px;
    height: 51px;
    margin-right: 10px;
  }

  .out-card p:first-child {
    font-size: 14px;
    margin-top: 7px;
  }
  .out-card p:last-child {
    font-size: 12px;
    margin-top: 1px;
  }
</style>
