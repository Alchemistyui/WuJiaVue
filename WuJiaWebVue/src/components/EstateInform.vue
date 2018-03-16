<template>
    <div id="inform">
        <!-- <PropertyHeader></PropertyHeader> -->

        <div class="row">
            <div class="col-sm-2 sideBar">
                <ul class="list-group">
                    <li class="list-group-item"><router-link v-bind:to="'/EstateInform'">通知公告</router-link></li>
                    <li class="list-group-item"><router-link v-bind:to="'/ResidentInfo'">房屋及住户信息</router-link></li>
                </ul>
            </div>

            <div id="main"  class="col-sm-9 jumbotron">
                <form class="form-horizontal">
                    <div class="form-group">
                        <p><label id="nameLabel" class="col-sm-2 control-label text-center" for="informName">公告标题 </label>
                            <!-- <p class="col-sm-1"></p> -->
                            <div class="col-sm-8"><input class="form-control" id="informName" v-model="informName"></div></p>
                        </div>

                        <div class="row">
                            <p><label id="contentLabel" class="col-sm-2 text-left">公告内容</label></p>
                            <div class="col-sm-8"><textarea class="form-control" rows="5" v-model="informContent"></textarea></div>
                        </div>
                        <!-- <p>发布小区</p> -->
                        <div class="row">
                            <p class="col-sm-2"><label>发布小区</label></p>
                            <div class="col-sm-4">
                                <select v-model="estate" class="form-control">
                                    <option v-for="estate in estates">{{estate}}</option>
                                </select>
                            </div>
                            <!-- <p class="col-sm-6"></p> -->
                        </div>
                        <div class="row">
                            <p class="col-sm-3"></p>
                            <router-link v-bind:to="'/EstateInform'" @click.native="message('已发布')" class="col-sm-5 btn btn-success">立刻发布</router-link>
                            <!-- <button class="btn btn-success" onclick="alert('已发送提醒')">提醒缴费</button> -->
                        </div>
                        <div class="row">
                            <p class="col-sm-2"><label>发布时间</label></p>
                            <div class="col-sm-4">
                                <datepicker v-model="date" language="ch"></datepicker>
                            </div>
                        </div>
                        <div class="row">
                            <p class="col-sm-3"></p>
                            <!-- <button class="col-sm-5 btn btn-success">定时发布</button> -->
                            <router-link v-bind:to="'/EstateInform'" @click.native="message('将在指定日期发布')" class="col-sm-5 btn btn-success">定时发布</router-link>
                        </div>
                        

                    </form>
                </div>
            </div>

        </div>
    </template>

    <script>
    import datepicker from 'vue-date'
    import PropertyHeader from './PropertyHeader'

    export default {
        name: 'EstateInform',
        components: { 
            datepicker,
            PropertyHeader
        },
        data () {
            let now = new Date()
            return {
                informName: '',
                informContent: '',
                estates: ['A小区', 'B小区', 'C小区'],
                estate: 'A小区',
            // year: now.getFullYear(),
            // month: now.getMonth(),
            // day: now.getDate(),
            date: now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()
        }
    },
    methods: {
        message: function (msg) {
            alert(msg),
            this.informName = '',
            this.informContent = ''
        }
    }
    // computed: {
    //     date () {
    //         return this.year+'-'+(this.month+1)+'-'+this.day
    //     }
    // }
}
</script>

<style>
/*#info {
    margin:0;
    padding:0;
}*/
#inform .jumbotron {
    margin: 0.4rem 0.3rem 0.4rem 0.1rem;
    width: 75%;
    border: 1px solid #cccccc;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 0.2rem;
    background: rgba(255, 255, 255, 0.7);
}
.sideBar {
    margin-top: 0.4rem;
    margin-left: 0.1rem;
}
#inform #main textarea {
    font-size: large;
}
/*#main button {
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
}*/
#inform .row {
    margin-top: 0.2rem;
}
#nameLabel, #contentLabel {
    margin-top: 0.1rem;
}
#nameLabel {
    margin-left: -0.2rem;
    padding-right: 0.2rem;
    margin-right: 0.4rem;
}
#inform #main {
    padding-left: 1.5rem;
}
#informName {
    margin-left: -0.2rem;
}
</style>