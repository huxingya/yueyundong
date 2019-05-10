<template>
    <div>
        <Head :title="title"></Head>
        <section>
            <van-tabs type="card" color="#333">
                <van-tab title="日"></van-tab>
                <van-tab title="周"></van-tab>
                <van-tab title="月"></van-tab>
            </van-tabs>
        </section>
        <li v-for="item in arr">
            <h3>{{item}}</h3>
            <p>--</p>
        </li>
        <footer>
            <van-tabbar v-model="active" active-color="#sss">
                <van-tabbar-item icon="setting-o">记录体重</van-tabbar-item>
                <van-tabbar-item icon="setting-o">记录体重</van-tabbar-item>
                <van-tabbar-item icon="setting-o">记录体重</van-tabbar-item>
            </van-tabbar>
        </footer>

    </div>
</template>

<script>
    import Head from '@/components/Head'
    export default {
        name: "BodyData",
        data(){
            return{
                title:'身体数据',
                arr:['体重','体脂','胸围','腰围','手臂围','大腿围','小腿围'],
                active: 0
            }
        },
        components:{
            Head
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    section{
        height: 30px;
        margin-top:46px;
    }
    li{
        list-style: none;
        width: 96%;
        height: 100px;
        background:#666;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:10px auto;
        margin-bottom:0px;
        border-radius:8px;
    }
    li h3{
        font-weight: normal;
        font-size: 13px;
        color: aliceblue;
        margin-left: 10px;
    }
    li p{
        font-size: 30px;
        margin-right: 10px;

    }
</style>