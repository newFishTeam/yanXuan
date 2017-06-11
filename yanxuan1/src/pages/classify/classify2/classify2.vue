<template>
    <div id="classify2"> 
        <div class="topHeader">
            <div class="myHeader">
                <p @click="closeBtn()"><img src="static/classify/icon.png" alt="" v-bind:class="{'changes':flag}"></p>
                <p><img src="static/classify/icon.png" alt=""></p>
                    <p><img src="static/classify/icon.png" alt=""></p>
                <router-link to="/cart">
                    <p><img src="static/classify/icon.png" alt="" ></p>
                </router-link>
            </div>
            <router-view></router-view>
            <div class="tabHidden">
                
            </div>
        </div>
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
    export default{
        name:'classify2',
        data(){
        return{
            data:{},
            listName:{},
            // categoryL2List:[],
            cateList:[],
            abc: this.$route.params.id,
            abcMini: this.$route.params.idMini,
            flag:false,
            currentIndex:0
        }  
    },
    created(){
        this.axios.get('./static/classify/all.json').then(res => {
            var barList = parseInt(this.abc);
            var listIndex = parseInt(this.abc)+1;

            this.data = res.data;
            this.listName = res.data.listName[listIndex];  //bian
            console.log(this.listName);
            // this.categoryL2List = res.data.categoryL2List;
            this.cateList = res.data.cateList[barList];

            console.log(this.abc);
            console.log(this.abcMini);

        },err=>{
            console.log(err);
        })
    },
    methods:{
        changeTab(i){
            this.listName = this.data.listName[i];
            this.currentIndex = i;
        },
        closeBtn(){
            this.flag = !this.flag;

        }
    }
    }
</script>

<style lang="less" scoped>
    #classify2{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:100;
        overflow-y:scroll;
    }
    .topHeader{
        width:100%;
        height:1.467rem;
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:101;
    }
    .empty{
        width:100%;
        height:1.467rem;
    }
    .tabHidden{
        position:absolute;
        width:100%;
        height:1.467rem;
        background:#f4f4f4;
    }
    .frontN{
        width:100%;
        height:1.467rem;
        line-height:1.467rem;
        text-align:center;
    } 
    .myHeader span:first-child{
        display: inline-block;
        vertical-align: middle;

        background-size: 2.29333rem 9.28rem;
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -2.53333rem;
    }
    .myHeader{
        position:relative;
    }
    .myHeader p{
        overflow:hidden;
        position:absolute;
    }
    .myHeader p img{
        position:relative;
        width:2.29333rem ;
        height:9.28rem;
    }   
    .myHeader p:nth-child(1){
        width: .66667rem;
        height: .66667rem;
        left:0.7rem;
        top:0.22rem;
    }   
    .myHeader p:nth-child(1) img{
        top:-3.4rem;    
    }
    .myHeader p:nth-child(1) .changes{
        top:-4.2rem;
    }
    .myHeader p:nth-child(2){
        width: 2.29333rem;
        height: .72rem;
        top:0.2rem;
        left:3.5rem;
    }   
    .myHeader p:nth-child(2) img{
        top:-2.46rem;    
    }
    .myHeader p:nth-child(3){
        width: .85333rem;
        height: .85333rem;  
        left:7.7rem;
    }   
    .myHeader p:nth-child(3) img{
        top:-7.5rem;    
    }
    .myHeader p:last-child{
        width: .85333rem;
        height: .85333rem;       
        left:8.8rem;
        top:0.2rem;
    }
    .myHeader p:last-child img{
        top:-0.1rem;
    }   
    .myHeader{
        width:100%;
        height:1.173rem;
        background-color: #f4f4f4;
        border:0.013rem solid #ccc;
        border-left:none;
        border-right:none;
    }
    .myUl{
        width:100%;
        padding-left:0.43rem;
    }
    .tabber{
        overflow-x:scroll;
        width:100%;
        height:0.8rem;
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
