<template>
	<div id="ResidentHeader" class="box">

		<a href=""><img v-bind:src="logoURL" alt="吾家" id="logo"></a>
		
		<div v-for="(list,index) in navLists" class="nav"  @click="isSelected(index)"><a href="#" :class="[{ selected:selectedIndex == index}, navLink]">{{list.text}}</a></div>

		<a href=""><img v-bind:src="portraitURL" alt="头像" id="portrait"></a>
		<a href=""><img v-bind:src="questionURL" alt="问题" id="question"></a>
		

	</div>
</template>

<script>

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
			portraitURL: './src/assets/images/portrait.png',
			navLink: 'navLink'
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
	height: 0.5rem;
	background: rgba(255, 255, 255, 0.5);
	display: -webkit-flex;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	width: 100%;
	min-width: 10rem;
}
.nav{
	min-width: 0.7rem;
	line-height: 0.5rem;
	display: inline-block;
	margin-left: 0.2rem;
	cursor: pointer;
	width: 100%;
}

.navLink {
	display: block;
	color: #2c3e50;
	text-decoration: none;
	width: 100%;
	padding: 0px;
	margin: 0px;
	text-align: center;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 120%;
}

img {
	width: 0.5rem;
	
}

.selected {
	background-color: #F7DA32;
}
</style>