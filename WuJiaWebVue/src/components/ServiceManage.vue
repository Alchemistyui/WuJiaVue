<template>
    <div>

        <PropertyHeader></PropertyHeader>


        <div id="serviceTable" class="jumbotron">
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
                    <tr v-for="service in services">
                        <td>{{service.name}}</td>
                        <td>{{service.email}}</td>
                        <td>{{service.phone}}</td>
                        <td><button>解绑</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="addService" class="jumbotron">
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
                    <p><label for="phone" class="col-sm-4 control-label text-left">电话 </label>
                        <div class="col-sm-4"><input class="form-control" id="phone" v-model="phone"></div></p>
                </div>
                <p>初始密码为123456，客服可自行修改</p>

                <p class="col-sm-4"></p>
                <button  class="btn btn-success col-sm-4">确定添加</button>
            </form>
        </div>
    </div>
</template>

<script>
import PropertyHeader from './PropertyHeader'

export default {
    components: {
        PropertyHeader

    },
    data () {
        return {
            IDNumber: '',
            services: [
            {name: '李雷', email: '123@qq.com', phone: '18212341234'},
            {name: '韩梅梅', email: '123@qq.com', phone: '13712341234'}
            ],
            name: '',
            phone: ''

        }
    }
}
</script>

<style>
.jumbotron {
    margin: 0.4rem 0.6rem 0.4rem 0.6rem;
    width: 90%;
    border: 1px solid #cccccc;
   /* -webkit-border-radius: 3px;
   -moz-border-radius: 3px;*/
   border-radius: 0.2rem;
   background: rgba(255, 255, 255, 0.7);
}
#addService {
    text-align: center;
}
#addService label {
    padding-top: 0.2rem;
}
</style>