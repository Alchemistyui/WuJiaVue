<template>
    <div id="moduleManage">

      <PropertyHeader></PropertyHeader>

      <!-- <div id="info" class="panel panel-default"> -->
        <div class="jumbotron" id="frame">
            <p class="col-sm-1"></p>
            <div class="col-sm-10">
                <p><b>模块名称：</b>{{moduleName}}</p>
                <p><b>收费标准：</b>{{priceStandard}}/月</p>
                <p><b>剩余时间：</b>{{residueTime}}</p>
                <p><b>功能介绍</b></p>
                <p>{{functionIntro}}</p>
            </div>

            <div id="selects" class="row">
                <p class="col-sm-2 text-right"><label><b>购买时间</b></label></p>
                <div class="col-sm-2">
                    <!-- <p><b>购买时间</b></p> -->
                    <select v-model="time" class="form-control">
                        <!-- <option v-for="item in times">{{item.text}}</option> -->
                        <option>一个月</option>
                        <option>一季度</option>
                        <option>半年</option>
                        <option disabled value="">一年</option> 
                    </select>
                </div>

                <!-- <p class="col-sm-10"></p> -->

                <p class="col-sm-2 text-right"><label><b>支付方式</b></label></p>
                <div class="col-sm-2">
                    <!-- <label style="display: inline"></label> -->
                    <select v-model="method" class="form-control">      
                        <option disabled value="">支付宝</option>
                        <option>微信</option>
                        <option>网银</option>
                    </select>
                </div>

                <!-- <p class="col-sm-10"></p> -->
            </div>

            <!-- <p class="col-sm-1"></p> -->
            <div class="row">
                <p class="col-sm-4"></p>
                <p class="col-sm-3 text-center"><b>应付金额 &nbsp;&nbsp; </b>{{money}}</p>
            </div>

            <p class="col-sm-4"></p>
            <button class="btn btn-success col-sm-3">确定</button>

            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import PropertyHeader from './PropertyHeader'

export default {
    name: 'moduleManage',
    components: {
        PropertyHeader

    },
    data () {
        return {
            moduleName: '缴费管理系统',
            priceStandard: 1000,
            residueTime: '3天',
            functionIntro: '此系统为物业和业主提供更便捷的缴费方式，解决了常规物业缴费排队的情况，也便于物管管理收入及清楚得知未缴费情况，物业还可发送通知提醒未缴住户缴费。',
            time: '',
            method: '',
            // money: 0
            times: [
            {key: 1, text: '一个月'},
            {key: 4, text: '一季度'},
            {key: 6, text: '半年'},
            {key: 12, text: '一年'}
            ]
        }
    },
    computed: {
        money: function () {
            // alert(this.time)
            // var i = 0;
            // for (i = 0; i < 4; i++) {
            //     if (this.times[i].text === this.time) {
            //         break;
            //     }
            // };
            // alert(this.times[i].text);
            var t = 0;
            switch (this.time) {
                case '一个月' :
                t = 1; break;
                case '一季度' :
                t = 4; break;
                case '半年' :
                t = 6; break;
                default :
                t = 12; break;
            }
            // alert(t)
            return this.priceStandard * t;
        }
    }
}
</script>

<style>
#frame {
    margin: 0.7rem;
    width: 90%;
    border: 1px solid #cccccc;
   /* -webkit-border-radius: 3px;
   -moz-border-radius: 3px;*/
   border-radius: 0.2rem;
   background: rgba(255, 255, 255, 0.7);
}
#selects {
    margin-left: 0.25rem;
}
</style>