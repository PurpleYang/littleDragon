<template>
	<div class="news">
		<!--<h1>{{ msg }}</h1>-->
		<!--<mt-search v-model="value">
			<mt-cell v-for="item in result" :title="item.title" :value="item.value">
			</mt-cell>
		</mt-search>-->
		<!--<mt-header fixed title="小青龙"></mt-header>-->
		<mt-search v-model="value" cancel-text="取消" placeholder="搜索">
		</mt-search>
		<mt-navbar v-model="selected" fixed="false">
			<mt-tab-item id="1">选项一</mt-tab-item>
			<mt-tab-item id="2">选项二</mt-tab-item>
			<mt-tab-item id="3">选项三</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<mt-cell v-for="n in 10" :title="'内容 ' + n" />111111
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<mt-cell v-for="n in 4" :title="'测试 ' + n" />2222222
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<mt-cell v-for="n in 6" :title="'选项 ' + n" />3333333
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
		name: 'news',
		data() {
			return {
				//    msg: '这是资讯页'
				selected: '1'
			}
		},
		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for(let i = 1; i <= 10; i++) {
						this.list.push(last + i);
					}
					this.loading = false;
				}, 2500);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	
	.news {
		position: relative;
	}
	
	.mint-tab-container {
		top: 150px;
	}
	
	.mint-navbar {
		top: 100px;
	}
</style>