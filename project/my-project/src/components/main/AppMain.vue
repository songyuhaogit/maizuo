<template>
   <div class="app-main">
       <AppBanner/>
       <AppMovieBox :infors='url'  v-for="(url,i) in urls" :key='i'></AppMovieBox>
       <back-top></back-top>
   </div>
</template>
<script>

import AppMovieBox from './AppMovieBox'
import AppBanner from './AppBanner'
import BackTop from '@/components/common/Back-Top'
export default {
    name:'app-main',
    components:{AppBanner,AppMovieBox,BackTop},
    data(){
        return {
            urls:[
                {title:'正在热映',url:'/mz/v4/api/film/now-playing?__t='+Date.now()+'&page=1&count=5'},
                {title:'即将上映',url:'/mz/v4/api/film/coming-soon?__t='+Date.now()+'&page=1&count=3'},
            ]
        }
    }
}
</script>
<style>
    .app-main{
        background-color: #ebebeb;
        margin-top:0.5rem;
    }
</style>
