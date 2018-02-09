<template>
   <div class="app-film-box">
       <div
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
 <AppFilmItem v-for='film in films' :info='film' :key='film.id'></AppFilmItem>
</div>
   </div>
</template>
<script>
import bus from '../../modules/bus'
import axios from 'axios'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui'
import AppFilmItem from './AppFilmItem'
  export default {
        name:'app-film-box',
        components:{AppFilmItem},
        data(){
        	return {
        		type:"now-playing",
        		count:8,
        		page:1,
        		films:[],
        		loading:false,
        		isOver:false
        	}
        },
        

        methods:{
        	getFilms(){
        		let that = this
        		let url = '/mz/v4/api/film/'+that.type
        		let params = {page:that.page,count:that.count}
        		
        		Indicator.open({
				  text: '客官请稍等...',
				  spinnerType: 'triple-bounce'
				});
        		axios.get(url,{params}).then(res=>{
        			
        			Indicator.close();
        		
        			that.films=that.films.concat(res.data.data.films)
        			that.loading = false
        			if(that.page==res.data.data.page.total){
        				that.isOver = true
        				Toast({
						  message: '没有更多数据',
						  position:'bottom'
						});
        				return false
        			}
        			that.page++
        		})
        	},
        	loadMore() {
        	  if(this.isOver){
        	  	return false;
        	  }
			  this.loading = true;
			  this.getFilms()
			},
			changeType(){
				this.page = 1
				this.films = []
				this.isLoading = false
				this.isOver = false
				this.getFilms()
			}
        },
        mounted(){
        	let that = this
        	bus.$on("change-type",(type)=>{
        		that.type = type
        		that.changeType()
        	})
        }
    }
</script>
<style>
    .app-film-box{
        padding:0 15px;
    }
</style>
