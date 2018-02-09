import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  car:[]
}
const getters = {
  money(state){
    let money = 0;
    state.car.forEach(item => {
      if(item.isSelected){
          money += (item.price*item.num)
      }
    });
    return money
  },
}
const mutations = {
      initCar(state,car){
          state.car = car
      },
      addGood(state,{id,title,price}){
        let isHas = state.car.some(item=>{
          if(item.id == id){
            item.num ++
            return true;
          }else{return false}        
        })
        if(!isHas){
          state.car.push({id,title,price,num:1,isSelected:true})
        }
        localStorage.car = JSON.stringify(state.car)
      },
      reduceGood(state,{id}){
          let len = state.car.length
          for(let i = 0 ;i <len; i++){
            if(state.car[i].id == id){
                  state.car[i].num --
                  if(state.car[i].num == 0){
                    state.car.splice(i,1)
                  }
                  break;
            }
            localStorage.car = JSON.stringify(state.car)
          }
      },
      removeGood(state,id){
        let len = state.car.length
        for(let i = 0 ;i < len; i++){
          if(state.car[i].id == id){      
                  state.car.splice(i,1)
                  break;
          }
        }
        localStorage.car = JSON.stringify(state.car)
    },
    selecetdGood(state,val){
      state.car.forEach(item=>item.isSelected = val)
    }
}


const actions = {
  addGood({commit},params){
    setTimeout(()=>{
      let result = 'ok'
      if(result=='ok'){
        commit('addGood',params)
      }
    },100)
  },
  initCar({commit}){
      setTimeout(()=>{
        let results = JSON.parse(localStorage.car || '[]');
        commit('initCar',results)
      },300)
  },
  reduceGood({commit},id){
    setTimeout(()=>{
      let results = 'ok';
      if(results == 'ok'){
            commit('reduceGood',id)
      }
    },100)
  },
  removeGood({commit},id){
    setTimeout(()=>{
      let results = 'ok';
      if(results == 'ok'){
            commit('removeGood',id)
      }
    },100)
  },
  selecetdGood({commit},val){
    setTimeout(()=>{
      let results = 'ok';
      if(results == 'ok'){
            commit('selecetdGood',val)
      }
    },100)
  },
}

const store = new Vuex.Store({
    state,getters,actions,mutations
})
export default store