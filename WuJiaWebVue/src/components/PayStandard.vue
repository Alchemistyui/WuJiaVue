<template>
    <div>
        <p>选择项目</p>
        <select v-model="project">
            <option v-for="item in projects">{{item.name}}</option>
        </select>

        <p><label for="newName">新项目名称 </label><input id="newName" v-model="newName"></p>

        <p>收费方式</p>
        <select v-model="payType">
            <option v-for="item in types">{{item}}</option>
        </select>

        <p><label for="money">费用详情 </label><input id="money" v-model="money"></p>

        <p>收费项目简介</p>
        <textarea></textarea>

        <button>确认修改</button>

    </div>
</template>

<script>
    
</script>