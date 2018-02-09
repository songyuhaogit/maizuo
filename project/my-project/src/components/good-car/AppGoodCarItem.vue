<template>
    <div class="app-good-car-item">
            <input v-model="info.isSelected" type="checkbox">
            <div class="info-box">
                <h5>{{info.title}}</h5>
                <p>{{info.price}}</p>
            </div>
            <div class="control-box">
                <p>
                    <button @click="reduceGood({id:info.id})">-</button>
                    <span>{{info.num}}</span>
                    <button @click="addGood({id:info.id,title:info.title,price:info.price})">+</button>
                </p>
                <p><button @click="removeGood(info.id)">移除</button></p>
            </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:['info'],
    name:'app-good-car-item',
    methods:{
        ...mapActions(['addGood','reduceGood','removeGood'])
    }

}
</script>
<style lang="scss" scoped>
        .app-good-car-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0px 15px;
            margin-top: 20px;
            button{
                width: 40px;
                height:20px;

            }
            .control-box{
                display:flex;
                
            }
        }
</style>
