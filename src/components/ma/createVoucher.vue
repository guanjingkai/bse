<template>
  <Row  type="flex" class="">
    <i-col class="page-box">
      <VoucherPage></VoucherPage>
    </i-col>
    <i-col class="form-box">
      <CommonForm :parameter="parameter" :formValidate="formValidate"></CommonForm>
    </i-col>
  </Row>
</template>
<script>
  import Form from '../common/form';
  import AvailableTime from './component/availableTime'
  import ActiveTime from './component/activeTime'
  import VoucherDesc from './component/voucherDesc'
  import VoucherPage from './component/voucherPage'
  export default {
    data() {
      return {
        self: this,
        parameter: {
          voucher_title: {
            key: "voucher_title",
            title: "兑换券名称",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          hui_coin: {
            key: "hui_coin",
            title: "惠币",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          cash: {
            key: "cash",
            title: "原价",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          active_time: {
            key: "active_time",
            title: "活动时间",
            type: "component",
            component:ActiveTime,
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          available_time:{
            key: "available_time",
            title: "可用时段",
            type: "component",
            component:AvailableTime,
            gridSpan:24,
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          instructions: {
            key: "instructions",
            title: "操作指南",
            type: "textarea",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          cover: {
            key: "cover",
            title: "封面",
            type: "upload-img",
            value: {defaultList: [], imgName: '', visible: false, uploadList: []},
            rule: [{required: true, message: '请选上传图片', trigger: 'blur'}]
          },
          available_stores: {
            key: "available_stores",
            title: "可用门店",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          circulation: {
            key: "circulation",
            title: "发行量",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          restriction: {
            key: "restriction",
            title: "使用限制",
            type: "input",
            rule: [{required: true, message: '姓名不能为空', trigger: 'blur'}]
          },
          industry: {
            key: "industry",
            title: "行业",
            type: "select",
            value: [{key: "canyin", value: "餐饮"}, {key: "ertong", value: "儿童"}, {
              key: "tiyu",
              value: "体育"
            }, {key: "wenchuang", value: "文创"}, {key: "lingshou", value: "零售"}],
            rule: [{required: true, message: '请选选择行业', trigger: 'change'}]
          },
          desc: {
            key: "desc",
            title: "介绍",
            type: "component",
            component:VoucherDesc,
            rule: [{required: true, message: '请选填写品牌介绍', trigger: 'blur'}]
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
      "CommonForm": Form,
      'VoucherPage':VoucherPage
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
    overflow-y: scroll;
  }
  .form-box{
    width: calc(100% - 320px);
    height: 100%;
    overflow-y: scroll;
  }
</style>
