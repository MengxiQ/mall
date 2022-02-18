<template>
	<view class="container">
		<view class="status-bar"></view>
		<view class="content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "layout",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.status-bar{
		height: var(--status-bar-height);
	}
	.content{
		height: calc(100vh - var(--status-bar-height));
		overflow: hidden;
	}
	.container {
		// --status-bar-height 是状态栏的高度
		// padding: var(--status-bar-height) $safe-padding $safe-padding 20rpx;

	}
</style>
