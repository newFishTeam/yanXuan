<template>
    <div id="app">
        <router-view class="app_main">

        </router-view>
        <footer class="index_footer">
            <router-link to='/home' class="active">
                <i class="idf_icon idf_ic_sy"></i>
                <span class="inf_font">首页</span>
            </router-link>
            <router-link to='/subject'>
                <i class="idf_icon idf_ic_zt"></i>
                <span class="inf_font">专题</span>
            </router-link>
            <router-link to='/classify'>
                <i class="idf_icon idf_ic_fl"></i>
                <span class="inf_font">分类</span>
            </router-link>
            <router-link to='/cart'>
                <i class="idf_icon idf_ic_gwc"></i>
                <span class="inf_font">购物车</span>
            </router-link>
            <router-link to='/mine'>
                <i class="idf_icon idf_ic_wd"></i>
                <span class="inf_font">我的</span>
            </router-link>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'app',

}
</script>

<style lang="less" >
    #app{
        height:100%;

    }
    .app_main{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:1.30667rem; 
        overflow-x:hidden;
        overflow-y:outo;

    }
    .index_footer{
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height:1.30667rem;
        font-size: .32rem;
        background: #fafafa;
        border-top:1px solid #d9d9d9;
        display: flex;
        align-items:center;
        justify-content:space-around;
        a{
            color:#666;
            text-align:center;
            .idf_icon{
                display:inline-block;
                height:.53333rem;
                width:.53333rem;
                background-image:url(../static/img/home/hxm.png);
                background-repeat:no-repeat;
                background-size: .53333rem 6.53333rem;
                vertical-align:middle;

            }
            .idf_ic_sy{
                 background-position:0 -2.66667rem;
            }
            .idf_ic_zt{
                 background-position:0 -4.66667rem;
            }
            .idf_ic_fl{
                 background-position:0 -2rem;
            }
            .idf_ic_gwc{
                 background-position:0 -.66667rem;
            }
            .idf_ic_wd{
                 background-position:0 -6rem;
            }
            .inf_font{
                display:block;
            }
        }
        .active{
            color:#b4282d;
        }

    }
</style>
