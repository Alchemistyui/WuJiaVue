<template>
    <div class="servicePages"> 

        <!-- <PropertyHeader></PropertyHeader> -->
        <div class="row">
            <div  class="sideBar col-sm-2">
                <ul class="list-group">
                    <li class="list-group-item"><router-link v-bind:to="'/ServiceManage'">客服人员</router-link></li>
                    <li class="list-group-item"><router-link v-bind:to="'/ServiceProblem'">客服问题</router-link></li>
                </ul>
            </div>
            <div class="jumbotron col-sm-9">
                <div id="unsolvedTable">
                    <h3>未解决问题</h3>
                    <table class="table table-striped table-bordered">
                       <tbody>
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
                            <td><router-link v-bind:to="'/SolveProblem'">前往解决</router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id="solvedTable">
             <h3>已解决问题</h3>
             <table class="table table-striped table-bordered">
               <tbody>
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
            </tbody>              
        </table>

<!--    <p>共{{filteredArray.length}}条当前工作目录</p>

            <p class="pagination">
                <a class="button" @click="changePage(-1)">上一页</a>
                当前第<input v-model="page" type="text" class="page">页 共{{ total }}页
                <a class="button" @click="changePage(1)">下一页</a>
            </p>-->
        </div> 

    </div>
</div>
</div>
</template>


<script>
import PropertyHeader from './PropertyHeader'

export default {
    components: {
        PropertyHeader

    },
    data () {
        return {
            unsolveds: [
            {person: '张三', estate: 'A小区', intro: '2栋3楼楼道灯坏了'},
            {person: '李四', estate: 'A小区', intro: '3栋5楼楼道垃圾没有及时清理'},
            {person: '王五', estate: 'B小区', intro: '2栋有一个电梯坏了没有修理'}
            ],
            solveds: [
            {person: '小明', estate: 'A小区', intro: '车位被别人占了', service: '李雷', evaluation:'优良'},
            {person: '小红', estate: 'B小区', intro: '电梯里垃圾没有及时清理', service: '韩梅梅', evaluation:'中等'}
            ]
        }
    }
}
</script>

<style>
.servicePages .jumbotron {
    margin: 0.4rem 0.3rem 0.2rem 0rem;
    width: 75%;
    border: 1px solid #cccccc;
   /* -webkit-border-radius: 3px;
   -moz-border-radius: 3px;*/
   border-radius: 0.2rem;
   background: rgba(255, 255, 255, 0.7);
}
.sideBar {
    margin-top: 0.4rem;
    margin-left: 0.1rem;
}
</style>