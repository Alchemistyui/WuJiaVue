<template>
	<div id="ResidentHeader" class="box">
<ul>
		<li><a href=""><img v-bind:src="logoURL" alt="吾家" id="logo"></a></li>
		

		<li v-for="(list,index) in navLists" class="nav"  @click="isSelected(index)"><a href="#" :class="{ selected:selectedIndex == index}">{{list.text}}</a></li>

		<li><a href=""><img v-bind:src="portraitURL" alt="头像" id="portrait"></a></li>
		<li><a href=""><img v-bind:src="questionURL" alt="问题" id="question"></a></li>
		</ul>

	</div>
</template>

<script>
// 未进行屏幕适配，只是单纯像素显示

export default {
	data () {
		return {
			navLists:[
			{ "text":"首页" },
			{ "text":"客服人员" },
			{ "text":"小区管理" },
			{ "text":"车位管理" },
			{ "text":"物业管理" },
			{ "text":"物业账户" },
			],
			selectedIndex: 0,
			logoURL: './src/assets/images/logo.JPG',
			questionURL: './src/assets/images/question.png',
			portraitURL: './src/assets/images/portrait.png'
			
		}
	},
	methods:{
		isSelected:function(index){
			this.selectedIndex = index;
		}
	}
}

</script>


<style type="text/css">

.box{
	height: 10%;
	/*background: rgba(255, 255, 255, 0.5);*/
	background-color: red;
	display: -webkit-flex;
	display: flex;
	width: 100%;
	position: relative;
}
.nav{
	line-height: 0.5rem;
	margin-left: 0.5rem;
	cursor: pointer;


}
ul {
	cursor: default;
    margin: 0 -10px;
    width: auto;
    height: 44px;
}
li {
	    display: inline-block;
    position: relative;
    height: 44px;
    z-index: 1;
    vertical-align: top;
}

a {
	display: block;
	color: #2c3e50;
	text-decoration: none;
	width: 150%;
	padding-left: 10px;
	padding-right: 10px;
	max-height: 0.5rem;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 120%;
}

#logo {
	width: 0.5rem;
	
}

#question {
	width: 0.5rem;

}
#portrait {
	width: 0.5rem;

}

.selected {
	background-color: #F7DA32;
}
</style>