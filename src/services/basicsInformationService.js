import Vue from "vue";
import httpUrl from "../axios/url";

export class BasicsInformation extends Vue{
    //存储自身实例
    basicsInformationServicesInstance = null;

    static instance(){
        if(!this.basicsInformationServicesInstance){
            this.basicsInformationServicesInstance = new BasicsInformation();
        }
        return this.basicsInformationServicesInstance
    }

    constructor(){
        super();
    }

    /**
     * 新增员工
     * @param parms: {
     *     name: string     名称
     *     number: number,工号
     *     type: number, 类型/1-平台 2-集团 3-项目
     *     sid:number   所属对象
     *     did:number  部门
     *     position:string 职位
     *     phone:number 手机号
     *     tel:string 联系电话
     *     email:string 邮箱
     *     status:number 状态//0-在职 1-离职
     *
     * }
     */
    addStaffInfo(parms){
        return this.$axios.post(httpUrl.addStaffInfo, parms)
    }


    /**
     * 编辑员工
     * @param parms: {
     *     id:number
     *     name: string     名称
     *     number: number,工号
     *     type: number, 类型/1-平台 2-集团 3-项目
     *     sid:number   所属对象
     *     did:number  部门
     *     position:string 职位
     *     phone:number 手机号
     *     tel:string 联系电话
     *     email:string 邮箱
     *     status:number 状态//0-在职 1-离职
     *
     * }
     */
    editStaffInfo(parms){
        return this.$axios.post(httpUrl.editStaffInfo, parms)
    }

    /**
     * 新增部门
     * @param parms: {
     *     name: string  名称
     *     type: number, 类型/1-平台 2-集团 3-项目
     *     sid:number   所属对象
     *     pid:number  上级部门
     *     supervisor:string 主管
     * }
     */
    addDepartmentInfo(parms){
        return this.$axios.post(httpUrl.addDepartmentInfo, parms)
    }


    /**
     * 编辑部门
     * @param parms: {
     *      id:number
     *      name: string 名称
     *     type: number, 类型/1-平台 2-集团 3-项目
     *     sid:number   所属对象
     *     pid:number  上级部门
     *     supervisor:string 主管
     * }
     */
    ediDepartmentInfo(parms){
        return this.$axios.post(httpUrl.ediDepartmentInfo, parms)
    }

    /**
     * 获取项目列表
     * @param parms: {
     *
     *     type:number   类型 1平台；2集团；3项目
     * }
     */
    getProjectArray(parms){
        return this.$axios.get(httpUrl.getProjectArray, parms)
    }

    /**
     * 获取职位数组
     * @param parms: {
     *
     *     type:number   类型 1平台；2集团；3项目
     * }
     */
    getPositionArray(parms){
        return this.$axios.get(httpUrl.getPositionArray, parms)
    }

    /**
     * 获取部门数组
     * @param parms: {
     *
     *     type:number   类型 1平台；2集团；3项目
     * }
     */
    getDepartArray(parms){
        return this.$axios.post(httpUrl.getDepartArray, parms)
    }

    /**
     * 获取员工详情
     * @param parms: {
     *
     *     type:number   类型 1平台；2集团；3项目
     * }
     */
    getStaffDetail(parms){
        return this.$axios.get(httpUrl.getStaffDetail, parms)
    }

    /**
     * 获取部门详情
     * @param parms: {
     *
     *     type:number   类型 1平台；2集团；3项目
     * }
     */
    getDepartmentDetail(parms){
        return this.$axios.get(httpUrl.getDepartmentDetail, parms)
    }


}
