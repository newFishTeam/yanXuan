<template>
    <div id="classify2"> 
        <searchh></searchh>
        <div class="empty"></div>
        <ul class="tabber">
            <li v-for="(item,i) in cateList.subCateList" @click="changeTab(i)" v-bind:class="{'active':i==currentIndex}">{{ item.name }}</li>
        </ul>
        <div class="myList">
            <p class="line"></p>
            <!-- <p class="frontN">{{ listName.category.frontName }}</p> -->
            <p class="frontN"></p>
            <ul class="myUl">        
                <li v-for="item in listName.itemList">
                    <div>
                        <img :src="item.listPicUrl" alt="">
                        <p class="descri">{{ item.simpleDesc }}</p>
                    </div>
                    <div>
                        <p><span v-if="item.itemTagList!=''">{{item.itemTaglist }}</span></p>
                        <p class="itemName">{{ item.name }}</p>
                        <span>￥{{item.retailPrice}}</span>
                    </div>
                </li>
            </ul>  
        </div> 
    </div>
</template>

<script type="text/javascript">
    import searchh from '../../../components/Searchh.vue'
    export default{
        name:'classify2',
        components:{
            searchh
        },
        data(){
        return{
            data:{},
            listName:{},
            cateList:[],
            abc: this.$route.params.id,
            abcMini: this.$route.params.idMini,
            currentIndex:0
        }  
    },
    created(){
        this.axios.get('./static/classify/all.json').then(res => {
            var barList = parseInt(this.abc);
            var listIndex = parseInt(this.abc)+1;
            this.data = res.data;
            this.listName = res.data.listName[listIndex];  //bian
            this.cateList = res.data.cateList[barList];
        },err=>{
            console.log(err);
        })
    },
    methods:{
        changeTab(i){
            this.listName = this.data.listName[i];
            this.currentIndex = i;
            console.log(1);
        }
    }
}
</script>

<style lang="less" scoped>
    .empty{
        width:100%;
        height:1.467rem;
    }
    .myUl{
        width:100%;
        padding-left:0.43rem;
    }
    .tabber{
        overflow-x:scroll;
        width:100%;

        white-space:nowrap;
        border-bottom:0.013rem solid #ccc;
    }
    .tabber li{
        display:inline-block;
        font-size:0.35rem;
        height:0.8rem;
        line-height:0.8rem;
        padding:0 0.4rem;
        text-align:center;
    }
    .active{
            color:#ab2b2b;
            border-bottom:0.1rem solid #ab2b2b;
        }
    .line{
        background-color: #f4f4f4;
        height:0.267rem;
        width:100%;
    }
    .myList{

    }
    .myList ul{
        width:100%;
    }
    .myList ul li{
        float: left;
        position: relative;
        width: 50%;
        overflow: hidden;
        background:white;
        height:6rem;
        font-size:0.3rem;
    }
    .myList ul li:first-child{
    }
    .myList ul li div:first-child{
        position: relative; 
        width:4.4rem;
    }
    .myList ul li img{
        display: block;
        width: 4.4rem;
        height: 3.93333rem;
        left: .29333rem;
        top: -1rem;
        background-color: #f4f4f4;
    }
    .descri{
        position: absolute;
        bottom: -0.6rem;
        width: 100%;
        background: #F1ECE2;
        height:0.7rem;
        font-size: .32rem;
        color: #9F8A60;  
        font-size:0.3rem;    
    }
    .myList ul li div:last-child{
        margin-top:1rem;
    }
    .myList li div>span{
        color:red;
    }
    .itemName{
        width:4.4rem;
        height:0.44rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    
</style>
