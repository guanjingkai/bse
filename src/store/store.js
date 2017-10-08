import Vue from 'vue'
import Vuex from 'vuex'
import createMaterialBasic from '../components/mm/mapper/createMaterial_basic'
import createMaterialInit from '../components/mm/mapper/createMaterial_init'
import createMaterialPlant from '../components/mm/mapper/createMaterial_plant'
import client from './client'
/*使用Vuex*/
Vue.use(Vuex)


//用户相关状态管理
const userModule = {
    state: {
        token: "",
        uid: ""
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
}
const tabModule = {
    state: {
        thisPage:{
            id:''
        },
        openComponentsList: {}
    },
    mutations: {
        createTab(state, n) {
            console.log(55);
            state.openComponentsList[n.pageId]=n
        },
        setThisPageId(state,n){
            state.thisPage.id = n.pageId
        }
    },
    actions: {

    },
    getters: {

    }
}
const modelModule = {
    state: {
        createMaterialBasic: createMaterialBasic,
        createMaterialInit: createMaterialInit,
        createMaterialPlant: createMaterialPlant
    },
    mutations: {
        createTab() {

        }
    },
    actions: {

    },
    getters: {

    }
}
const store = new Vuex.Store({
        modules: {
            user: userModule,
            tab: tabModule,
            model: modelModule,
            client: client
        }
    })
    /*将store导出*/
export default store;
