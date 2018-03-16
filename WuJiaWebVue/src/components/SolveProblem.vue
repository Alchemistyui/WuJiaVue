<template>
    <div id="solveProblem">

        <!-- <PropertyHeader></PropertyHeader> -->

        <div class="jumbotron">
            <div class="row">
                <p class="col-sm-3"></p>
                <div id="unsolvedTable" class="col-sm-6">
                    <h3>未解决问题</h3>
                    <table class="table table-striped table-bordered">
                     <tbody>
                        <tr>
                            <th>提出人</th>
                            <th>所属小区</th>
                            <th>问题简述</th>

                        </tr>

                        <tr v-for="item in unsolveds">
                            <td>{{item.person}}</td>
                            <td>{{item.estate}}</td>
                            <td>{{item.intro}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div id="replay">
            <div class="row">
                <p><label class="col-sm-2 text-right">问题描述</label></p>
                <div class="col-sm-7"><textarea readonly class="form-control" rows="3">2栋3楼楼道灯坏了，请尽快派人修理！</textarea></div>
            </div>
            <!-- <p>问题详细描述</p>
                <textarea readonly>2栋3楼楼道灯坏了，请尽快派人修理！</textarea> -->


                <div class="row">
                    <p><label class="col-sm-2 text-right">回复内容</label></p>
                    <div class="col-sm-7"><textarea class="form-control" rows="5" v-model="replay"></textarea></div>
                </div>
            <!-- <p>回复内容</p>
                <textarea v-model="replay"></textarea> -->

                <div class="row">
                    <p class="col-sm-3"></p>
                    <router-link v-bind:to="'/ServiceProblem'" class="col-sm-4 btn btn-success">确认</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import PropertyHeader from './PropertyHeader'

export default {
    name: 'SolveProblem',
    components: {
        PropertyHeader

    },
    data () {
        return {
            unsolveds: [{person: '张三', estate: 'A小区', intro: '2栋3楼楼道灯坏了'}],
            replay: ''
        }
    },
    methods: {
        submit: function () {
            alert('回复成功')
        }
    }
}
</script>

<style>
#solveProblem .jumbotron {
    margin: 0.6rem 0.3rem 0.6rem 0.6rem;
    width: 90%;
    border: 1px solid #cccccc;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 0.2rem;
    background: rgba(255, 255, 255, 0.7);
    /*text-align: center;*/
}
#replay {
    margin-left: 1.1rem;
}
#solveProblem button {
    margin-top: 0.3rem;
}
#replay label {
    margin-top: 0.1rem;
}
#replay textarea {
    font-size: large;
}
#solveProblem a {
    margin-top: 0.2rem;
}
</style>