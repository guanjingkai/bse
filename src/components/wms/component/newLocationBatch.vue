<template>
    <Modal v-model="modalShow" title="批量创建新库位" @on-ok="ok" @on-cancel="cancel">
        <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction"></CommonForm>
    </Modal>
</template>
<script>
    import Form from '../../common/form';
    export default {
        data() {
            return {
                parameter: {
                    voucher_title: {
                        key: "voucher_title",
                        title: "货架前缀名称",
                        type: "input",
                        rule: [{required: true, message: '货架名称不能为空', trigger: 'blur'}]
                    },
                    hui_coin: {
                        key: "hui_coin",
                        title: "区域/通道",
                        type: "cascader",
                        value: [{ value: 'beijing', label: '默认大区', 
                            children: [
                                { value: 'gugong', label: '复核包装区',
                                    children: [
                                        { value: 'gugong', label: '小件包装区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }, 
                                        { value: 'tiantan', label: '小件包装区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }, 
                                        { value: 'wangfujing', label: '小件包装区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }
                                    ]
                                }, 
                                { value: 'tiantan', label: '拣选区',
                                    children: [
                                        { value: 'gugong', label: '电子数码' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }, 
                                        { value: 'tiantan', label: '食品饮品' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }, 
                                        { value: 'wangfujing', label: '冷藏区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }
                                    ]
                                }, 
                                { value: 'wangfujing6', label: '存储区',
                                    children: [
                                        { value: 'gugong', label: '大润发专用' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }, 
                                        { value: 'tiantan', label: '冷藏区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }, 
                                        { value: 'wangfujing', label: '常温区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }
                                    ]
                                }, 
                                { value: 'wangfujing7', label: '暂存区',
                                    children: [
                                        { value: 'gugong', label: '入库暂存区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }, 
                                        { value: 'tiantan', label: '出库暂存区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }
                                    ]
                                }, 
                                { value: 'wangfujing9', label: '次品区',
                                    children: [
                                        { value: 'gugong', label: '退货维修区' ,
                                            children: [
                                                { value: 'gugong', label: '通道A' }, 
                                                { value: 'tiantan', label: '通道B' }, 
                                                { value: 'wangfujing', label: '通道C' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }],
                        rule: [{required: true, message: '通道不能为空', trigger: 'blur'}]
                    },
                    cash: {
                        key: "cash",
                        title: "生成数量",
                        type: "input",
                        prepend:"1-C05-B",
                        rule: [{required: true, message: '编码不能为空', trigger: 'blur'}]
                    },
                    cash1: {
                        key: "cash1",
                        title: "模板",
                        type: "cascader",
                        value: [{ value: 'beijing', label: '地堆式', children: [{ value: 'gugong', label: '5x5' }, { value: 'tiantan', label: '10x10' }, { value: 'wangfujing', label: '5x10' }] },{ value: 'beijing1', label: '货架式', children: [{ value: 'gugong1', label: '1x4冷冻式货架' }, { value: 'tiantan1', label: '4x4开放货架' }, { value: 'wangfujing1', label: '3x3加高存储' }] }],
                        rule: [{ required: true, message: '请选择城市', trigger: 'blur' }]
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
                this.$emit('new-location-batch-show',false);
                this.$Message.info('Clicked ok');
            },
            cancel() {
                this.$emit('new-location-batch-show',false);
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>