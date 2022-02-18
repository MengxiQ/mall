<template>
	<view class="container">
		<view class="title-container" id="title" :style="{display: titleVisible}">
			<view class="title">
				<text>{{text.title}}</text>
			</view>
			<view class="subtitle">
				<text class="subtitle-title" v-for="(ele,index) in text.subtitle" :key="index">{{ele}}</text>
			</view>
		</view>
		<view 
			class="search-button" 
			:style="{width: inputStyle.width,height:inputStyle.height,position:inputStyle.position,top:inputStyle.top}">
				<uni-icons size="27" color="#999999" type="search" class="search" @tap="toSearch"></uni-icons>
				<input disabled type="text"  class="input" placeholder="好物" @tap="toSearch" />
				<uni-icons size="27" color="#999999" type="camera" class="camera" @tap="chooseImgToSearch"></uni-icons>
		</view>
		<view v-if="inputStyle.position === 'fixed'" :style="{height:inputStyle.height}">
			<!-- 占位 -->
		</view>
	</view>
	
</template>

<script>
	export default{
		name:'home-header',
		data(){
			return{
				text:{
					title:'品牌特卖 100%正品',
					subtitle:[
						'品牌授权',
						'38元免运费',
						'退货无忧'
					]
				},
				titleVisible:'block',
				inputStyle:{
					width:'auto',
					height:'70rpx',
					position: 'initial',
					top: '0',
				}
			}
		},
		methods:{
			toSearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				}).then(()=>{
					console.log('ok')
				}).catch(()=>{
					console.log('error')
				})
			},
			chooseImgToSearch(){
				console.log('chooseImgToSearch')
			}
		},
		created() {
			//created中设置样式就不会出现画面跳动
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			console.log(menuButtonInfo)
			this.inputStyle.height = `${menuButtonInfo.height + 4}px`; //+4 为了让输入框更大一点
			
			this.$EventBus.$on('fixHeader',() => {
				this.titleVisible = 'none';
				this.inputStyle.width = `${menuButtonInfo.left - 20}px`;//menu左边边界的坐标就是我们要的input的宽度啊，再多一点安全距离
				this.inputStyle.position = 'fixed'
				this.inputStyle.top = `${menuButtonInfo.top - 2}px`;
				
			})
			
			this.$EventBus.$on('resetHeader',() => {
				this.titleVisible = 'block';
				this.inputStyle.width = `auto`;
				this.inputStyle.position = 'initial'
			})
		},
		mounted() {
		
		
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 0 $safe-padding;
		color: $header-font-color;
		.title-container{
			// display: none;//test
			margin-bottom: 20rpx;
			.title{
				letter-spacing: 2rpx;
				font-size: 45rpx;
				font-weight: bold;
				position: initial;
			}
			.subtitle{
				font-size: 25rpx;
				font-weight: 100;
				.subtitle-title{
		
					margin-right: 30rpx;
				}
			}
		}

		.search-button{
			display: flex;
			background-color: #FFFFFF;
			justify-content: space-between;
			align-items: center;
			border-radius: 35rpx;
			// width: 500rpx;
			.search{
				margin-left: 20rpx;
			}
			.input{
				width: 100%;
				line-height: 70rpx;
				font-size: 28rpx;
				color: #999999;

			}
			.camera{
				margin-right: 20rpx;
			}
		}
	}
</style>
