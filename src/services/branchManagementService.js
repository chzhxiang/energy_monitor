// BranchManagement 支路管理
import Vue from "vue";
import httpUrl from "../axios/url"
import GlobalUtil from "../utils/globalUtil";
// import AxiosService from "./axios/axiosService"

export default class BranchManagementService extends Vue{
    constructor(){
        super()
    }

    branchManagementInstance = null;

    static instance(){
        if(!this.branchManagementInstance){
            this.branchManagementInstance = new BranchManagementService()
        }
        return this.branchManagementInstance
    }


    /**
     * 获取支路数据列表
     * @param params{
     *     pageNum:
     *     pageSize:
     *     pmid:            number  项目id
     *     name:            string  搜索词（支路名称）
     *     status:          number  状态 0启用 1禁用
     * }
     * @returns {*}
     */
    getBranchList(params){
        //删除接口空字段
        GlobalUtil.deleteEmptyKey(params);

        return this.$axios.post(httpUrl.getBranchList, params)
    }

    /**
     * 新增支路
     * @param params
     */
    addBranch(params){
        return this.$axios.post(httpUrl.addBranchInfo, params)
    }

    /**
     * 修改
     * @param params
     */
    alterBranch(params){
        return this.$axios.post(httpUrl.alterBranchInfo, params)
    }

    /**
     * 获取详情
     * @param params
     */
    getBranchDetail(params){
        return this.$axios.post(httpUrl.getBranchDetails, params)
    }

    /**
     * 获取项目列表
     * @param params
     */
    getProjectList(params){

    }

    //获取楼栋列表
    //获取支路列表
    //获取所属设备类型
    //获取设备列表
    //获取配电元件类型
    //获取通信方式
    //获取采集命令列表
}
