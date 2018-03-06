<template>
    <Modal v-model="modalShow" title="创建司机" @on-ok="ok" @on-cancel="cancel" width="450">
        <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction"></CommonForm>
        
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
    export default {
        data() {
            return {
                self: this,
                parameter: {
                
                    strategy_name: {
                        key: "strategy_name",
                        title: "司机名称",
                        type: "input",
                        rule: [{required: true, message: '承运商名称不能为空', trigger: 'blur'}]
                    },
                    city: {
                        key: "city",
                        title: "城市",
                        type: "area-cascader",
                        level:1,
                        rule: [{required: true, message: '策略名称不能为空', trigger: 'blur'}]
                    },
                    carrier: {
                        key: "carrier",
                        title: "所属承运商",
                        type: "select",
                        value: [{ key: "canyin", value: "云鸟" }, { key: "ertong", value: "宅急送" }],
                        rule: [{required: true, message: '策略名称不能为空', trigger: 'blur'}]
                    },
                    tel: {
                        key: "tel",
                        title: "手机号",
                        type: "input",
                        rule: [{required: true, message: '手机号不能为空', trigger: 'blur'}]
                    },
                    userName: {
                        key: "userName",
                        title: "登录用户名",
                        type: "input",
                        rule: [{required: true, message: '登录用户名不能为空', trigger: 'blur'}]
                    },
                    cid: {
                        key: "cid",
                        title: "身份证号码",
                        type: "input",
                        rule: [{required: true, message: '身份证号码不能为空', trigger: 'blur'}]
                    },
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
                this.$emit('create-driver-show',false);
                this.$Message.success('司机创建成功');
            },
            cancel() {
                this.$emit('create-driver-show',false);
                this.$Message.info('取消司机创建');
            }
        }
    }
</script>