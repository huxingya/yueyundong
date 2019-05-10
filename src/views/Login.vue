<template>
    <div>
        <van-tabs class="btn" color="#000" v-model="active">
            <van-tab title="注册">
                <van-cell-group class="login">
                    <van-field
                            v-model="phone"
                            placeholder="手机号/邮箱"
                    />
                    <van-field
                            v-model="code"
                            center
                            clearable
                            placeholder="验证码"
                    >
                        <van-button slot="button" size="small" type="primary" @click="YZ">获取验证码</van-button>
                    </van-field>
                    <van-field
                            v-model="password"
                            type="password"
                            placeholder="密码(6位或以上)"
                            :border = "false"
                    />
                </van-cell-group>
                <van-button type="primary" class="btn1" :disabled="zq" @click="tab">注册</van-button>

                <p>注册即表示您同意<router-link to="/agreement" class="xian">用户协议</router-link>及<router-link to="/pact" class="xian">隐私条款</router-link></p>


            </van-tab>
            <van-tab title="登录">
                <van-cell-group class="login">
                <van-field
                        v-model="phone1"
                        placeholder="手机号/邮箱"
                        color
                />
                <van-field
                        v-model="password1"
                        type="password"
                        placeholder="密码(6位或以上)"
                        :border = "false"
                />
                </van-cell-group>
                <van-button type="primary" class="btn1" @click="login">登录</van-button>
                <van-button class="btn2" to="/wangji">忘记密码</van-button>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import qs from 'qs';
    import { Dialog,Toast } from 'vant';
    import axios from 'axios';
    export default {
        name: "login",
        data(){
            return{
                phone:'',
                phone1:'',
                password:'',
                password1:'',
                sms:'',
                active:0,
                regu:"^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$",
                zq:true,
                code:''
            }
        },
        methods:{
            YZ(){
                var re = new RegExp(this.regu)
                if(!re.test(this.phone)){
                    Dialog.alert({
                        message: '请输入正确的手机号'
                    })
                }else{
                    axios({
                        method:'post',
                        url:'http://www.k4me.top:8081/funsport-1.0/phonecode.do',
                        headers:{"Content-type":"application/x-www-form-urlencoded"},
                        data:qs.stringify({phone:this.phone})
                    }).then((data)=>{
                        console.log(data.data)
                        if(data.data.code==1){
                            Toast(data.data.msg)
                        }
                    })
                    this.zq=false
                }
            },
            tab(){
                axios({
                    method:'post',
                    url:'http://www.k4me.top:8081/funsport-1.0/useradd.do',
                    headers:{"Content-type":"application/x-www-form-urlencoded"},
                    data:qs.stringify({code:this.code,password:this.password,phone:this.phone})

                }).then((data)=>{
                    console.log(data.data)
                    this.$router.push("/complete")
                })
            },
            login(){
                    axios({
                        method:'post',
                        url:'http://www.k4me.top:8081/funsport-1.0/login.do',
                        headers:{"Content-type":"application/x-www-form-urlencoded"},
                        data:qs.stringify({password:this.password1,phone:this.phone1})
                    }).then((data)=>{
                        console.log(data.data)
                    })

            }

        }


    }
</script>

<style scoped>
   .login{
       margin-top:60px;
   }
   .btn{
       margin-top: 80px;
   }
   .btn p{
       font-size: 12px;
       margin-top: 50px;
       text-align: center;
   }
   .btn .xian{
       text-decoration:underline;
   }
   .btn1{
       width: 100%;
       border: 0;
       background: #333;
       color: #ccc;
       font-size: 18px;
       margin-top:58px;
   }
   .btn2{
       text-align: center;
       border: 0;
       width: 100%;
   }
</style>
