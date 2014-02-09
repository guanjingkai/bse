<template>
<div>
  <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig"></CommonTable>
</div>
</template>
<script>
import Table from '../common/table'
export default {
  data(){
    return{
      self:this,
      api:{
        url:"ma/voucher/alreadyUseList"
      },
      searchConfig:{
        user_nikename:{
          title:'用户名',
          key:'user_nikename',
          type:'input',
          width:150,
          value:''
        },
        user_phone:{
          title:'手机号',
          key:'user_phone',
          type:'input',
          width:150,
          value:''
        },
        voucher_code:{
          title:'卡券码',
          key:'voucher_code',
          type:'input',
          width:150,
          value:''
        }
    },
      tableData:[],
      tableColumns:[
        {
          title: '用户名',
          key: 'user_nikename'
        }, {
          title: '手机号',
          key: 'user_phone'
        }, {
          title: '品牌名称',
          key: 'brand_name',
        }, {
          title: '兑换门店',
          key: 'store_name',
        }, {
          title: '卡券名称',
          key: 'voucher_title',
        }, {
          title: '卡券类型',
          key: 'voucher_type',
        }, {
          title: '卡券码',
          key: 'voucher_code',
        }, {
          title: '兑换时间',
          key: 'change_time',
        }, {
          title: '操作',
          key: 'voucher_title',
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
              }, '查看'),
            ]);
          }
        }
      ]
    }
  },
  components:{
    "CommonTable":Table
  },
  methods:{

  }
}
</script>