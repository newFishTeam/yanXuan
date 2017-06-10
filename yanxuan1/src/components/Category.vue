<template>
	<div id="navi_cate">
		<ul>
			<li v-for="hmci in ctmData" class="hmci_big">
				<p class="hmc_title">{{ hmci.name }} </p>
				<img :src="hmci.wapBannerUrl">
				<!-- <ol class="clear">
					<li v-for="hmcii in hmci.subCateList" class="hmci_sml">
						<div class="hmc_img">
							<img :src="hmcii.wapBannerUrl">
							<p class="hmc_desc ellipsis">{{ hmcii.simpleDesc }}</p>
							<div v-if="!hmcii.colorNum == hmcii.productPlace">
								<div v-if="hmcii.colorNum " class="hmc_mark">
									<div>{{ hmcii.colorNum }}</div>
									<div>色</div>
									<div>可</div>
									<div>选</div>
								</div>
								<div v-if="hmcii.productPlace" class="hmc_mark">
									<div v-for="hmpdpi in hmcii.productPlace">
										{{ hmpdpi }}
									</div>
								</div>
							</div>
						</div>
						<div v-if="hmcii.promTag">
							<p class="hmc_tag">{{ hmcii.promTag }}</p>
						</div>
						<p class="hmc_name ellipsis">{{ hmcii.name }}</p>
						<p class="hmc_price">¥{{ hmcii.retailPrice }}</p>
					</li>
				</ol> -->
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
    export default{
    	props:['ctData'],
    	data () {
    		return{
    			ctmData:[...this.ctData]
    		}
    	},
    	watch:{
    		ctData(newValue, oldValue){
    			this.ctmData = newValue;
    		}
    	},
    	created(){
    		// console.log('---------------');
    		// console.log(this.b);
    		// console.log(this.ctData);
    		// console.log(this.ctmData);
    		// console.log('---------------');
    	}
    }
</script>

<style lang="less" scoped>
@color_fff:#fff;
#navi_cate{
	margin:0 0 .26667rem 0;
	.hmc_title{
		text-align:center;
		line-height: 1.6rem;
	    font-size: .37333rem;
	    color: #333;
	}
	.hmci_big{
		background:@color_fff;
		margin:0 0 .26667rem 0;
	}
	.hmci_sml{
		float:left;
		width:50%;
		padding: 0rem 0.13333333333333333rem 0.44rem 0.26666666666666666rem;
		
	}
	.hmci_sml:nth-child(2n){
		padding: 0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem;
	}
	.hmc_img{
		background:#F4F4F4;
		position:relative;
		padding-bottom: 118%;
	}
	.hmc_img img{
		    width: 4rem;
		    height: 3.93333rem;
		    position:absolute;
		    top:.29333rem;
		    left:.29333rem;
	}
	.hmc_mark{
		color:#9F8A60;
		border:1px solid #b4a078;
		position:absolute;
		top: .21333rem;
			left: .26667rem;
			text-align:center;
			font-size: .26667rem;
			line-height:1;
			padding: .16rem 1px;
			border-radius: .05333rem;
	}
	.hmc_desc{
		color:#9F8A60;
		width: 100%;
		font-size: .32rem;
		padding: .26667rem;
		background:#F1ECE2;
		line-height: .38667rem;
		position:absolute;
		bottom:0;
		
	}
	.hmc_tag{
		color:#fff;
		margin-left: .16rem;
		background:#f48f18;
		border-radius: 2px;
		line-height: .32rem;
		padding: .06667rem .21333rem;
		font-size: .26667rem;
		display:inline-block;
		margin: .26667rem 0 0 .10667rem;
	}
	.hmc_name{
		color: #333;
		font-size: .37333rem;
		padding: 0 .26667rem;
		margin: .26667rem auto .13333rem;
	}
	.hmc_price{
		font-size: .42667rem;
	    text-align: left;
	    color: #b4282d;
	    padding: 0 .26667rem;
	}
}
</style>
