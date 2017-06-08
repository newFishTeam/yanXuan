<template>
    <div id="mine">
        <div class="user">
            <img src="/static/mine/aa.jpg" alt="">
            <p>my name</p>
            <span>普通用户</span>
        </div>
        <div>
            <ul>
                <li v-for="item in data">
                    <img src="" alt="">
                    <p>{{ item.txt }}</p>
                </li>
            </ul>
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
        width:33%;
        display:inline-block;
        text-align:center;
        height:2rem;
        line-height:2rem;
    }
</style>
