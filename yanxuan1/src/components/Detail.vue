<template>
    <div id="detail">
        <header>
        	<i class="dt_topMenuBtn" @click="goBack()">返回</i>
        	<div class="dt_topRight">
        		<i class="dt_topSearch"></i>
        		<i class="dt_topCart">1</i>
        	</div>
        </header>
		<div class="dt_info">
			<div class="dt_img">
				<img src=""/>	
			</div>
			<div class="dt_desc">
				<div class="dtd_left">
					<p class="pd_name">{{ pd.name }}</p>
					<p class="pd_desc">{{ pd.simpleDesc }}</p>
					<p class="pd_price">{{ pd.retailPrice }}</p>
					<p class="pd_made"></p>
				</div>
				<div class="dtd_right">
					<p class="pd_jdNum"></p>
					<span class="pd_jd">用户评价</span>
					<p class="pd_showJd">查看</p>
				</div>
			</div>
		</div>
		<footer>
			<div class="dt_service">
				联系客服
			</div>
			<div class="dt_buyNow">
				立即购买
			</div>
			<div class="dt_addToCart">
				加入购物车
			</div>
		</footer>
    </div>
</template>

<script type="text/javascript">
    export default{
    	data (){
    		return{
    			pd:{...JSON.parse(this.$route.params.product)}
    		}
    	},
    	methods:{
    		goBack () {
    			history.back();
    		}
    	},
        created () {
        }
       
    }
</script>

<style lang="less">
 	#detail{
 		font-size:.32rem;
 		background:#fff;
 		position: absolute;
 		top:0;
 		left: 0;
 		right: 0;
 		bottom: 0;
 		z-index: 100;
 		header{
 			height: 1.16rem;
 			line-height:1.16rem;
 			position: fixed;
 			top:0;
	 		left: 0;
	 		right: 0;
	 		z-index: 101;
	 		border-bottom: 1px solid #E9E9E9;
	 		.dt_topRight{
	 			position:absolute;
	 			top:0px;
	 			right:0px;
	 		}
	 		.dt_topCart{
	 			color:#fff;
	 			text-align:center;
	 			display:block;
	 			width:20px;
	 			height:20px;
	 			line-height:20px;
	 			border-radius:10px;
	 			background:#B4282D;
	 		}
 		}
 		.dt_info{
 			margin:1.16rem 0 0 0;
 		}
 		footer{
 			height: 1.38667rem;
 			line-height:1.38667rem;
 			position: fixed;
 			text-align:center;
 			bottom:0;
	 		left: 0;
	 		right: 0;
	 		z-index: 101;
	 		border-top:1px solid #C7C7C7;
	 		display:flex;
	 		div{
	 			border-left:1px solid #C7C7C7;
	 		}
	 		.dt_service{
				width:2.08rem;
	 		}
	 		.dt_buyNow{
				flex:1;
	 		}
	 		.dt_addToCart{
				flex:1;
	 		}
 		}
 	}
</style>