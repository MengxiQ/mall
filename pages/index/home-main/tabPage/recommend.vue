<template>
	<view>
		<scroll-view :scroll-top="scrollTop" :scroll-y="true" class="container" @scroll="scroll" @scrolltolower="scrolltolower">
			<view class="banner">
				<image :src="banner.mainImg" class="banner-main-img" mode="widthFix"></image>
				<view class="boxs">
					<image v-for="(item,index) in banner.boxs" :src="item" :key="index" mode="widthFix"></image>
				</view>
			</view>
			<image class="ad" src="../../../../static/home/1644573928313_750x136_90.png" mode="widthFix"></image>

			<view class="main-container">
				<image class="goods" v-for="(item,index) in goods" :src="item.img" mode="widthFix"></image>
				<uni-load-more :status="status" color="#FFF"></uni-load-more>
			</view>
			
		</scroll-view>
		<to-top @tap.native="toTop" :show="showToTop"></to-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:'more',
				showToTop:false,
				scrollTop:null,
				banner: {
					mainImg: '/static/home/home-banner.jpg',
					boxs: [
						'/static/home/home-banner-ad-1.png',
						'/static/home/home-banner-ad-2.png',
						'/static/home/home-banner-ad-3.png',
					]
				},
				goods: [{
						name: 'a1',
						gid: 'a1',
						img: '/static/home/goods/a1.jpg'
					},
					{
						name: 'a2',
						gid: 'a2',
						img: '/static/home/goods/a2.jpg'
					},
					{
						name: 'a3',
						gid: 'a3',
						img: '/static/home/goods/a3.jpg'
					},
					{
						name: 'a4',
						gid: 'a4',
						img: '/static/home/goods/a4.jpg'
					}

				],
			};
		},
		methods: {
			toTop(){
				this.scrollTop = 0;
				this.$nextTick(() => {
					this.scrollTop = null;
				})
			},
			scroll(event) {
				if (Math.floor(event.detail.scrollTop) > 125) {
					this.$EventBus.$emit('fixHeader')
				} else {
					this.$EventBus.$emit('resetHeader')
				}
				
				if (Math.floor(event.detail.scrollTop) > 1000) {
					this.showToTop = true;
				}else{
					this.showToTop = false;
				}
			},
			//下拉触发事件
			scrolltolower() {
				this.status = 'loading';
				setTimeout(()=>{
					this.goods.push(					{
							name: 'a5',
							gid: 'a5',
							img: '/static/home/goods/a5.jpg'
						},
						{
							name: 'a6',
							gid: 'a5',
							img: '/static/home/goods/a6.jpg'
						},
						{
							name: 'a7',
							gid: 'a7',
							img: '/static/home/goods/a7.jpg'
						})
						this.status = 'more';
				},1000)
				
			}
		},
		created() {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: calc(100vh - var(--window-bottom));
	}

	.banner {
		position: relative;

		.banner-main-img {
			height: 550rpx;
			width: 100%;
		}

		.boxs {
			bottom: 5rpx;
			position: absolute;
			width: 100%;
			display: flex;
			justify-content: space-around;

			&>image {
				height: 300rpx;
				width: 200rpx;
			}
		}
	}

	.ad {
		width: 100%;
	}

	.main-container {
		padding: 0 $safe-padding 300rpx $safe-padding;

		.goods {
			width: 100%;
			border-radius: 15rpx;
			overflow: hidden;
			display: block;
			margin-bottom: 20rpx;
		}
	}
</style>
