<template>
    <div id="cart">
       <div class="cartHeader">
        购物车
        <span>编辑</span>
       </div>
       <div class="goodsList">
            <div class="check"></div>
            <div class="ifoDiv">
                <img src="http://yanxuan.nosdn.127.net/0015319a54f9c1bd807abb4fd51774bf.png" alt="">
                <div class="goodsIfo">
                    <p>商品名称</p>
                    <p>商品属性</p>
                    <p>价格</p>
                </div>
                <span class="goodsCount">x1</span>
            </div>
       </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        name:'cart',
        created () {
        }
       
    }
</script>

<style scoped>
    #cart{
        width: 100%;
        padding-top:1.2rem;
    }
    .cartHeader{
        /*width: 100%;*/
        height: 1.1rem;
        line-height:  1.1rem; 
        text-align: center;
        font-size: .48rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #eee;
    }
    .cartHeader span{
        position: absolute;
        top: 0.02rem;
        right: 0.3rem;
        font-size: 0.4rem;
    }
    .goodsList{
        width: 100%;
        height:2.5rem;
        background-color: rgba(0,0,0,0.1);  
    }
    .check{
        width: 15%;
        float: left;
        height: 100%;
    }
    .ifoDiv{
        width: 85%;
        height: 100%;
        float: left;
        position: relative;
    }
    .ifoDiv img{
        width: 2rem;
        background-color: #eee;
        margin-top: 0.3rem;
        float: left;
        
    }
    .ifoDiv .goodsIfo {
        float: left;
        margin-left: 0.2rem;
    }
    .ifoDiv .goodsIfo p:nth-child(1){
        font-size: 0.4rem;
        margin-top: 0.4rem;
        color: #333;
    }
    .ifoDiv .goodsIfo p:nth-child(2){
        font-size: 0.35rem;
        color: #666;
        margin-top: 0.1rem;
    }
    .ifoDiv .goodsIfo p:nth-child(3){
        font-size: 0.4rem;
        color: #333;
    
    }
    .ifoDiv .goodsCount{
        position: absolute;
        right: 0.5rem;
        top :0.5rem;
        font-size: 0.4rem;
    }
</style>