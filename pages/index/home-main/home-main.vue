<template>
	<view>
		<view class="tab-container">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" selectClass="text-xl"></wuc-tab>
		</view>
		<view>
			<recommend v-if="current.name === '推荐'"></recommend>
			<makeup v-if="current.name === '美妆'"></makeup>
		</view>
	</view>
</template>

<script>
	import wucTab from '../../../components/wuc-tab/wuc-tab.vue'
	import recommend from './tabPage/recommend.vue'
	import makeup from './tabPage/makeup.vue'
	export default {
		components: {
			wucTab,
			recommend,
			makeup
		},
		name: "homeMain",
		computed: {
			current() {
				return this.tabList[this.TabCur]
			}
		},
		data() {
			return {
				TabCur: 0,
				tabList: [{
						name: '推荐'
					},
					{
						name: '美妆'
					},
					{
						name: '女装'
					},
					{
						name: '男装'
					},
					{
						name: '鞋包'
					},
					{
						name: '运动'
					}, {
						name: '内衣'
					},
					{
						name: '奥莱'
					}, {
						name: '国际'
					},
					{
						name: '家电'
					}, {
						name: '食品'
					},
					{
						name: '饰品'
					},
				],
			}
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			}
		}

	}
</script>

<style scoped>
	.tab-container{
		padding: 10rpx 0;
	}
</style>
