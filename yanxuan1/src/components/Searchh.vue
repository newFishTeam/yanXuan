<template>
    <div id="classify2"> 
        <div class="topHeader">
            <div class="myHeader">
                <span @click="closeBtn()" v-bind:class="{'changes':flag}"></span>
                <span></span>
                <span></span>
                <router-link to="/cart">
                    <span id="span4"></span>
                </router-link>
                <router-view></router-view>
            </div>
            <div class="tabHidden" v-show="flag">
                <ul>
                    <li>
                        <router-link to="/home">
                        <span></span>
                        <p>首页</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/subject">
                        <span></span>
                        <p>专题</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/classify">
                        <span></span>
                        <p>分类</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/mine">
                        <span></span>
                        <p>个人</p>
                        </router-link>
                    </li>
                    <router-view></router-view>
                </ul>        
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        name:'searchh',
        data(){
        return{
            flag:false
        }  
    },
    methods:{
        closeBtn(){
            this.flag = !this.flag;
        }
    }
    }
</script>

<style lang="less" scoped>
    .topHeader{
        width:100%;
        height:1.467rem;
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:101;
        font-size:0.3rem;
    }
    .empty{
        width:100%;
        height:1.467rem;
    }
    .frontN{
        width:100%;
        height:1.467rem;
        line-height:1.467rem;
        text-align:center;
    } 
    .myHeader{
        width:100%;
        height:1.173rem;
        background-color: #f4f4f4;
        border:0.013rem solid #ccc;
        border-left:none;
        border-right:none;
        position:relative;
    }
    .myHeader span{
        display: inline-block;
        background:url('/static/classify/icon.png') no-repeat left center;
        background-size: 2.29333rem 9.28rem;
        background-repeat: no-repeat;
    }       
    .myHeader span:first-child{
        width: .66667rem;
        height: .66667rem;      
        background-position: 0 -3.38667rem;
        position:absolute;
        left:0.6rem;
        top:0.2rem;
    } 
    .topHeader .myHeader .changes{   
        background-position: 0 -4.18667rem;
    }
    .myHeader span:nth-child(2){
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -2.53333rem;
        position:absolute;
        left:3.7rem;
        top:0.2rem;
    }   
    .myHeader span:nth-child(3){
        width: .85333rem;
        height: .85333rem;  
        background-position: 0 -7.65333rem; 
        position:absolute;
        left:7.2rem;
        top:0.2rem;
    }   
    #span4{
        position:absolute;
        width: .85333rem;
        height: .85333rem;       
        background-position: 0 0;
        left:8.7rem;
        top:0.2rem;
    }   
    .tabHidden{
        position:absolute;
        width:100%;
        height:1.573rem;
        background:#f4f4f4;
    }
    .tabHidden span{
        display: inline-block;
        background:url('/static/classify/icon.png') no-repeat left center;
        background-size: 2.29333rem 9.28rem;
        background-repeat: no-repeat;
        width: .64rem;
        height: .64rem;
    }
    ul{
        width:100%;
        height:1.573rem;
        border-bottom:0.013rem solid #ccc;
        display:flex;
        padding-top:0.15rem;
    }
    ul li{
        flex:1;
        height:1.573rem;
        text-align:center;
    }
    ul li:first-child span{
        background-position: 0 -1.76rem;
    }
    ul li:nth-child(2) span{
        background-position: 0 -8.64rem;
    }
    ul li:nth-child(3) span{
        background-position: 0 -.98667rem;
    }
    ul li:nth-child(4) span{
        background-position: 0 -6.88rem;
    }
</style>
