<template>
    <div id="mainFrame">
        <no-nav-header></no-nav-header>
        <div class="container-fluid">
            <div id="mainRow" class="row">
                <div id="introduction" class="col-md-7 jumbotron">
                 <!-- v-if="selected != 'regist'"> -->
                 <h1>吾家</h1>
                 <h3>吾心安处即是家</h3>
                 <p class="text-left">吾家是为社区生活提供服务的平台，主要用户为物业和住户，物业可购买吾家的产品，也可选择按需定制功能，充分满足物业个性化要求，物业使用web端管理自己的多个小区，以实现智能管理小区的需求。物业购买吾家的产品后，小区住户，租户等可通过APP的使用方便生活。
                 </p>
             </div>


             <div class="col-md-5 jumbotron" id="formFrame">
                 <div>
                    <button @click="selected = 'logIn'" >登录</button>
                    <button @click="selected = 'regist'">注册</button>
                </div>

                <!-- <div class="row"> -->
                <form id="LogInModule" v-if="selected=='logIn'" class=".form-horizontal ">
                 <!-- style="margin-bottom: -99999px; padding-bottom: 99999px"> -->
                 <p  class="form-group">
                    <label for="userId" class="col-sm-3 control-label text-right">账号 </label>
                    <div class="col-sm-8"><input id="userId" v-model="userId" class="form-control"></div>
                </p>
                <p  class="form-group">
                    <label for="password" class="col-sm-3 control-label text-right">密码 </label>
                    <div class="col-sm-8"><input type="password" id="password" v-model="password" class="form-control"></div>
                </p>

                <div class="row">
                    <a @click="selected = 'forget'" class="col-sm-7 small text-left">忘记密码</a>
                    <p class="col-sm-4"></p>
                    <button id="submit" class="col-sm-5 btn btn-default">登录</button>
                </div>

                <div class="row">
                    <p class="col-sm-4"></p>
                    <button class="btn btn-default col-sm-5">下载吾家APP</button>
                </div>
                </form>

                <div id="forgetPassword" v-else-if="selected=='forget'">
                    <button @click="resetByPhone = true">用手机号重置密码</button>
                    <button @click="resetByPhone = false">用邮箱重置密码</button>
                    <p>验证码会发送至您绑定的{{resetByPhone ? '手机' : '邮箱'}}<span>{{resetByPhone ? userPhoneNumber : userEmail}}</span></p>
<!--             <p>验证码会发送至您绑定的邮箱<span>{{userEmail}}</span></p>
-->            <p></p>
<p><label for="forgetSafeCode">请输入验证码 </label><input id="forgetSafeCode" v-model="forgetSafeCode"></p>
<button @click="selected = 'logIn'">返回登录</button>
</div>

<Register v-else></Register>
</div>
</div>
</div>
</div>
</template>


<script>
import NoNavHeader from './NoNavHeader'
import Register from './Register'

export default {
    name: 'InitialPages',
    components: {
        NoNavHeader,
        Register

    },
    data () {
        return {
            userId: '',
            password: '',
            userPhoneNumber: '182****7528',
            userEmail: '1319525622@qq.com',
            forgetSafeCode: '',
            selected: 'logIn',
            resetByPhone: true
            // backgroundURL: './src/assets/images/house.jpg'
        }
    }
}
</script>

<style>
#mainRow {
    display: flex;
    background-image: './src/assets/images/house.jpg'
}
#introduction {
    background: rgba(255, 255, 255, 0.5); 
    display: flex; 
    flex-direction: column; 
    margin-top: 30px;
}
#formFrame {
    background: rgba(255, 255, 255, 0.5); 
    display: flex; 
    flex-direction: column;
    margin-top: 30px;
    margin-left: 10px;
}
</style>