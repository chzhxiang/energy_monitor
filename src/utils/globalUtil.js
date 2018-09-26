//common
import { Status } from "../../static/enum/generalEnum";

export default class GlobalUtil{

    constructor(){}
   static status = Status;
    /**
     * 获取前一天的日期  yyyy-mm-dd
     * @returns {string}
     */
   static getPreviousDay() {
        return new Date(new Date().getTime() - 86400*1000).toLocaleDateString().replace(/\//g, "-")
    }

    /**
     * 获取前一天的时间  yyyy-mm-dd hh:mm:ss
     * @returns {string}
     */
   static getPreviousDateTime() {
        let times = new Date().getTime();
        return (new Date(times - 86400*1000).toLocaleDateString().replace(/\//g, "-") + " " + new Date(times - 86400*1000).toTimeString().split("G")[0])
    }

    /**
     * 获取当前日期  yyyy-mm-dd
     * @returns {string}
     */
    static getCurrentDay() {
        return new Date().toLocaleDateString().replace(/\//g, "-")
    }

    /**
     * 获取当前之前的7天
     */
    static getBerforeWeekDate() {
        return new Date(new Date().getTime() - 86400 * 1000 * 6).toLocaleDateString().replace(/\//g, "-")
    }

    //获取年1月
    static getCurrentYearAndFirstMonth() {
        return new Date().getFullYear() + "-1"
    }

    //获取年12月
    static getCurrentYearAndLastMonth() {
        return new Date().getFullYear() + "-12"
    }

    /**
     * 获取今天的日期 -结束时间使用，拼接 yyyy-mm-dd 23：59：59
     * todo 用于界面日期时间选择规则-结束时间
     */
    static getTodayEndDate() {
        return new Date().toLocaleDateString().replace(/\//g, "-") + " 23:59:59"
    }

    static getTodayStartDate() {
        return new Date().toLocaleDateString().replace(/\//g, "-") + " 00:00:00"
    }

    /**
     * 获取当前时间  yyyy-mm-dd hh:mm:ss
     * @returns {string}
     */
    static getCurrentDateTime() {
        let times = new Date();
        return (times.toLocaleDateString().replace(/\//g, "-") + " " + times.toTimeString().split("G")[0])
    }

    /**
     * 获取当前月份
     * @returns {number}
     */
    static getCurrentMonth() {
        return new Date().getMonth() + 1
    }

    /**
     * 获取当前年月
     * @returns {string}  yyyy-mm
     */
    static getCurrentYearAndMonth() {
        let date = new Date();
        return (date.getFullYear() + "-" + (date.getMonth() +1))
    }

    /**
     * 深拷贝
     * @param obj
     * @returns {any}
     */
    static deepCopy(obj) {
        return JSON.parse(JSON.stringify(obj))
    }

    /**
     * 时间转换成 年-月
     * @param dateString  日期对象格式/日期字符串（详细见Date对象）
     * @returns {string}
     */
    static formatToYearAndMonth(dateString) {
        let date = new Date(dateString);
        return (date.getFullYear() + "-" + (date.getMonth() +1))
    }

    /**
     * 时间转换成 年-月-日
     * @param dateString 日期对象格式/日期字符串（详细见Date对象）
     * @returns {string}
     */
    static formatToDate(dateString) {
        return new Date(dateString).toLocaleDateString().replace(/\//g, "-")
    }

    /**
     * 时间转换成 年-月-日 23:59:59
     * @param dateString
     * @returns {string}
     */
    static formatToEndDate(dateString) {
        return new Date(dateString).toLocaleDateString().replace(/\//g, "-") + " 23:59:59"
    }

    /**
     * 时间转换成 年-月-日 00:00:00
     * @param dateString
     * @returns {string}
     */
    static formatToStartDate(dateString) {
        return new Date(dateString).toLocaleDateString().replace(/\//g, "-") + " 00:00:00"
    }

    //获取当月第一天  yyyy-mm-dd 00:00:00
    static forMatToDateOfMonthFirstDay(dateString)  {
        let date = new Date(dateString);
        return (date.getFullYear() + "-" + (date.getMonth() +1) + "-1" + " 00:00:00")
    }

    //获取当月最后一天 yyyy-mm-dd 23:59:59
    static forMatToDateOfMonthLastDay(dateString) {
        let date = new Date(dateString);
        //下一个月的第一天 -- 一天  =  当前月最后一天
        let year = date.getFullYear(),
            month = date.getMonth() + 1;

        let lastDay;
        if(month + 1 > 12){ // 跨年
            lastDay = new Date(new Date(year+1 + "-" + 1).getTime()-86400*1000).getDate()
        }else{
            lastDay = new Date(new Date(year + "-" + month).getTime()-86400*1000).getDate()
        }
        return (year + "-" + month + "-" + lastDay + " 23:59:59")
    }

    //删除空字段
    static deleteEmptyKey(obj){
        if(!obj instanceof Object) return;
        for(let key in obj){
            if(obj[key] === null || obj[key] === ""){
                delete obj[key]
            }
            this.deleteEmptyKey(obj[key])
        }
    }

    //获取dom元素相对文档流的当前X、Y轴位置
    static getElPositionWithBody(el){

    }

    /** 启用 禁用  value <==> label  互转换
     * Status = [
         {
            label: "启用",
            value: 0
        },
         {
            label: "禁用",
            value: 1,
            default: true
        }
     ]
     * @param res
     * @returns {*}
     */
    static filterStatus(res){
        for(let i = 0, len = this.status.length; i < len; i++){
            if(typeof res === "number" && res === this.status[i].value){
                return this.status[i].label
            }else if(typeof res === "string" && res === this.status[i].label){
                return this.status[i].value
            }
        }
        return res
    }

}
