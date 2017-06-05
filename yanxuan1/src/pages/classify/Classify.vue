<template>
    <div id="classify">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
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
        this.axios.get('/static/ftlData.json').then(res=>{
            console.log(res);
        },err=>{
            console.log(err);
        })
    }
}
</script>

<style>

</style>
