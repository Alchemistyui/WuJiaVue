<template>
    <div id="inform">
        <div id="sideBar">
            <table>
                <tr><a href="#">通知公告</a></tr>
                <tr><a href="#">房屋及住户信息</a></tr>
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
            <datepicker v-model="date" language="ch"></datepicker>
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
    }
    // computed: {
    //     date () {
    //         return this.year+'-'+(this.month+1)+'-'+this.day
    //     }
    // }
}
</script>