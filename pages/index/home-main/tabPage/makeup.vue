<template>
	<view>
		makeup
		<loading-popup :loading="loading"></loading-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true
			};
		},
		mounted() {
			this.loading = true;
			setTimeout(()=>{
				this.loading = false
			},3000)
		}

	}
</script>

<style lang="scss" scoped>
	
</style>
