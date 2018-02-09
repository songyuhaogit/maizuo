import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AppMain from '@/components/main/AppMain'
import AppFilm from '@/components/film/AppFilm'
// import AppCom from '@/components/film/AppCom'
import AppPosition from '@/components/position/AppPosition'
import AppGoodList from '@/components/good-list/AppGoodList'
import AppGoodCar from '@/components/good-car/AppGoodCar'
import AppLogin from '../components/UserName/AppLogin.vue'
import AppMine from '../components/UserName/AppMine.vue'
import Appregister from '../components/UserName/AppRegister.vue'
Vue.use(Router)

export default new Router({
  routes: [

      {path:'',redirect:'/main'},
      {path:'/main',name:'main',component:AppMain},
      // {path:'**',redirect:'/main'},
      {path:'/film',name:'film',component:AppFilm},
      {path:'/position',name:'position',component:AppPosition},
      {path:'/AppGoodList',name:'AppGoodList',component:AppGoodList},
      {path:'/AppGoodCar',name:'AppGoodCar',component:AppGoodCar},
      {path:'/AppMine',name:'AppMine',component:AppMine,children:[
        {path:'',redirect:to=>{
          return {name:'AppLogin'}
        }},
        {path:'AppLogin',name:'AppLogin',component:AppLogin},
        {path:'Appregister',name:'Appregister',component:Appregister}
      
      ]

      }
      
  ]
})
