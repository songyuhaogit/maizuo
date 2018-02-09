<template>
   <div class="app-film">
        <AppFilmNav></AppFilmNav>
        <AppFilmBox ></AppFilmBox>
   </div>
</template>
<script>
import AppFilmNav from './AppFilmNav'
import AppFilmBox from './AppFilmBox'
// import AppCom from './AppCom'
export default {
    name:'app-film',
    components:{AppFilmNav,AppFilmBox},
        data(){
              return {    
        }
    },
}
</script>
<style>
    .app-film{
        height: 0.5rem;
    }
</style>
