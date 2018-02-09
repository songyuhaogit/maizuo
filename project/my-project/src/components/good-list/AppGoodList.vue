<template>
    <div class="app-good-list">
    <AppGoodItem :good='good' v-for='good in goods' :key="good.id"></AppGoodItem>
    </div>
</template>

<script>
import axios from 'axios'
import AppGoodItem from './AppGoodItem'
export default {
    name:'app-good-list',
    components:{AppGoodItem},
    data(){
      return {
        goods:[]
      }
    },
    methods:{
      getGoods(){
        let that = this 
        axios.get('/static/goodlist/good.json').then((res)=>{
         that.goods = res.data
        })
      }
    },
    mounted(){
      this.getGoods()
    }
}
</script>
<style scoped>
    .app-good-list{
      margin-top:.5rem;
    }
</style>
