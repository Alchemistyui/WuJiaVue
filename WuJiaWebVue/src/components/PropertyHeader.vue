<template>
	<div id="PropertyHeader" class="box">
		<router-link v-bind:to="'/PropertyAccount'"><img v-bind:src="logoURL" alt="吾家" id="logo"></router-link>
		
		 <div v-for="(list,index) in navLists" class="nav"><router-link  @click.native="isSelected(index)" v-bind:to="list.url" :class="[{ selected: list.active}, nav]">{{list.text}}</router-link></div>
		

		<!-- <ul class="nav nav-pills" v-for="(list,index) in navLists">
			<li role="presentation" class="active" @click="isSelected(index)"><a href="#">Home</a></li>
		</ul> -->
		<a href=""><img v-bind:src="portraitURL" alt="头像" id="portrait"></a>
		<a href=""><img v-bind:src="questionURL" alt="问题" id="question"></a>
		
	</div>
</template>

<script>

export default {
	data () {
		return {
			navLists:[
			{ "text":"首页", url: '/PropertyAccount', active: true },
			{ "text":"客服人员", url: '/ServiceManage', active: false },
			{ "text":"缴费管理", url: '/PayState', active: false },
			{ "text":"小区管理", url: '/EstateInform', active: false },
			// { "text":"缴费管理", url: '/PayState' }
			// { "text":"物业账户" }
			],
			selectedIndex: 0,
			logoURL: './src/assets/images/logo.JPG',
			questionURL: './src/assets/images/question.png',
			portraitURL: './src/assets/images/portrait.png',
			navLink: 'navLink',
			nav : 'nav'
		}
	},
	methods:{
		isSelected:function(index){
			// alert(index);
			// this.selectedIndex = index;
			for (var i = 0; i < 4; i++) {
				this.navLists[i].active = false
			}
			this.navLists[index].active = true
		}
	}
}

</script>

<style>

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
	min-width: 0.6rem;
	/*max-width: 2.2rem;*/
	line-height: 0.5rem;
	display: inline-block;
	margin-left: 0.2rem;
	cursor: pointer;
	width: 100%;
	text-align: center;
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
#PropertyHeader a:hover,#PropertyHeader a:visited,#PropertyHeader a:link,#PropertyHeader a:active {
	text-decoration: none;
	color: #000;
}
</style>
