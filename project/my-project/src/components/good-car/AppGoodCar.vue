<template>
    <div class="app-good-car">
        <div class="item-list">
            <p v-if='!car.length'>购物车空空如也，快去购买吧</p>
                  <AppGoodCarItem v-else v-for="item in car" :key="item.id" :info='item'></AppGoodCarItem>

        </div> 
        <AppGoodCarNav></AppGoodCarNav>
    </div>
</template>

<script> 
import {mapState,mapActions} from 'vuex'
import AppGoodCarNav from './AppGoodCarNav'
import AppGoodCarItem from './AppGoodCarItem'
export default {
    name:'app-good-car',
    components:{AppGoodCarItem,AppGoodCarNav},
    computed:{
        ...mapState(['car'])
    },
    methods:{
        ...mapActions(['initCar'])
    },
    created(){
        this.initCar()
    }
}
</script>
<style scoped lang='scss'>
    .app-good-car{
        padding-top:.5rem;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
    
</style>
