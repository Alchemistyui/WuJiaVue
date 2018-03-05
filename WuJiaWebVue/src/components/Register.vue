<template>
    <div id="Register">
        <!-- <p id="indextitle" style="font-size: 50px;">吾家</p>
            <p style="font-size: 30px;">吾心安处即是家</p> -->

        <!-- <button>注册</button>
            <button>登录</button> -->

            <div v-if="!propertyRegist">
                <p><label for="userName">名字 </label><input id="userName" v-model="userName"></p>
                <p><label for="userId">账号 </label><input id="userId" v-model="userId"></p>
                <p><label for="registerSafeCode">验证码 </label><input id="registerSafeCode" v-model="registerSafeCode"></p>
                <p><label for="password">密码 </label><input id="password" v-model="password"></p>
                <p><label for="rePassword">确认密码 </label><input id="rePassword" v-model="rePassword"></p>

                <select v-model="identity">
                    <option>住户</option>
                    <option>家政维修人员</option>
                    <option>物业客服</option>
                    <option>物业公司</option>
                </select>


                <button @click="propertyRegist = true">注册</button>
                <p>点击「注册」按钮，即代表你同意<a>吾家用户协议</a></p>
                <button>下载吾家APP</button>

            </div>

            <PropertyRegist v-if="propertyRegist"></PropertyRegist>

        </div>
    </template>

    <script>
    import PropertyRegist from './PropertyRegist'
    export default {
        name: 'Register',
        components : {
            PropertyRegist
        },
        data () {
            return {
                userName: '',
                userId: '',
                registerSafeCode: '',
                password: '',
                rePassword: '',
                identity: '',
                propertyRegist: false


            }
        }
    }
    </script>