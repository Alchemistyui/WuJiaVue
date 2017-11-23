<template>
	<div id="ResidentHeader" class="box">

		<a href=""><img v-bind:src="logoURL" alt="吾家" id="logo"></a>
		
		<div v-for="(list,index) in navLists" class="nav" :class="{ selected:selectedIndex == index}" @click="isSelected(index)"><a href="#">{{list.text}}</a></div>

		<a href=""><img v-bind:src="portraitURL" alt="头像" id="portrait"></a>
		<a href=""><img v-bind:src="questionURL" alt="问题" id="question"></a>
		

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
	height: 50px;
	background: rgba(255, 255, 255, 0.5);
	display: flex;
}
.nav{
	line-height: 50px;
	display: inline-block;
	margin-left: 50px;
	cursor: pointer;
}

a {
	display: block;
	color: #2c3e50;
	text-decoration: none;
	width: 100px;
	padding: 0px;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 120%;
}

#logo {
	width: 50px;
	
}

#question {
	width: 50px;
	float: right;

	

}
#portrait {
	width: 50px;
	float: right;


}

.selected {
	background-color: #F7DA32;
}
</style>