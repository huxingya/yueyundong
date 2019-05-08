<template>
    <div>
        <h3>恭喜您完成注册</h3>
        <p>完善基本信息</p>
        <p>获得更适合您的训练</p>
        <van-button type="primary" class="btn" to="nickname">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "complete"
    }
</script>

<style scoped>
    h3{
        fong-size:22px;
        font-weight: normal;
        text-align:center;
        margin-top: 50%;
    }
    p{
        text-align: center;
        font-size:12px;
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