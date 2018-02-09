<template>
   <div class="app-header">
       <div @click="toggleNav" class="nav square">
           <i class="fa fa-bars" aria-hidden="true"></i>
       </div>
       <div class="infor-box">
            <div class="title">卖座电影</div>
            <div class="infor">
                <router-link  :to="{name:'position'}" class="city">{{city}}<i class="fa fa-sort-down" aria-hidden="true"></i></router-link>
            </div>
            <router-link tag="div" class="user square" :to="{name:'AppLogin'}"><i class="fa fa-user-circle" aria-hidden="true"></i> </router-link>
       </div>
   </div> 
</template>
<script>
import getPosition from '../../modules/getPosition'
import {mapState} from 'vuex'
export default {
     props:['toggleNav'],
    name:'app-header',
    components:{
        ...mapState(['city'])
    },
    mounted:{}
}
</script>
<style lang= 'scss'>
    .app-header{
            background: #282828;
            position: fixed;
            z-index: 500;
            top: 0;
            right: 0;
            left: 0;
            width: auto;
            height: 0.5rem;
            line-height: 0.5rem;
            overflow: hidden;
            display: flex;
            color: aliceblue;
            .square{
                display:flex;justify-content: center;align-items: center;width: 0.5rem;height:0.5rem;
            }
            .nav{
                border-right: 1px solid rgb(80, 80, 80)
            }
            .infor-box{
                flex-grow: 1;
                display: flex;
                justify-content: space-between;
                align-content: center;
                .title{
                    margin-left: 5%;
                }
                .infor{
                    margin-left: 45%;
                    i{  
                        margin-left: 0.05rem;
                    }
                    .city{
                        color:#ccc
                    }
                }
            }
    }
</style>
