<template>
    <div id="inform">
        <div id="sideBar">
            <table>
                <tr><a href="#">通知公告</a></tr>
                <tr><a href="#">住户信息</a></tr>
            </table>
        </div>

        <div id="main">
            <p><label for="informName">公告标题 </label><input id="informName" v-model="informName"></p>
            <p>公告内容</p>
            <textarea v-model="informContent"></textarea>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                informName: '',
                informContent: ''
            }
        }
    }
</script>