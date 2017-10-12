<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">创建</Button>     
      </div>
    </CommonTable>
  </div>
</template>
<script>
import Table from '../common/table';
export default {
  data() {
    return {
      self: this,
      api: {
        url: "ma/voucher/list"
      },
      searchConfig:{
        orderId:{
          title:'卡券ID',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'卡券类型',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "兑换券" }, { key: "ertong", value: "代金券" }, { key: "ertong1", value: "折扣券" }],
          width:100,
          value:''
        },
        payType:{
          title:'有效期',
          key:'payType',
          type:'date-time',
          width:180,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '卡券名称',
          key: 'voucher_title',
          width: 200
        }, {
          title: '卡券类型',
          key: 'voucher_type',
        }, {
          title: '有效期',
          key: 'validity_time',
          width: 200
        }, {
          title: '剩余库存',
          key: 'available_num',
        }, {
          title: '核销数量',
          key: 'use_num',
        }, {
          title: '卡券状态',
          key: 'voucher_state',
        }, {
          title: '操作',
          key: 'voucher_title',
          width: 120,
          fixed: 'right',
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
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '编辑')
            ]);
          }
        },

      ]
    }
  },
  components: {
    "CommonTable": Table
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var _self = this;
      console.log(_self.serverUrl)
      this.$http.get(_self.api.url).then(response => {
        // success callback
        _self.tableData = response.data.data;
        console.log(response.data.data);
      }, response => {
        // error callback
      })
    },
    openCreateVoucher(){
      console.log("根据组件名称直接打开界面");
      this.openComponent("maCreateVoucher")
    },
    testFunction(){
      alert(123)
    }
  }
}
</script>
