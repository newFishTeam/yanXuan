<template>
	<div id="home">
		<header class="hm_header">
			<div class="hm_hd_top">
				<span class="hm_hd_logo" ></span>
				<search></search>
			</div>
			<div class="hm_hd_bottom">
				<div class="swiper-container">
			        <div class="swiper-wrapper hm_hd_cateLisht">
			            <div class="swiper-slide" :class="{swpsld_act:navid==0}" @click="showHome()">推荐</div>
			            <div class="swiper-slide" :class="{swpsld_act:navid==iti}" style="width:60px;" v-for="item,iti in navesData" @click="showCate(iti)">{{ item.name }}</div>
			           <!--  <div class="swiper-slide">餐厨</div>
			            <div class="swiper-slide">配件</div>
			            <div class="swiper-slide">服装 </div>
			            <div class="swiper-slide">洗护</div>
			            <div class="swiper-slide">婴童</div>
			            <div class="swiper-slide">杂货</div>
			            <div class="swiper-slide">饮食</div>
			            <div class="swiper-slide">志趣</div> -->
			        </div>
			        <!-- <div class="swiper-pagination"></div> -->
    			</div>

			</div>
		</header>
		<div class="main" v-show="mainShow">
			<div class="banner">
				<div class="swiper-container">
	        		<div class="swiper-wrapper">
			           <!--  <div class="swiper-slide" v-for="bswpi in swiperData"> -->
							<img class="swiper-slide" :src="bswpi.picUrl" v-for="bswpi in swiperData">
			           <!--  </div> -->
	        		</div>
			        <!-- Add Pagination -->
			        <div class="swiper-pagination"></div>
	    		</div>
			</div>
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
					<i class="hmp_titleicon"></i>
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
			<!-- 精选 -->
			<div class="hm_topic">
				<p class="hmp_titile">
					<span>专题精选</span>
					<i class="hmp_icon hmp_titleicon"></i>
				</p>
				<div class="hmtp_img">
					<img :src="topicData.scenePicUrl">
				</div>
				<p class="hmtp_title">
					{{ topicData.title }} 
					<span class="hmtp_price">{{ topicData.priceInfo }}元起</span>
				</p>
				<p class="hmtp_subtitle">{{ topicData.subtitle }}</p>
			</div>
			<!-- 分类 -->
			<div class="hm_cate">
				<ul>
					<li v-for="hmci in cateData" class="hmci_big">
						<p class="hmc_title">{{ hmci.name }}好物 </p>
						<ol class="clear">
							<li v-for="hmcii in hmci.itemList" class="hmci_sml">
								<div class="hmc_img" @click="showDetail(hmcii)">
									<img :src="hmcii.listPicUrl">
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
						</ol>
					</li>
				</ul>
			</div>
		</div>
		<div class="cate_main" v-show="cateShow">
			<category :ctData="naveiData" ></category>
		</div>
	</div>
</template>

<script type="text/javascript">
	require("../../../static/swiper.min.js");
	import search from '../../components/Search.vue'
	import category from '../../components/Category.vue'
    export default{
        name:'home',
        components: {  
            search,
            category
        }, 
        data () {
        	return {
        		sendItem:{},
        		mainShow:true,
        		cateShow:false,
        		navid:0,
        		swiperData:[],
        		policyData:[],
        		popularData:[],
        		cateData:[],
        		topicData:[],
        		navesData:{},
        		naveiData:{}
        	}
        },
        methods:{
        	showHome () {
        		this.navid = 0;
        		this.mainShow = true;
        		this.cateShow = false;
        	},
        	showCate (ctid) {
        		this.navid = ctid;
        		this.naveiData = this.navesData[ctid].subCateList;
        		this.mainShow = false;
        		this.cateShow = true;
        	},
        	showDetail (item) {
        		//listPicUrl
        		let {listPicUrl,productPlace,promTag,name,retailPrice}=item;
        		this.sendItem = {listPicUrl,productPlace,promTag,name,retailPrice};
				// console.log(this.sendItem);
        		// JSON.stringify(item)
        		this.$router.push('/detail/'+JSON.stringify(this.sendItem));
        		console.log(JSON.stringify(this.sendItem));
        		
        	}
        },
        watch:{
        	// cateData(newValue, oldValue){
        	// 	cateData = newValue;
        	// }
        },
		mounted() {

			//顶部菜单轮播图
			var swiper = new Swiper('.hm_hd_bottom .swiper-container', {
				width:60,
				pagination: '.hm_hd_bottom .swiper-pagination',
		        paginationClickable: true
		    });

		    //banner轮播图
		    var bannerSwiper = new Swiper('.banner .swiper-container', {
		        pagination: '.banner .swiper-pagination',
		        paginationClickable: true,
		        autoplay: 1000
    		});
		},
        created () {

        	//推荐列表里的数据
        	this.axios.get('../static/home/homeJsonData.json').then(res => {

        		//res.data.focusList;轮播图
        		//res.data.policyDescList; 轮播图下面三个菜单
        		//res.data.tagList; 品牌制造直供
        		//res.data.popularItemList; 人气推荐
        		//res.data.newItemList; 新品首发
        		//res.data.topicList; 专题精选
        		//res.data.flashSaleIndexVO; 同专题精选
        		//res.data.cateList;分类
        		
        		//console.log(res.data);
        		this.swiperData = res.data.focusList;
        		this.policyData = res.data.policyDescList;
        		this.popularData = res.data.popularItemList;
        		this.cateData = res.data.cateList;
        		this.topicData = res.data.topicList[0];

        	}, err => {

        	});

        	//顶部菜单数据
        	this.axios.get('../static/home/homeCateList.json').then(res => {//console.log("---------------");	
        		//console.log(res.data);
        		this.navesData = res.data

        	}, err => {

        	});

        }
    }


</script>

<style lang="less">
	@import url("../../../static/swiper.min.css");
	@color_fff:#fff;
     
	#home{
		.pd_detail{
		}
		background:#F4F4F4;
		font-size:.32rem;
		img{
			width:100%;
		}
		.hm_header{
			height:2rem;
			background:@color_fff;
			position:fixed;
			left:0;
			right:0;
			top:0;
			z-index:99;
			border-bottom:1px solid #E3E3E3;
			.hm_hd_top{
				display:flex;
				padding: .21333rem .4rem;
				align-items: center;
				.hm_hd_logo{
					width: 1.84rem;
				    height: .53333rem;
				    background-image: url(../../../static/img/home/hxm_logo.png);
				    display: inline-block;
				    margin-right: .26667rem;
				    background-size: cover;
				    background-position: center;
				}
			}
			.hm_hd_bottom{
				.swiper-container {
					width: 100%;
				}
				.swiper-slide:first-child{
					margin:0 0 0 200px;
				}
				.swiper-slide {
					text-align: center;
					background: #fff;
					display:inline-block;
					display: -webkit-box;
			        display: -ms-flexbox;
			        display: -webkit-flex;
			        display: flex;
			        border-bottom:2px solid transparent;
			        -webkit-box-pack: center;
			        -ms-flex-pack: center;
			        -webkit-justify-content: center;
			        justify-content: center;
			        -webkit-box-align: center;
			        -ms-flex-align: center;
			        -webkit-align-items: center;
			        align-items: center;
				}
				.swpsld_act{
					color:#b4282d;
					border-bottom:2px solid #b4282d;
				}
			}
			.hm_hd_cateLisht{
				color: #333;
				height:.8rem;
				line-height: .8rem;
				justify-content: center;
				align-items: center;
				font-size: .37333rem;
			}
		}
		.main{
			margin:2rem 0 0 0;
			.banner{
				height: 5.33333rem;
				width:100%;
				.swiper-container {
					width: 100%;
				}
				.swiper-slide {
					text-align: center;
					background: #fff;
					display:inline-block;
					display: -webkit-box;
			        display: -ms-flexbox;
			        display: -webkit-flex;
			        display: flex;
			        -webkit-box-pack: center;
			        -ms-flex-pack: center;
			        -webkit-justify-content: center;
			        justify-content: center;
			        -webkit-box-align: center;
			        -ms-flex-align: center;
			        -webkit-align-items: center;
			        align-items: center;
				}
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
			.hm_topic{
				background:@color_fff;
				margin:0 0 .26667rem 0;
				padding: 0 .4rem .61333rem;
				.hmtp_img{
					width: 8.8rem;
				    height: 4.96rem;
				    margin: 0 0 .4rem 0;
				    border-radius: 4px;
				    overflow:hidden;
				} 
				.hmtp_img img{
					height:100%;
					width:auto;
				} 
				.hmtp_title{
					font-size: .37333rem;
					margin:0 0 .17333rem 0; 
				}
				.hmtp_price{
					font-size: .37333rem;
	    			color: #b4282d;
				}
				.hmtp_subtitle{
					font-size: .32rem;
				    line-height: 1;
				    color: #999;
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
		.cate_main{
			margin:2rem 0 0 0;
		}
		
	}
</style>
