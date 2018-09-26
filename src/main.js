import Vue from 'vue';
import 'es6-promise/auto'
import router from './router';
import Vuex from 'vuex';
import store from './store/store';
import lzh from './utils/minTool.js';
import axios from './axios/axios.js';
import url from './axios/url.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import App from './App';
import '../static/css/main.css';
import echarts from 'echarts';
import "babel-polyfill";
import VueWechatTitle from 'vue-wechat-title';

import "./filter/filters"
import "./directive/directives"
import "../static/css/baseCommon.css"
import Storages from "./utils/storages";

require('./mock.js')
Vue.use(Vuex);
Vue.use(VueWechatTitle);
Vue.use(ElementUI, {size: 'small'});
Vue.prototype.lzh = lzh;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$url = url;
Vue.directive('drag',//自定义指令
    {
        bind: function (el, binding) {
            let oDiv = el;   //当前元素
            let self = this;  //上下文
            oDiv.onmousedown = function (e) {
                //鼠标按下，计算当前元素距离可视区的距离
                let disX = e.clientX - oDiv.offsetLeft;
                let disY = e.clientY - oDiv.offsetTop;

                document.onmousemove = function (e) {
                    //通过事件委托，计算移动的距离
                    let l = e.clientX - disX;
                    let t = e.clientY - disY;
                    //移动当前元素
                    oDiv.style.left = l + 'px';
                    oDiv.style.top = t + 'px';
                    //将此时的位置传出去
                    binding.value({x: e.pageX, y: e.pageY})
                };
                document.onmouseup = function (e) {

                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            };
        }
    }
);

// localStorage.setItem('ms_username', 'admin');
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = Storages.getLocalStorage("ms_username");
    console.log("进入");
    store.state.userName = role;
    store.state.sidebarItem.meta = to.meta;
    if (!role) {
        if (to.path !== "/login") {
            next('login');
            return;
        }
    }
    if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 验证后台返回登录状态
        next()
    }
})


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');


