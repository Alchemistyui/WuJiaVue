<template>
    <div>
        <div id="sideBar">
            <table>
                <tr><a href="#">通知公告</a></tr>
                <tr><a href="#">房屋及住户信息</a></tr>
            </table>
        </div>

        <p>选择楼栋</p>
        <select v-model="building">
            <option v-for="item in buildings">{{item}}</option>
        </select>

        <p>选择房屋</p>
        <select v-model="house">
            <option v-for="item in houses">{{item}}</option>
        </select>

        <div id="projectTable">
            <p>收费项目</p>
            <table>
                <tr>
                    <th>项目名称</th>
                    <th>缴费标准</th>
                    <th>截止时间</th>
                    <th>应缴金额</th>
                    <th>缴费状态</th>
                    <th></th>
                </tr>

                <tr v-for="item in projects">
                    <td>{{item.name}}</td>
                    <td>{{item.standard}}</td>
                    <td>{{item.deadline}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.state}}</td>
                    <td><a v-if="item.state != '已缴费'">前往缴费</a></td>
                </tr>
            </table>
        </div>

        <div id="residentTable">
            <p>住户信息</p>
            <table>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>身份</th>
                    <th>手机</th>
                </tr>

                <tr v-for="item in residents">
                    <td>{{item.name}}</td>
                    <td>{{item.gender}}</td>
                    <td>{{item.identity}}</td>
                    <td>{{item.phone}}</td>
                </tr>
            </table>
        </div>

    </div>
</template>


<script>
    export default {
        data () {
            return {
                building: '',
                buildings: [],
                house: '',
                houses: [],
                residents: [],
                projects: [
                    {name: '1', standard: '20/day', deadline: '2017-01-01', money: '200yuan', state: '已缴费'},
                    {name: '1', standard: '20/day', deadline: '2017-01-01', money: '200yuan', state: '未缴费'}
                ]

            }
        }
    }
</script>