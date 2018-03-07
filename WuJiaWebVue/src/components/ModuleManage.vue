<template>
    <div id="moduleManage">
        <p>模块名称：{{moduleName}}</p>
        <p>收费标准：{{priceStandard}}</p>
        <p>剩余时间：{{residueTime}}</p>
        <p>功能介绍</p>
        <p>{{functionIntro}}</p>

        <p>购买时间</p>
        <select v-model="time">
            <option>1个月</option>
            <option>一季度</option>
            <option>半年</option>
            <option disabled value="">一年</option>
        </select>

        <p>支付方式</p>
        <select v-model="method">
            <option>微信</option>
            <option disabled value="">支付宝</option>
            <option>网银</option>
        </select>

        <p>应付金额{{money}}</p>

        <button>确定</button>
    </div>
</template>

<script>
export default {
    name: 'moduleManage',
    data () {
        
        return {
            moduleName: '',
            priceStandard: '',
            residueTime: '',
            functionIntro: '',
            time: '',
            method: '',
            money: 0
        }
    }
}
</script>