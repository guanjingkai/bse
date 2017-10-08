<template>
  <div>
    <CommomTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">创建</Button>     
      </div>
    </CommomTable>
  </div>
</template>
<script>
import Table from '../common/table';
export default {
  data() {
    return {
      self: this,
      api: {
        url: this.serverUrl+"ma/voucher/seller/1"
      },
      searchConfig:{
        orderId:{
          title:'订单ID',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'支付方式',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "微信" }, { key: "ertong", value: "支付宝" }, { key: "ertong1", value: "POS刷卡" }, { key: "ertong2", value: "现金" }, { key: "ertong3", value: "预存" }],
          width:100,
          value:''
        },
        payType:{
          title:'计费类型',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "扣款" }, { key: "ertong", value: "退款" }],
          width:100,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '卡券ID',
          key: 'voucher_id',
          width: 100
        }, {
          title: '卡券名称',
          key: 'voucher_title',
        }, {
          title: '卡券类型',
          key: 'voucher_type',
        }, {
          title: '有效期',
          key: 'voucher_title',
        }, {
          title: '剩余库存',
          key: 'voucher_title',
        }, {
          title: '核销数量',
          key: 'voucher_title',
        }, {
          title: '卡券状态',
          key: 'voucher_title',
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
    "CommomTable": Table
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
