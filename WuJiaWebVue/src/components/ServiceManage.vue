<template>
    <div>
        <div id="serviceTable">
            <p>客服人员</p>
            <table>
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
            </table>
        </div>

        <div id="addService">
            <p>添加客服</p>
            <p><label for="IDNumber">身份证号 </label><input id="IDNumber" v-model="IDNumber"></p>
            <p><label for="name">姓名 </label><input id="name" v-model="name"></p>
            <p><label for="phone">电话 </label><input id="phone" v-model="phone"></p>
            <p>初始密码为123456，客服可自行修改</p>

            <button>确定添加</button>
        </div>
    </div>
</template>

<script>
export default {
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