<template>
    <div class="app-good-item">
    <p>{{good.title}} &nbsp;&nbsp;&nbsp;￥{{good.price}}</p>
    <button @click="addGood({id:good.id,title:good.title,price:good.price})">加入购物车</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props:['good'],
    name:'app-good-item',
    methods:{
        ...mapActions(['addGood'])
    }
}
</script>
<style scoped>
.app-good-item{
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding:20px 15px;
}
button{
  height: 60px;
  width: 120px;
}
</style>
