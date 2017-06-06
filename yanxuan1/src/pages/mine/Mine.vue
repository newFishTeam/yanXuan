<template>
    <div id="mine">
        <h2>我的页测试</h2>
    </div>
</template>

<script type="text/javascript">
export default{
    name:'mine',
    data(){
        return{
           data:[] 
        }  
    },
    created(){
        this.axios.get('/static/ftlData.json').then(res=>{
            this.data = res.data;
            console.log(this.data.categoryL1List[1].name);
        },err=>{
            console.log(err);
        })
    }
}
</script>

<style>

</style>
