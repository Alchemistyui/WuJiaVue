<template>
    <div id="account">
        <!-- 需额外的后端数据 -->
        <img src="#" id="logo">
        <p id="xiaoquName">小区名字</p>
        <!-- 需额外的后端数据 -->
        <p>物业公司<span id="propertyName">{{propertyName}}</span></p>
        <!-- 需额外的后端数据 -->
        <p>入驻人数<span>{{residentNum}}</span></p>
        <p>客服人数<span>{{serviceNum}}</span></p>

        <table>
            <tr>
                <th>模块名称</th>
                <th>收费标准</th>
                <th>剩余时间</th>
                <th></th>
            </tr>
            <!-- 需数据：模块名称，模块收费标准，模块购买日期及购买时间段 -->
            <tr v-for="item in boughtModules">
                <td>{{item.name}}</td>
                <td>{{item.standard}}</td>
                <td>{{item.time - date - item.boughtDate}}</td>
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
            propertyName: '**公司',
            residentNum: '12',
            serviceNum: '2',
            date: 0,
            boughtModules: [
            {name:'bought1', standard: 'sfsadfs', time: 0, boughtDate: 0}
            ],
            noBuyModules: [
            {name: 'noBuy1', standard: 'efffas', intro: '12q32434'}
            ]
        }
    }
}
</script>