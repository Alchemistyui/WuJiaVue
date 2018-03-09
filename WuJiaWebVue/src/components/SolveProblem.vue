<template>
    <div>
        <div id="unsolvedTable">
            <p>未解决问题</p>
            <table>
                <tr>
                    <th>提出人</th>
                    <th>所属小区</th>
                    <th>问题简述</th>
                    
                </tr>

                <tr v-for="item in unsolveds">
                    <td>{{item.person}}</td>
                    <td>{{item.estate}}</td>
                    <td>{{item.intro}}</td>
                </tr>
            </table>

            <p>问题详细描述</p>
            <textarea>2栋3楼楼道灯坏了，请尽快派人修理！</textarea>
        </div>

        <p>回复内容</p>
        <textarea v-model="replay"></textarea>

        <button @click="submit">回复</button>
    </div>
</template>


<script>
export default {
    name: 'SolveProblem',
    data () {
        return {
            unsolveds: [{person: '张三', estate: 'A小区', intro: '2栋3楼楼道灯坏了'}],
            replay: ''
        }
    },
    methods: {
        submit: function () {
            alert('回复成功')
        }
    }
}
</script>