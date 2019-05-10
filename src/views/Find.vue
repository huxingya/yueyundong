<template>
    <section>
      <header>
        <van-row type="flex" justify="space-around" align="center">
          <van-col span="22">
            <van-tabs :line-height="0" @click="onClick">
              <van-row type="flex" slot="nav-left" align="center">
                <van-icon name="user-circle-o" size="24px"/>
              </van-row>
<!--              <van-tab title="精选"></van-tab>-->
<!--              <van-tab title="视频"></van-tab>-->
              <van-tab title="商城"></van-tab>
              <van-row type="flex" slot="nav-right" align="center">
                <van-icon name="search" size="24px" @click="onToSearch"/>
              </van-row>
            </van-tabs>
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
            mainTabIndex: 2
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
