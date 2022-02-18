<template>
	<view class="container" v-show="show">
		<image class="icon" src="../../static/tools/toTop.svg" mode=""></image>
	</view>
</template>

<script>
	export default {
		name: "to-top",
		props:{
			show:{
				type: Boolean,
				default:()=>true
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.container {
		transition: all 230ms ease-in-out;
		
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 55px;
		height: 55px;
		border-radius: 45px;
		z-index: 11;

		border-width: 0px;
		box-shadow: 0 1px 8px 1px rgba(165, 165, 165, 0.2);
		right: 15px;
		bottom: 30px;
		background-color: #F0F0F0;
		.icon{
			height: 60rpx;
		}

	}
</style>
