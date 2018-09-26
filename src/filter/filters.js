//common
import  Vue from "vue";


/**
 * 数字千分位
 * num: number
 * return string | number
 */
Vue.filter("getPreviousDay", (num)=>{
    if(typeof num === "number"){
        return num.toLocaleString()
    }else{
        return num;
    }
})
