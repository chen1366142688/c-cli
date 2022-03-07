<template>
	<div>
		我是index.vue
		<router-link to="/test">跳转到test</router-link>
		<img style="display: block;" :src="src" alt="">
		<img src="imgs/bg1.jpg" alt="">
        
	</div>
</template>

<script>
	import img from '../assets/bg.jpg'
	export default{
		data(){
			return {
				src:img
			}
		}
	}
</script>

<style>
</style>