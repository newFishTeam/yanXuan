<template>
    <div id="mine2">
        <searchh></searchh>
        <div class="empty"></div>
        <ul>
            <li v-for="(item,i) in lis" @click="chanCo(i)" :class="{'active':i==currentIndex}">{{ item }}</li>
        </ul>
    </div> 
</template>

<script type="text/javascript">
import searchh from '../../../components/Searchh.vue'
export default{
    name:'mine2',
    components:{
        searchh
    },
    data(){
        return{      
            lis:['全部','待付款','待发货','已发货','待评价'],
            currentIndex:0,
        }  
    },
    methods:{
        chanCo(i){
            this.currentIndex =i;
        }
    }   
}
</script>

<style lang="less" scoped>
    #mine2{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:100;
        overflow-y:scroll;
        font-size:0.3rem;
        background:#f4f4f4;
    }
    ul{
        width:100%;
        height:1.093rem;
        line-height:1.093rem;
        text-align:center;
        display:flex;
        background:white;
    }
    ul li{
        flex:1;
    }
    .active{
        border-bottom:0.1rem solid #ab2b2b;
    }
    .empty{
        width:100%;
        height:1.23rem;
    }
</style>

