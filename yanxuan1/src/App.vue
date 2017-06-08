<template>
    <div id="app">
        <router-view class="app_main">
        </router-view>
        <footer class="index_footer">
            <a v-for="(item , i) in routertos "  :class="{true:item.active_cls,false:item.nom_cls}[curIndex==i]"  @click="show(i)">
                <i class="idf_icon" ></i>
                <span class="inf_font">{{ item.name }}</span>
            </a>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'app',
    data () {
        return{
            curIndex:0,
            routertos:[
                {to:'/home',name:'首页',active_cls:'acidf_ic_sy',nom_cls:'idf_ic_sy'},
                {to:'/subject',name:'专题',active_cls:'acidf_ic_zt',nom_cls:'idf_ic_zt'},
                {to:'/classify',name:'分类',active_cls:'acidf_ic_fl',nom_cls:'idf_ic_fl'},
                {to:'/cart',name:'购物车',active_cls:'acidf_ic_gwc',nom_cls:'idf_ic_gwc'},
                {to:'/mine',name:'我的',active_cls:'acidf_ic_wd',nom_cls:'idf_ic_wd'}
            ]
        }
    },
    methods:{
        show(i){
            this.$router.push(this.routertos[i].to);
            this.curIndex = i;
        }
    }

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
            .inf_font{
                display:block;
            }
            
        }
        .idf_ic_sy{
            i{
                background-position: 0 -3.33333rem; 
            }
        }
        .idf_ic_zt{
            i{
                background-position:0 -4.66667rem;
            }
        }
        .idf_ic_fl{
            i{
                background-position:0 -2rem;
            }
        }
        .idf_ic_gwc{
            i{
                background-position:0 -.66667rem;
            }
        }
        .idf_ic_wd{
            i{
                background-position:0 -6rem;
            }
        }
        .acidf_ic_sy {
            color:#b4282d;
            i{
                background-position:0 -2.66667rem; 
            }
        }
        .acidf_ic_zt {
            color:#b4282d;
            i{
                background-position: 0 -4rem;
            }
        }
        .acidf_ic_fl {
            color:#b4282d;
            i{
                background-position: 0 -1.33333rem;
            }
        }
        .acidf_ic_gwc {
            color:#b4282d;
            i{
                background-position: 0 0;
            }
        }
        .acidf_ic_wd {
            color:#b4282d;
            i{
                background-position: 0 -5.33333rem;
            }
        }
    }
</style>
