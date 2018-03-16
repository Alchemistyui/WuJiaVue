<template>
    <div>
        <PropertyHeader></PropertyHeader>

        <div class="jumbotron">
            <form class="form-horizontal">
                <div class="row">
                    <p class="col-sm-2 text-right"><label>选择项目</label></p>
                    <div class="col-sm-2">
                        <select v-model="project" class="form-control">
                            <option v-for="item in projects">{{item}}</option>
                        </select>
                    </div>
                </div>

                <div class="form-group"  v-if="project == '新项目'">
                    <p><label class="col-sm-2 control-label text-left" for="newName">新项目名称</label>
                        <div class="col-sm-3"><input class="form-control" id="newName" v-model="newName"></div></p>
                    </div>
                    <!-- <p v-if="project == '新项目'"><label for="newName">新项目名称 </label><input id="newName" v-model="newName"></p> -->
                    <div class="row">
                        <p class="col-sm-2 text-right"><label>收费方式</label></p>
                        <div class="col-sm-2">
                            <select v-model="payType" class="form-control">
                                <option v-for="item in types">{{item}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <p><label class="col-sm-2 control-label text-left" for="money">费用详情</label>
                            <div class="col-sm-2"><input class="form-control" type="number" id="money" v-model="money"></div><label>元/月</label></p>
                        </div>
                        <!-- <p><label for="money">费用详情 </label><input type="number" id="money" v-model="money">元/月</p> -->

                        <div id="textareaDiv" class="row">
                            <p><label id="introLabel" class="col-sm-2 text-right">项目简介</label></p>
                            <div class="col-sm-7"><textarea class="form-control" rows="5" v-model="projectIntro"></textarea></div>
                        </div>
                        <!-- <textarea v-model="projectIntro"></textarea> -->

                        <div class="row">
                            <p class="col-sm-2"></p>
                            <button class="col-sm-4 btn btn-success">确认</button>
                        </div>
                    </form>
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
                    project: '新项目',
                    projects: ['新项目','物业管理费','停车费'],
                    newName: '',
                    payType: '按月收费',
                    types: ['按月收费','按季度收费','按半年收费','按年收费'],
                    money: 0,
                    projectIntro: ''
                }
            }
        }
        </script>

        <style>
        .jumbotron {
            margin: 0.6rem 0.3rem 0.6rem 0.6rem;
            width: 90%;
            border: 1px solid #cccccc;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 0.2rem;
            background: rgba(255, 255, 255, 0.7);
            /*text-align: center;*/
        }
        #introLabel {
            padding-left: 0.3rem;
        }
        #textareaDiv textarea {
            font-size: large;
        }
        button {
            margin-top: 0.3rem;
        }
        .row, .form-group {
            padding-left: 2.5rem;
        }
        </style>