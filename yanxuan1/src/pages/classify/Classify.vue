<template>
    <div id="classify">
        <ul>
            <li v-for="(item,i) in data.categoryL1List">{{ item.name }}</li>
        </ul>
        <div v-for="(item,i) in data.categoryL1List">   
            <img :src="item.bannerUrl" alt="">
        </div>
    </div>
</template>

<script type="text/javascript">
export default{
    name:'classify',
    data(){
        return{
           data:[] 
        }  
    },
    created(){
        this.axios.get('/static/classify/ftlData.json').then(res=>{
            this.data = res.data;
            console.log(this.data.categoryL1List[1].name);
        },err=>{
            console.log(err);
        })
    }
}
</script>

<style >
    #classify{
        width:100%;
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
        font-size: .173rem;
        border-size:border-box;
    }
    #classify ul{
        width:2.133rem;
        height: 13.84rem;
        overflow-y: scroll;
        position: fixed;
        top:0;
        left:0;
        /*background-color: pink;*/
    }
    #classify ul li{
        width:2.133rem;
        height: 0.667rem;
        line-height: 0.667rem;
        text-align: center;
        margin:0.22rem 0;
        border-left:0.027rem solid #ab2b2b;
    }
    #classify ul li:first-child{
        margin-top:0.5rem;
    }
    #classify div{
        float:right;
    }
    #classify div img{
        width:7.04rem;
        height:2.56rem;
    }
</style>
