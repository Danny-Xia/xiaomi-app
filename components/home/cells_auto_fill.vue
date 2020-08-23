<template>
	<view class="cells-auto-fill">
		<view class="cells-item" v-for="item in list" :key="item.id">
			<image :src="item.imgSrc" mode="" class="image"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				list: [
					{
						id: 'cells-list1-1',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6',
						text: '小米秒杀'
					},
					{
						id: 'cells-list1-2',
						imgSrc: '//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD',
						text: '小米众筹'
					},
					{
						id: 'cells-list1-3',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?f=webp&w=216&h=228&bg=FFFFFF',
						text: '全芯超越'
					},
					{
						id: 'cells-list1-4',
						imgSrc: '//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp?w=216&h=228&bg=E5F4FC',
						text: '以旧换新'
					},
					{
						id: 'cells-list1-5',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6',
						text: '超值特卖'
					},
					{
						id: 'cells-list2-1',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF',
						text: '智能'
					},
					{
						id: 'cells-list2-2',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA',
						text: '笔记本热卖'
					},
					{
						id: 'cells-list2-3',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5',
						text: '电视热卖'
					},
					{
						id: 'cells-list2-4',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF',
						text: '洗衣机热卖'
					},
					{
						id: 'cells-list2-5',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8',
						text: '米粉卡'
					}
				]
			}
		}
	}
	
</script>

<style lang="scss">
	@import '../../static/css/home/cells_auto_fill.scss';
</style>
