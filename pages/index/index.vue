<template>
	<view class="index-container">
		<layout>
			<home-header></home-header>
			<home-main></home-main>
		</layout>
	</view>
</template>

<script>
	import homeHeader from './home-header/home-header'
	import homeMain from './home-main/home-main.vue'
	export default {
		components:{homeHeader,homeMain},
		data() {
			return {
				src: process.env['VUE_APP_BASE_URL'] + 'images/home/home-banner.jpg'
			}
		},
		methods: {

		},
		mounted() {
			console.log(process.env)
		}
	}
</script>

<style lang="scss" scoped>
.index-container{
	//这里应该没有颜色，点击tab的时候改变父组件的背景
	background-color: $header-bg-color;
}
</style>
