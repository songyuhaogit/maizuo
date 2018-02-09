<template>
   <div class="app-banner swiper-container">
        <div class="swiper-wrapper">
                <div v-for='billboard in billboards' :key='billboard.id' class="swiper-slide">
                        <img width="100%" :src="billboard.imageUrl" :title="billboard.name" alt="">
                    </div>  
        </div>  
        <div class="swiper-pagination"></div>
   </div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
    name:'app-banner',
    data:function(){
        return {
            billboards:[]
        }
    },
    methods:{
        getData(){
            let that = this
            axios.get('/mz/v4/api/billboard/home',{
                params:{__t:Date.now()} 
            }).then((response)=>{
                // console.log(response.data.data.billboards);
                that.billboards = response.data.data.billboards
            })
        }
    },
    created(){
        this.getData()
    },
    updated(){
    new Swiper('.swiper-container',{
        loop : true,
        speed:2000,
        autoplay:{
        stopOnLastSlide:true,
        delay:3000
        }
  })
    }
}
</script>
<style>
.swiper-container {
    width: 100%;
        transition-timing-function: ease-in;
    
}  
</style>
