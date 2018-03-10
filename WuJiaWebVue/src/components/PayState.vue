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

                <tr v-for="item in paginate">
                    <td>{{item.house}}</td>
                    <td>{{item.project}}</td>
                    <td>{{item.deadline}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                    <td><button onclick="alert('已发送提醒')">提醒缴费</button></td>
                </tr>
            </table>
            <p>每页显示{{limit}}条</p>
            <p>共{{unPays.length}}条当前工作目录</p>

            <p class="pagination">
                <a class="button" @click="changePage(-1)">上一页</a>
                当前第<input v-model="page" type="text" class="page">页 共{{ total }}页
                <a class="button" @click="changePage(1)">下一页</a>
            </p>
        </div>



        <div id="PaidTable">
            <p>已缴费明细</p>
            <p>选择开始筛选日期</p>
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

                    <tr>
                        <td>物业费</td>
                        <td>{{propertyUnPay}}</td>
                        <!-- <td>{{item.deadline}}</td> -->
                        <td>200</td>
                    <!-- <td>{{item.state}}</td>
                        <td><a v-if="item.state != '已缴费'">前往缴费</a></td> -->
                    </tr>

                    <tr>
                        <td>停车费</td>
                        <td>{{parkUnPay}}</td>
                        <!-- <td>{{item.deadline}}</td> -->
                        <td>310</td>
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
            unPays: [
            {name: '张三', project: '物管费', deadline: '2018-4-15', money: '50', house: '1-01-01', phone: '13112341234'},
            {name: '张三', project: '停车费', deadline: '2018-3-31', money: '155', house: '1-01-01', phone: '13112341234'},
            {name: '张三', project: '物管费', deadline: '2018-3-15', money: '50', house: '1-01-01', phone: '13112341234'},
            {name: '李四', project: '物管费', deadline: '2018-4-15', money: '50', house: '1-02-01', phone: '13543214321'},
            {name: '李四', project: '停车费', deadline: '2018-3-31', money: '155', house: '1-02-01', phone: '13543214321'},
            {name: '李四', project: '物管费', deadline: '2018-3-15', money: '50', house: '1-02-01', phone: '13543214321'}
            ],
            total: 0,
            limit: 5,
            page: 1
            // paids: [
            // {name: '物管费', paidMoney: '1500', unPayMoney: '200'},
            // {name: '停车费', paidMoney: '', unPayMoney: ''}
            // ]
        }
    },
    computed: {
        parkUnPay: function() {
            // alert(this.time.getMonth())
            return (this.time.getMonth() + 1) * 31 * 5 * 32
        },
        propertyUnPay: function () {
            return (this.time.getMonth() + 1) * 50 * 32
        },
        paginate : {
            get: function () {
                var arr = [];

                this.total = Math.ceil(this.unPays.length / this.limit)
                let page = parseInt(this.page - 1)
                if (page < 0) {
                    page = 0
                }

                arr = this.unPays.slice(this.limit * page, this.limit * (page + 1))
                return arr   
            }
        },
    },
    methods: {
        changePage (num) {
          if (num === 1) {
            if (this.page < this.total) {
              this.page++
          } else {
              window.alert('已是最后一页')
          }
      } else {
        if (this.page > 1) {
          this.page--
      } else {
          window.alert('已是第一页')
      }
  }
              // alert(this.page)
          }
      }
  }
  </script>