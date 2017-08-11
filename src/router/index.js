import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/main',
            name: 'Main',
            component: require('../components/common/main.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: require('../components/common/login.vue')
        },
        {
            path: '/layout',
            name: 'Layout',
            component: require('../components/common/layout.vue')
        }
    ]
})