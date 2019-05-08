<template>
    <div>
        <router-link to="/upload">
            <van-nav-bar
                    left-arrow
                    fixed
                    :border="false"
                    left-text="返回"
            />
        </router-link>
        <div class="section">
            <h3>您的性别是?</h3>
            <van-uploader>
               <h2><img src="../assets/u=2106480328,2703833442&fm=27&gp=0.jpg"></h2>
                <h2>男</h2>
            </van-uploader>
            <van-uploader>
                <h2><img src="../assets/u=2605772213,1403754938&fm=27&gp=0.jpg"></h2>
                <h2>女</h2>
            </van-uploader>
        </div>
        <van-button type="primary" class="btn" to="meter">下一步</van-button>

    </div>
</template>

<script>
    export default {
        name: "Gender"
    }
</script>

<style scoped>

    .section{
        margin-top: 30%;
        text-align: center;
    }
    .section img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .section h2{
        font-weight: normal;
        font-size: 12px;
        margin-top: 50%;
    }
    h3{
        font-weight: normal;
    }
    .btn{
        position: fixed;
        bottom: 0px;
        background: #666;
        width: 100%;
        border: 0;
        color: #000;
    }
</style>