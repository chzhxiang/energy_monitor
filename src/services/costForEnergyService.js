import Vue from "vue";
import httpUrl from "../axios/url";

export class CostForEnergyServices extends Vue{
    //存储自身实例
    costForEnergyServicesInstance = null;

    static instance(){
        if(!this.costForEnergyServicesInstance){
            this.costForEnergyServicesInstance = new CostForEnergyServices();
        }
        return this.costForEnergyServicesInstance
    }

    constructor(){
        super();
    }

    /**
     * 获取节能量分析
     * @param params: {
     *     pageNum: number
     *     pageSize: number
     *     energyType: number,
     *     timeUnit: number,
     *     startTime: "yyyy-mm-dd hh:mm:ss",
     *     endTime: "yyyy-mm-dd hh:mm:ss",
     * }
     */
    getSavingList(params){
        return this.$axios.post(httpUrl.getSavingList, params)
    }

    /**
     * 获取节能量基准明细列表
     * @param params： {
     *     year: number,
     *     startTime: "yyyy-mm-dd hh:mm:ss",
     *     endTime: "yyyy-mm-dd hh:mm:ss",
     */
    getBaselineList(params){
        return this.$axios.post(httpUrl.getBaselineList, params)
    }

}
