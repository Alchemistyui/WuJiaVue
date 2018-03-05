<template>
	<div id="NoNavHeader" class="noNavbox">
		
		<a href="" id="logo"><img v-bind:src="logoURL" alt="吾家"></a>

		<a href="" id="question"><img v-bind:src="questionURL" alt="问题"></a>
		<a href="" id="portrait"><img v-bind:src="portraitURL" alt="头像"></a>
		
	</div>
</template>

<script>

export default {
	data () {
		return {
			
			logoURL: './src/assets/images/logo.JPG',
			questionURL: './src/assets/images/question.png',
			portraitURL: './src/assets/images/portrait.png',

		}
	},
	
}

</script>

<style>

.noNavbox{
	height: 0.5rem;
	background: rgba(255, 255, 255, 0.5);
	width: 100%;
	min-width: 10rem;
}

a {
	display: inline-block;
}
img {
	height: 0.5rem;
}
#logo {
	float: left;
	
}
#portrait {
	float: right;
	
}

#question {
	float: right;
	
}


</style>