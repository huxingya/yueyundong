<template>
  <div>
    <header>
      <van-row type="flex" justify="space-around" align="center" >
        <van-col span="22">
          <van-tabs @click="onClick">
            <van-row type="flex"  slot="nav-left" align="center">
              <van-icon name="user-circle-o" size="24px"/>
            </van-row>
            <van-tab title="推荐"></van-tab>
            <van-tab title="广场"></van-tab>
            <van-row type="flex" slot="nav-right" align="center">
              <van-icon name="search" size="24px" @click="onToSearch"/>
            </van-row>
          </van-tabs>
        </van-col>
      </van-row>

    </header>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Drill",
    data() {
      return {
        active: 0,
      }
    },
    methods: {
      onClick(index, title) {
        switch (index) {
          case 0:
            this.$router.push("/drill_recommend")
            break;
          case 1:
            this.$router.push("/plaza")
            break;
        }
      },
      onToSearch(){
        this.$router.push("/search")
      }
    },
  }
</script>

<style scoped>


  header {
    position: fixed;
    width: 100%;
    height: 44px;
    top: 0;
    left: 0;
    z-index: 999;
    background: #FFFFFF;
  }
</style>
