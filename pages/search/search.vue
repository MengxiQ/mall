<template>
	<view class="container">
		<uni-nav-bar @clickLeft="back" leftText="搜索" leftIcon="left" :border="false" :statusBar="true"></uni-nav-bar>
		<view class="container">
			<view class="search-container">
				<view class="search-button" :style="{height:`${menuButtonInfo.height + 4}px`}">
					<uni-icons size="27" color="#999999" type="search" class="search"></uni-icons>
					<input :focus="true" v-model="query" type="text" class="input" placeholder="好物" @tap="edit" @input="input" />
					<uni-icons size="27" color="#999999" type="camera" class="camera" @tap="chooseImgtToSearch"></uni-icons>
				</view>
				<view class="text" @tap="search">
					搜索
				</view>
			</view>
			<uni-group v-if="showRecommend" title="最近搜索">
				<uni-tag customStyle="background-color: #F1F1F1;border: #F1F1F1;color: #000000;"
					v-for="(item,index) in history" :text="item" :circle="true" :key="index" @click="choose(item)">
				</uni-tag>
			</uni-group>
			<uni-group v-if="showRecommend" title="猜你喜欢">
				<view class="group-container">
					<uni-tag customStyle="background-color: #FEEFF3;border: #FEEFF3;color: #F03867;"
						v-for="(item,index) in recommend" :text="item" :circle="true" :key="index" @click="choose(item)"></uni-tag>
					<uni-tag customStyle="background-color: #F1F1F1;border: #F1F1F1;color: #000000;"
						v-for="(item,index) in recommend" :text="item" :circle="true" :key="index" @click="choose(item)"></uni-tag>
				</view>
			</uni-group>
			<uni-list v-if="isEdit" v-show="textList.length !== 0">
				<uni-list-item v-for="(item,index) in textList" :key="index" :title="item" clickable="true"
					@click="choose(item)"></uni-list-item>
			</uni-list>
			<view v-else>
				{{query}}的商品列表
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuButtonInfo: null,
				isEdit: true,
				query: '',
				textList: [],
				history: ['关键字1', '关键字1', '关键字1'],
				recommend: ['关键字1', '关键字1', '关键字1']
			};
		},
		computed: {
			showRecommend() {
				return this.textList.length === 0 && this.isEdit;
			}
		},
		methods: {
			chooseImgtToSearch(){
				uni.chooseImage({
					count:1
				}).then(res => {
					console.log(res)
				})
			},
			choose(val) {
				this.query = val;
				this.textList = []
				this.search()
			},
			search() {
				this.isEdit = false;
			},
			edit() {
				this.isEdit = true;
			},
			input() {
				this.textList.push(this.query)
			},
			back() {
				uni.navigateBack()
			}
		},
		created() {
			//created中设置样式就不会出现画面跳动
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();

			// console.log(menuButtonInfo)
			// this.inputStyle.height = `${menuButtonInfo.height + 4}px`; //+4 为了让输入框更大一点
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-tag{
		// background-color: #F1F1F1;
		// color: #000000;
		// border: none;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		display: inline-block;
	}
	/deep/ .uni-group__title{
		background: none;
	}
	.group-container{
		display: flex;
		flex-wrap: wrap;
	}
	.container {
		background-color: #FFFFFF;
		padding: 0 $safe-padding;

		.search-container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.search-button {
				flex-grow: 1;

			}

			.text {
				padding-left: 30rpx;
				padding-right: 10rpx;
				padding-bottom: 8rpx;
			}
		}
	}

	.search-button {
		display: flex;
		background-color: #e6e6e6;
		justify-content: space-between;
		align-items: center;
		border-radius: 35rpx;

		// width: 500rpx;
		.search {
			margin-left: 20rpx;
		}

		.input {
			width: 100%;
			line-height: 70rpx;
			font-size: 28rpx;
			color: #999999;

		}

		.camera {
			margin-right: 20rpx;
		}
	}
</style>
