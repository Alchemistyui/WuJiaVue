<template>
	<div id="PropertyHeader" class="box">
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
			{ "text":"物业缴费" },
			{ "text":"托管订单" },
			{ "text":"来访邀请" },
			{ "text":"我的托管" },
			{ "text":"我的消息" },
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


