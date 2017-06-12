<template>
    <div id="mine">
        <div class="user">
            <img src="/static/mine/aa.jpg" alt="">
            <p>my name</p>
            <span>普通用户</span>
        </div>
        <div>
            <ul>
                <router-link to="mine2">
                <li v-for="item in data" @click="myOrder()">
                    <span></span>
                    <p>{{ item.txt }}</p>
                </li>
                </router-link>
            </ul>
            <router-view></router-view>
            <div class="line">
                <p>退出登录</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default{
    name:'mine',
    data(){
        return{
           data:{} 
        }  
    },
    created(){
        this.axios.get('/static/mine/order.json').then(res=>{
            this.data = res.data.orderData;
            console.log(this.data);
        },err=>{
            console.log(err);
        })
    },
    methods:{
        myOrder(){

        }
    }
}
</script>

<style lang="less" scoped>
    .user{
        width:100%;
        height:3.6rem;
        line-height:3.6rem;
        background:rgba(0,0,0,0.8);
        position:relative;
        font-size: 0.5rem;
    }
    .user img{
        width:1.893rem;
        height:1.893rem;
        border-radius:50%;
        margin: 0.8rem;
    }
    .user p{
        color:white;
        line-height:0.5rem;
        position:absolute;
        top:1.1rem;
        left:3rem;
    }
    .user span{
        color:grey;
        line-height:0.5rem;
        position:absolute;
        top:1.8rem;
        left:3rem;
        font-size:0.35rem;
    }
    ul{
        width:100%;
        font-size: .173rem;
    }
    li{
        width:33.333%;
        display:inline-block;
        height:2.3rem;
        line-height:1.8rem;
        border-top:1px solid rgba(0,0,0,.15);
        border-right:1px solid rgba(0,0,0,.15);
        text-align:center;
    }
    li:nth-child(3n){
        border-right:none;
    }
    ul span{
        width:.66667rem;
        height: .66667rem;
        background:url('/static/mine/icon.png') no-repeat left center;
        display: inline-block;
        vertical-align: middle;
        background-size: .66667rem 10.16rem;
        background-position: 0 -6.4rem;
    }
    ul li span:nth-child(2){
        background-position: 0 -7.89333rem;
    }
    ul li p{
        height:0.16rem;
        line-height:0.1rem;
        margin-top:-0.2rem;
    }
    .line{
        width:100%;
        height:3.1rem;
        background:#f4f4f4;
        padding-top:0.6rem;
    }
    .line p{
        height:1.2rem;
        line-height:1.2rem;
        font-size:0.4rem;
        text-align:center;
        background:#fff;
    }
</style>
