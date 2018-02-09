<template>
   <div class="app-film-item">
       <img :src="info.poster.origin" alt="">
        <div class="info">
            <h5>{{info.name}}</h5>
            <p class="for">{{info.intro}}</p>
            <p v-if="type=='coming-soon'"  class="for1">{{info.cinemaCount}}家影院上映<i>{{info.watchCount}}人购票</i></p>
            <p v-else>{{info.premiereAt | formate}}    {{info.premiereAt | formateDay}}</p>
        </div> 
        <div class="other">
            <div class="range" v-if='type=="now-playing"'>{{info.grade}}</div>
            <i class="fa fa-angle-right"></i>
        </div>
        <back-top></back-top>
        
   </div>
</template>
<script>
import BackTop from '@/components/common/Back-Top'
export default {
    name:'app-film-item',
    props:['info','type'],
    components:{
        BackTop
    }
}

</script>
<style lang="scss">
body{
    background-color:#f9f9f9;
}
        .app-film-item{
            // padding-left: 20px;
            // margin-top: -0.3rem;
            display: flex;
            align-items: center;
            padding-bottom: 28px;
            border-bottom: 1px solid #ccc;
            padding-top: 25px;
            img{
                width:0.6rem;
            }
            .info{
                    padding-left: 15px;
                    display: inline-block;
                    width: 75%;
                    h5{
                            font-size: 16px;
                            line-height: 32px;
                            color: #000;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                    }
                    .for{
                            height: 24px;
                            line-height: 24px;
                            color: #8e8e8e;
                            font-size: 14px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            
                            width: 100%;
                            display: inline-block;
                    }
                    .for1{
                            line-height: 24px;
                            color: #8e8e8e;
                            font-size: 12px;
                            i{
                                margin-left: 15px;
                            }
                    }
                
            }
        }
    .other{
            display: flex;
            justify-content: space-between;
            margin-right: 0.2rem;
            margin-bottom:0.5rem;

          .range{
                font-size: 16px;
                line-height: 32px;
                color: #fc7103;
          }
          i{
                    padding-left: 5px;
                    line-height: 29px;
                    color: #c6c6c6;
          }
    }
</style>
