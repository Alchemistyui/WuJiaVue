<template>
	<div id="ResidentHeader" class="box">
		
		<div v-for="(list,index) in navLists" class="nav" :class="{ selected:selectedIndex == index}" @click="isSelected(index)"><a href="#">{{list.text}}</a></div>

	</div>
</template>

<script>

export default {
	data () {
		return {
			navLists:[
		{
			"text":"首页"                     
		},
		{
			"text":"组件"                     
		},
		{
			"text":"API"                        
		},
		{
			"text":"我们"                     
		}
		],
		selectedIndex: 0
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
	height: 40px;
	background: rgba(255, 255, 255, 0.5);
}
.nav{
	line-height: 40px;
	display: inline-block;
	margin-left: 100px;
	cursor: pointer;
}



.selected {
	background-color: yellow;
}
</style>