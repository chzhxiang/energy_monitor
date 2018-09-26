import Vue from "vue";
import httpUrl from "../axios/url"
export default class ProjectService extends Vue{
    constructor(){
        super()
    }

    projectServiceInstance = null;

    static instance(){
        if(!this.projectServiceInstance){
            this.projectServiceInstance = new ProjectService();
        }

        return this.projectServiceInstance;
    }

    /**
     * 获取项目信息列表
     * @param params
     */
    getProjectList(params){
        return this.$axios.post(httpUrl.groupProject, params)
    }

}
