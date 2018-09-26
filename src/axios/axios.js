import promise from 'es6-promise';
promise.polyfill();
import axios from 'axios';
import qs from 'qs';
import Vue from "vue";
import { Loading } from 'element-ui';
import store from "../store/store";

//错误状态码处理提示
class MessageTip extends Vue{
    messageTipInstance = null;
    constructor(){
        super();
    }
    static instance(code){
        if(!this.messageTipInstance){
            this.messageTipInstance = new MessageTip();
        }
        this.messageTipInstance.errorInfo(code);
    }

    errorInfo(errorCode){
        switch(errorCode){
            case 400:
                this.$message({
                    showClose: true,
                    message: '请求错误',
                    type: 'error',
                    center: true
                })
                break
            case 401:
                this.$message({
                    showClose: true,
                    message: '未授权',
                    type: 'error',
                    center: true
                })
                break
            case 403:
                this.$message({
                    showClose: true,
                    message: '拒绝访问',
                    type: 'error',
                    center: true
                })

                break
            case 404:
                this.$message({
                    showClose: true,
                    message: '请求地址出错',
                    type: 'error',
                    center: true
                })
                break
            case 408:
                this.$message({
                    showClose: true,
                    message: '请求超时',
                    type: 'error',
                    center: true
                })
                break

            case 500:
                this.$message({
                    showClose: true,
                    message: '服务器内部错误',
                    type: 'error',
                    center: true
                })
                break

            case 501:
                this.$message({
                    showClose: true,
                    message: '服务器未实现',
                    type: 'error',
                    center: true
                })
                break

            case 502:
                this.$message({
                    showClose: true,
                    message: '网络错误',
                    type: 'error',
                    center: true
                })
                break

            case 503:
                this.$message({
                    showClose: true,
                    message: '服务不可用',
                    type: 'error',
                    center: true
                })
                break

            case 504:
                this.$message({
                    showClose: true,
                    message: '网关超时',
                    type: 'error',
                    center: true
                })
                break

            case 505:
                this.$message({
                    showClose: true,
                    message: 'HTTP版本不受支持',
                    type: 'error',
                    center: true
                })
                break
        }
    }
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;
// 请求拦截器
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {

        if(config.headers["Content-Type"] == "multipart/form-data"){
            return config;
        }

        store.commit("updateLoadingStatus", true);

        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 响应拦截器
axios.interceptors.response.use( (response) => {
    //console.log(response)

    store.commit("updateLoadingStatus", false);

    return response.data;
}, (error) => {
    console.log(error);

    MessageTip.instance(error.response.status);
    return Promise.reject(error);
})

export default {
    //get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param
            }).then(res => {
                resolve(res)
            })
        })
    },
    //post请求
    post(url, param,headers) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                headers: headers || {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => {
                resolve(res)
            })
        })
    },
    ajax(config) {
        if (config.method.toLowerCase() == 'get') {
            return this.get(config.url, config.data);
        } else {
            return this.post(config.url, config.data,config.headers);
        }

    }
}
