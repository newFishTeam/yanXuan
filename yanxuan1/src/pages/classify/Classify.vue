<template>
    <div id="classify">
        <p class="firstP"></p>

        <ul class="leftUl">
            <li v-for="(item,i) in data" @click="changeList()">{{ item.name }}</li>
        </ul>

        <div class="rightDiv" v-for="(item,i) in data" ref="rightList">

                <img :src="item.bannerUrl" alt="" > 

                <div class="rightDiv2" >
                    <p>推荐分类</p>
                    <ul> 
                        <li v-for="(item2,i) in item.subCateList">
                            <img :src="item2.wapBannerUrl" alt="">
                            <p>{{ item2.name }}</p>
                        </li>
                    </ul>
                </div> 
        </div>       
    </div>
</template>

<script type="text/javascript">
export default{
    name:'classify',
    data(){
        return{
            data:{}
        }  
    },
    created(){
        this.axios.get('/static/classify/global.json').then(res => {
            console.log(res);
            this.data = res.data.cateList;
        },err=>{
            console.log(err);
        })
    },
    methods:{
        changeList(){
            console.log(this.i);
            console.log(this.$refs.rightList);
        }
    }
}
</script>

<style lang="less" scoped>
    #classify{
        width:100%;
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
        font-size: .173rem;
        border-size:border-box;
    }
    .firstP{
        width:0;
        height:0;
        border:0.013rem solid #ccc;
    }
    .leftUl{
        width:2.133rem;
        height: 13.84rem;
        overflow-y: scroll;
        position: fixed;
        top:0;
        left:0;
        border-right:0.013rem solid #ccc;
    }
    .leftUl li{
        width:2.133rem;
        height: 0.667rem;
        line-height: 0.667rem;
        text-align: center;
        margin:1rem 0;
        border-left:0.067rem solid #fff;
    }
    .leftUl li:first-child{
        margin-top:0.7rem;
    }
    .active{
        font-size:0.25rem;
        color:#ab2b2b;
        border-left:0.067rem solid #ab2b2b;
    }
    .rightDiv{
        float:right;
        width:7.84rem; 
        text-align:center;
    }
    .rightDiv img{
        width:7.04rem;
        height:2.56rem;
    }
    .rightDiv2 ul li img{
        width:1.92rem;
        height:1.92rem;
    }
</style>
