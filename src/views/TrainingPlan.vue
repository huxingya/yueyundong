<template>
  <div>
    <Head :title="title" :rightShow="false"></Head>
    <section>
      <van-list
        v-model="loading"
        :error.sync="error"
        :finished="finished"
        error-text="请求失败，点击重新加载"
        @load="reqData"
      >
        <img :src="item.img" alt="" v-for="(item,index) in items" :key="index">
      </van-list>
    </section>
  </div>
</template>

<script>
  import Head from "@/components/Head"

  export default {
    name: "TrainingPlan",
    data(){
      return{
        title: "",
        error: false,
        loading: false,
        finished: false,
        items:  []
      }
    },
    components: {
      Head
    },
    methods:{
      reqData(){
        var _this=this;
        this.$axios({
          method:'GET',
          url:'http://10.8.159.34:8080/plan.do',
        }).then((data)=>{
          if(data.data.code==1){
            _this.items = data.data.data;
            _this.loading=false;
            _this.finished=true;
          }else {
            _this.error= true;
          }
        }).catch((err)=>{
          _this.error= true;
        })
      },
    },
    created() {
      this.title = this.$route.query.title;
      this.reqData();
    }
  }
</script>

<style scoped>
  section{
    padding-top: 44px;
  }
  img {
    width: 356px;
    height: 125px;
    background: red;
    margin: 7px auto;
  }
  .content{
    margin: 10px;
    background: transparent;
  }
</style>
