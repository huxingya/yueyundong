<template>
  <div>
    <header>
      <van-row type="flex" justify="space-around" align="center">
        <van-col span="22">
          <van-tabs v-model="active" @click="onClick" @change="onChange">
            <van-row type="flex" slot="nav-left" align="center">
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
      onChange(active) {
        console.log(active)
      },
      onClick(index, title) {
        this.active = index;
        switch (index) {
          case 0:
            this.$router.push("/drill_recommend")
            break;
          case 1:
            this.$router.push("/plaza")
            break;
        }
      },
      onToSearch() {
        this.$router.push("/search")
      }
    },
    watch: {
      active: function (newValue, oldValue) {
        this.$store.commit({
          type: 'setDrillTabIndex',
          amount: {
            drillTabIndex: this.active
          }

        });
      }
    },
    created() {
      this.active = this.$store.getters.getDrillTabIndex;
      this.$store.commit({
        type: 'setMainTabIndex',
        amount: {
          mainTabIndex: 1
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
