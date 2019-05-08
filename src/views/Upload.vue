<template>
    <div>
        <router-link to="/nickname">
            <van-nav-bar
                    left-arrow
                    fixed
                    :border="false"
                    left-text="返回"
            />
        </router-link>
        <div class="upload">
            <p>点击头像</p>
            <p>上传自己的照片吧</p>
            <van-uploader>
                <h2>头像</h2>
            </van-uploader>
        </div>
        <van-button type="primary" class="btn" to="gender">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "Upload"

    }
</script>

<style scoped>
    .upload{
        margin-top: 40%;
        text-align: center;
    }
    h2{
        font-size: 12px;
        font-weight: normal;
        width: 60px;
        height: 60px;
        border: 1px solid #aaa;
        border-radius:50%;
        text-align:center;
        line-height: 60px;
        margin-top: 70%;
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