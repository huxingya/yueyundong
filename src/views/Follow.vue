<template>
    <div>
        <Head :title="title"></Head>
        <section>
            <h3>免费福利</h3>
            <div class="list">
                <van-icon name="chat" class="tubiao"/>
                <p>微信服务号</p>
                <h5>FTservice服务</h5>
                <van-icon name="arrow" class="tubiao1"/>
            </div>
            <h3>资讯趣闻</h3>
            <div class="list">
                <van-icon name="browsing-history" class="tubiao"/>
                <p>官方微博</p>
                <h5>@FitTime即刻运动</h5>
                <van-icon name="arrow" class="tubiao1"/>
            </div>
            <h3>原创视频</h3>
            <div class="list">
                <van-icon name="play-circle" class="tubiao"/>
                <p>官方频道</p>
                <h5>凌云健身</h5>
                <van-icon name="arrow" class="tubiao1"/>
            </div>
            <div class="list">
                <van-icon name="play-circle" class="tubiao"/>
                <p>官方频道</p>
                <h5>凌云健身</h5>
                <van-icon name="arrow" class="tubiao1"/>
            </div>
            <h3>联系客服</h3>
            <div class="list">
                <van-icon name="service" class="tubiao"/>
                <p>FitTime小助手</p>
                <van-icon name="arrow" class="tubiao1"/>
            </div>
            <h3>商业合作</h3>
            <div class="list">
                <van-icon name="invition" class="tubiao"/>
                <p>邮箱:bd@fit-time.com</p>
                <van-icon name="arrow" class="tubiao1"/>
            </div>
            <h3></h3>
        </section>
        <footer>
            <h3>~ .. ~</h3>
            <p>3</p>
        </footer>
    </div>
</template>

<script>
    import Head from "@/components/Head"
    export default {
        name: "Follow",
        data(){
            return{
                title:'关注我们'
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
        width: 100%;
        position: fixed;
        top:46px;
    }
    section h3{
        width: 100%;
        height: 30px;
        background: #eee;
        line-height: 30px;
        color: #aaa;
        font-size: 12px;
        padding-left: 10px;
    }
    section .list:nth-of-type(3){
        border-bottom: 2px solid #aaa;
    }
    .tubiao{
        margin-left: 10px;
    }
    .tubiao1{
        margin-right: 10px;
    }
    .list{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .list p{
        position: absolute;
        left: 30px;
        top: 19px;
    }
    .list h5{
        font-weight: normal;
        position: absolute;
        top: 19px;
        right: 28px;
    }
    footer{
        width: 100%;
        background: #aaa;
        height: 46px;
        position: fixed;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    footer h3{
        font-weight: normal;
    }
    footer p{
        font-size: 12px;
    }
</style>