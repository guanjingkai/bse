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
            path: '/ma_create_voucher',
            name: 'createVoucher',
            component: require('../components/ma/createVoucher.vue')
        },
        {
            path: '/mm',
            name: 'Layout',
            component: require('../components/common/layout.vue'),
            children: [{
                path: 'create_material',
                name: 'createMaterial',
                component: require('../components/mm/createMaterial.vue')
            }, {
                path: 'create_supplier',
                name: 'createSupplier',
                component: require('../components/mm/createSupplier.vue')
            }, {
                path: 'material_list',
                name: 'materialList',
                component: require('../components/mm/materialList.vue')
            }, {
                path: 'supplier_list',
                name: 'supplierList',
                component: require('../components/mm/supplierList.vue')
            }]
        },
        {
            path: '/ma',
            name: 'Layout',
            component: require('../components/common/layout.vue'),
            children: [{
                path: 'voucher_list',
                name: 'voucherList',
                component: require('../components/ma/voucherList.vue')
            }, {
                path: 'create_voucher',
                name: 'createVoucher',
                component: require('../components/ma/createVoucher.vue')
            }, {
                path: 'hui_code_list',
                name: 'huiChangeCodeList',
                component: require('../components/ma/huiChangeCodeList.vue')
            }, {
                path: 'create_hui_code',
                name: 'createHuiChangeCode',
                component: require('../components/ma/createHuiChangeCode.vue')
            }, {
                path: 'voucher_use_list',
                name: 'voucherUseList',
                component: require('../components/ma/voucherUseList.vue')
            }, {
                path: 'vip_data',
                name: 'vipData',
                component: require('../components/ma/vipData.vue')
            }]
        },
        {
            path:'/wms',
            name: 'Layout',
            component: require('../components/common/layout.vue'),
            children:[
                {
                    path: 'set_list',
                    name: 'setList',
                    component: require('../components/wms/setList.vue')
                },{
                    path: 'set_area',
                    name: 'setArea',
                    component: require('../components/wms/setArea.vue')
                },{
                    path: 'set_location',
                    name: 'setArea',
                    component: require('../components/wms/setLocation.vue')
                },{
                    path: 'set_location_type',
                    name: 'setArea',
                    component: require('../components/wms/setLocationType.vue')
                },
                {
                    path: 'output_wait_pick',
                    name: 'setList',
                    component: require('../components/wms/outputWaitPick.vue')
                },
                {
                    path: 'output_wave',
                    name: 'setList',
                    component: require('../components/wms/outputWave.vue')
                },
                {
                    path: 'output_pick_list',
                    name: 'setList',
                    component: require('../components/wms/outputPickList.vue')
                },
                {
                    path: 'output_pick',
                    name: 'setList',
                    component: require('../components/wms/outputPick.vue')
                },
                {
                    path: 'output_pack',
                    name: 'setList',
                    component: require('../components/wms/outputPack.vue')
                },
                {
                    path: 'output_do',
                    name: 'setList',
                    component: require('../components/wms/outputDo.vue')
                },
                {
                    path: 'strategy_wave',
                    name: 'setList',
                    component: require('../components/wms/strategyWave.vue')
                }
            ]
        },
        {
            path:'/es',
            name: 'Layout',
            component: require('../components/common/layout.vue'),
            children:[
                
            ]
        },
        {
            path:'/tms',
            name: 'Layout',
            component: require('../components/common/layout.vue'),
            children:[
                {
                    path: 'file_carrier',
                    name: 'fileCarrier',
                    component: require('../components/tms/fileCarrier.vue')
                },{
                    path: 'file_driver',
                    name: 'tmsFileDriver',
                    component: require('../components/tms/fileDriver.vue')
                },{
                    path: 'order_wait',
                    name: 'tmsFileDriver',
                    component: require('../components/tms/orderWait.vue')
                },{
                    path: 'delivery',
                    name: 'tmsFileDriver',
                    component: require('../components/tms/delivery.vue')
                },{
                    path: 'trading_area',
                    name: 'tradingArea',
                    component: require('../components/tms/tradingArea.vue')
                },{
                    path: 'area_list',
                    name: 'areaList',
                    component: require('../components/tms/areaList.vue')
                },{
                    path: 'data_hot',
                    name: 'dataHot',
                    component: require('../components/tms/dataHot.vue')
                }
            ]
        }
    ]
})