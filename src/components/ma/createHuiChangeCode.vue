<template>
      <CommonForm :parameter="parameter" :formValidate="formValidate"></CommonForm>
</template>
<script>
  import Form from '../common/form';
  export default {
    data() {
      return {
        self: this,
        parameter: {
          voucher_title: {
            key: "voucher_title",
            title: "兑换码名称",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          hui_coin: {
            key: "hui_coin",
            title: "兑换惠币数量",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          cash: {
            key: "cash",
            title: "生成数量",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          cash1: {
            key: "cash1",
            title: "前缀/批次",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          cash2: {
            key: "cash2",
            title: "兑换码位数",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          cash3: {
            key: "cash3",
            title: "有效期",
            type: "date-time-range",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          }
        },
        formValidate: {
          name: '',
          logo: [{
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          }, {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }],
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        }
      }
    },
    components: {
      "CommonForm": Form
    },
    mounted() {
      //do something after mounting vue instance

    },
    methods: {}
  }
</script>
<style>
  .page-box{
    width: 320px;
    height: 100%;
    overflow-y: auto;
  }
  .form-box{
    width: calc(100% - 320px);
    height: 100%;
    overflow-y: auto;
  }
</style>
