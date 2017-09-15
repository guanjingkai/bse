<template>
  <div class="">
    <CommonForm :parameter="parameter" :formValidate="formValidate"></CommonForm>
  </div>
</template>
<script>
  import CommonForm from '../common/form';
  export default {
    data() {
      return {
        self: this,
        parameter: {
          brandName: {
          key: "brandName",
          title: "品牌名称",
          type: "input",
          rule: [{ required: true, message: '姓名不能为空', trigger: 'blur' }]
        },
        logo: {
          key: "logo",
          title: "Logo",
          type: "upload-img",
          value: { defaultList: [], imgName: '', visible: false, uploadList: [] },
          rule: [{ required: true, message: '请选上传图片', trigger: 'blur' }]

        },
        industry: {
          key: "industry",
          title: "行业",
          type: "select",
          value: [{ key: "canyin", value: "餐饮" }, { key: "ertong", value: "儿童" }, { key: "tiyu", value: "体育" }, { key: "wenchuang", value: "文创" }, { key: "lingshou", value: "零售" }],
          rule: [{ required: true, message: '请选选择行业', trigger: 'change' }]
        },
        contacts: {
          key: "contacts",
          title: "联系人",
          type: "input",
          rule: [{ required: true, message: '请选填写联系人', trigger: 'blur' }]
        },
        tel: {
          key: "tel",
          title: "联系方式",
          type: "input",
          rule: [{ required: true, message: '请选填写联系方式', trigger: 'blur' }]
        },
        mail: {
          key: "mail",
          title: "邮箱",
          type: "input",
          rule: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }, { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }]
        },
        city: {
          key: "city",
          title: "城市",
          type: "cascader",
          value: [{ value: 'beijing', label: '北京', children: [{ value: 'gugong', label: '故宫' }, { value: 'tiantan', label: '天坛' }, { value: 'wangfujing', label: '王府井' }] }, { value: 'jiangsu', label: '江苏', children: [{ value: 'nanjing', label: '南京', children: [{ value: 'fuzimiao', label: '夫子庙', }] }, { value: 'suzhou', label: '苏州', children: [{ value: 'zhuozhengyuan', label: '拙政园', }, { value: 'shizilin', label: '狮子林', }] }], }],
          rule: [{ required: true, message: '请选择城市', trigger: 'change' }]
        },
        gender: {
          key: "gender",
          title: "资金归集",
          type: "radio",
          value: [{ key: "male", value: "是" }, { key: "female", value: "否" }],
          rule: [{ required: true, message: '请选择资金归集方式', trigger: 'change' }]
        },
        company: {
          key: "company",
          title: "公司名称",
          type: "input",
          rule: [{ required: true, message: '请填写公司名称', trigger: 'blur' }]
        },
        tel: {
          key: "tel",
          title: "信用代码",
          type: "input",
          rule: [{ required: true, message: '请选填写信用代码', trigger: 'blur' }]
        },
        desc: {
          key: "desc",
          title: "介绍",
          type: "textarea",
          rule: [{ required: true, message: '请选填写品牌介绍', trigger: 'blur' }]
        }
      },
      formValidate: {
        name: '',
        logo: [{ 'name': 'a42bdcc1178e62b4694c830f028db5c0', 'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar' }, { 'name': 'bc7521e033abdd1e92222d733590f104', 'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar' }],
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
      "CommomForm": CommonForm
    },
    mounted() {
      //do something after mounting vue instance

    },
    methods: {

    }
  }
</script>
<style>

</style>
