import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Main',
            component: require('../components/common/main.vue')
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
            path: '/mm',
            name: 'Layout',
            component: require('../components/common/layout.vue'),
            children: [{
                    path: 'create_material',
                    name: 'createMaterial',
                    component: require('../components/mm/createMaterial.vue')
                },
                {
                    path: 'material_list',
                    name: 'materialList',
                    component: require('../components/mm/materialList.vue')
                }
            ]
        },
        {
            path: '/ma',
            name: 'Layout',
            component: require('../components/common/layout.vue'),
            children: [{
                path: 'voucher_list',
                name: 'voucherList',
                component: require('../components/ma/voucherList.vue')
            },{
                path: 'create_voucher',
                name: 'createVoucher',
                component: require('../components/ma/createVoucher.vue')
            }]
        }
    ]
})
