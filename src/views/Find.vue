<template>
    <section>
      <header>
        <van-row type="flex" justify="space-around" align="center">
          <van-col span="4">
            <van-row type="flex" justify="center">
              <van-icon name="user-circle-o" size="24px"/>
            </van-row>
          </van-col>
          <van-col span="16">
            <van-tabs :line-height="0" @click="onClick">
<!--              <van-tab title="精选"></van-tab>-->
<!--              <van-tab title="视频"></van-tab>-->
              <van-tab title="商城"></van-tab>
            </van-tabs>
          </van-col>
          <van-col span="4">
            <van-row type="flex" justify="center">
              <van-icon name="search" size="24px" @click="onToSearch"/>
            </van-row>
          </van-col>
        </van-row>
      </header>
      <router-view></router-view>
    </section>
</template>

<script>
    export default {
        name: "Find"
      ,data() {
        return {
          active: 0,
        }
      },
      methods: {
        onClick(index, title) {
          this.$toast(title);
        },
        onToSearch(){
          this.$router.push("/search")
        }
      },
      created() {
        this.$store.commit({
          type: 'setMainTabIndex',
          amount: {
            mainTabIndex: 3
          }
        });
      }
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
