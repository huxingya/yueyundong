<template>
    <div>
        <h3>取一个你喜欢的昵称吧</h3>
        <div class="container">
            <van-field
                    v-model="username"
                    placeholder="2-15个字"

            />
        </div>

        <van-button type="primary" class="btn" to="upload">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "nickname",
        data(){
            return{
                username:''
            }
        }
    }
</script>

<style scoped>
    h3{
        text-align: center;
        margin-top: 30%;
    }
    .btn{
        position: fixed;
        bottom: 0px;
        background: #666;
        width: 100%;
        border: 0;
        color: #000;
    }
    .container{
        width: 60%;
        margin-left:20%;
        border-bottom:1px solid #ccc ;
    }
</style>