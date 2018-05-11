<template>
	<div id="app">
		<router-view/>
		<mt-tabbar v-model="selected" fixed="true">
			<mt-tab-item id="主页">
				<!--<img slot="icon" src="../static/img/logo.png">-->
				<i class="fa fa-home fa-2x"></i>
				<router-link :to="{path:'/'}">主页</router-link>
			</mt-tab-item>
			<mt-tab-item id="发现">
				<i class="fa fa-dot-circle-o fa-2x"></i>
				<router-link :to="{path:'/news'}">发现</router-link>
			</mt-tab-item>
			<mt-tab-item id="我的">
				<i class="fa fa-user fa-2x"></i>
				<router-link :to="{path:'/my'}">我的</router-link>
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				selected: '主页'
			}
		},
		//		created() {
		//			try {
		//				setTimeout(function() {
		//					//        document.getElementById('app').style.display = 'block';
		//					//        document.getElementById('appLoading').style.opacity = 0;
		//					document.body.removeChild(document.getElementById('appLoading'));
		//				}, 2500)
		//			} catch(e) {
		//
		//			}
		//		}
		mounted() {
			setTimeout(function() {
				document.getElementById('app').style.display = 'block';
				//        document.getElementById('appLoading').style.opacity = 0;
				document.body.removeChild(document.getElementById('appLoading'));
			}, 3000)
		}
	}
</script>

<style>
	/*@import url("../static/css/font-awesome-4.7.0/css/font-awesome.css");*/
	
	a,
	a:hover,
	a:active,
	a:visited,
	a:link,
	a:focus {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent;
		outline: none;
		background: none;
		text-decoration: none;
		display: block;
		color: darkgreen;
		margin-top: 2px;
	}
	a:hover{
		color: rgb(38, 162, 255);
	}
	/*::-webkit-scrollbar {/*隐藏滚轮*/
/*display: none;*/
/*}*/
	/*#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}*/
</style>