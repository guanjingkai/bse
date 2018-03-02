<template>
    <Modal v-model="modalShow" title="创建波次策略(普通)" @on-ok="ok" @on-cancel="cancel" width="850">
        <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan"></CommonForm>
    </Modal>
</template>
<script>
    import Form from '../../common/form';
    import Interval from '../../common/interval';
    import CarrierSet from './carrierSet';
    import RemarkSet from './remarkSet';
    import BrandSet from './brandSet';
    import InvoiceSet from './invoiceSet';
    import OrderTime from './orderTime';
    import ImportGoods from './importGoods';
    export default {
        data() {
            return {
                gridSpan: 8,
                parameter: {
                    group1: {
                        key: "group1",
                        title: "",
                        type: "formGroupTitle",
                        value: "策略信息"
                    },
                    strategy_name: {
                        key: "strategy_name",
                        title: "策略名称",
                        type: "input",
                        rule: [{required: true, message: '策略名称不能为空', trigger: 'blur'}]
                    },
                    strategy_num: {
                        key: "strategy_num",
                        title: "策略编码",
                        type: "input",
                        rule: [{required: true, message: '策略编码不能为空', trigger: 'blur'}]
                    },
                    strategy_level: {
                        key: "strategy_level",
                        title: "策略级别",
                        type: "input-number",
                        rule: [{required: true, message: '策略级别不能为空', trigger: 'blur'}]
                    },
                    group2: {
                        key: "group2",
                        title: "",
                        type: "formGroupTitle",
                        value: "执行条件"
                    },
                    star_end_time: {
                        key: "star_end_time",
                        title: "执行时间",
                        type: "time-range",
                        placement:"bottom_star",
                        rule: [{required: true, message: '订单时间不能为空', trigger: 'blur'}]
                    },
                    time_interval: {
                        key: "time_interval",
                        title: "时间间隔",
                        type: "input",
                        append:"分钟",
                        rule: [{required: true, message: '时间间隔不能为空', trigger: 'blur'}]
                    },
                    execute_date: {
                        key: "execute_date",
                        title: "执行日期",
                        type: "select",
                        value: [{ key: "canyin", value: "每日" }, { key: "ertong", value: "工作日" }, { key: "tiyu", value: "节假日" }, { key: "wenchuang", value: "周一到五" }, { key: "lingshou", value: "周六日" }, { key: "lingshou3", value: "自定义日历一" }],
                        rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
                     },                    
                    sku_limit: {
                        key: "sku_limit",
                        title: "品种限制",
                        type: "radio",
                        value: [{ key: "canyin", value: "不限品种" }, { key: "ertong", value: "同一品种" }],
                        rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
                    },
                    capacity: {
                        key: "capacity",
                        title: "分拣单数量",
                        type: "component",
                        component:Interval,
                        rule: [{required: true, message: '策略编码不能为空', trigger: 'blur'}]
                    },
                    wait_max_time: {
                        key: "wait_max_time",
                        title: "最长等待时间",
                        type: "input",
                        append:"分钟",
                        rule: [{required: true, message: '最长等待时间不能为空', trigger: 'blur'}]
                    },
                    group3: {
                        key: "group3",
                        title: "",
                        type: "formGroupTitle",
                        value: "生效订单"
                    },
                    
                    time_sort: {
                        key: "time_sort",
                        title: "时间维度",
                        type: "select",
                        value: [{ key: "canyin", value: "客户下单时间" }, { key: "ertong", value: "客户支付时间" }, { key: "tiyu", value: "仓库接单时间" }],
                        rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
                     },  
                    order_time: {
                        key: "order_time",
                        title: "订单时间",
                        type: "component",
                        component:OrderTime,
                        rule: [{required: true, message: '承运商不能为空', trigger: 'blur'}]
                    },
                    
                    goods_num: {
                        key: "goods_num",
                        title: "商品数量(个)",
                        type: "component",
                        component:Interval,
                        rule: [{required: true, message: '策略编码不能为空', trigger: 'blur'}]
                    },
                    import_goods: {
                        key: "import_goods",
                        title: "包含商品",
                        gridSpan: 16,
                        type: "component",
                        component:ImportGoods,
                        rule: [{required: true, message: '承运商不能为空', trigger: 'blur'}]
                    },
                    
                    sort_num: {
                        key: "sort_num",
                        title: "品类数量(个)",
                        type: "component",
                        component:Interval,
                        rule: [{required: true, message: '策略编码不能为空', trigger: 'blur'}]
                    },
                    price: {
                        key: "price",
                        title: "订单金额(元)",
                        type: "component",
                        component:Interval,
                        rule: [{required: true, message: '策略编码不能为空', trigger: 'blur'}]
                    },
                    group4: {
                        key: "group4",
                        title: "",
                        type: "formGroupTitle",
                        value: "分组条件"
                    },
                    carrier_set: {
                        key: "carrier_set",
                        title: "承运商",
                        gridSpan: 16,
                        type: "component",
                        component:CarrierSet,
                        rule: [{required: true, message: '承运商不能为空', trigger: 'blur'}]
                    },                     
                    car_path: {
                        key: "car_path",
                        title: "配送路径",
                        type: "radio",
                        value: [{ key: "canyin", value: "不限" }, { key: "ertong", value: "同一路径" }],
                        rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
                    },
                    remakr_set: {
                        key: "remakr_set",
                        title: "订单备注",
                        gridSpan: 16,
                        type: "component",
                        component:RemarkSet,
                        rule: [{required: true, message: '承运商不能为空', trigger: 'blur'}]
                    },                   
                    pick_area: {
                        key: "pick_area",
                        title: "分拣区域",
                        type: "radio",
                        value: [{ key: "canyin", value: "同一库区" }, { key: "ertong", value: "不限库区" }],
                        rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
                    },
                    brand_set: {
                        key: "brand_set",
                        title: "商品品牌",
                        gridSpan: 16,
                        type: "component",
                        component:BrandSet,
                        rule: [{required: true, message: '承运商不能为空', trigger: 'blur'}]
                    },
                    volume_limit: {
                        key: "volume_limit",
                        title: "体积限制(m³)",
                        type: "component",
                        component:Interval,
                        rule: [{required: true, message: '策略名称不能为空', trigger: 'blur'}]
                    },
                    invoice_set: {
                        key: "invoice_set",
                        title: "发票信息",
                        gridSpan: 16,
                        type: "component",
                        component:InvoiceSet,
                        rule: [{required: true, message: '承运商不能为空', trigger: 'blur'}]
                    },
                    weight_limit: {
                        key: "weight_limit",
                        title: "质量限制(kg)",
                        type: "component",
                        component:Interval,
                        rule: [{required: true, message: '策略名称不能为空', trigger: 'blur'}]
                    }
                },
                formValidate: {
                    name: ''
                },
                formAction:false
            }
        },
        props: {
            modalShow: {
                default: function () {
                    return false
                }
            }
        },
        components: {
        "CommonForm": Form
        },
        methods: {
            ok() {
                this.$emit('new-wave-show',false);
                this.$Message.info('Clicked ok');
            },
            cancel() {
                this.$emit('new-wave-show',false);
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>