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
                   <div class="btn-group" role="group" aria-label="...">
                    <p class="col-sm-1"></p>
                    <button class="btn btn-warning col-sm-5" @click="selected = 'logIn'" >登录</button>
                    <button class="btn btn-warning col-sm-5" @click="selected = 'regist'">注册</button>
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
                        <a id="forget" @click="selected = 'forget'" class="col-sm-7 small text-left">忘记密码</a>
                        <p class="col-sm-3"></p>
                        <button id="submit" class="col-sm-7 btn btn-success">登录</button>
                    </div>

                    <div class="row">
                        <p class="col-sm-3"></p>
                        <button id="download" class="btn btn-info col-sm-7">下载吾家APP</button>
                    </div>
                </form>

                <div id="forgetPassword" v-else-if="selected=='forget'">
                    <div class="btn-group" role="group" aria-label="...">
                        <button class="btn btn-info col-sm-6" @click="resetByPhone = true">用手机号重置密码</button>
                        <button class="btn btn-info col-sm-6" @click="resetByPhone = false">用邮箱重置密码</button>
                    </div>
                    <p>验证码会发送至您绑定的{{resetByPhone ? '手机' : '邮箱'}}<b>{{resetByPhone ? userPhoneNumber : userEmail}}</b></p>
                    <p></p>
                    
                    <label id="codeLabel" for="forgetSafeCode" class="col-sm-5 control-label text-center">请输入验证码 </label>
                    <div class="col-sm-6"><input id="forgetSafeCode" v-model="forgetSafeCode" class=" form-control"></div>
                    <p class="col-sm-2"></p>
                    <button @click="selected = 'logIn'" class="btn btn-success col-sm-6">返回登录</button>
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
    margin: 0.7rem 0rem 0.8rem 0rem;
    /*background-image: url('./src/assets/images/house.jpg');*/
}
#introduction {
    background: rgba(255, 255, 255, 0.7); 
    display: flex; 
    flex-direction: column; 
    /*margin-top: 0.2rem;*/
}
#formFrame {
    background: rgba(255, 255, 255, 0.7); 
    display: flex; 
    flex-direction: column;
    /*margin-top: 0.2rem;*/
    margin-left: 0.1rem;
}

.form-group label {
    margin-top: 0.3rem;
}
input {
    margin-top: 0.2rem;
}
#submit, #download {
    margin-top: 0.2rem;
}
#forget {
    margin-top: 0.1rem;
}
#forgetPassword {
    margin-left: 0.6rem;
}
#codeLabel {
    margin-top: 0.25rem;
}
#forgetPassword button {
    margin-top: 0.2rem;
}
</style>