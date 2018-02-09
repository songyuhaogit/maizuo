<template>
  <div id="app">
    <app-header :toggleNav="toggleNav"></app-header>
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
      <app-nav :toggleNav="toggleNav" v-if="isNavShow"></app-nav>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div :toggleNav="toggleNav" v-if="isNavShow" class="mask" @click="toggleNav" ></div>
    </transition>
    <router-view/>
  </div>
</template>
<script>
import AppHeader from './components/header/AppHeader'
import AppNav from './components/Nav/AppNav'
import AppMain from './components/main/AppMain'
import AppFilm from './components/film/AppFilm'
import AppPosition from './components/Position/AppPosition'


export default {
  name: 'app',
  data:function(){
    return {
      isNavShow :false
    }
  },
  methods:{
    toggleNav(){
        this.isNavShow = !this.isNavShow
    }
  },
  components:{AppHeader,AppNav,AppFilm,AppPosition}
}
</script>
<style lang="scss">
@import './styles/app.scss';
    .mask{
      height:100%;
      width:100%;
      background:rgba(0,0,0,0.2);
      position:fixed;left:0;top:0;
    }
</style>
