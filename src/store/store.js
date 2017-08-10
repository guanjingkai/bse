import Vue from 'vue'
import Vuex from 'vuex'



import client from './client'
/*使用Vuex*/
Vue.use(Vuex)


//用户相关状态管理
const userModule = {
  state:{
    token:"",
    uid:""
  },
  mutations:{

  },
  actions:{

  },
  getters:{

  }
}
const tabModule = {
  state:{
    tabList:{},
    pageList:{}
  },
  mutations:{
    createTab(){

    }
  },
  actions:{

  },
  getters:{

  }
}
const modelModule = {
  state:{
    
  },
  mutations:{
    createTab(){

    }
  },
  actions:{

  },
  getters:{

  }
}
const store = new Vuex.Store({
  modules: {
    user: userModule,
    tab: tabModule,
    model: modelModule,
    client:client
  }
})
/*将store导出*/
export default  store;
