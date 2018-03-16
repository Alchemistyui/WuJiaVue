<template>
    <div>
        <PropertyHeader></PropertyHeader>

        <div class="row">
            <div id="sideBar" class="col-sm-2">
                <ul class="list-group">
                    <li class="list-group-item"><a href="#">通知公告</a></li>
                    <li class="list-group-item"><a href="#">房屋及住户信息</a></li>
                </ul>
            </div>

            <div id="main"  class="col-sm-7 jumbotron">
                <form class="form-horizontal">
                    <div class="row">
                        <p class="col-sm-2 text-right"><label>选择小区</label></p>
                        <div class="col-sm-2">
                            <select v-model="estate" class="form-control">
                                <option v-for="item in estates">{{item}}</option>
                            </select>    
                        </div>   
                        

                        <p class="col-sm-2 text-right"><label>选择楼栋</label></p>
                        <div class="col-sm-2">
                            <select v-model="building" class="form-control">
                                <option v-for="item in buildings">{{item}}</option>
                            </select>
                        </div>

                        <p class="col-sm-2 text-right"><label>选择房屋</label></p>
                        <div class="col-sm-2">
                            <select v-model="house" class="form-control">
                                <option v-for="item in houses">{{item}}</option>
                            </select>
                        </div>
                    </div> 
                </form>


                <div id="projectTable">
                    <h3>收费项目</h3>
                    <table class="table table-striped table-bordered">
                     <tbody>
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
                    </tbody>
                </table>

                <div class="row">
                    <p class="col-sm-4">共{{projects.length}}条当前工作目录&nbsp;&nbsp; 每页显示5条</p>

                    <p class="pagination col-sm-4">
                        <!-- <p>每页显示5条</p> -->
                        <nav aria-label="...">
                          <ul class="pager">
                            <li><a class="button" @click="projectsChangePage(-1)">上一页</a></li>
                            当前第 {{projectsPage}} 页 共{{ projectsTotal }}页
                            <li><a class="button" @click="projectsChangePage(1)">下一页</a></li>
                        </ul>
                    </nav>
                </p>
            </div>

        </div>

        <div id="residentTable">
            <h3>住户信息</h3>
            <table class="table table-striped table-bordered">
             <tbody>

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
            </tbody>
        </table>

        <div class="row">
            <p class="col-sm-4">共{{residents.length}}条当前工作目录&nbsp;&nbsp; 每页显示5条</p>

            <p class="pagination col-sm-4">
                <!-- <p>每页显示5条</p> -->
                <nav aria-label="...">
                  <ul class="pager">
                    <li><a class="button" @click="residentsChangePage(-1)">上一页</a></li>
                    当前第 {{residentsPage}} 页 共{{ residentsTotal           }}页
                    <li><a class="button" @click="residentsChangePage(1)">下一页</a></li>
                </ul>
            </nav>
        </p>
    </div>
        <!-- <p>共{{residents.length}}条当前工作目录&nbsp;&nbsp; 每页显示5条</p>

        <p class="pagination">
            <p>每页显示5条</p> 
            <a class="button" @click="residentsChangePage(-1)">上一页</a>
            当前第 {{residentsPage}} 页 共{{ residentsTotal }}页
            <a class="button" @click="residentsChangePage(1)">下一页</a>
        </p> -->
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
            estate: 'A小区',
            estates: ['A小区', 'B小区'],
            building: '1栋',
            buildings: ['1栋', '2栋', '3栋'],
            house: '1-01-01',
            houses: ['1-01-01','1-01-02','1-02-01','1-02-02','1-03-01','1-03-02'],
            residents: [
            {name: '张三', gender: '男', identity: '户主', phone: '13112341234'},
            {name: '张四', gender: '男', identity: '住户', phone: '13212341234'},
            {name: '李梅', gender: '女', identity: '住户', phone: '13512341234'}
            ],
            projects: [
            {name: '物管费', standard: '50/月', deadline: '2018-4-15', money: '50', state: '未缴费'},
            {name: '停车费', standard: '5/天', deadline: '2018-3-31', money: '155', state: '未缴费'},
            {name: '物管费', standard: '50/月', deadline: '2018-3-15', money: '50', state: '未缴费'},
            {name: '停车费', standard: '5/天', deadline: '2018-2-28', money: '140', state: '已缴费'},
            {name: '物管费', standard: '50/月', deadline: '2018-2-15', money: '50', state: '已缴费'},
            {name: '停车费', standard: '5/天', deadline: '2018-1-31', money: '155', state: '已缴费'},
            {name: '物管费', standard: '50/月', deadline: '2018-1-15', money: '50', state: '已缴费'}
            ],
            residentsPage: 1,
            projectsPage: 1,
            residentsTotal: 1,
            projectsTotal: 0

        }
    },
    computed: {
        // pagedResidents : {
        //     get: function () {
        //         var arr = [];

        //         this.residentsTotal = Math.ceil(this.residents.length / 5)
        //         let page = parseInt(this.residentspage - 1)
        //         if (page < 0) {
        //             page = 0
        //         }

        //         arr = this.residents.slice(5 * page, 5 * (page + 1))
        //         return arr   
        //     }

        // },
        pagedProjects : {
            get: function () {
                var arr = [];
                
                this.projectsTotal = Math.ceil(this.projects.length / 5)
                let page = parseInt(this.projectsPage - 1)
                if (page < 0) {
                    page = 0
                }

                arr = this.projects.slice(5 * page, 5 * (page + 1))
                // alert(arr) 
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
            // let page = this.projectsPage
            // alert(this.projectsTotal)
            if (num === 1) {
                if (this.projectsPage < this.projectsTotal) {
                  this.projectsPage++
              } else {
                  window.alert('已是最后一页')
              }
          } else {
            if (this.projectsPage > 1) {
              this.projectsPage--
          } else {
              window.alert('已是第一页')
          }
      } 
              // alert(this.projectsPage)
          },


      }
  }
  </script>

  <style>
  .jumbotron {
    margin: 0.4rem 0.3rem 0.4rem 0.1rem;
    width: 75%;
    border: 1px solid #cccccc;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 0.2rem;
    background: rgba(255, 255, 255, 0.7);
}
#sideBar {
    margin-top: 0.4rem;
    margin-left: 0.1rem;
}
#projectTable p, #residentTable p {
    font-size: smaller;
    display: inline;
}
/*.pagination {
    float: left;
    margin-left: 3rem;
    }*/
    </style>