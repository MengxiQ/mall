<template>
	<view>
		<uni-popup ref="popup" type="center" :is-mask-click="false">
			<view class="loading">
				<view class="icon">
					<uni-icons type="spinner-cycle" size="28" color="#fff"></uni-icons>
				</view>
				<text class="desc">
					loading...
				</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>

	export default {
		name: "loading-popup",
		props: {
			loading: Boolean
		},
		watch: {
			loading:{
				handler:function(val) {
					this.$nextTick(() =>{
						if (val === true) {
							this.$refs.popup.open();
						} else {
							this.$refs.popup.close();
						}
					})

				},
				immediate: true
			}
		},
		created() {

		}
	}
</script>

<style lang="scss" scoped>
	.loading {
		height: 200rpx;
		width: 200rpx;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.icon {
			@keyframes cycle-loading {
				0% {
					transform: rotate(0deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}

			animation-name: cycle-loading;
			animation-duration: 2s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}

		.desc {
			color: #FFFFFF;
			margin-top: 10rpx;
			font-size: 25rpx;
		}
	}
</style>
