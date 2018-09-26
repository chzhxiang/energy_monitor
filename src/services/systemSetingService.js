import Vue from "vue";
import httpUrl from "../axios/url";

export class SystemSeting extends Vue{
    //存储自身实例
    systemSetingServicesInstance = null;

    static instance(){
        if(!this.systemSetingServicesInstance){
            this.systemSetingServicesInstance = new SystemSeting();
        }
        return this.systemSetingServicesInstance
    }

    constructor(){
        super();
    }

    /**
     * 获取角色数组列表
     * @param parms: {
     *     type: 0-前端 1-后台 2-模块
     * }
     */
    getModulRoleArray(parms){
        return this.$axios.get(httpUrl.getModulRoleArray, parms)
    }

    /**
     * 添加角色
     * @param parms: {
     *     name: string
     *     issys: number,
     *     type: number
     * }
     */
    addRoleInfo(parms){
        return this.$axios.post(httpUrl.addRole, parms)
    }

    /**
     * 编辑角色
     * @param parms: {
     *     name: string
     *     issys: number
     * }
     */
    editRoleInfo(parms){
        return this.$axios.post(httpUrl.editRole, parms)
    }

    /**
     * 删除角色
     * @param parms: {
     *     id: number
     * }
     */
    delRoleInfo(parms){
        return this.$axios.post(httpUrl.delRole, parms)
    }

    /**
     * 获取所有权限树形列表
     * @param parms: {
     *    type: 0-前端 1-后台
     * }
     */
    getPerssionList(parms){
        return this.$axios.get(httpUrl.getAllPerssionList, parms)
    }

    /**
     * 分配权限
     * @param parms: {
     *    none
     * }
     */
    editPerssionInfor(parms){
        return this.$axios.post(httpUrl.editPerssion, parms)
    }

    /**
     * 权限列表-添加权限
     * @param parms: {
     *    none
     * }
     */
    addPression(parms){
        return this.$axios.post(httpUrl.addPression, parms)
    }

    /**
     * 权限列表-编辑权限
     * @param parms: {
     *    none
     * }
     */
    editPression(parms){
        return this.$axios.post(httpUrl.editPression, parms)
    }

    /**
     * 权限列表-权限详情
     * @param parms: {
     *    none
     * }
     */
    getDetailPression(parms){
        return this.$axios.get(httpUrl.getInfoPression,parms)
    }

    /**
     * 权限列表-获取父级列表
     * @param parms: {
     *    none
     * }
     */
    getPidList(parms){
        return this.$axios.get(httpUrl.getPidList,parms)
    }

    /**
     * 权限列表-获取父级列表
     * @param parms: {
     *    none
     * }
     *
     */
    getAdminUrlPression(parms){
        return this.$axios.get(httpUrl.getAdminUrlPression,parms)
    }


    /**
     * 获取参数列表
     * @param params :｛
     *      type: tid,
     *      pageNum: number
            pageSize: number
     *  ｝
     *  tid
     *    项目类型:     10
     *    空调系统形式:  1
     *    采暖系统形式:  2
     *    结构形式:     3
     *    外墙材料类型:  4
     *    外墙保温形式:  5
     *    屋面保温形式:  6
     *    外窗类型:     7
     *    玻璃类型:     8
     *    窗框材料类型:  9
     *    推送类型:     13
     *    设备类型:     14
     *    计量设备类型:  15
     *    配电原件类型: 16
     *    通信方式:     17
     *    采集器值类型: 18
     *    表计检测数据类型: 19
     *    租户类型:  20
     *    付费类型:  21
     *    监控设备:  22
     *    映射值类型: 23
     *    数据计算类型: 24
     *    点表功能:  25
     *    点类型:   26
     *    配点支路参数: 27
     *    系统类型:  28
     *    举报个人:  11
     *    举报专家:  12
     *    评论标签:  29
     *    电表参数:  30
     *    职位:      31
     *    能耗单位:  32
     *
     */
    getParamsList(parms){
        return this.$axios.get(httpUrl.getParamsList,parms)
    }
}
