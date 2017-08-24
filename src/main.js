// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vued from 'vued'
import axios from 'axios'
import Vuex from 'iview'
import store from './store/store'
import 'iview//dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(Vued)
Vue.use(Vuex)
Vue.prototype.router = router;
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store,
    template: '<App/>',
    components: { App }
})