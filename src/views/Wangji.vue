<template>
    <div>
        <van-nav-bar
                left-arrow
                fixed
                :border="false"
                left-text="返回"
                @click-left="onClickLeft"
        />
        <van-button class="btn2" to="/wangji">忘记密码</van-button>

        <van-cell-group class="wangji">
        <van-field
                v-model="username"
                placeholder="手机号/邮箱"

        />
        <van-field
                v-model="sms"
                center
                clearable
                placeholder="验证码"

        >
            <van-button slot="button" size="small" type="primary">获取验证码</van-button>
        </van-field>
        <van-field
                v-model="password"
                type="password"
                placeholder="设置新密码(6位或以上)"
                :border = "false"
        />
        </van-cell-group>
        <van-button class="btn" to="/login">确定</van-button>
    </div>

</template>

<script>
    export default {
        name: "Wangji",
        data(){
            return{
                username:'',
                password:'',
                sms:''
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .wangji{
        margin-top:46px;

    }
    .btn2{
        text-align: center;
        border: 0;
        width: 100%;
        margin-top: 56px;
        font-size:18px;
    }
    .btn{
        width: 100%;
        background: #aaa;
        text-align:center;
        margin-top:30px;
    }
</style>