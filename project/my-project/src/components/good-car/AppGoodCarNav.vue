<template>
    <div class="app-good-car-nav">
            <p>
                <input v-model="isAllSelected" type="checkbox">
                <span>
                    总计：{{money}}
                </span>
            </p>
            <div class="settle">
                去结算
            </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name:'app-good-car-nav',
    methods:{
        ...mapActions(['selecetdGood'])
    },
    computed:{
        ...mapGetters(['money','isAllSelected']),
isAllSelected:{
    get(){
      return   this.$store.state.car.every(item => {
                     if(item.isSelected){
                        return true
        }else{
          return false
        }
      });
  },
  set(newValue){
        this.selecetdGood(newValue)
        console.log('gai')
  }
}
    }
}
</script>
<style lang="scss" scoped>
    .app-good-car-nav{
        display: flex;
        align-items: center;
        height: 40px;
        p{
            flex-grow: 1;
            flex-shrink: 1;
            padding-left: 10px;
        }
        .settle{
            width: 1rem;
            height: 100%;
            background-color:orange;
            color:block;
            text-align: center;
            line-height: 0.33rem; 
        }
    }
</style>

