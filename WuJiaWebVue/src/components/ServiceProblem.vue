<template>
    <div>
        <div id="unsolvedTable">
            <p>未解决问题</p>
            <table>
                <tr>
                    <th>提出人</th>
                    <th>所属小区</th>
                    <th>问题简述</th>
                    <th></th>
                    
                </tr>

                <tr v-for="item in unsolveds">
                    <td>{{item.person}}</td>
                    <td>{{item.estate}}</td>
                    <td>{{item.intro}}</td>
                    <td><a href="#">前往解决</a></td>
                </tr>
            </table>
        </div>

        <div id="solvedTable">
            <p>已解决问题</p>
            <table>
                <tr>
                    <th>提出人</th>
                    <th>处理客服</th>
                    <th>问题简述</th>
                    <th>住户评价</th>
                </tr>

                <tr v-for="item in solveds">
                    <td>{{item.person}}</td>
                    <td>{{item.service}}</td>
                    <td>{{item.intro}}</td>
                    <td>{{item.evaluation}}</td>
                </tr>
            </table>

<!--    <p>共{{filteredArray.length}}条当前工作目录</p>

            <p class="pagination">
                <a class="button" @click="changePage(-1)">上一页</a>
                当前第<input v-model="page" type="text" class="page">页 共{{ total }}页
                <a class="button" @click="changePage(1)">下一页</a>
            </p>-->
        </div> 


    </div>
</template>


<script>
export default {
    data () {
        return {
            unsolveds: [
            {person: '张三', estate: 'A小区', intro: '2栋3楼楼道灯坏了'},
            {person: '李四', estate: 'A小区', intro: '3栋5楼楼道垃圾没有及时清理'},
            {person: '王五', estate: 'B小区', intro: '2栋有一个电梯坏了没有修理'}
            ],
            solveds: [
            {person: '小明', estate: 'A小区', intro: '车位被别人占了'},
            {person: '小红', estate: 'B小区', intro: '电梯里垃圾没有及时清理'}
            ]
        }
    }
}
</script>