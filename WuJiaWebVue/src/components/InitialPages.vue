<template>
    <div id="mainFrame">
        <no-nav-header></no-nav-header>


        <div id="introduction">
         <!-- v-if="selected != 'regist'"> -->
         <p id="indextitle" style="font-size: 50px;">吾家</p>
         <p style="font-size: 30px;">吾心安处即是家</p>
         <p style="font-size: 15px;">吾家是为社区生活提供服务的平台，主要用户为物业和住户，物业可购买吾家的产品，也可选择按需定制功能，充分满足物业个性化要求，物业使用web端管理自己的多个小区，以实现智能管理小区的需求。物业购买吾家的产品后，小区住户，租户等可通过APP的使用方便生活。
         </p>
     </div>


     <div>
        <button @click="selected = 'logIn'">登录</button>
        <button @click="selected = 'regist'">注册</button>
    </div>


    <div id="LogInModule" v-if="selected=='logIn'">
        <p><label for="userId">账号 </label><input id="userId" v-model="userId"></p>
        <p><label for="password">密码 </label><input id="password" v-model="password"></p>

        <button @click="selected = 'forget'">忘记密码</button>
        <button id="submit">登录</button>
        <button>下载吾家APP</button>
    </div>

    <div id="forgetPassword" v-else-if="selected=='forget'">
        <button>用手机号重置密码</button>
        <button @click="resetByPhone = false">用邮箱重置密码</button>
        <p>验证码会发送至您绑定的{{resetByPhone ? '手机' : '邮箱'}}<span>{{resetByPhone ? userPhoneNumber : userEmail}}</span></p>
<!--             <p>验证码会发送至您绑定的邮箱<span>{{userEmail}}</span></p>
-->            <p></p>
<p><label for="forgetSafeCode">请输入验证码 </label><input id="forgetSafeCode" v-model="forgetSafeCode"></p>
<button @click="selected = 'logIn'">返回登录</button>
</div>

<Register v-else></Register>

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
        }
    }
}
</script>