<template>
    <div>
        <router-link to="/select">
            <van-nav-bar
                    left-arrow
                    fixed
                    :border="false"
                    left-text="返回"
            />
        </router-link>
        <section>
            <h3>根据您的信息</h3>
            <h3>我们为您推荐了以下课程</h3>
        </section>
        <h5>系列课程</h5>
        <van-checkbox-group v-model="result">

            <van-checkbox
                    checked-color="#07c160"
                    v-for="item in list"
                    :key="item"
                    :name="item"
                    class="box"
            >
                <div class="check">
                    <div>
                        <h6>男士增肌训练</h6>
                        <p>546513练过</p>
                    </div>
                </div>
            </van-checkbox>
        </van-checkbox-group>




        <van-button type="primary" class="btn" to="loading">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "Screen",
        data() {
            return {
                list: ['a', 'b', 'c'],
                result: []
            };
        }


    }
</script>

<style scoped>
   *{
       margin: 0;
       padding: 0;
   }
    section{
        margin-top: 20%;
        height: 0px;
    }
    h3{
        text-align: center;
        font-weight: normal;
        line-height:30px;
    }
    h5{
        margin-top: 30%;
        text-align: center;
        font-weight:normal;
        font-size: 16px;
    }
    .check{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        margin-left: 120px;
    }
    .check h6{
        font-weight: normal;
        font-size: 16px;

    }
    .check p{
        font-size:12px;
        margin-top: 20px;
    }
   .btn{
       position: fixed;
       bottom: 0px;
       background: #666;
       width: 100%;
       border: 0;
       color: #000;
   }
    .box{
        margin-left: 20px;
    }
</style>