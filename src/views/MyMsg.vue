<template>
    <div>
        <Head :title="title"></Head>
        <ul>
            <li v-for="item in arr">
                <span class="tubiao-left"></span>
                <p>{{item}}</p>
                <van-icon name="arrow" slot="right" class="tubiao-right"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import Head from '@/components/Head'
    export default {
        name: "MyMsg",
        data(){
            return{
                title:"消息中心",

                arr:['评论','@我','赞与答谢','粉丝']
            }
        },
        components:{
            Head
        }
    }
</script>

<style scoped>
    ul{
        margin-top: 46px;
    }
    li{
        list-style: none;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #eee;

    }
    li span{
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-left: 10px;
    }
    .tubiao-right{
        margin-right: 10px;
    }
    li p{
        position: absolute;
        left: 56px;
        font-size: 12px;
    }
</style>