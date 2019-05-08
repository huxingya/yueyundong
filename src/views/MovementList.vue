<template>
    <div class="content">
      <div v-for="item in data" @click="">
        <p>{{item.place}}</p>
        <p>{{item.num}}个动作</p>
      </div>
    </div>
</template>

<script>

  export default {
    name: "MovementList",
    data() {
      return {
        title: "动作库",
        data:[],
      }
    },
    created() {
      document.documentElement.scrollTop =0
      this.data = this.$store.state.actionTypeData;
    },
  }
</script>

<style scoped>
  .content {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 44px;
  }

  .content div {
    height: 116px;
    width: 116px;
    background: #FFFFFF;
    margin:6px 0 0 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content div p:first-child{
    font-size: 14px;
  }
  .content div p:last-child{
    font-size: 10px;
  }
</style>
