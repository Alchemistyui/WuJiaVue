<template>
    <div>
        <p>选择项目</p>
        <select v-model="project">
            <option v-for="item in projects">{{item}}</option>
        </select>

        <p v-if="project != '新项目'"><label for="newName">新项目名称 </label><input id="newName" v-model="newName"></p>

        <p>收费方式</p>
        <select v-model="payType">
            <option v-for="item in types">{{item}}</option>
        </select>

        <p><label for="money">费用详情 </label><input id="money" v-model="money">/月</p>

        <p>收费项目简介</p>
        <textarea v-model="projectIntro"></textarea>

        <button>确认</button>

    </div>
</template>

<script>
export default {
    data () {
        return {
            project: '',
            projects: ['新项目','物业管理费','停车费'],
            newName: '',
            payType: '',
            types: ['按月收费','按季度收费','按半年收费','按年收费'],
            money: 0,
            projectIntro: ''
        }
    }
}
</script>