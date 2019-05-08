<template>
  <van-tabs type="card" @click="onClick">
    <van-tab title="总"></van-tab>
    <van-tab title="月"></van-tab>
    <van-tab title="周"></van-tab>
    <van-tab title="日"></van-tab>
  </van-tabs>
</template>

<script>
    export default {
        name: "DateTabs",
        methods:{
          onClick(index,title){
            this.$emit("tabIndex",index)
          }
        }
    }
</script>

<style scoped>

</style>
