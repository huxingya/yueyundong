<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
      <van-tabbar-item icon="medel">训练</van-tabbar-item>
      <van-tabbar-item icon="star">VIP会员</van-tabbar-item>
      <van-tabbar-item icon="browsing-history">发现</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        active: 0,
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
