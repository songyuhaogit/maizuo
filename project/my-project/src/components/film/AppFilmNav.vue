
<template>
    <div class="app-film-nav">
        <div @click='type = "now-playing"' class="film-type" :class="{active:type == 'now-playing'}">
        	正在热映
        </div>
        <div @click='type = "coming-soon"' class="film-type" :class="{active:type == 'coming-soon'}">
        	即将上映
        </div>
    </div>
</template> 

<script>
	import bus from '../../modules/bus'
    export default {
        name:'app-film-nav',
        data(){
        	return {
        		type:'now-playing'
        	}
        },
        watch:{
        	type(){
        		bus.$emit('change-type',this.type)
        	}
        }
    }
</script>
<style lang='scss' scoped>
	.app-film-nav{
		height: 46px;
	   margin:0.5rem 0.15rem 0.1rem 0.15rem;
	    border-bottom: solid #fe6e00 1px;
	    display: flex;
	    font-size: 16px;color: #6a6a6a;
	    .film-type{
	    	width: 50%;
	    	text-align: center;line-height: 46px;
	    	
	    	&.active{
	    		    color: #fe6e00;
    				border-bottom: 3px solid #fe6e00;
	    	}
	    }
	    
	    
	}
</style>
