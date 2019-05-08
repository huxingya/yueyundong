<template>
    <div>
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </form>
      <van-cell title="亲们都在搜" :border="false" class="hot-search-title"/>
      <div class="hot-keyword">
        <span>111</span>
        <span>111</span>
        <span>111</span>
        <span>111</span>
        <span>111</span>
        <span>111</span>
        <span>111</span>
        <span>111</span>
        <span>111</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
      data(){
          return{
            value:""
          }
      },
      methods:{
        onSearch(){

        },
        onCancel(){

        }
      }
    }
</script>

<style scoped>
.hot-search-title{
  border-top: 1px solid #BBBBBB;
  font-size: 12px;
  color: #101010;
}
  .hot-keyword{
    display: flex;
    flex-wrap: wrap;
    background: #FFFFFF;
  }
  .hot-keyword span{
    padding: 0 13px;
    font-size: 12px;
    color: #101010;
    border: 1px solid #BBBBBB;
    margin:0 0 15px 15px;
    line-height: 23px;
    height: 23px;
    border-radius: 11px;
  }
</style>
