<template>
   <div class="app-nav" >
       <nav :toggleNav="toggleNav">
           <ul>
             <router-link  @click.native="toggleNav" tag='li' :to='{name:nav.name}' :key="nav.id" v-for="nav in navs">{{nav.content}}<i class="fa fa-angle-right"></i></router-link>
           </ul>
       </nav>
   </div>
</template>
<script>
export default {
    
    props:['toggleNav'],
    name:'app-nav',
    data:function(){
        return {
            navs:[     
                {id:1,content:'首页',name:'main'},
                {id:2,content:'影片',name:'film'},
                {id:3,content:'影院',name:'main'},
                {id:4,content:'商城',name:'main'},
                {id:5,content:'我的',name:'main'},
                {id:6,content:'商品列表',name:'AppGoodList'},
                {id:7,content:'购物车',name:'AppGoodCar'},
                
            ]
    
        }
    },
}
    

</script>
<style lang='scss'>
        .app-nav{
            width: 2.65rem;
            height: 100%;
            padding-top:0.5rem;
            position: fixed;
            left: 0;top: 0;
            z-index: 499;
            nav{
                height: 100%;
                width: 100%;
                border-top: 1px solid #222;
                box-shadow: 0 1px 1px #363636 inset;
                background: #282828;
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 0 16px;
                    border-bottom: 1px dotted #333;
                    line-height: 0.5rem;
                    color: #9a9a9a;
                    font-size: 14px;
                }
            }
        }
</style>
