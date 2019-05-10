<template>
    <div>
        <header>
            <van-icon name="arrow-left" size='18px' class="tubiao" @click="onClickLeft"/>
            <van-icon name="question-o" size='18px' class="tubiao1"/>
        </header>
        <section>
            <div class="shang">
                <p>我的积分</p>
                <h1>66</h1>
            </div>
            <li v-for="item in arr">
                <div>
                    <h3>{{item.name}}</h3>
                    <h5>{{item.name1}}</h5>
                </div>
                <p>{{item.name2}}</p>
            </li>
        </section>
        <footer>
            <p>赚积分</p>
            <p>/</p>
            <p>花积分</p>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "Integral",
        data(){
            return{
                arr:[
                    {name:'打开FitTime(每天加一次)',name1:"2018-10-31 20:20",name2:'+10'},
                    {name:'打开FitTime(每天加一次)',name1:"2018-10-31 20:20",name2:'+10'},
                    {name:'打开FitTime(每天加一次)',name1:"2018-10-31 20:20",name2:'+10'},
                    {name:'打开FitTime(每天加一次)',name1:"2018-10-31 20:20",name2:'+10'},
                    {name:'打开FitTime(每天加一次)',name1:"2018-10-31 20:20",name2:'+10'}
                ]
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    header{
        width: 100%;
        height: 46px;
        background: #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tubiao{
        margin-left: 10px;
    }
    .tubiao1{
        margin-right: 10px;
    }
    section{
        height: 100px;
        background: #ccc;
    }
    section .shang{
        height: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li{
        list-style: none;
        height: 66px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #aaa;
    }
    li h3{
        font-weight: normal;
        font-size: 12px;
        margin-bottom: 10px;
    }
    li h5{
        font-weight: normal;
        font-size: 12px;
    }
    li div{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
    }
    li p{
        margin-right: 10px;
    }
    footer{
        height: 100px;
        width: 100%;
        background: #555;
        position: fixed;
        bottom: 0px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
    }
</style>