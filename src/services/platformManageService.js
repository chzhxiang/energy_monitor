import Vue from "vue";
import httpUrl from "../axios/url";

export class PlatformManage extends Vue{
    //存储自身实例
    platformManageServicesInstance = null;

    static instance(){
        if(!this.platformManageServicesInstance){
            this.platformManageServicesInstance = new PlatformManage();
        }
        return this.platformManageServicesInstance
    }

    constructor(){
        super();
    }

    /**
     * 所有项目列表数组
     * @param parms: {
     *    none
     * }
     */
    getAllpProgramArray(parms){
        return this.$axios.get(httpUrl.getAllpProgramArray, parms)
    }

    /**
     * 所有成员列表数组
     * @param parms: {
     *    none
     * }
     */
    getMemberArray(parms){
        return this.$axios.get(httpUrl.getMemberArray, parms)
    }

    /**
     * 新增管理员
     * @param parms: {
     *    none
     * }
     */
    addNewAdmin(parms){
        return this.$axios.post(httpUrl.addNewAdmin, parms);
    }

    /**
     * 获取管理员详情
     * @param parms: {
     *    none
     * }
     */
    getAdminInfo(parms){
        return this.$axios.get(httpUrl.getAdminInfo, parms);
    }


}
