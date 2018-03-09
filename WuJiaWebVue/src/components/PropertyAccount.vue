<template>
    <div id="account">
        <!-- 需额外的后端数据 -->
        <img v-bind:src="propertyURL" id="logo">
        <p id="xiaoquName">A小区</p>
        <!-- 需额外的后端数据 -->
        <p>物业公司 <span id="propertyName">{{propertyName}}</span> </p>
        <!-- 需额外的后端数据 -->
        <p>入驻人数<span>{{residentNum}}</span></p>
        <p>客服人数<span>{{serviceNum}}</span></p>

        <table>
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
                <td><a href="#">续费</a></td>
            </tr>
        </table>

        <table>
            <tr>
                <th>模块名称</th>
                <th>收费标准</th>
                <th>功能简介</th>
                <th></th>
            </tr>
            <!-- 需数据：模块名称，模块收费标准，模块简介 -->
            <tr v-for="item in noBuyModules">
                <td>{{item.name}}</td>
                <td>{{item.standard}}</td>
                <td>{{item.intro}}</td>
                <td><a href="#">查看更多</a></td>
            </tr>
        </table>
    </div>
</template>


<script>
export default {
    name: 'PropertyAccount',
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