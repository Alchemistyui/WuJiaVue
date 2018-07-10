<template>
    <div id="account">

        <!-- <PropertyHeader></PropertyHeader> -->

        <!-- 需额外的后端数据 -->
        <div id="info" class="panel panel-default">
          <div class="panel-body">
            <img v-bind:src="propertyURL" id="Propertylogo" class="img-circle">
            <div id="textInfo">
                <h1>A小区</h1>
                <!-- 需额外的后端数据 -->
                <h3>物业公司&nbsp;&nbsp; <em id="propertyName">{{propertyName}}</em> </h3>
                <!-- 需额外的后端数据 -->
                <h4>入驻人数<span>{{residentNum}}</span></h4>
                <h4>客服人数<span>{{serviceNum}}</span></h4>
            </div>
        </div>
    </div>

    <div id="tables" class="panel panel-default">
      <div class="panel-body">
        <h3>已购模块</h3>
        <table class="table table-striped table-bordered">
            <tbody>
                <tr>
                    <th>模块名称</th>
                    <th>收费标准</th>
                    <th>剩余时间(天)</th>
                    <th></th>
                </tr>
                <!-- 需数据：模块名称，模块收费标准，模块购买日期及购买时间段 -->
                <tr v-for="item in boughtModules">
                    <td>{{item.name}}</td>
                    <td>{{item.standard}}</td>
                    <!-- <td>{{item.time - date - item.boughtDate}}</td> -->
                    <td>{{item.date}}</td>
                    <td><router-link v-bind:to="'/ModuleManage'">续费</router-link></td>
                </tr>
            </tbody>
        </table>

        <h3>未购模块</h3>
        <table class="table table-bordered">
            <!-- <thead>未购模块</thead> -->
            <tbody>
                <tr>
                    <th>模块名称</th>
                    <th>收费标准</th>
                    <th>功能简介</th>
                    <th></th>
                </tr>
                <!-- 需数据：模块名称，模块收费标准，模块简介 -->
                <tr v-for="item in noBuyModules">
                    <td style="width: 25%">{{item.name}}</td>
                    <td style="width: 25%">{{item.standard}}</td>
                    <td style="width: 30%">{{item.intro}}</td>
                    <td style="width: 25%; text-align: center"><router-link v-bind:to="'/ModuleManage'">查看更多</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


</div>
</template>


<script>
import PropertyHeader from './PropertyHeader'

export default {
    name: 'PropertyAccount',
    components: {
        PropertyHeader

    },
    data () {
        return {
            propertyName: 'AAA物业公司',
            residentNum: '12',
            serviceNum: '2',
            date: 0,
            boughtModules: [
            {name:'缴费管理系统', standard: '1000/月', date: 3},
            {name:'客服管理系统', standard: '500/月', date: 56},
            {name:'通知发送系统', standard: '500/月', date: 67}
            ],
            noBuyModules: [
            {name: '停车管理系统', standard: '2000/月', intro: ' 业主可根据自己的需求出租车位，为了方便管理和保障小区安全，采取车位长租的方式，租户或附近对车位有长期需求的人员则可租用业主车位。这样业主能够赚钱并且物业能够更好的利用资源。 '}
            ],
            propertyURL: './src/assets/images/property.png'
        }
    }
}
</script>

<style>
/*#account {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }*/
    #Propertylogo {
        width: 1.5rem;
        height: 1.5rem;
    }
    #info, #tables {
        margin: auto;
        width: 90%;
        margin-top: 0.3rem;
    }
    #info img {
        /*padding-left: 30%;*/
        float: left;
        margin-left: 30%;
    }
    #textInfo {

        padding-left: 50%;
    }
    #info, #tables {
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #cccccc;
        border-radius: 0.2rem;
    }
    </style>
