<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig"></CommonTable>
  </div>
</template>
<script>
import Table from '../common/table';
import CreateDelivery from './component/createDelivery'
export default {
  data() {
    return {
      self: this,
      api: {
        url: "/tms/carrier/list"
      },
      searchConfig:{
        orderId:{
          title:'供应商编码',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        nameaaa:{
          title:'供应商名称',
          key:'nameaaa',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'采购组',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "北京采购组" }, { key: "ertong", value: "华南采购组" }, { key: "ertong1", value: "上海采购组" }],
          width:100,
          value:''
        },
        payTools1:{
          title:'合作类型',
          key:'payType1',
          type:'select',
          data:[{ key: "canyin", value: "购销" }, { key: "ertong", value: "联营" }, { key: "ertongq", value: "代销" }],
          width:100,
          value:''
        },
      },
      tableData: [],
      tableColumns: [
        {
          title: '承运商ID',
          key: 'carrierId',
        }, {
          title: '承运商名称',
          key: 'name',
        }, {
          title: '类型',
          key: 'type'
        }, {
          title: '覆盖点位',
          key: 'poiNumber',
        }, {
          title: '补货次数',
          key: 'addNumber',
        }, {
          title: '运力',
          key: 'capacity',
        }, {
          title: '最后运输',
          key: 'lastTime'
        }, {
          title: '状态',
          key: 'state',
          render: (h, params) => {
              return h('div', [
                  h('Button', {
                      props: {
                          type: 'primary',
                          size: 'small'
                      },
                      style: {
                          marginRight: '5px'
                      },
                      on: {
                          click: () => {
                              
                          }
                      }
                  }, '可用')
              ]);
          }
        }, {
          title: '操作',
          key: 'brandStatus',
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

        }
      ]
    }
  },
  components: {
    "CommonTable": Table,
    "CreateDelivery":CreateDelivery
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
