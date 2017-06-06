<template>
    <div id="home">
        


    </div>
</template>

<script type="text/javascript">
    export default{
        name:'home',
        data () {
        	return {
        		hmdata:[]
        	}
        },
        created () {
        	this.axios.get('../static/home/homeJsonData.json').then(res => {
        		this.hmdata = res.data.cateList;
        	}, err => {

        	});
        }
    }


</script>

<style>
</style>
