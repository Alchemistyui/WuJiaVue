<template>
    <div id="Register">
        <!-- <p id="indextitle" style="font-size: 50px;">吾家</p>
            <p style="font-size: 30px;">吾心安处即是家</p> -->

        <!-- <button>注册</button>
            <button>登录</button> -->

            <div v-if="!propertyRegist">
                <form class="form-horizontal">
                    <div class="form-group">
                        <p><label class="col-sm-4 control-label text-left" for="userName">名字 </label>
                            <div class="col-sm-8"><input class="form-control" id="userName" v-model="userName"></div></p>
                        </div>
                        <div class="form-group">
                            <p><label class="col-sm-4 control-label" for="userId">账号 </label><div class="col-sm-8"><input class="form-control" id="userId" v-model="userId"></div></p>
                        </div>
                        <div class="form-group">
                         <p><label class="col-sm-4 control-label" for="registerSafeCode">验证码 </label>
                            <div class="col-sm-8"><input class="form-control" id="registerSafeCode" v-model="registerSafeCode"></div></p>
                        </div>
                        <div class="form-group">
                            <p><label class="col-sm-4 control-label" for="password">密码 </label>
                                <div class="col-sm-8"><input class="form-control" type="password" id="password" v-model="password"></div></p>
                            </div>
                            <div class="form-group">
                                <p><label class="col-sm-4 control-label" for="rePassword">确认密码 </label>
                                    <div class="col-sm-8"><input class="form-control" type="password" id="rePassword" v-model="rePassword"></div></p>
                                </div>

                                <p class="col-sm-4"><label>选择身份</label></p>
                                <div class="col-sm-8">
                                    <select v-model="identity" class="form-control">
                                        <option>住户</option>
                                        <option>家政维修人员</option>
                                        <option value="">物业公司</option>
                                    </select>
                                </div>
                                <div class="row">
                                    <!-- <p class="col-sm-6"></p> -->
                                    <button  class="btn btn-success col-sm-6" @click="show">注册</button>
                                </div>
                                <p><small>点击「注册」按钮，即代表你同意<a>吾家用户协议</a></small></p>

                                <div class="row">
                                <p class="col-sm-4"></p>
                                <button class="btn btn-info col-sm-6">下载吾家APP</button>
                            </div>
                            </form>
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
                    },
                    methods: {
                        show: function () {
                            this.propertyRegist = true
                            alert('emm')
                        }
                    }
                }
                </script>

                <style>
                button {
                    margin-top: 0.2rem;
                } 
                </style>