<template>
  <van-row class="out-top-tab">
    <van-col :span="span" class="top-tab-item" v-for="(item,index) in datas" :key="index">
      <div>
        <span>{{item}}</span>
        <van-icon name="arrow-down"/>
      </div>
    </van-col>
  </van-row>
</template>

<script>
  export default {
    name: "TopTab",
    props:["data"]
    ,
    data(){
      return{
         datas:[]
      }
    },
    computed:{
      span:function () {
        return 24/this.datas.length
      }
    },
    created() {
      this.datas = this.$props.data
    }
  }
</script>

<style scoped>
  .out-top-tab{
    border-bottom: 1px solid #BBBBBB;
    font-size: 14px;
    background: #FFFFFF;
    position: fixed;
    left: 0;
    top: 44px;
    width: 100%;
  }
  .top-tab-item {
    text-align: center;
  }
  .top-tab-item div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  .top-tab-item div span{
    margin-right: 5px;
  }
</style>
