<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig"></CommonTable>
  </div>
</template>
<script>
import Table from '../common/table';
export default {
  data() {
    return {
      self: this,
      api: {
        url: "/wms/wave/list"
      },
      searchConfig:{
        orderId:{
          title:'波次编码',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        nameaaa:{
          title:'承运商',
          key:'nameaaa',
          type:'select',
          data:[{ key: "canyin", value: "天天快递" }, { key: "ertong", value: "蜂鸟配送" }, { key: "ertongq", value: "豹配送" }],
          width:150,
          value:''
        },
        payTools:{
          title:'波次类型',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "普通" }, { key: "ertong", value: "预配" }],
          width:100,
          value:''
        },
        payTools1:{
          title:'波次策略',
          key:'payType1',
          type:'select',
          data:[{ key: "canyin", value: "自营3点发货" }, { key: "ertong", value: "调拨专用" }, { key: "ertongq", value: "冷链配送" }],
          width:160,
          value:''
        },
      },
      tableData: [],
      tableColumns: [
        {
          title: '波次号',
          key: 'waveNumber',
        }, {
          title: '承运商',
          key: 'transport'
        }, {
          title: '波次策略',
          key: 'waveStrategy',
        }, {
          title: '波次类型',
          key: 'waveType',
        }, {
          title: '订单数',
          key: 'orderNumber',
          sortable: true
        }, {
          title: '商品量',
          key: 'goodsNumber',
          sortable: true
        }, {
          title: '生成时间',
          key: 'createTime',
          width: 200,
          sortable: true,
        }, {
          title: '操作',
          key: 'brandStatus',
          width: 160,
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
              }, '批量打印分拣单'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '查看')
            ]);
          }

        }
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
      this.$http.get(_self.api.url).then(response => {
        // success callback
        _self.tableData = response.data.data.list;
      }, response => {
        // error callback
      })
    },
    testFunction(){
      this.openPage('home1','sdifk1');
      alert(123)
    }
  }
}
</script>
