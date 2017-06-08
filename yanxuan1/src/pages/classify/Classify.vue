<template>
    <div id="classify">
        <p class="firstP"></p>

        <ul class="leftUl">
            <li v-for="(item,i) in dataAll" @click="changeList(i)" ref="leftLi" v-bind:class="{'active':i ==currentIndex}">{{ item.name }}</li>
        </ul>

        <div class="rightDiv">

                <img :src="data.bannerUrl" alt="" > 

                <div class="rightDiv2" >
                    <p>推荐分类</p>
                    <ul> 
                        <li v-for="(item2,i) in data.subCateList">
                            <router-link :to="'/classify2/' + data.myIndex + item2.id">
                                <img :src="item2.wapBannerUrl" alt="">
                                <p>{{ item2.name }}</p>
                            </router-link>
                        </li>

                    </ul>

                </div> 
        </div>
        <router-view class="abc"></router-view>       
    </div>
</template>

<script type="text/javascript">
export default{
    name:'classify',
    data(){
        return{
            dataAll:[],
            data:[],
            currentIndex : 0
        }  
    },
    created(){
        this.axios.get('/static/classify/global.json').then(res => {
            this.dataAll = res.data.cateList;
            this.data = res.data.cateList[0];

            // console.log(this.dataAll);
        },err=>{
            console.log(err);
        })
    },
    
    methods:{
        changeList(i){      
            this.currentIndex = i;
            this.data = this.dataAll[i];
        },
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
    .abc{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:white;
    }
    .firstP{
        width:0;
        height:0;
        border:0.013rem solid #ccc;
    }
    .leftUl{
        width:2.133rem;
        height: 16.43rem;
        overflow-y: scroll;
        position: fixed;
        top:0;
        left:0;
        border-right:0.013rem solid #ccc;
    }
    .leftUl li{
        width:2.133rem;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        margin:0.8rem 0;

    }
    .leftUl li:first-child{
        margin-top:0.9rem;
    }
    .active{
        font-size:0.5rem;
        color:#ab2b2b;
        border-left:0.1rem solid #ab2b2b;
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
    .rightDiv2{
        width:7.04rem;
        height:2.56rem; 
        padding:0.5rem; 
    }
    .rightDiv2 ul li{
        float:left;
        margin:0.2rem;
    }
    .rightDiv2 ul li img{
        width:1.92rem;
        height:1.92rem;
    }
</style>
