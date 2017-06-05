<template>
  <div id="app">
    <ul>
        <router-link to='/home'> 首页 </router-link>
        <router-link to='/subject'> 专题 </router-link>
        <router-link to='/classify'> 分类 </router-link>
        <router-link to='/cart'> 购物车 </router-link>
        <router-link to='/mine'> 我的 </router-link>

    </ul>
    <router-view>

    </router-view>

  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
    ul>li{
        display: inline-block;
        font-weight: bold;
    }
</style>
