<template>
    <div id="subject">
    	<!-- 轮播图 -->
       <div class="header">
       		<swiper :options="swiperOption" ref="mySwiper" class='mySwiper'>
       			 <swiper-slide v-for="item in dataSwiper" :key="item" class="imgOut">
       			 	<img :src="item.picUrl" >
       			 	<span>{{ item.title }}</span>
       			 </swiper-slide>
       		</swiper>
       </div>
		<!-- 列表数据 -->
		<div class="goodsList" v-for="item in dataGoodsList">
			<div class="topIfo">
				<img :src="item.avatar" alt="">
				<span>{{ item.nickname }}</span>
			</div>
			<div class="goodsPic">
				<img :src="item.scenePicUrl" alt="" >
			</div>
			<div class="goodsIfo">
				<p class="title">{{ item.title }} <span v-if="!item.type">{{ item.priceInfo }}元起</span></p>
				<p class="subtitle">{{ item.subtitle }}</p>
			</div>
		</div>
    </div>
</template>

<script type="text/javascript">
 	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
 	export default{
	    name:'subject',
	    components: {
	    	swiper,
	    	swiperSlide
	    },
	    data () {
	    	return {
	    		dataSwiper: [],
	    		dataGoodsList: [],
	    		swiperOption: {
		    		slidesPerView: 3,
	        		paginationClickable: true,
	       			spaceBetween: 10
	       		}
	    	}
	    },
	    created(){
	    	//用axios发起网络请求
	    	this.axios.get('../../../static/subject/subject.json').then( res => {
	    		console.log(res);
	    		this.dataSwiper = res.data.data.topicTypeList;
	    		this.dataGoodsList = res.data.data.topicList;
	    	},err => {
	    		console.log(err);
	    	});
	    },
	    //定义这个sweiper对象  
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        }
	}

	
</script>

<style scoped>
	/*@import "../../../static/swiper.min.css";*/
	
	*{
		margin:0;
		padding: 0;
		box-sizing:border-box;
	}
	#subject{
		width: 100%;
		background-color: #f4f4f4;
	}
	.header{
		width: 100%;
		height: 2.56rem;
		margin-bottom: 10px;
		background-color:  white;
		border:1px solid rgba(0,0,0,0);

	}
	.header .mySwiper{
		margin-top: 0.4rem;
	}
	.header .imgOut{
		width: 4.2rem;
		height: 2.5rem;
		position: relative;

	}
	.header .imgOut:first-child{
		margin-left: 0.3rem;
	}
	.header .imgOut img{
		width: 100%;
		border-radius: 5px;

	}
	.header .imgOut  span {
		display: block;
		width: 3.1rem;
		height: 2.5rem;
		text-align: center;
		line-height: 2rem;
		color: #fff;
		font-size: .37rem;
		position: absolute;
		top:0;
		left:0;
		
	}
	/*商品信息*/
	.goodsList{
		width: 100%;
		margin-bottom: 0.3rem;
		padding-bottom: 0.6rem;
		background-color: white;	
	}
	.topIfo{
		height: 1.386rem;
		width: 100%;
		
	}
	.topIfo img {
		width: 0.85rem;
		border-radius: 50%;
		float: left;
		margin-left: 0.4rem;
		margin-top: 0.26rem;
	}
	.topIfo span{
		display: inline-block;
		font-size: 0.373rem;
		color:#333;
		line-height: 1.4rem;
		margin-left: 0.2rem
	}
	.goodsPic{
		width: 100%;
	}
	.goodsPic img{
		height: 5.6rem;
		width: 100%;
	}
	.goodsIfo {
		width: 100%;
		margin-top: -0.2rem;
		padding-right: 0.4rem;
	}
	.goodsIfo .title{
		font-size: 0.48rem;
		color: #333;
		margin-left: 15px;
		margin-top: 0.3rem;
	}
	.goodsIfo .title span{
		color: #b4282d;
		float: right;
	}
	.goodsIfo .subtitle{
		font-size: .37rem ;
		color: #7f7f7f;
		margin-left: 15px;
		margin-top: .1rem;
	}


</style>
