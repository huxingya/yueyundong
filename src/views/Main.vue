<template>
  <section>
    <article>
      <router-view></router-view>
    </article>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
      <van-tabbar-item icon="medel">训练</van-tabbar-item>
      <van-tabbar-item icon="star">发现</van-tabbar-item>
      <van-tabbar-item icon="browsing-history">个人中心</van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: "Main",
    data() {
      return {
        active: 0
      }
    },
    methods: {
      onChange(active) {
        switch (active) {
          case 0:
            this.$router.push("/my_training")
            break;
          case 1:
            this.$router.push("/drill")
            break;
          case 2:
            this.$router.push("/shopping")
            break;
          case 3:
            this.$router.push("/sidebar")
            break;
        }
      }
    },
    watch: {
      active: function (newValue, oldValue) {
        this.$store.commit({
          type: 'setMainTabIndex',
          amount: {
            mainTabIndex: this.active
          }

        });
      }
    },
    created() {
      this.active = this.$store.getters.getMainTabIndex;
    },

  }
</script>

<style scoped>
  img {
    width: 100%;
  }
  article{
    padding-bottom: 44px;
  }
</style>
