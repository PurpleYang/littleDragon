<template>
	<div class="home" id="container">
		<mt-header fixed title="小青龙"></mt-header>
		<!--<div class="swipe-wrapper">-->
		<mt-swipe ref="swipeWrapper" class="swipe-wrapper">
			<mt-swipe-item class="swip-item-1 item" v-for="i in swipe" :key="i.id">
				<a :href="i.href">
					<img :src="i.url" class="img" />
					<!--<span class="desc">{{i.title}}</span>-->
				</a>
			</mt-swipe-item>
			<!--<mt-swipe-item class="swip-item-2 item">2</mt-swipe-item>
            <mt-swipe-item class="swip-item-3 item">3</mt-swipe-item>-->
		</mt-swipe>
		<ul class="picbox">
    <li v-for="pic in Picbox">
    	<!--<a>-->
      <img v-lazy="pic" id="lazypic">
    	<!--</a>-->
    </li>
  </ul>
		<!--</div>-->
		<!--<h1>{{ msg }}</h1>-->
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				//				msg: '这是主页'
				swipe: [{
					    id:1,
						title: 1,
						href: 'http://baidu.com',
						url: '../../static/img/swipe1.jpg'
					},
					{
						id:2,
						title: 2,
						href: 'http://baidu.com',
						url: '../../static/img/swipe2.jpg'
					},
					{
						id:3,
						title: 3,
						href: 'http://baidu.com',
						url: '../../static/img/swipe3.jpg'
					}
				],
				Picbox:["../../static/img/1.jpg",
				"../../static/img/2.jpg",
				"../../static/img/3.jpg",
				"../../static/img/4.jpg",
				"../../static/img/5.jpg"]
			}
		},
		//		methods: {
		//			handleChange(index) {
		//				
		//			}
		//		}
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
	img{
		width: 100%;
		height: 150px;
	}
	.mint-header{
		height: 50px;
		background-color: lightseagreen;
	}
	#lazypic{
  width: 355px;
  height: 335px;
  margin: auto;
}
	.picbox{
		position: absolute;
		top: 212px;
	}
	.swipe-wrapper {
		width: 100%;
		height: 150px;
		top: 52px;
		position: absolute;
		margin-bottom: 5px;
	}
	
	.swip-item-1 {
		/*background: lightseagreen;*/
	}
	
	.swip-item-2 {
		background: blue;
	}
	
	.swip-item-3 {
		background: green;
	}
	
	.item {
		text-align: center;
		font-size: 40px;
		color: white;
	}
</style>