<template>
    <div class="servicePages">

        <!-- <PropertyHeader></PropertyHeader> -->
        <!-- <ResidentHeader></ResidentHeader> -->
        <div class="row">
            <div  class="sideBar col-sm-2">
                <ul class="list-group">
                    <li class="list-group-item"><router-link v-bind:to="'/ServiceManage'">客服人员</router-link></li>
                    <li class="list-group-item"><router-link v-bind:to="'/ServiceProblem'">客服问题</router-link></li>
                </ul>
            </div>

            <div id="serviceTable" class="col-sm-9 serviceJumbotron">
                <h3>客服人员</h3>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>客服姓名</th>
                            <th>客服邮箱</th>
                            <th>客服手机</th>
                            <th></th>
                        </tr>
                        <!-- 需数据：模块名称，模块收费标准，模块购买日期及购买时间段 -->
                        <tr v-for="(service, index) in services">
                            <td>{{service.name}}</td>
                            <td>{{service.email}}</td>
                            <td>{{service.phone}}</td>
                            <td style="text-align: center"><button class="btn btn-success" v-on:click="deletePerson(index)">解绑</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="col-sm-2"></p>
            <div id="addService" class="col-sm-9 serviceJumbotron">
                <h3>添加客服</h3>
                <form class="form-horizontal">
                    <div class="form-group">
                        <p><label for="IDNumber" class="col-sm-4 control-label text-left">身份证号 </label>
                            <div class="col-sm-4"><input class="form-control" id="IDNumber" v-model="IDNumber"></div></p>
                        </div>
                        <div class="form-group">
                            <p><label for="name" class="col-sm-4 control-label text-left">姓名 </label>
                                <div class="col-sm-4"><input class="form-control" id="name" v-model="name"></div></p>
                            </div>
                            <div class="form-group">
                            <p><label for="email" class="col-sm-4 control-label text-left">邮箱</label>
                                <div class="col-sm-4"><input class="form-control" id="email" v-model="email"></div></p>
                            </div>
                            <div class="form-group">
                                <p><label for="phone" class="col-sm-4 control-label text-left">电话 </label>
                                    <div class="col-sm-4"><input class="form-control" id="phone" v-model="phone"></div></p>
                                </div>
                                <p>初始密码为123456，客服可自行修改</p>

                                <div class="row">
                                    <p class="col-sm-4"></p>
                                    <a @click="addPerson" class="btn btn-success col-sm-4">确定添加</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </template>

            <script>
            import PropertyHeader from './PropertyHeader'
            import ResidentHeader from './ResidentHeader'

            export default {
                components: {
                    PropertyHeader,
                    ResidentHeader

                },
                data () {
                    return {
                        IDNumber: '',
                        services: [
                        {name: '李雷', email: '123@qq.com', phone: '18212341234'},
                        {name: '韩梅梅', email: '123@qq.com', phone: '13712341234'}
                        ],
                        name: '',
                        phone: '',
                        email: ''

                    }
                },
                methods:{

                    deletePerson: function(index){
                        console.log(index);
                        this.services.splice(index,1);
                    },
                    addPerson: function () {
                        // alert('233'),
                        this.services.push({name: this.name, email: this.email, phone: this.phone})
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.IDNumber = '';
                        // alert('emm')
                    }
                }
            }
            </script>

            <style>
            .serviceJumbotron {
                margin: 0.4rem 0.3rem 0.2rem 0rem;
                width: 75%;
                border: 1px solid #cccccc;
                    /* -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;*/
                    border-radius: 0.2rem;
                    background: rgba(255, 255, 255, 0.7);
                }
                #addService, #serviceTable h3 {
                    text-align: center;
                }
                #addService label {
                    padding-top: 0.1rem;
                }
                .sideBar {
                    margin-top: 0.4rem;
                    margin-left: 0.1rem;
                }
                #addService a {
                    margin-top: 0.2rem;
                    bottom: 0.2rem;
                }
                </style>