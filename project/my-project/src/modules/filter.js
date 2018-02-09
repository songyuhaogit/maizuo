import Vue from 'vue'
Vue.filter('formate',(value)=>{
  var date = new Date(value)
  return `${date.getMonth()+1}月${date.getDate()}日上映` 
})

Vue.filter('formateDay',(value)=>{
  var date = new Date(value)
  let day = date.getDay()
  let h = '星期'
  switch(day){
    case 1:h+='一';break;
    case 2:h+='二';break;
    case 3:h+='三';break;
    case 4:h+='四';break;
    case 5:h+='五';break;
    case 6:h+='六';break;
    case 7:h+='日';break;
  }
  return  h
})