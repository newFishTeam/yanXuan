<template>
	<div id="home">
		<header class="hm_header">
		</header>
		<swiper :options="swiperOption" ref="mySwiperA" >
			<swiper-slide v-for="img in swiperData" :key="img">
				<img :src="img.picUrl"></img>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>  
		</swiper>
		<div class="hm_policy">
			<ul class="hmp_ul">
				<li v-for="plci in policyData">
					<i class="hmp_icon" :style="{backgroundImage: 'url(' + plci.icon + ')'}"></i>
					<span>{{ plci.desc }}</span>
				</li>
			</ul>
		</div>
		<!-- 品牌直供 -->
		<div class="hm_tag">
			
		</div>
		<!-- 人气推荐 -->
		<div class="hm_popular">
			<p class="hmp_titile">
				<span>人气推荐</span>
				<i class="hmp_icon hmp_titleicon"></i>
			</p>
			<ul>
				<li v-for="hmpl in popularData" class="hmpitme clear">
					<div class="hmpl_img">
						<img :src="hmpl.listPicUrl">
					</div>
					<div class="hmpl_desc">
						<div>
							<p class="tehui ellipsis" v-if="hmpl.promTag">{{ hmpl.promTag }}</p>
						</div>
						<p class="hmpld_name ellipsis">{{ hmpl.name }}</p>
						<p class="hmpld_desc ellipsis">{{ hmpl.simpleDesc }}</p>
						<p class="hmpld_price ellipsis">¥{{ hmpl.retailPrice}}</p>
					</div>
					
				</li>
			</ul>
		</div>
		<!-- 分类 -->
		<div class="hm_cate">
			<ul>
				<li v-for="hmci in cateData" class="hmci_big">
					<p class="hmc_title">{{ hmci.name }}好物 </p>
					<ol class="clear">
						<li v-for="hmcii in hmci.itemList" class="hmci_sml">
							<div class="hmc_img">
								<img :src="hmcii.listPicUrl">
								<p class="hmc_desc ellipsis">{{ hmcii.simpleDesc }}</p>
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
							<div v-if="hmcii.promTag">
								<p class="hmc_tag">{{ hmcii.promTag }}</p>
							</div>
							<p class="hmc_name ellipsis">{{ hmcii.name }}</p>
							<p class="hmc_price">¥{{ hmcii.retailPrice }}</p>
						</li>
					</ol>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">

import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        name:'home',
        components: {  
            swiper,  
            swiperSlide  
        }, 
        data () {
        	return {
        		swiperData:[],
        		policyData:[],
        		popularData:[],
        		cateData:[],
        		swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                pagination: '.swiper-pagination',  
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,  
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                }  
        	}
        },
		computed: {
			swiper() {
				return this.$refs.mySwiperA.swiper
			}
		},
		mounted() {
			this.swiper.slideTo(3, 1000, false)
		},
        created () {
        	this.axios.get('../static/home/homeJsonData.json').then(res => {

        		//res.data.focusList;轮播图
        		//res.data.policyDescList; 轮播图下面三个菜单
        		//res.data.tagList; 品牌制造直供
        		//res.data.popularItemList; 人气推荐
        		//res.data.newItemList; 新品首发
        		//res.data.topicList; 专题精选
        		//res.data.flashSaleIndexVO; 同专题精选
        		//res.data.cateList;分类
        		
        		console.log(res.data);
        		this.swiperData = res.data.focusList;
        		this.policyData = res.data.policyDescList;
        		this.popularData = res.data.popularItemList;
        		this.cateData = res.data.cateList;

        	}, err => {

        	});

        }
    }


</script>

<style lang="less">

	

	@color_fff:#fff;

	#home{
		background:#F4F4F4;
		font-size:.32rem;
		img{
			width:100%;
		}
		.hm_header{
			height:2rem;
			background:@color_fff;

		}
		.swiper-container{
			height:5.33333rem;
		}
		.hm_policy{
			height:.96rem;
			background:@color_fff;
			.hmp_ul{
				height:100%;
				display:flex;
				align-items:center;
		        justify-content:space-around;
			}
			.hmp_icon{
				display:inline-block;
				width: .42667rem;
			    height: .42667rem;
				background-repeat: no-repeat;
			    background-size: 100% 100%;
			    vertical-align:middle;

			}

		}
		.hm_popular{
			background:@color_fff;
			margin:.26667rem 0;
			padding: 0 .26667rem .26667rem;
			.hmp_titile{
				height: 1.46667rem;
				line-height:1.46667rem;
    			font-size: .42667rem;
    			text-align:center;
    			.hmp_titleicon{
    				display:inline-block;
					width: .42667rem;
				    height: .42667rem;
					background-repeat: no-repeat;
				    background-size: 100% 100%;
				    vertical-align:middle;
					background-image:url(../../../static/img/home/hxmwap.png);
				}
			}

			.hmpitme{
				display:flex;
				justify-content:space-around;
				height: 3.86667rem;
				border-top: 1px solid #d9d9d9;
			}
			.hmpl_img img{
				width:auto;
    			height: 3.86667rem;
			}
			.hmpl_desc{
				width: 4.66667rem;
				display: flex;
				flex-wrap: nowrap;
				flex-direction: column;
				justify-content: center;
				.tehui{
					color: #fff;
    				font-size: .26667rem;
					height: .4rem;
					padding: .06667rem .21333rem;
				    text-align: center;
					background-color: #e3a050;
					border-radius: 2px;
    				line-height: .32rem;
    				display:inline-block;
				}
				.hmpld_name{
					font-size: .37333rem;
				    line-height: .64rem;
				    color: #333;
				}
				.hmpld_desc{
				    font-size: .32rem;
				    line-height: .58667rem;
				    color: #999;
				}
				.hmpld_price{
					    font-size: .42667rem;
					    line-height: .64rem;
					    color: #b4282d;
				}

			}
		}
		.hm_cate{
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
		
	}

	
</style>
