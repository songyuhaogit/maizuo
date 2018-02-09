<template>
    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div class="back-top" v-if="iss">
            <i @click="backTop1" class="fa fa-arrow-circle-o-up"></i>
      </div>
    </transition>
</template>
<script>
export default {
   name:'back-top',
   data(){
     return{
       iss:false
     } 
   },
   mounted(){
      window.addEventListener('scroll',this.backTop)
   },
   methods:{
      backTop(){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  				if(scrollTop>200){
  					this.iss=true
  				}else{
  					this.iss=false
  				}
      },
      backTop1(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      }
   }

}
</script>
<style lang='scss' scoped>
.back-top{
        background-color:rgba(0,0,0,0.7);
        width:48px;
        height: 48px;
        line-height: 48px;
        color: #fff;
        text-align:center;
        border-radius: 50%;
        font-size: 30px;
        overflow: hidden;
        cursor: pointer;
        position: fixed;
        right: 15px;bottom:15px;
        i{
          font-size: 40px;
          margin-top: 5px;
        }
}
</style>
