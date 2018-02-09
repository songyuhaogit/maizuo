<template>
   <div class="app-moviebox">
       <AppMovieItem :film='film' v-for="film in films" :key="film.id"></AppMovieItem>
       <div class="more-button">更多热映电影</div>
   </div>
</template>
<script>
import filter from '../../modules/filter'
import AppMovieItem from './AppMovieItem'
import axios from 'axios'
export default {
    props:['infors'],
    name:'app-moviebox',
    components:{
           AppMovieItem 
    },
    data:function(){
        return {
            films:[]
        }
    },
    methods:{
        getfilms(){
            let that = this;
            axios.get(that.infors.url).then(res=>{            
                that.films = res.data.data.films   
            })
        }
    },
    created(){
        this.getfilms()
    }
}
</script>
<style lang='scss'>
    .more-button{
            width: 160px;
            height: 30px;
            border: 1px solid #aaa;
            border-radius: 15px;
            margin: 10px auto 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            color: #616161;
            cursor: pointer;
    }
</style>
