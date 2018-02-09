<template>
   <div class="app-moviebox-item">
        <img width="100%" :src='film.cover.origin' alt="">
        <div class="info">
            <div class="left">
                <h5>{{film.name}}</h5>
                <p style="color:#9a9a9a" v-if="film.cinemaCount ==0 ?'':'film.watchCount'">{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</p>
            </div>
            <div class="right">
                <div class="range" v-if="film.cinemaCount">{{film.grade}}</div>
                <div class="show-date" v-else>{{film.premiereAt | formate}}</div>
            </div>
        </div> 
   </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['film'],
    name:'app-moviebox-item',
    data:function(){
        return {
            
        }
    }
}
</script>
<style lang='scss' scoped>
    .app-moviebox-item{
            margin: 17px 17px 17px 17px;
            background-color: #fff;
            -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
            -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
            box-shadow: 0.5px 0.5px 1px #a8a8a8;
            cursor: pointer;
                .info{
                    display: flex;
                    justify-content: space-between;
                        .left{
                                    height: 50px;
                                    padding-right: 0;
                                    padding-top: 13px;
                                    padding-left: 16px;
                                    
                                h5{
                                    font-size: 10px;                              
                                    line-height: 20px;
                                    -webkit-user-select: text;
                                    user-select: text;
                                }
                                p{
                                     font-size: 8px;   
                                }
                        }
                        .right{
                                color: #f78360;
                                display: inline-block;
                                line-height: 50px;                               
                                margin-right: 15px;
                                font-size: 14px;
                                .range{
                                    font-size: 20px;
                                }
                        }
                }
    }
</style>
