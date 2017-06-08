<template>
	<div class="hm_hd_search">
		<span class="hm_hd_sh_icon"></span>
		<span>商品搜索，共5601款好物</span>
	</div>
</template>

<script type="text/javascript">
    export default{
        name:'search'
    }
</script>

<style lang="less" scoped>

.hm_hd_search{
	flex:1;
	color:#666;
	font-size: .37333rem;
	display:flex;
	align-items: center;
	justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
}
.hm_hd_sh_icon{
	vertical-align: middle;
   	background-image: url(../../static/img/home/hxm_search.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: .13333rem;
    display: inline-block;
    width: .37333rem;
    height: .37333rem;
}
</style>
