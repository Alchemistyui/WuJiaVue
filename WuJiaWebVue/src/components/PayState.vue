<template>
    <div>
        <div id="sideBar">
            <table>
                <tr><a href="#">缴费状态</a></tr>
                <tr><a href="#">缴费标准</a></tr>
            </table>
        </div>

        <div id="unPayTable">
            <p>未缴费情况</p>
            <table>
                <tr>
                    <th>房屋编号</th>
                    <th>缴费项目</th>
                    <th>截止时间</th>
                    <th>应缴金额(元)</th>
                    <th>户主姓名</th>
                    <th>户主手机</th>
                    <th></th>
                </tr>

                <tr v-for="item in unPays">
                    <td>{{item.name}}</td>
                    <td>{{item.standard}}</td>
                    <td>{{item.deadline}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.state}}</td>
                    <td><a>提醒缴费</a></td>
                </tr>
            </table>
        </div>



        <div id="PaidTable">
            <p>已缴费明细</p>
            <p>选择开始日期</p>
            <vue-datepicker-local v-model="time" format="YYYY-MM"></vue-datepicker-local>
            <table>
                <tr>
                    <th>缴费项目</th>
                    <!-- <th>总应缴金额(元)</th> -->
                    <th>总实收金额(元)</th>
                    <th>总未缴金额(元)</th>
                    <!-- <th>缴费状态</th>
                        <th></th> -->
                    </tr>

                    <tr v-for="item in paids">
                        <td>{{item.name}}</td>
                        <td>{{item.paidMoney}}</td>
                        <td>{{item.deadline}}</td>
                        <td>{{item.unPayMoney}}</td>
                    <!-- <td>{{item.state}}</td>
                        <td><a v-if="item.state != '已缴费'">前往缴费</a></td> -->
                    </tr>
                </table>
            </div>


            <button>修改或添加项目</button>
        </div>
    </template>

    <script>
    import VueDatepickerLocal from 'vue-datepicker-local'
    export default {
      components: {
        VueDatepickerLocal
    },
    data () {
        return {
            time: new Date(),
            unPays: [],
            paids: []
      }
  }
}
</script>