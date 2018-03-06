<template>
    <Modal v-model="modalShow" title="创建承运商" @on-ok="ok" @on-cancel="cancel" width="450">
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
                        title: "承运商名称",
                        type: "input",
                        rule: [{required: true, message: '承运商名称不能为空', trigger: 'blur'}]
                    },
                    outtime: {
                        key: "outtime",
                        title: "承运商类型",
                        type: "select",
                        value: [{ key: "canyin", value: "落地配" }, { key: "ertong", value: "平台" }],
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
                this.$emit('create-carrier-show',false);
                this.$Message.success('承运商创建成功');
            },
            cancel() {
                this.$emit('create-carrier-show',false);
                this.$Message.info('取消承运商创建');
            }
        }
    }
</script>