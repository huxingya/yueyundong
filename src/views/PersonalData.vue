<template>
    <div>
        <Head :title="title"></Head>
        <h6>基本信息</h6>
        <li v-for="item in arr">
            <p>{{item}}</p>
            <van-icon name="arrow" slot="right" class="tubiao-right"/>
        </li>
        <h5>账户信息</h5>
        <li>
            <p>账号安全</p>
            <van-icon name="arrow" slot="right" class="tubiao-right"/>
        </li>
        <h5>健康信息</h5>
        <li v-for="item in arr1">
            <p>{{item}}</p>
            <van-icon name="arrow" slot="right" class="tubiao-right"/>
        </li>
        <h5></h5>
        <h3>查看分析报告</h3>
        <footer></footer>
    </div>
</template>

<script>
    import Head from '@/components/Head'
    export default {
        name: "PersonalData",
        data(){
            return{
                title:"个人资料",
                arr:['头像','昵称','性别','星座','所在地','个人简介','注册时间','用户ID'],
                arr1:['身高','体重','BML','训练目的','训练基础','训练频次']
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
    h6{
        font-weight: normal;
        background: #aaa;
        margin-top: 46px;
        height: 20px;
        border-bottom:2px solid #ccc;
    }
    h5{
        font-weight: normal;
        background: #aaa;
        height: 20px;
        border-bottom:2px solid #ccc;
    }
    li{
        list-style: none;
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #eee;
    }
    li p{
        margin-left: 10px;
    }
    .tubiao-right{
        font-size:18px;
        margin-right: 10px;

    }
    h3{
        height: 36px;
        border-bottom: 2px solid #eee;
        text-align: center;
        font-weight: normal;
        font-size: 18px;
        line-height: 36px;
    }
    footer{
        background: #aaa;
        height: 46px;
    }
</style>