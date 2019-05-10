<template>
    <div class="container">
        <Head :title="title"></Head>
        <section>
            <li v-for="item in arr">
                <p>{{item}}</p>
                <h6>158mb</h6>
                <h5>3.2.8.8</h5>
                <van-icon name="arrow" slot="right" class="tubiao-right"/>
            </li>
            <div class="btn">
                <van-button type="primary" class="anniu" @click="SignOut">退出登录</van-button>
            </div>
        </section>

    </div>
</template>

<script>
    import Head from "@/components/Head"
    export default {
        name: "SetUp",
        data(){
            return{
                title:"设置",
                arr:['消息设置','使用帮助','清理缓存','关于我们','用户协议','去评分','版本号']
            }
        },
        components:{
            Head
        },
        methods:{
            SignOut(){
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .container{
        display: flex;
        flex-direction: column;
    }
    section{
        margin-top: 46px;
    }
    section li:nth-child(3) h6{
        display: block;
    }
    section li:nth-child(7) h5{
        display: block;
    }
    li{
        list-style: none;
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    li p{
        margin-left: 10px;
        font-size: 12px;
    }
    li h6{
        font-weight: normal;
        position: absolute;
        right: 20px;
        display: none;
    }
    li h5{
        font-weight: normal;
        position: absolute;
        right: 20px;
        display: none;
    }
    .btn{
        height: 310px;
        background: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .anniu{
        width: 100px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        border-color: #aaa;
        color: #333;
    }
</style>