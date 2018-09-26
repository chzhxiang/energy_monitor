import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userName: '',
        user: '',
        chatrs: {
            chartsList: 4
        },
        sidebarItem: {
            items: '',
            meta: '',
            metas: '首页'
        },
        showHttpLoading: false,
    },
    getters: {
        getLoadingStatus(state){
            return state.showHttpLoading
        }
    },
    mutations: {
        add(state) {
            state.chatrs.chartsList++;
            console.log(state.chatrs.chartsList)
        },
        updateLoadingStatus(state, status){
            state.showHttpLoading = status;
        }
    },
    actions: {

    }
})
