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
                    <th>应缴金额(元)</th>
                    <th>缴费状态</th>
                    <th></th>
                </tr>

                <tr v-for="item in pagedProjects">
                    <td>{{item.name}}</td>
                    <td>{{item.standard}}</td>
                    <td>{{item.deadline}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.state}}</td>
                    <td><a v-if="item.state != '已缴费'">前往缴费</a></td>
                </tr>
            </table>


            <p>共{{pagedProjects.length}}条当前工作目录</p>

            <p class="pagination">
                <p>每页显示5条</p>
                <a class="button" @click="projectsChangePage(-1)">上一页</a>
                当前第 {{projectsPage}} 页 共{{ projectsTotal }}页
                <a class="button" @click="projectsChangePage(1)">下一页</a>
            </p>

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

                <tr v-for="item in pagedResidents">
                    <td>{{item.name}}</td>
                    <td>{{item.gender}}</td>
                    <td>{{item.identity}}</td>
                    <td>{{item.phone}}</td>
                </tr>
            </table>

            
            <p>共{{pagedResidents.length}}条当前工作目录</p>

            <p class="pagination">
                <p>每页显示5条</p>
                <a class="button" @click="residentsChangePage(-1)">上一页</a>
                当前第 {{residentsPage}} 页 共{{ residentsTotal }}页
                <a class="button" @click="residentsChangePage(1)">下一页</a>
            </p>
        </div>

    </div>
</template>


<script>
export default {
    data () {
        return {
            building: '1栋',
            buildings: ['1栋', '2栋', '3栋'],
            house: '1-01-01',
            houses: ['1-01-01','1-01-02','1-02-01','1-02-02','1-03-01','1-03-02'],
            residents: [],
            projects: [
            {name: '1', standard: '20', deadline: '2017-01-01', money: '200yuan', state: '已缴费'},
            {name: '1', standard: '20', deadline: '2017-01-01', money: '200yuan', state: '未缴费'}
            ],
            residentsPage: 1,
            projectsPage: 1,
            residentsTotal: 0,
            projectsTotal: 0

        }
    },
    computed: {
        pagedResidents : {
            get: function () {
                var arr = [];
                
                this.residentsTotal = Math.ceil(this.residents.length / 10)
                let page = parseInt(this.residentspage - 1)
                if (page < 0) {
                    page = 0
                }

                arr = this.residents.slice(10 * page, 10 * (page + 1))
                return arr   
            }

        },
        pagedProjects : {
            get: function () {
                var arr = [];
                
                this.projectsTotal = Math.ceil(this.projects.length / 10)
                let page = parseInt(this.projectsPage - 1)
                if (page < 0) {
                    page = 0
                }

                arr = this.projects.slice(10 * page, 10 * (page + 1))
                return arr   
            }

        }
    },
    methods: {
        residentsChangePage (num) {
            let page = this.residentsPage
            if (num === 1) {
                if (page < this.residentsTotal) {
                  page++
              } else {
                  window.alert('已是最后一页')
              }
          } else {
            if (page > 1) {
              page--
          } else {
              window.alert('已是第一页')
            }
          } 
              // alert(this.page)
          },
          projectsChangePage (num) {
            let page = this.projectsPage
            if (num === 1) {
                if (page < this.projectsTotal) {
                  page++
              } else {
                  window.alert('已是最后一页')
              }
          } else {
            if (page > 1) {
              page--
          } else {
              window.alert('已是第一页')
            }
          } 
              // alert(this.page)
          },


      }
  }
  </script>