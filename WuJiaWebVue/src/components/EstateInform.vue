<template>
    <div id="inform">
        <div id="sideBar">
            <table>
                <tr><a href="#">通知公告</a></tr>
                <tr><a href="#">住户信息</a></tr>
            </table>
        </div>

        <div id="main">
            <p><label for="informName">公告标题 </label><input id="informName" v-model="informName"></p>
            <p>公告内容</p>
            <textarea v-model="informContent"></textarea>

            <p>发布小区</p>
            <select v-model="estate">
                <option v-for="estate in estates">{{estate}}</option>
            </select>

            <button>立刻发布</button>

            <p>发布时间</p>
            <datepicker v-model="date"></datepicker>
            <button>定时发布</button>
        </div>
    </div>
</template>

<script>
import datepicker from 'vue-date'
export default {
    name: 'EstateInform',
    components: { datepicker },
    data () {
        return {
            informName: '',
            informContent: '',
            estates: ['1', '2', '3'],
            estate: '',
            date: '2016-10-16'
        }
    }
}
</script>