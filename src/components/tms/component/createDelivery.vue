<template>
    <Modal v-model="modalShow" title="运输单列队" okText='生成运输单' @on-ok="ok" @on-cancel="cancel" width="850">
        <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction" :isAction="isAction"  :gridSpan="gridSpan"></CommonForm>
        <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig" autoHeight="400">
      
        </CommonTable>
    </Modal>
</template>
<style>
.ivu-modal{
    /* height: calc(100% - 100px); */
    top:50px;
}
</style>

<script>
    import Form from '../../common/form';
    import Table from '../../common/table';
    export default {
        data() {
            return {
                self: this,
                api: {
                    url: "/tms/order/list"
                },
                tableData: [],
                tableColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                    title: '配送单ID',
                    key: 'id',
                    }, {
                    title: '点位信息',
                    key: 'poiName',
                    width:200,
                    },{
                    title: '运输箱(98)',
                    key: 'packageNumber',
                    }, {
                    title: '下单时间',
                    key: 'lastTime',
                    width:160,
                    }, {
                    title: '状态',
                    key: 'state',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }
                            }, '代配送')
                        ]);
                    }
                    }, {
                    title: '操作',
                    key: 'brandStatus',
                    width: 80,
                    render: (h, params) => {
                        return h('div', [
                        h('Button', {
                            props: {
                            type: 'text',
                            size: 'small'
                            },
                            on:{
                            click:()=>{
                                this.testFunction()
                            }
                            }
                        }, '查看')
                        ]);
                    }

                    }
                ],
                gridSpan: 8,
                parameter: {
                
                    strategy_name: {
                        key: "strategy_name",
                        title: "承运商",
                        type: "select",
                        value: [{ key: "canyin", value: "云鸟" }, { key: "ertong", value: "宅急送" }],
                        rule: [{required: true, message: '承运商不能为空', trigger: 'blur'}]
                    },
                    outtime: {
                        key: "outtime",
                        title: "发货时间",
                        type: "date-time",
                        rule: [{required: true, message: '发货时间不能为空', trigger: 'blur'}]
                    },
                    driver: {
                        key: "driver",
                        title: "司机",
                        type: "select",
                        value: [{ key: "canyin", value: "雷丘" }, { key: "ertong", value: "妙蛙种子" }],
                        rule: [{required: true, message: '司机不能为空', trigger: 'blur'}]
                    }
                },
                formValidate: {
                    name: ''
                },
                isAction:false,
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
        "CommonForm": Form,
        "CommonTable": Table
        },
        methods: {
            ok() {
                this.$emit('create-delivery-show',false);
                this.$Message.success('运输单创建成功');
            },
            cancel() {
                this.$emit('create-delivery-show',false);
                this.$Message.info('取消运输单创建');
            }
        }
    }
</script>