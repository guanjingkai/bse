// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import Tab from './core/Tab.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import iviewArea from 'iview-area';
    
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(iView);
Vue.use(Tab);
Vue.use(iviewArea);
Vue.prototype.router = router;
Vue.prototype.$http = axios;
// Vue.prototype.Tab=Tab.methods;
Vue.prototype.productionUrl = 'https://server.chungold.com:7002/';
Vue.prototype.mockUrl = 'http://dsn.apizza.cc/mock/d63a217d289b5f3488b9c2b8780df76b/';
Vue.prototype.serverUrl = Vue.prototype.mockUrl;
// import low from 'lowdb'
// import LocalStorage from 'lowdb/adapters/LocalStorage'

// const adapter = new LocalStorage('db')
// const db = low(adapter)

// db.defaults({ posts: [] })
//     .write()

// // Data is automatically saved to localStorage
// var testdata = db.get('posts')
// console.log('开始' + new Date().getTime());
// // for (var i = 0; i < 10; i++) {
// //     testdata.push({ id: i, title: 'lowdb', title1: 'lowdb' + i, title2: 'lowdb', title3: 'lowdb', title4: 'lowdb', title5: 'lowdb', title6: 'lowdb', title7: 'lowdb', title8: 'lowdb' }).write();
// // }
// console.log('结束' + new Date().getTime());
// var aaa = db.get('posts')
//     .find({ id: 100 })
//     .value()

// console.log(aaa);
// console.log('查询' + new Date().getTime());
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store,
    template: '<App/>',
    components: { App }
})